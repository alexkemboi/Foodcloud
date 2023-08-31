const express = require("express");
const app = express();

const bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

const cors = require("cors");
app.use(cors());


const credentials = {
  apiKey: "dd0a2f8d3e0a1ca0fe17321514023185d83c5df09cf791014cdf117a99d0de62",
  username: "alexkemboi97",
};
// Initialize the SDK
const AfricasTalking = require("africastalking")(credentials);

// Get the SMS service
const sms = AfricasTalking.SMS;
const phone=['+254719382764','+254798687936','+254717758400'];
//const message="Dear our esteemed customer,we have crates of Tomatos available on offer for Kshs. 1000 only"
// const message="Dear Customer thank you for using our system.Our personel will contact you in a few."
function sendMessage(message, phone) {
  const options = {
    // Set the numbers you want to send to in international format
    to: phone,
    // Set your message
    message: `${message}`,
     };
  // That’s it, hit send and we’ll take care of the rest
  sms.send(options).then(console.log).catch(console.log);
}

app.post("/SendSms", (req, res) => {
  console.log(req.body);
  //sendMessage(req.body.message, req.body.phone);
});
//sendMessage(message, phone);

app.post('/ussd', (req, res) => {
  // Read the variables sent via POST from our API
  const {
      sessionId,
      serviceCode,
      phoneNumber,
      text,
  } = req.body;

  //console.log({text});

  let response = '';
  if (text === '') {   
    // This is the first request. Start with a welcome message.
    response = `CON Welcome to the Foodcloud System.
    How can we assist you today?
    1. Order Farm product
    2. Sell Farm product
    3. My Account
    4.Exit`;
    
  } 
  else if (text === '1') {
    
    // User wants to order food food. Provide options.
    response = `CON Select the type of farm product you'd like to order:
    1. Fruits
    2. Vegetables
    3. Grains
    4. Dairy Products
    5. Back to Main Menu`;
  } else if (text === '2') {
   
    // User wants to sell farm products. Provide options.
    response = `CON Select the type of farm product you want to sell:
    1. Fruits
    2. Vegetables
    3. Grains
    4. Dairy Products
    5. Back to Main Menu`;

  } else if (text === '3') {
    // User wants to view their account. Provide account-related options.
    response = `CON Choose account information you want to view:
    1. Account Balance
    2. Order History
    3. Update Contact Info
    4. Back to Main Menu`;
  } else if (text === '4') {
    // User wants to exit the system. You can handle the exit logic here.
    response = `END Thank you for using our Farm Product Selling System.`;
    sendMessage(response,phoneNumber);
    makeCall(phoneNumber);
    
  } 

  else if (text === '3') {
    // User wants to view their account. Provide account-related options.
    response = `CON Choose account information you want to view:
    1. Account Balance
    2. Order History
    3. Update Contact Info
    4. Back to Main Menu`;
  } else if (text === '1*1') {
    // User selected "Order Fruits." Ask for quantity.
    response = `CON Enter the quantity of fruits you'd like to order (e.g., 5):`;
  } else if (text.startsWith('1*1*')) {
    // User entered the quantity for fruits. Implement order logic here.
    const quantity = text.split('*').pop(); // Extract the quantity entered by the user.
    // You can now process the order with the selected quantity.
    response = `END You ordered ${quantity} fruits. Thank you!`;
    sendMessage(`Dear Customer ${response}.Our representative will contact you shortly.`,phoneNumber);
    makeCall(phoneNumber);
    
    
  } else if (text === '1*2') {
    // User selected "Order Vegetables." Ask for quantity.
    response = `CON Enter the quantity of vegetables you'd like to order (e.g., 10):`;
    
    
  } else if (text.startsWith('1*2*')) {
    // User entered the quantity for vegetables. Implement order logic here.
    const quantity = text.split('*').pop(); // Extract the quantity entered by the user.
    // You can now process the order with the selected quantity.
    response = `END You ordered ${quantity} vegetables. Thank you!`;
    sendMessage(`Dear Customer ${response}.Our representative will contact you shortly.`,phoneNumber);
    makeCall(phoneNumber);
  } else if (text === '1*3') {
    // User selected "Order Grains." Ask for quantity.
    response = `CON Enter the quantity of grains you'd like to order (e.g., 20 kg):`;
  } else if (text.startsWith('1*3*')) {
    // User entered the quantity for grains. Implement order logic here.
    const quantity = text.split('*').pop(); // Extract the quantity entered by the user.
    // You can now process the order with the selected quantity.
    response = `END You ordered ${quantity} grains. Thank you!`;
    sendMessage(`Dear Customer ${response}.Our representative will contact you shortly.`,phoneNumber);
    makeCall(phoneNumber);
    
  } else if (text === '1*4') {
    // User selected "Order Dairy Products." Ask for quantity.
    response = `CON Enter the quantity of dairy products you'd like to order (e.g., 3 liters):`;
  } else if (text==='1*4*') {
    // User entered the quantity for dairy products. Implement order logic here.
    const quantity = text.split('*').pop(); // Extract the quantity entered by the user.
    // You can now process the order with the selected quantity.
    response = `END You ordered ${quantity} liters of dairy products. Thank you!`;
    sendMessage(`Dear Customer ${response}.Our representative will contact you shortly.`,phoneNumber);
    makeCall(phoneNumber);
    
  } else if (text === '2*1') {
    // User selected "Sell Fruits." Ask for product details.
    response = `CON Enter the details of the fruits you want to sell (e.g., type, quantity, price):`;
  } else if (text.startsWith('2*1*')) {
    // User entered the details for selling fruits. Implement product listing logic here.
    const productDetails = text.split('*').pop(); // Extract the product details entered by the user.
    // You can now process the product listing with the entered details.
    response = `END You have listed the following fruits for sale: ${productDetails}. Thank you!`;
    sendMessage(`Dear Customer ${response}.Our representative will contact you shortly.`,phoneNumber);
    makeCall(phoneNumber);
  } else if (text === '2*2') {
    // User selected "Sell Vegetables." Ask for product details.
    response = `CON Enter the details of the vegetables you want to sell (e.g., type, quantity, price):`;
  } else if (text.startsWith('2*2*')) {
    // User entered the details for selling vegetables. Implement product listing logic here.
    const productDetails = text.split('*').pop(); // Extract the product details entered by the user.
    // You can now process the product listing with the entered details.
    response = `END You have listed the following vegetables for sale: ${productDetails}. Thank you!`;
    // Similar steps can be added for Grains and Dairy Products.
    sendMessage(`Dear Customer ${response}.Our representative will contact you shortly.`,phoneNumber);
    makeCall(phoneNumber);
  }
else if (text === '3*1') {
    // User selected "Account Balance." Implement account balance retrieval logic.
    const accountBalance = 'USD 100.00'; // Replace with actual balance.
    response = `END Your account balance is ${accountBalance}`;
    sendMessage(`Dear Customer ${response}.Our representative will contact you shortly.`,phoneNumber);
    makeCall(phoneNumber);
  } else if (text === '3*2') {
    // User selected "Order History." Implement order history retrieval logic.
    const orderHistory = 'Your recent orders: Empty'; // Replace with actual history.
    response = `END ${orderHistory}`;
    sendMessage(`Dear Customer ${response}.Our representative will contact you shortly.`,phoneNumber);
    makeCall(phoneNumber);
  } else if (text === '3*3') {
    // User selected "Update Contact Info." Implement contact info update logic.
    response = `END To update your contact info, visit our website or contact customer support.`;
  } else if (text === '1*5' || text === '2*4') {
    // User selected "Back to Main Menu" from order or account menu.
    response = `CON Welcome back to the main menu.
    How can we assist you today?
    1. Order Surpuls food
    2. My Account`;
  } else {
    // Handle unrecognized or invalid input.
    response = `END Invalid selection. Please try again.`;
    makeCall(phoneNumber);
  } 
    // Send the response back to the API
  res.set('Content-Type: text/plain');
  res.send(response);
});





