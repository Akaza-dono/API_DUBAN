import cors from 'cors';
import express from 'express';
import {getUsuarios} from './querys/usuarios.js'
import {deleteUser} from './querys/deleteuser.js'

const app = express();
const port = 3000;
const corsOptions = {
    origin: 'http://localhost:4200', 
    methods: ['GET', 'DELETE'],
    allowedHeaders: ['Content-Type'], 
};

app.use(cors(corsOptions));
app.get('/api/data', async (req, res) => {
    try {
        const usuarios = await getUsuarios();
        res.json(usuarios);
    } catch (error) {
        res.status(500).json({ message: 'Error al obtener los usuarios' });
    }
});




app.delete('/api/usuarios/:id', async (req, res) => {
    const { id } = req.params;  
    try {
        const Eliminado = await deleteUser(id);

        if (Eliminado) {
            res.status(200).json({
                message: 'Usuario eliminado exitosamente',
                usuario: Eliminado
            });
        } else {
            res.status(404).json({ message: 'Usuario no encontrado' });
        }
    } catch (error) {
        res.status(500).json({ message: 'Error al eliminar el usuario' });
    }
});

app.listen(port, ()=> {
    console.log(`server listening on port ${port}`)
});