module.exports = app => {
	const documents = require("../controllers/document.controller.js");
	var router = require("express").Router();

	//create document
	router.post("/", documents.create);

	//Fetch all documents
	router.get("/", documents.findAll);

	//Fetch Academic documents
	router.get("/academic", documents.findAllAcademic);

	//Fetch Personal documents
	router.get("/personal", documents.findAllPersonal);

	//Fetch Administration documents
	router.get("/administration", documents.findAllAdministration);

	//Update documents
	router.put("/:id", documents.update);

	//delete specific documents
	router.delete("/:id", documents.delete);

	app.use('/api/documents', router);
};