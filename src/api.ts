import express, {Request, Response} from 'express';
import cors from 'cors';
import {createStripeCheckoutSession} from "./checkout";
import {createPaymentIntent} from "./payments";
import * as buffer from "buffer";
import {handleStripeWebhook} from "./webhooks";

export const app = express();

app.use(express.json());
app.use(cors({origin: true}));

app.get('/', (req: Request, res: Response) => {
     res.status(200).send('Hello World');
})

app.post('/checkouts/',async ({body}: Request, res: Response) => {
     res.send(
         await createStripeCheckoutSession(body.line_items)
     )
})

app.post('/payments/',async ({body}: Request, res: Response) => {
     res.send(
         await createPaymentIntent(body.amount)
     )
})

// @ts-ignore
app.post('/hooks/',handleStripeWebhook)
