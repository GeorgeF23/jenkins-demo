import express, { Request, Response } from 'express';
import { queryParamToInt } from './utils';

const app = express();

app.use(express.json());

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

export default app;