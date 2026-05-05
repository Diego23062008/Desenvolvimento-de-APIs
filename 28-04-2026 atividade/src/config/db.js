import pg from 'pg'
import 'dotenv/config'

const { Pool } = pg

export const pool = new Pool({
  user: process.env.DB_USER || 'postgres', // Tenta ler do env, se não der, usa 'postgres'
  password: String(process.env.DB_PASSWORD),
  host: process.env.DB_HOST || 'localhost',
  port: process.env.DB_PORT || 5432,
  database: process.env.DB_DATABASE
})