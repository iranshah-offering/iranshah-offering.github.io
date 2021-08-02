// Initialize order fields 
ec.order = ec.order || {};
ec.order.extraFields = ec.order.extraFields || {};

// Add new text field to order comments section at checkout
ec.order.extraFields.full_name = {
    'title': 'Full Name',
    'type': 'text',
    'required': true,
    'checkoutDisplaySection': 'payment_details', // show new field in order comments block
    'orderDetailsDisplaySection': 'customer_info' // show saved data in order comments block in order details to merchant and customer
};

// Add new text field to order comments section at checkout
ec.order.extraFields.phone_number = {
    'title': 'Phone Number',
    'type': 'text',
    'required': true,
    'checkoutDisplaySection': 'payment_details', // show new field in order comments block
    'orderDetailsDisplaySection': 'customer_info' // show saved data in order comments block in order details to merchant and customer
};

// Add new text field to order comments section at checkout
ec.order.extraFields.transaction_reference = {
    'title': 'Transaction Reference Number. Kindly note that your request will be fulfilled only after the realization of the payment.',
    'type': 'text',
    'required': true,
    'textPlaceholder': 'Transaction Reference Number',
    'tip':'Please mention the Transaction Reference Number correctly',
    'checkoutDisplaySection': 'payment_details', // show new field in order comments block
    'orderDetailsDisplaySection': 'order_comments' // show saved data in order comments block in order details to merchant and customer
};

// Set the Min Date for the product option datepicker
ec.storefront = ec.storefront || {};
ec.storefront.product_details_datepicker_options = { 'minDate': new Date(new Date().getTime() + 1 * 60 * 60 * 1000) };

Ecwid.refreshConfig();
/*
Ecwid.OnPageLoaded.add(function() {
    document.querySelector("div.ec-form__row.ec-form__row--full_name > div > div.form__msg.form__msg--error").textContent="Please specify your Full Name.";
});
*/
