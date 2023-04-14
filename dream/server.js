import * as dotenv from 'dotenv';
dotenv.config();

import { createClient } from 'pexels';


import express from 'express';
import cors from 'cors';

const app = express();
app.use(cors());
app.use(express.json());

app.post('/dream', async (req, res) => {
    const client = createClient('TbTDRNGMfGgUe4LwAJf97IXEnMyIXP1vAJL87xAUThlF3a7C1sNICyYd');
    const query = req.body.prompt;
    
    client.photos.search({ query, per_page: 1 }).then(photos => {
        const image = photos.photos[0].src.medium;
        res.send({image})
    });

})

app.listen(8080, () => console.log('make art on http://localhost:8080/dream'));

