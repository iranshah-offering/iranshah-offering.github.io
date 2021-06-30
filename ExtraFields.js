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

// Add new text field to order comments section at checkout
ec.order.extraFields.neft_reference = {
    'title': 'NEFT Reference Number. Kindly note that your request will be fulfilled only after the realization of the payment.',
    'type': 'text',
    'required': true,
    'textPlaceholder': 'NEFT Reference Number',
    'tip':'Please enter the NEFT Reference Number correctly',
    'checkoutDisplaySection': 'payment_details', // show new field in order comments block
    'orderDetailsDisplaySection': 'order_comments' // show saved data in order comments block in order details to merchant and customer
};

Ecwid.refreshConfig();

Ecwid.OnPageLoaded.add(function(page){
if((page.type=="PRODUCT") && (page.productId=="365085293" || page.productId=="370109599"))
$("details-product-purchase__qty").hide();  
});
