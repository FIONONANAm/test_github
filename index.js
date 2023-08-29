import express from "express";

const app = express();
const port = 8000;

app.listen(port, () => console.log(`Le serveur a démarré sur: http://localhost:${port}`))