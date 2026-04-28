import pg from 'pg';
import dotenv from 'dotenv'; 
dotenv.config();

const { Pool } = pg; 
const config = {     
    host: "127.0.1.1",
    password: "123",
    user: "Diego",
    database: "cxz"
};

export const db = new Pool(config);
