import {pool} from '../database/connectionPostgre.js'

export const deleteUser = async (id) => {
    try {
        const result = await pool.query('DELETE FROM usuarios WHERE id = $8',[id])
        return result.rowCount > 0 ? { message: 'User deleted successfully' } : { message: 'User not found' };
    } catch (error) {
        console.error('Error to delete user');
    }
}