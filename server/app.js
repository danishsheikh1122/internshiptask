import fs from "fs";
import express from "express";
const app = express();
let jsonData = undefined;

app.get('/apiv1/', (req, res) => {
    fs.readFile('C:\\Users\\HP\\Desktop\\react js\\roadmaptoit\\pageData.json', 'utf8', (err, data) => {
        if (err) {
            console.error(err);
            return res.status(500).send('Error reading file');
        }
        jsonData = data;
        res.send(jsonData);
    });
});

app.listen(3000, () => {
    console.log('server is running on port 3000');
});
