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
			return String.fromCharCode(65 + (4 - Math.floor(this.GPA)));
			// if (this.GPA > 3.0){ return 'A'; }
			// else if (this.GPA > 2.0) { return 'B';}
			// else if (this.GPA > 1.0) { return 'C';}
			// else { return 'F';}
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

module.exports = {db, Student, Teacher};
