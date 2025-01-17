import {pool} from '../database/connectionPostgre.js'

export const getUsuarios = async () => {
    try {
        const result = await pool.query('select * from usuarios')
        return result.rows;
    } catch (error) {
        console.error('it was an error fetching the data');
    }
}