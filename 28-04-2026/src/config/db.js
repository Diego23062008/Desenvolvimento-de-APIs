import pg from 'pg';
import dotenv from 'dotenv'; 
dotenv.config();

const { Pool } = pg; 
const config = {     
    host: "1",
    password: "123",
    user: "Diego",
    port: "5000",
    database: ""
};

export const db = new Pool(config);
