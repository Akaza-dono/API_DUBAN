import cors from 'cors';
import express from 'express';
import {getUsuarios} from './querys/usuarios.js'

const app = express();
const port = 3000;
const corsOptions = {
    origin: 'http://localhost:4200', 
    methods: ['GET'], 
    allowedHeaders: ['Content-Type'], 
};

app.use(cors(corsOptions));
app.use(express.json());

app.get('/api/data', async (req, res) => {
    try {
        const usuarios = await getUsuarios();
        res.json(usuarios);
    } catch (error) {
        res.status(500).json({ message: 'Error al obtener los usuarios' });
    }
});

app.listen(port, ()=> {
    console.log(`server listening on port ${port}`)
});