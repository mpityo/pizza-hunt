const { Schema, model } = require('mongoose');

const PizzaSchema = new Schema({
    pizzaName: {
        type: string
    },
    createdBy: {
        type: string
    },
    createdAt: {
        type: Date,
        default: Date.now
    },
    size: {
        type: string,
        default: "Large"
    },
    toppings: []
});

const Pizza = model('Pizza', PizzaSchema);

module.exports = Pizza;