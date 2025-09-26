const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true
  },
  description: {
    type: String,
    trim: true
  },
  price: {
    type: Number,
    required: true,
    min: 0
  },
  category: {
    type: String,
    required: true,
    enum: ['hamburguesas', 'bebidas', 'papas', 'postres', 'combos', 'otros']
  },
  image: {
    type: String
  },
  available: {
    type: Boolean,
    default: true
  },
  preparationTime: {
    type: Number, // en minutos
    required: true
  },
  modifications: [{
    name: String,
    price: Number,
    type: {
      type: String,
      enum: ['add', 'remove']
    }
  }],
  createdAt: {
    type: Date,
    default: Date.now
  },
  updatedAt: {
    type: Date,
    default: Date.now
  }
});

// Actualizar updatedAt antes de cada guardado
productSchema.pre('save', function(next) {
  this.updatedAt = new Date();
  next();
});

module.exports = mongoose.model('Product', productSchema); 