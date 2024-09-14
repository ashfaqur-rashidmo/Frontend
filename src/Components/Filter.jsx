import React from 'react';
import { useSelector } from 'react-redux';
import Card from './ProductCard/Card';
import noProduct from '../assets/Images/not_found.png';

const Filter = () => {
    const filterProducts = useSelector(state => state.product.filteredData);

    return (
        <div className='mx-auto py-12 px-4 md:px-16 lg:px-24'>
            {filterProducts.length > 0 ? (
                <>
                    <div className='container mx-auto py-12'>
                        <h2 className='text-2xl font-bold mb-6 text-center'>Shop</h2>
                        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-6 cursor-pointer'>
                            {filterProducts.map(product => (
                                <Card key={product.id} product={product} />
                            ))}
                        </div>
                    </div>
                </>
            ) : (
                <div className='flex justify-center'>
                    
                    <img src={noProduct} alt="No products found" className='w-1/2' />
                </div>
            )}
        </div>
    );
};

export default Filter;