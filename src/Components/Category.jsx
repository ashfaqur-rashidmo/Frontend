import React from 'react';
import Men from '../assets/Images/man.png'
import women from '../assets/Images/woman.png'
import kids from '../assets/Images/kid.png'
const Categories = [
    {
        title: 'Men',
        image: Men,
    },
    {
        title: 'Women',
        image: women,
    },
    {
        title: 'Kids',
        image: kids,
    },
]
const Category = () => {

    return (
        <div className='container mx-auto grid grid-cols-1 sm:grid-cols-3 gap-6 cursor-pointer'>
          {Categories.map((Category,index) => (
             <div key={index} className='relative h-64 transform transition-transform duration-300 hover:scale-105'>
             <img src={Category.image} alt="" className='w-full h-full object-cover rounded-lg shadow-md'/>
             <div className='absolute top-20 left-12'>
                <p className='text-xl font-bold'>{Category.title}</p>
                <p className='text-gray-600'>View All</p>
             </div>
             </div>
          )
        )}
        </div>
    );
};

export default Category;