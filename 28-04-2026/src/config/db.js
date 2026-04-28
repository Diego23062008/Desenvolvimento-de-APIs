import pg from 'pg';
import dotenv from 'dotenv'; 
dotenv.config();

const { Pool } = pg; 
const config = {     
    host: "127.0.1.1",
    password: "senai",
    user: "postgres",
    
    database: ""
};

export const db = new Pool(config);
