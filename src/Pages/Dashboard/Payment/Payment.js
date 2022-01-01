import React from 'react';
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import CheckOutFrom from './CheckOutFrom';

const stripePromise = loadStripe(
  'pk_test_51JwA3uEQOaexwxXNq0xGBS94Oep7zk9wCcrNmTu9pCZFqk3BMUOj843lAAKkOGgnR4btno79sYMIuQMJ1eaNHKSd00LGkDzJIy'
);

const Payment = () => {
  return (
    <div>
      <h2 className="text-center fw-bold my-5">Payment</h2>

      <Elements stripe={stripePromise}>
        <CheckOutFrom />
      </Elements>
    </div>
  );
};

export default Payment;
