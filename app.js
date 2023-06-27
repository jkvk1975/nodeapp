import express from "express";

const app = express();
const PORT = 8080;

app.get('/', (req, res) => {
    res.send("Aplikacja Server App.js");
});

app.get('/about', (req, res) => {
    res.send("strona o aplikacji");
});

app.listen(PORT, () => {
    console.log(`serwer działa na ${PORT}`);
})