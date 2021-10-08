const db = require("../models");
const Document = db.documents;
const Op = db.Sequelize.Op;

//add new document
exports.create = (req, res) => {
	
	if(!req.body.name){
		res.status(400).send({
			message: "Content cannot be empty!"
		});
		return;
	}

	const {name, doc_type, doc_link } = req.body;
    Document.create({
        name,
        doc_type,
        doc_link
    })
    .then(documents => res.status(200).send(documents))
    .catch((e)=>{
    	res.send("Something went wrong");
    	console.log(e)
    });
};

//find all document
exports.findAll = (req, res) => {
	Document.findAll()
		.then(doc => {
            res.status(200).send(doc);
        })
        .catch((err)=>{
            console.log(err)
            res.sendStatus(500)
        });
};

//find all documents which are academic
exports.findAllAcademic = (req, res) => {
	Document.findAll({
		where: { doc_type: "academic" }
	})
		.then(doc => {
            res.status(200).send(doc);
        })
        .catch((err)=>{
            console.log(err);
            res.sendStatus(500);
        });
};

//find all documents which are presonal
exports.findAllPersonal = (req, res) => {
	Document.findAll({
		where: { doc_type: "personal" }
	})
		.then(doc => {
            res.status(200).send(doc);
        })
        .catch((err)=>{
            console.log(err);
            res.sendStatus(500);
        });
};

//find all documents which are administration
exports.findAllAdministration = (req, res) => {
	Document.findAll({
		where: { doc_type: "administration" }
	})
		.then(doc => {
            res.status(200).send(doc);
        })
        .catch((err)=>{
            console.log(err);
            res.sendStatus(500);
        });
};


//update specific document
exports.update = (req, res) => {
	const id = req.params.id;

	Document.update(req.body, {
		where: {id: id}
	})
	.then(num => {
		if(num == 1){
			res.send("Document was updated");
		}else{
			res.send("Cannot update Document");
		}
	})
	.catch(err => {
		res.send(err);
	});
};

//delete specific document
exports.delete = (req, res) => {
	const id = req.params.id;

	Document.destroy({
		where: {id: id}
	})
	.then(num => {
		if(num == 1){
			res.send("Document was deleted");
		}else{
			res.send("Cannot delete Document");
		}
	})
	.catch(err => {
		res.send(err);
	});
}

