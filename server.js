const express = require ('express');
const htmlRoutes = require('./routes/htmlRoutes');
const apiRoutes = require('./routes/apiRoutes');

//Initializing app and port
const app = express();
const PORT = process.env.PORT || 3001;

//Setting up middleware
app.use(edxpress.static('public'));
app.use(express.json());
app.use(express.urlencoded({extended: true }));
app.use('/', htmlRoutes);

//Starting port
app.listen(PORT, () => console.log(`Listening on PORT: ${PORT}`));
