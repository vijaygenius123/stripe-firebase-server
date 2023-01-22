import {stripe} from "./index";
import Stripe from "stripe";


const webhookHandlers ={
    'payment_intent.succeeded': async (data:Stripe.PaymentIntent) => {

    },
    'payment_intent.payment_failed': async (data:Stripe.PaymentIntent) => {

    },
}
export const handleStripeWebhook = async ({body, headers}: Request, res:Response) => {
const sig = headers['stripe-signature']
    const event = stripe.webhooks.constructEvent(body,sig, process.env.STRIPE_WEBHOOK_SECRET)

    try {
        await webhookHandlers[event.type](event.data.object)
        res.send({received: true})
    } catch (err){
        console.log(err)
        res.status(400).send(`Webhook Err: ${err.message}`)
    }

}
