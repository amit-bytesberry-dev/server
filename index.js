import express from "express";

const app = express();

app.get("/", (_, res) => {
	res.send("<h1>Hello from server</h1>");
});

app.listen(3000, () => {
	console.log("http://localhost:3000");
});
