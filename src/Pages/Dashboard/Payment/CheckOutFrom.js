import React, { useEffect, useState } from 'react';
import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import useAuth from '../../../Hooks/useAuth';
import swal from 'sweetalert';

const CheckOutFrom = () => {
  const { user } = useAuth();
  const stripe = useStripe();
  const elements = useElements();
  const [error, setError] = useState('');
  const [price, setPrice] = useState('');
  const [success, setSuccess] = useState('');
  const [processing, setProcessing] = useState(false);
  const [clientSecret, setClientSecret] = useState('');

  useEffect(() => {
    fetch('http://localhost:5000/create-payment-intent', {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
      },
      body: JSON.stringify({ price }),
    })
      .then((res) => res.json())
      .then((data) => {
        setClientSecret(data.clientSecret);
      });
  }, [price]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!stripe || !elements) {
      return;
    }
    const card = elements.getElement(CardElement);
    if (card === null) {
      return;
    }
    setProcessing(true);
    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: 'card',
      card,
    });

    if (error) {
      console.log(error);
      setError(error);
      setSuccess('');
    } else {
      console.log(paymentMethod);
      setError('');
    }

    // payment intent
    const { paymentIntent, error: intentError } =
      await stripe.confirmCardPayment(clientSecret, {
        payment_method: {
          card: card,
          billing_details: {
            name: user.displayName,
            email: user.email,
          },
        },
      });
    if (intentError) {
      setError(intentError);
      setSuccess('');
    } else {
      setError('');
      console.log(paymentIntent);
      setSuccess('your payment process successfully');
      setProcessing(false);

      const payment = {
        amount: paymentIntent.amount,
        created: paymentIntent.created,
        last4: paymentMethod.card.last4,
        transaction: paymentIntent.client_secret.slice('_secret')[0],
      };

      // save to database
      const url = `http://localhost:5000/payments`;
      fetch(url, {
        method: 'POST',
        headers: {
          'content-type': 'application/json',
        },
        body: JSON.stringify(payment),
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          if (data.inserted_id) {
            swal('Payment Succesfull', 'Well done', 'success');
          }
        });
    }
  };

  return (
    <div>
      <form className="container" onSubmit={handleSubmit}>
        <CardElement
          options={{
            style: {
              base: {
                fontSize: '16px',
                color: '#424770',
                '::placeholder': {
                  color: '#aab7c4',
                },
              },
              invalid: {
                color: '#9e2146',
              },
            },
          }}
        />
        {error && <p style={{ color: 'red' }}>{error?.message}</p>}
        {success && <p style={{ color: 'green' }}>{success}</p>}
        {processing ? (
          <h4 className="container mx-auto">Loading...</h4>
        ) : (
          <div className=" container d-flex flex-column justify-content-center align-items-center">
            <input
              type="number"
              placeholder="Amount"
              className=" form-control w-50 mx-auto "
              onBlur={(e) => setPrice(e.target.value)}
            />
            <br />
            <button
              className="btn btn-primary"
              type="submit"
              disabled={!stripe || success}
            >
              Pay
            </button>
          </div>
        )}
      </form>
    </div>
  );
};

export default CheckOutFrom;
