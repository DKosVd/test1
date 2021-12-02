import express from 'express';
import listCntrl from './controller/list.js';
import personCntrl from './controller/person.js';

const app = express();
const port = 3000;

app.use(express.json());

app.post('/person', personCntrl.add)
app.get('/list', listCntrl.get)


app.listen(port, () => console.log(`Server started on ${port}`))