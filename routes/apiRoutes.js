const router = require('express').Router();
const fs = require("fs");
const { v4: uuidv4} = require('uuid');

//Defining GET request to /api/notes endpoint
router.get('/api/notes', async (req, res) => {
    const dbJson = await JSON.parse(fsFileSync("db/db.json"))
})

module.exports = router;