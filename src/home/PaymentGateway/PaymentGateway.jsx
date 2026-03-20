import React, { useState, useEffect } from 'react';
import { CreditCard, Shield, CheckCircle, AlertCircle, Loader } from 'lucide-react';

const PaymentGateway = () => {
  const [selectedPayment, setSelectedPayment] = useState('razorpay');
  const [loading, setLoading] = useState(false);
  const [paymentStatus, setPaymentStatus] = useState(null);
  const [amount] = useState(500); // ₹500 for exam
  
  // Load external scripts
  useEffect(() => {
    // Load Razorpay
    if (!window.Razorpay) {
      const script = document.createElement('script');
      script.src = 'https://checkout.razorpay.com/v1/checkout.js';
      script.async = true;
      document.body.appendChild(script);
    }
    
    // Load PayPal SDK
    if (!window.paypal) {
      const script = document.createElement('script');
      script.src = 'https://www.paypal.com/sdk/js?client-id=YOUR_PAYPAL_CLIENT_ID&currency=USD';
      script.async = true;
      document.body.appendChild(script);
    }
    
    // Load Stripe
    if (!window.Stripe) {
      const script = document.createElement('script');
      script.src = 'https://js.stripe.com/v3/';
      script.async = true;
      document.body.appendChild(script);
    }
  }, []);

  const handleRazorpayPayment = () => {
    setLoading(true);
    
    const options = {
      key: "rzp_test_YourKeyHere", 
      amount: amount * 100, 
      currency: "INR",
      name: "UnfilteredGadgets",
      description: "Science Exam Mock Test - Premium Access",
      image: "https://via.placeholder.com/150x50/6366f1/ffffff?text=UG",
      handler: function (response) {
        console.log('Razorpay Payment Success:', response);
        setPaymentStatus('success');
        setLoading(false);
        setTimeout(() => {
          window.location.href = '/exam';
        }, 2000);
      },
      prefill: {
        name: "Test User",
        email: "test@example.com",
        contact: "9999999999",
      },
      theme: {
        color: "#6366f1",
      },
      modal: {
        ondismiss: function() {
          setLoading(false);
          setPaymentStatus('cancelled');
        }
      }
    };

    if (window.Razorpay) {
      const rzp = new window.Razorpay(options);
      rzp.open();
    } else {
      alert('Razorpay SDK not loaded. Please refresh the page.');
      setLoading(false);
    }
  };

  const handlePayPalPayment = () => {
    setLoading(true);
  
    setTimeout(() => {
      setPaymentStatus('success');
      setLoading(false);
      setTimeout(() => {
        window.location.href = '/exam';
      }, 2000);
    }, 2000);
  };

  const handleStripePayment = () => {
    setLoading(true);

    setTimeout(() => {
      setPaymentStatus('success');
      setLoading(false);
      setTimeout(() => {
        window.location.href = '/exam';
      }, 2000);
    }, 2000);
  };

  const handlePayment = () => {
    switch (selectedPayment) {
      case 'razorpay':
        handleRazorpayPayment();
        break;
      case 'paypal':
        handlePayPalPayment();
        break;
      case 'stripe':
        handleStripePayment();
        break;
      default:
        break;
    }
  };

  if (paymentStatus === 'success') {
    return (
      <div className="min-h-screen bg-gradient-to-br from-green-50 to-blue-50 flex items-center justify-center p-4">
        <div className="bg-white rounded-2xl shadow-2xl p-8 text-center max-w-md w-full">
          <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
          <h2 className="text-2xl font-bold text-gray-800 mb-2">Payment Successful!</h2>
          <p className="text-gray-600 mb-4">Your payment of ₹{amount} has been processed successfully.</p>
          <p className="text-sm text-gray-500">Redirecting to exam in 2 seconds...</p>
        </div>
      </div>
    );
  }

  if (paymentStatus === 'cancelled') {
    return (
      <div className="min-h-screen bg-gradient-to-br from-red-50 to-orange-50 flex items-center justify-center p-4">
        <div className="bg-white rounded-2xl shadow-2xl p-8 text-center max-w-md w-full">
          <AlertCircle className="w-16 h-16 text-red-500 mx-auto mb-4" />
          <h2 className="text-2xl font-bold text-gray-800 mb-2">Payment Cancelled</h2>
          <p className="text-gray-600 mb-6">Your payment was cancelled. Please try again.</p>
          <button
            onClick={() => setPaymentStatus(null)}
            className="bg-indigo-600 text-white px-6 py-2 rounded-lg hover:bg-indigo-700 transition-colors"
          >
            Try Again
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-white to-cyan-50 flex items-center justify-center p-4 ">
      <div className="bg-white rounded-2xl shadow-2xl overflow-hidden max-w-4xl w-full">
        {/* Header */}
        <div className="bg-gradient-to-r from-indigo-600 to-purple-600 p-6 text-white">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-2xl font-bold">UnfilteredGadgets</h1>
              <p className="text-indigo-100">Science Exam Mock Test - Premium Access</p>
            </div>
            <Shield className="w-8 h-8 text-indigo-200" />
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-0">
          {/* Order Summary */}
          <div className="p-6 bg-gray-50 border-r">
            <h2 className="text-xl font-semibold text-gray-800 mb-4">Order Summary</h2>
            
            <div className="space-y-3 mb-6">
              <div className="flex justify-between">
                <span className="text-gray-600">Science Mock Test</span>
                <span className="font-medium">₹{amount}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Processing Fee</span>
                <span className="font-medium">₹0</span>
              </div>
              <div className="border-t pt-3 flex justify-between text-lg font-bold">
                <span>Total Amount</span>
                <span className="text-indigo-600">₹{amount}</span>
              </div>
            </div>

            <div className="bg-blue-50 p-4 rounded-lg">
              <h3 className="font-semibold text-blue-800 mb-2">What you'll get:</h3>
              <ul className="text-sm text-blue-700 space-y-1">
                <li>• Complete Science Mock Test</li>
                <li>• Detailed Performance Analysis</li>
                <li>• Answer Explanations</li>
                <li>• Progress Tracking</li>
                <li>• 30-day Access</li>
              </ul>
            </div>
          </div>

          {/* Payment Options */}
          <div className="p-6">
            <h2 className="text-xl font-semibold text-gray-800 mb-6">Choose Payment Method</h2>
            
            <div className="space-y-4 mb-6">
              {/* Razorpay */}
              <div 
                className={`border-2 rounded-lg p-4 cursor-pointer transition-all ${
                  selectedPayment === 'razorpay' 
                    ? 'border-indigo-500 bg-indigo-50' 
                    : 'border-gray-200 hover:border-gray-300'
                }`}
                onClick={() => setSelectedPayment('razorpay')}
              >
                <div className="flex items-center space-x-3">
                  <input
                    type="radio"
                    name="payment"
                    value="razorpay"
                    checked={selectedPayment === 'razorpay'}
                    onChange={() => setSelectedPayment('razorpay')}
                    className="text-indigo-600"
                  />
                  <div className="flex-1">
                    <div className="flex items-center space-x-2">
                      <div className="w-8 h-8 bg-blue-600 rounded flex items-center justify-center">
                        <span className="text-white text-xs font-bold">R</span>
                      </div>
                      <span className="font-medium">Razorpay</span>
                    </div>
                    <p className="text-sm text-gray-500 mt-1">UPI, Cards, NetBanking, Wallets</p>
                  </div>
                </div>
              </div>

              {/* PayPal */}
              <div 
                className={`border-2 rounded-lg p-4 cursor-pointer transition-all ${
                  selectedPayment === 'paypal' 
                    ? 'border-indigo-500 bg-indigo-50' 
                    : 'border-gray-200 hover:border-gray-300'
                }`}
                onClick={() => setSelectedPayment('paypal')}
              >
                <div className="flex items-center space-x-3">
                  <input
                    type="radio"
                    name="payment"
                    value="paypal"
                    checked={selectedPayment === 'paypal'}
                    onChange={() => setSelectedPayment('paypal')}
                    className="text-indigo-600"
                  />
                  <div className="flex-1">
                    <div className="flex items-center space-x-2">
                      <div className="w-8 h-8 bg-blue-500 rounded flex items-center justify-center">
                        <span className="text-white text-xs font-bold">P</span>
                      </div>
                      <span className="font-medium">PayPal</span>
                    </div>
                    <p className="text-sm text-gray-500 mt-1">Pay with PayPal account</p>
                  </div>
                </div>
              </div>

              {/* Stripe */}
              <div 
                className={`border-2 rounded-lg p-4 cursor-pointer transition-all ${
                  selectedPayment === 'stripe' 
                    ? 'border-indigo-500 bg-indigo-50' 
                    : 'border-gray-200 hover:border-gray-300'
                }`}
                onClick={() => setSelectedPayment('stripe')}
              >
                <div className="flex items-center space-x-3">
                  <input
                    type="radio"
                    name="payment"
                    value="stripe"
                    checked={selectedPayment === 'stripe'}
                    onChange={() => setSelectedPayment('stripe')}
                    className="text-indigo-600"
                  />
                  <div className="flex-1">
                    <div className="flex items-center space-x-2">
                      <CreditCard className="w-8 h-8 text-purple-600" />
                      <span className="font-medium">Stripe</span>
                    </div>
                    <p className="text-sm text-gray-500 mt-1">Credit/Debit Card</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Security Notice */}
            <div className="bg-green-50 p-4 rounded-lg mb-6">
              <div className="flex items-center space-x-2">
                <Shield className="w-5 h-5 text-green-600" />
                <span className="text-sm text-green-800 font-medium">
                  256-bit SSL secured payment
                </span>
              </div>
            </div>

            {/* Pay Button */}
            <button
              onClick={handlePayment}
              disabled={loading}
              className="w-full bg-gradient-to-r from-indigo-600 to-purple-600 text-white py-4 rounded-lg font-semibold text-lg hover:from-indigo-700 hover:to-purple-700 transition-all transform hover:scale-[1.02] disabled:opacity-50 disabled:transform-none"
            >
              {loading ? (
                <div className="flex items-center justify-center space-x-2">
                  <Loader className="w-5 h-5 animate-spin" />
                  <span>Processing...</span>
                </div>
              ) : (
                `Pay ₹${amount} Securely`
              )}
            </button>

            <p className="text-xs text-gray-500 text-center mt-4">
              By proceeding, you agree to our Terms of Service and Privacy Policy
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PaymentGateway;