app.post('/ussdw', (req, res) => {
  const { text,phoneNumber } = req.body;
  let response = '';

  if (text === '') {
    
    // This is the first request. Ask for your loved one's name.
    response = `CON Hi, it's Alex Kemboi. I just wanted to remind you how much I love you.
   Press 1 to Send:`;
    sendMessage(`Hi, it's Alex Kemboi. I just wanted to remind you how much I love you.`,phoneNumber);
  } else if (text=== '1') {
    // User entered their name. Save the name and express your love.
    
    response = `CON Hi I want you to know that you mean the world to me. I love you more than words can express.
    Press 2 to continue...`;
  } else if (text=== '2' ) {
    // User pressed a key to continue. Send another love message.
    response = `CON my love for you grows stronger with each passing day. You make my life brighter and happier.
    Press 3 key to continue...`;
  } else if (text=== '3') {
    // User pressed a key to continue. Send the final love message.
    response = `CON I just want to say that I am incredibly lucky to have you in my life. I love you more than anything in this world.
    Press 3 to end...`;
  } else {
    // Handle unrecognized or invalid input.
    response = `CON Even if you pressed a wrong number ,I Alex still loves you. press send to exit`;
  }

  // Send the response back to the USSD gateway
  res.set('Content-Type', 'text/plain');
  res.send(response);
});









app.post('/voice',function(req, res) {  
  const text = 'Thank you for using our application';
  const response = `<?xml version="1.0" encoding="UTF-8"?>
    <Response>
      <Say>${text}</Say>
    </Response>`;
    
  res.set('Content-Type: text/plain');
  res.send(response);
}); //
// Get the voice service
const voice = AfricasTalking.VOICE;
function makeCall(phoneNumber) {
  const options = {
      // Set your Africa's Talking phone number in international format
      callFrom:'+254711082434',
      // Set the numbers you want to call to in a comma-separated list
      callTo: phoneNumber
  }
 
  // Make the call
  voice.call(options)
      .then(console.log)
      .catch(console.log);
      
}

const port = process.env.PORT || 3001;
app.listen(port, () => {
  console.log(`App listening on port ${port}`);
});