// Initialize order fields 
ec.order = ec.order || {};
ec.order.extraFields = ec.order.extraFields || {};

// Add new text field to order comments section at checkout
ec.order.extraFields.full_name = {
    'title': 'Full Name',
    'type': 'text',
    'required': true,
    'checkoutDisplaySection': 'payment_details', // show new field in order comments block
    'orderDetailsDisplaySection': 'order_comments' // show saved data in order comments block in order details to merchant and customer
};

// Add new text field to order comments section at checkout
ec.order.extraFields.phone_number = {
    'title': 'Phone Number',
    'type': 'text',
    'required': true,
    'checkoutDisplaySection': 'payment_details', // show new field in order comments block
    'orderDetailsDisplaySection': 'order_comments' // show saved data in order comments block in order details to merchant and customer
};

Ecwid.refreshConfig();
