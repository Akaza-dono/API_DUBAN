import pg from 'pg';

const pool = new pg.Pool({
    host: 'localhost',
    port: 5432,
    database: 'TechnicalTest',
    user: 'postgres',
    password: 'Ethan2022',
});

export { pool };