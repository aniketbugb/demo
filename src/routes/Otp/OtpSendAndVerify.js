const { sendOTP, resendOTP, verifyOTP } = require("otpless-node-js-auth-sdk");

const clientId = "ABIL2YEPQVDO2IIP79SNE870PKYNBJE5";
const clientSecret = "blum5jbfcyd0gdkm8ytzsv8czhe5j39t";

module.exports = function (router) {
    function generateOrderId(length) {
        const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
        let orderId = '';
        for (let i = 0; i < length; i++) {
          orderId += characters.charAt(Math.floor(Math.random() * characters.length));
        }
        return orderId;
      }
    router.post('/send_Otp', async function (req, res) {
        try {
            // Destructure the required properties from req.body
            const { phoneNumber, email ,orderIdd} = req.body;
            // const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
            // let orderIdd = '';
            // for (let i = 0; i < 10; i++) {
            //     orderIdd += characters.charAt(Math.floor(Math.random() * characters.length));
            // }
            // Check if phoneNumber, email, and channel are provided
            if (!phoneNumber) {
                throw new Error("phoneNumber, email is missing");
            }

            // Constants for other parameters
            const expiry = 120;
            const otpLength = "6";
            const channel = "SMS";
            const hash = null;
            const orderId = orderIdd;
            // Call sendOTP function with all parameters
            const response = await sendOTP(phoneNumber, email, channel, hash, orderId, expiry, otpLength, clientId, clientSecret)
            console.log("response:", response);;
            if (response) {

                res.json({ statuscode: 200, success: true, message: "OTP sent successfully", Result :response });
            } else {
                res.json({ statuscode: 500, success: false, message: "OTP Not sent successfully" });

            }
            // Send success response
        } catch (mainEx) {
            // Send error response
            res.status(500).json({ statuscode: 500, success: false, message: "Internal server error: " + mainEx });
        }
    });
    router.post('/resend_otp', async function (req, res) {
        try {
            // Destructure the required properties from req.body
            const { orderId } = req.body;
            // Check if phoneNumber, email, and channel are provided
            if (!orderId) {
                throw new Error("phoneNumber, email is missing");
            }

            // const orderId = null;
            // Call sendOTP function with all parameters
            const response = await resendOTP(orderId, clientId, clientSecret)
            console.log("response:", response);
            if (response.orderId) {

                res.json({ statuscode: 200, success: true, message: "OTP resent successfully" });
            } else {
                res.json({ statuscode: 500, success: false, message: "OTP Not sent successfully" });

            }
            // Send success response
        } catch (mainEx) {
            // Send error response
            res.status(500).json({ statuscode: 500, success: false, message: "Internal server error: " + mainEx });
        }
    });
    router.post('/verify_otp', async function (req, res) {
        try {
            // Destructure the required properties from req.body
            const { phoneNumber, orderId, otp } = req.body;
            // Check if phoneNumber, email, and channel are provided
            if (!orderId) {
                throw new Error("phoneNumber, email is missing");
            }
            const email = null;
            // Call sendOTP function with all parameters
            const response = await verifyOTP(email, phoneNumber, orderId, otp, clientId, clientSecret);
            console.log("response:", response);
            if (response.isOTPVerified) {

                res.json({ statuscode: 200, success: true, message: "OTP verified successfully" });
            } else {
                res.json({ statuscode: 500, success: false, message: "OTP Not verified" });

            }
            // Send success response
        } catch (mainEx) {
            // Send error response
            res.status(500).json({ statuscode: 500, success: false, message: "Internal server error: " + mainEx });
        }
    });
};

