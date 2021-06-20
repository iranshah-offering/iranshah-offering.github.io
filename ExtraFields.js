// Initialize order fields 
ec.order = ec.order || {};
ec.order.extraFields = ec.order.extraFields || {};

// Add new text field to order comments section at checkout
ec.order.extraFields.full_name = {
    'title': 'Full Name',
    'type': 'text',
    'tip':'Please enter your Full Name',	
    'required': true,
    'checkoutDisplaySection': 'payment_details', // show new field in order comments block
    'orderDetailsDisplaySection': 'order_comments' // show saved data in order comments block in order details to merchant and customer
};

Ecwid.refreshConfig();

// Add new text field to order comments section at checkout
ec.order.extraFields.mobile_number = {
    'title': 'Phone Number',
    'type': 'text',
    'required': true,
    'tip':'Please enter your Phone Number',
    'checkoutDisplaySection': 'payment_details', // show new field in order comments block
    'orderDetailsDisplaySection': 'order_comments' // show saved data in order comments block in order details to merchant and customer
};

Ecwid.refreshConfig();
