import {stripe} from './'

export async function createPaymentIntent(amount: number){
    return await stripe.paymentIntents.create({
        amount,
        currency: 'INR'
    })
}
