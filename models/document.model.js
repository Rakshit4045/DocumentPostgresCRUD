module.exports = (sequelize, Sequelize) => {
	const Document = sequelize.define("document", {
		name: {
			type: Sequelize.STRING
		},
		doc_type: {
			type: Sequelize.STRING
		},
		doc_link: {
			type: Sequelize.STRING
		},
	    //foregin key
	    /*
	    student_id: {
	        type: Sequelize.INTEGER,
	        references: {
	        	model:'school_table',
	        	key: 'id'
	        }
	    }*/
	});

	return Document;
};