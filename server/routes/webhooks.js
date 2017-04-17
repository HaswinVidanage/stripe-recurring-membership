'use strict';

// middleware
var secrets           = require('../config/secrets')
var stripeEvents      = require('../middleware/stripe-events');


//@TODO redo this. @TODO add wrapper for checking dev/production version
var stripeWebhook = new StripeWebhook({
  stripeApiKey: secrets.stripeOptions.apiKey,
  respond: true
});


module.exports = function (app) {

	// use this url to receive stripe webhook events
	app.post('/stripe/events',
		stripeWebhook.middleware,
		stripeEvents
	);

};