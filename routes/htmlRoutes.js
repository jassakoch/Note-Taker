const require('express'). Router();
const path = require('path');

//Defining route that sends 'index.html' on get request
router.get('/', (req,res) => {
    res.sendFile(path.join(_dirname, '../public/index.html'))
});

//Defining route that sends 'notes.html' page on get request
router.get('/notes', (req,res) => {
    res.sendFile(path.join(_dirname, '..public/notes.html'));
});

module.exports = router;