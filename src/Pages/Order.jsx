import React from 'react';
import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';

const Order = ({ order }) => {
    const navigate = useNavigate();

    // Add a fallback when the `order` prop is null or undefined
    if (!order) {
        return (
            <div className="container mx-auto py-8 px-4 md:px-16 lg:px-24">
                <h2 className="text-2xl font-semibold mb-4">Order not found</h2>
                <p>There seems to be an issue with retrieving your order details.</p>
                <button
                    className="bg-red-600 text-white py-2 px-4 hover:bg-red-800 mt-4"
                    onClick={() => navigate('/')}
                >
                    Go Back to Home
                </button>
            </div>
        );
    }

    return (
        <div className='container mx-auto py-8 px-4 md:px-16 lg:px-24'>
            <h2 className='text-2xl font-semibold mb-4'>Thank you for your order!</h2>
            <p>Your order has been placed successfully. You will receive an email confirmation shortly.</p>
            
            <div className='mt-6 p-4 border rounded-lg bg-gray-100'>
                <h3 className='text-lg font-semibold mb-2'>Order Summary</h3>
                <p>Order Number: {order.orderNumber}</p>
                
                <div className='mt-4'>
                    <h4 className='text-md font-semibold mb-2'>Shipping Information</h4>
                    <p>{order.shippingInformation.address}</p>
                    <p>{order.shippingInformation.city}</p>
                    <p>{order.shippingInformation.zip}</p>
                </div>

                <div className='mt-4'>
                    <h4 className='text-md font-semibold mb-2 '>Products Ordered</h4>
                    {order.products.map((product) => (
                        <div key={product.id} className='justify-between'>
                            <p>{product.name} (x{product.quantity})</p>
                            <p>{(product.price * product.quantity).toFixed(2)}</p>
                        </div>
                    ))}
                </div>

                <div className='mt-4 flex justify-between'>
                    <span>Total Price: </span>
                    <span className='font-semibold'>${order.totalPrice.toFixed(2)}</span>
                </div>

                <div className='mt-6'>
                    <button className='bg-green-500 text-white px-4 py-2 hover:bg-green-600'>
                        Order Tracking
                    </button>
                    <button
                        className='ml-4 bg-red-600 text-white py-2 px-4 hover:bg-red-800'
                        onClick={() => navigate('/')}
                    >
                        Continue Shopping
                    </button>
                </div>
            </div>
        </div>
    );
};

// Add prop validation using PropTypes
Order.propTypes = {
    order: PropTypes.shape({
        orderNumber: PropTypes.string.isRequired,
        shippingInformation: PropTypes.shape({
            address: PropTypes.string.isRequired,
            city: PropTypes.string.isRequired,
            zip: PropTypes.string.isRequired,
        }).isRequired,
        products: PropTypes.arrayOf(
            PropTypes.shape({
                id: PropTypes.number.isRequired,
                name: PropTypes.string.isRequired,
                price: PropTypes.number.isRequired,
                quantity: PropTypes.number.isRequired,
            })
        ).isRequired,
        totalPrice: PropTypes.number.isRequired,
    }),
};

export default Order;