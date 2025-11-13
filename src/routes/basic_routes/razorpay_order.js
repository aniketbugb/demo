
const Razorpay = require('razorpay');
const User = require("../../model/admin-user.model");
module.exports = function (router) {

    router.post('/razor_order', async function (req, res) {
        try {
            const { email, amount } = req.body; // Extract email from request body
            console.log(email, amount);
            const user = await User.findOne({ email });

            if (!user) {
                return res.status(404).json({ message: "User not found" });
            }

            var instance = new Razorpay({ key_id: 'rzp_test_AmTTMA3riuXU7G', key_secret: 'QggsbOS3ASrCw2vW0CH3IamG' });
            const options = {
                amount: amount * 100, // Multiply amount by 100 to convert to paise (assuming INR)
                currency: "INR",
                receipt: 'subscription_payment',
                payment_capture: 1 // Auto capture payment
            };

            instance.orders.create(options, function (err, result) {
                if (err) {
                    console.error(err);
                    return res.status(500).json({ statusCode: 500, success: false, message: "error", Error: err });
                } else {
                    return res.status(200).json({ statusCode: 200, success: true, message: "success", Result: result });
                }
            });
        } catch (err) {
            console.error(err);
            return res.status(500).json({ statusCode: 500, success: false, message: err.message, Result: null });
        }
    });


    // router.post('/payment', async (req, res) => {
    //     const { email, amount } = req.body;

    //     try {
    //       // Find the user by email
    //       const user = await User.findOne({ email });

    //       if (!user) {
    //         return res.status(404).json({ message: "User not found" });
    //       }

    //       // Create Razorpay order
    //       const order = await razorpay.orders.create({
    //         amount: amount * 100, // Razorpay expects amount in paise
    //         currency: 'INR',
    //         receipt: 'subscription_payment',
    //         payment_capture: 1 // Auto capture payment
    //       });

    //       res.json({ orderId: order.id, amount: order.amount, currency: order.currency });
    //     } catch (err) {
    //       console.error("Error creating Razorpay order:", err);
    //       res.status(500).json({ message: "Internal server error" });
    //     }
    //   });


    router.post('/subscribe', async (req, res) => {
        const { email, amount, orderId } = req.body;

        console.log(69, email, amount, orderId)
        try {
            // Find the user by email
            let user = await User.findOne({ email });
            console.log(73, user)
            if (!user) {
                // Create a new user if not found
                res.status(500).json({ message: "user Not Found" });
            }

            // Set subscription status and expiration date
            user.subscription.status = true;
            user.subscription.expirationDate = new Date(Date.now() + 30 * 24 * 60 * 60 * 1000); // Example: 30 days from now
            user.subscription.amount = amount;
            user.subscription.orderId = orderId; // Store orderId for reference

            // Save the user
            await user.save();

            return res.status(200).json({ statusCode: 200, success: true, message: "success", Result: user.subscription });
        } catch (err) {
            console.error("Error subscribing user:", err);
            res.status(500).json({ message: "Internal server error" });
        }
    });

    // Renew subscription route
    router.post('/renew-subscription', async (req, res) => {
        const { email } = req.body;

        try {
            // Find the user by email
            let user = await User.findOne({ email });

            if (!user) {
                return res.status(404).json({ message: "User not found" });
            }

            // Check if the user's subscription is active
            if (user.subscription.status && user.subscription.expirationDate > new Date()) {
                // Extend the expiration date by 30 days (for example)
                user.subscription.expirationDate = new Date(user.subscription.expirationDate.getTime() + 30 * 24 * 60 * 60 * 1000);
            } else {
                // Activate the subscription if it has expired
                user.subscription.status = true;
                user.subscription.expirationDate = new Date(Date.now() + 30 * 24 * 60 * 60 * 1000); // Example: 30 days from now
            }

            // Save the user
            await user.save();

            res.json({ message: "Subscription renewed successfully" });
        } catch (err) {
            console.error("Error renewing subscription:", err);
            res.status(500).json({ message: "Internal server error" });
        }
    });

    // Payment route using Razorpay


    // Payment success route (callback from Razorpay)
    router.post('/payment/success', async (req, res) => {
        const { orderId, paymentId, signature } = req.body;

        // Verify signature
        const generatedSignature = Razorpay.webhook.verifySignature(req.rawBody, signature);
        if (!generatedSignature) {
            return res.status(400).json({ message: "Invalid signature" });
        }

        try {
            // Find user by orderId (assuming you stored orderId in your database)
            const user = await User.findOne({ 'subscription.orderId': orderId });

            if (!user) {
                return res.status(404).json({ message: "User not found" });
            }

            // Update user subscription status and expiration date
            user.subscription.status = true;
            user.subscription.expirationDate = new Date(Date.now() + 30 * 24 * 60 * 60 * 1000); // Example: 30 days from now
            user.subscription.orderId = orderId; // Store orderId for reference

            // Save the user
            await user.save();

            res.json({ message: "Payment successful" });
        } catch (err) {
            console.error("Error updating subscription after payment:", err);
            res.status(500).json({ message: "Internal server error" });
        }
    });

    // Add to history route
    router.post('/add-to-history', async (req, res) => {
        const { email, item } = req.body;

        try {
            // Find the user by email
            let user = await User.findOne({ email });

            if (!user) {
                return res.status(404).json({ message: "User not found" });
            }

            // Add item to history
            user.history.push(item);

            // Save the user
            await user.save();

            res.json({ message: "Item added to history" });
        } catch (err) {
            console.error("Error adding item to history:", err);
            res.status(500).json({ message: "Internal server error" });
        }
    });
    // Check subscription status route
    router.get('/check-subscription/:email', async (req, res) => {
        const { email } = req.params; 

        try {
            // Find the user by email
            let user = await User.findOne({ email });

            if (!user) {
                return res.status(404).json({ message: "User not found" });
            }

            // Check if subscription is active
            if (user.subscription.status && user.subscription.expirationDate > new Date()) {
                res.json({ status: "active", expirationDate: user.subscription.expirationDate });

                // Optionally, update the subscription expiration date in the database
                user.subscription.expirationDate = user.subscription.expirationDate; // No change, just to trigger save
                await user.save();
            } else {
                // Subscription is expired or inactive
                res.json({ status: "expired", expirationDate: user.subscription.expirationDate });

                // Optionally, update the subscription status and expiration date in the database
                user.subscription.status = false; // Set status to false
                user.subscription.expirationDate = null; // Clear expiration date
                await user.save();
            }
        } catch (err) {
            console.error("Error checking subscription status:", err);
            res.status(500).json({ message: "Internal server error" });
        }
    });


    return router;
};

