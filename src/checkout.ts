import {stripe} from "./index";
import Stripe from 'stripe'

export async function createStripeCheckoutSession(
    line_items: Stripe.Checkout.SessionCreateParams.LineItem[]
){
    const url = process.env.WEBAPP_URL;

    return await stripe.checkout.sessions.create({
        payment_method_types: ['card'],
        mode: "payment",
        line_items,
        success_url: `${url}/success?session_id={CHECKOUT_SESSION_ID}`,
        cancel_url: `${url}/failed`
    })
}
