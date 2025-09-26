const mongoose = require('mongoose');

const orderItemSchema = new mongoose.Schema({
  product: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Product',
    required: true
  },
  quantity: {
    type: Number,
    required: true,
    min: 1
  },
  notes: {
    type: String,
    default: ''
  },
  modifications: [{
    type: String
  }],
  price: {
    type: Number,
    required: true
  }
});

const orderSchema = new mongoose.Schema({
  orderNumber: {
    type: String,
    required: true,
    unique: true
  },
  items: [orderItemSchema],
  status: {
    type: String,
    enum: ['pending', 'preparing', 'ready', 'completed', 'cancelled'],
    default: 'pending'
  },
  total: {
    type: Number,
    required: true
  },
  paymentMethod: {
    type: String,
    enum: ['cash', 'card', 'transfer'],
    required: true
  },
  paymentStatus: {
    type: String,
    enum: ['pending', 'paid'],
    default: 'pending'
  },
  createdAt: {
    type: Date,
    default: Date.now
  },
  completedAt: {
    type: Date
  }
});

// Generar número de orden automáticamente
orderSchema.pre('save', async function(next) {
  if (this.isNew) {
    const date = new Date();
    const year = date.getFullYear().toString().slice(-2);
    const month = (date.getMonth() + 1).toString().padStart(2, '0');
    const day = date.getDate().toString().padStart(2, '0');
    
    // Obtener el último número de orden del día
    const lastOrder = await this.constructor.findOne({
      orderNumber: new RegExp(`^${year}${month}${day}`)
    }).sort({ orderNumber: -1 });

    let sequence = '001';
    if (lastOrder) {
      const lastSequence = parseInt(lastOrder.orderNumber.slice(-3));
      sequence = (lastSequence + 1).toString().padStart(3, '0');
    }

    this.orderNumber = `${year}${month}${day}${sequence}`;
  }
  next();
});

module.exports = mongoose.model('Order', orderSchema); 