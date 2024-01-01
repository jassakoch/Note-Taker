const api = require('express').Router();

//Importing modular routes for notes
const notesRouter = require('./notes');
api.use('/notes', notesRouter);

module.exports = api;