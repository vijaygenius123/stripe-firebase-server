import {config} from 'dotenv'
import Stripe from 'stripe'

if (process.env.NODE_ENV !== 'production') {
    config()
}


export const stripe = new Stripe(process.env.STRIPE_SECRET_KEY as string, {
    apiVersion: '2022-11-15',
})


const {app} = require('./api')

const port = process.env.PORT || 8080

app.listen(port, () => {
    console.log(`Server running on port ${port}`)
})
