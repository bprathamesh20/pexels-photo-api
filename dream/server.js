import * as dotenv from 'dotenv';
dotenv.config();

import { createClient } from 'pexels';


import express from 'express';
import cors from 'cors';

const app = express();
app.use(cors());
app.use(express.json());

app.post('/dream', async (req, res) => {
    const client = createClient(process.env.PEXELS);
    const query = req.body.prompt;
    
    client.photos.search({ query, per_page: 1 }).then(photos => {
        const image = photos.photos[0].src.medium;
        res.send({image})
    });

})
let port = process.env.PORT || 3000
app.listen(port, () => console.log('make art on http://localhost:8080/dream'));

