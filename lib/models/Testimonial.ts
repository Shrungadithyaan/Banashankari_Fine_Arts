import mongoose from 'mongoose';

const TestimonialSchema = new mongoose.Schema({
  customerName: {
    type: String,
    required: [true, 'Please provide the customer name.'],
    maxlength: [50, 'Customer name cannot be more than 50 characters'],
  },
  review: {
    type: String,
    required: [true, 'Please provide a review.'],
    maxlength: [300, 'Review cannot be more than 300 characters'],
  },
  rating: {
    type: Number,
    required: [true, 'Please provide a rating.'],
    min: [1, 'Rating must be at least 1'],
    max: [5, 'Rating cannot be more than 5'],
  },
  image: {
    url: {
      type: String,
      required: false,
    },
    alt: {
      type: String,
      required: false,
    },
  },
  featured: {
    type: Boolean,
    default: false,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

export default mongoose.models.Testimonial || mongoose.model('Testimonial', TestimonialSchema); 