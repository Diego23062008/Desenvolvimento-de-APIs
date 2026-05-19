const express = require('express');
const { Pool } = require('pg');
const app = express();

app.use(express.json());

// CONFIGURAÇÃO DIRETA (Troque apenas a senha)
const pool = new Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'diego_hessel_quitanda',
  password: 'SUA_SENHA_AQUI', // <--- COLOQUE SUA SENHA REAL AQUI
  port: 5432,
});

// Testar conexão ao iniciar
pool.connect((err) => {
  if (err) {
    console.error('ERRO DE CONEXÃO:', err.stack);
  } else {
    console.log('CONECTADO AO BANCO COM SUCESSO!');
  }
});

// Rota 1: Listar Clientes
app.get('/clientes', async (req, res) => {
  try {
    const result = await pool.query('SELECT * FROM clientes');
    res.json(result.rows);
  } catch (err) {
    res.status(500).json({ error: "Erro no banco: " + err.message });
  }
});

// Rota 2: Vendas por Cliente (O que você precisa)
app.get('/vendas/cliente/:id', async (req, res) => {
  const { id } = req.params;
  try {
    const queryText = 'SELECT * FROM vendas WHERE cliente_id = $1';
    const result = await pool.query(queryText, [id]);
    res.json(result.rows);
  } catch (err) {
    res.status(500).json({ error: "Erro no banco: " + err.message });
  }
});

app.listen(3000, () => {
  console.log('Servidor rodando na porta 3000');
});