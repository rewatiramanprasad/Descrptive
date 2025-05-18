// const data = require('./config/config.json');
const express = require('express');
const routes = require('./src/routes')
const { error } = require('./utility/errorHandler')
const connectToDb=require('./utility/db');
const cors=require('cors')
const app = express();

app.use(express.json())
app.use(cors())
app.use(routes)
app.use(error)
connectToDb()
app.listen(5000, () => { console.log(`running on port http://localhost:5000`) });


//WAFvaFDOrpGczLc5
//ramanprasad0203