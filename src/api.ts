import express, {Request, Response} from 'express';
import cors from 'cors';
import {createStripeCheckoutSession} from "./checkout";

export const app = express();

app.use(express.json());
app.use(cors());

app.get('/', (req: Request, res: Response) => {
     res.status(200).send('Hello World');
})

app.post('/checkouts/',async ({body}: Request, res: Response) => {
     res.send(
         await createStripeCheckoutSession(body.line_items)
     )
})
