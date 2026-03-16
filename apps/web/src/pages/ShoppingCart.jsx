import React from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import { useCart } from '@/contexts/CartContext';
import { motion } from 'framer-motion';
import { Trash2, ShoppingBag, ArrowRight } from 'lucide-react';

const ShoppingCart = () => {
  const { cartItems, removeFromCart, cartTotal } = useCart();

  if (cartItems.length === 0) {
    return (
      <div className="min-h-screen bg-gray-50">
        <Helmet>
          <title>Shopping Cart - Master the Art of Leasing</title>
          <meta name="description" content="Your shopping cart is empty. Browse our courses to get started." />
        </Helmet>

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="text-center bg-white rounded-xl shadow-lg p-12">
            <ShoppingBag className="w-20 h-20 text-gray-300 mx-auto mb-6" />
            <h1 className="text-3xl font-bold text-gray-900 mb-4">Your cart is empty</h1>
            <p className="text-gray-600 mb-8">
              Explore our courses and add them to your cart to get started
            </p>
            <Link
              to="/courses"
              className="inline-block bg-[#3b82f6] text-white px-8 py-3 rounded-lg font-semibold hover:bg-[#1e3a8a] transition-colors"
            >
              Browse Courses
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Helmet>
        <title>{`Shopping Cart (${cartItems.length}) - Master the Art of Leasing`}</title>
        <meta name="description" content="Review your selected courses and proceed to checkout." />
      </Helmet>

      <div className="bg-gradient-to-r from-[#1e3a8a] to-[#3b82f6] py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-2">Shopping Cart</h1>
          <p className="text-xl text-blue-100">{cartItems.length} course{cartItems.length !== 1 ? 's' : ''} in your cart</p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Cart Items */}
          <div className="lg:col-span-2 space-y-4">
            {cartItems.map((course, index) => (
              <motion.div
                key={course.id}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-xl shadow-md p-6 flex gap-6"
              >
                <img
                  src={course.image_url || 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=400'}
                  alt={course.title}
                  className="w-32 h-32 object-cover rounded-lg flex-shrink-0"
                />
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-[#1e3a8a] mb-2">{course.title}</h3>
                  <p className="text-gray-600 mb-2">by {course.instructor_name}</p>
                  {course.duration_hours && (
                    <p className="text-sm text-gray-500">{course.duration_hours} hours</p>
                  )}
                </div>
                <div className="flex flex-col items-end justify-between">
                  <div className="text-2xl font-bold text-[#1e3a8a]">
                    ${course.price?.toFixed(2)}
                  </div>
                  <button
                    onClick={() => removeFromCart(course.id)}
                    className="text-red-500 hover:text-red-700 flex items-center gap-2 transition-colors"
                  >
                    <Trash2 className="w-4 h-4" />
                    Remove
                  </button>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Order Summary */}
          <div className="lg:col-span-1">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="bg-white rounded-xl shadow-lg p-8 sticky top-8"
            >
              <h2 className="text-2xl font-bold text-[#1e3a8a] mb-6">Order Summary</h2>
              
              <div className="space-y-3 mb-6">
                <div className="flex justify-between text-gray-600">
                  <span>Subtotal</span>
                  <span>${cartTotal.toFixed(2)}</span>
                </div>
                <div className="flex justify-between text-gray-600">
                  <span>Tax</span>
                  <span>$0.00</span>
                </div>
                <div className="border-t pt-3 flex justify-between text-xl font-bold text-[#1e3a8a]">
                  <span>Total</span>
                  <span>${cartTotal.toFixed(2)}</span>
                </div>
              </div>

              <Link
                to="/checkout"
                className="block w-full bg-[#3b82f6] text-white text-center py-4 rounded-lg font-semibold hover:bg-[#1e3a8a] transition-colors shadow-lg hover:shadow-xl flex items-center justify-center gap-2"
              >
                Proceed to Checkout
                <ArrowRight className="w-5 h-5" />
              </Link>

              <Link
                to="/courses"
                className="block w-full mt-4 text-center text-[#3b82f6] hover:underline"
              >
                Continue Shopping
              </Link>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShoppingCart;