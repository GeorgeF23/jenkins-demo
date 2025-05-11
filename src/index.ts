import express, { Request, Response } from 'express';

const app = express();

app.use(express.json());

function queryParamToInt(a: Request['query'][string]) {
    if (!a || typeof(a) !== "string" || !Number.isInteger(+a)) {
        return NaN;
    }
    return Number.parseInt(a);
}

app.get("/add", (req: Request, res: Response) => {
    const a = queryParamToInt(req.query.a);
    const b = queryParamToInt(req.query.b);

    if (Number.isNaN(a) || Number.isNaN(b)) {
        res.status(401).json({ error: "Invalid request" });
        return;
    }
    const sum = a + b;
    res.status(200).json({ result: sum });
});

app.listen(3000, () => {
    console.log("App started");
});