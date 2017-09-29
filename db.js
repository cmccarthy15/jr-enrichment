const Sequelize = require('sequelize');


const db = new Sequelize('postgres://localhost:5432/juniorenrichment', {
  logging: false
});


const Student = db.define('student', {
	/* STUDENT MODEL CODE HERE */
	name: {
		type: Sequelize.STRING,
		allowNull: false},
	GPA: {
		type: Sequelize.DECIMAL(2, 1),
		allowNull: false},
	letterGrade: {
		type: Sequelize.VIRTUAL,
		get () {
			return ['F', 'D', 'C', 'B', 'A'][Math.floor(this.gpa)];
			/* or return String.fromCharCode(65 + (4 - Math.floor(this.GPA)));
			 * switch(Math.floor(this.gpa)){
			 * case 4.0: return 'A'
			 * case 3.0: return 'B'}
			 * and so on
			 *
			*/
			// in some cases you will want to write a separate function
			// because you can't deal with associations inside of a virtual column
			// these have to return an immediate value
		}
	}
});

Student.findAllA = () => Student.findAll({where: {GPA: 4.0}});

const Teacher = db.define('teacher', {
	/* TEACHER MODEL CODE HERE */
	name: {
		type: Sequelize.STRING,
		allowNull: false},
	subject: {
		type: Sequelize.STRING,
		allowNull: false
	}
});

Teacher.hasMany(Student);
Student.belongsTo(Teacher);

module.exports = {db, Student, Teacher};
