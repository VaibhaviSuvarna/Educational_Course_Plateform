import { ArrowUpRightIcon, Clock, Star, Users, Play } from 'lucide-react';
import React from 'react';

export default function Cards({ 
  title, 
  duration, 
  students, 
  price, 
  rating, 
  thumbnail, 
  onViewDetails, 
  onPlay 
}) {
  return (
    <div className='flex rounded-2xl p-3 flex-col m-5 w-full border-l-4 border-b-4  max-w-md h-[430px] transition-all duration-300 hover:shadow-2xl hover:border-slate-900'>
      
      
      <div className='relative group cursor-pointer' onClick={onPlay}>
        <img 
          src={thumbnail || "https://via.placeholder.com/400x200?text=No+Image"} 
          alt="thumbnail" 
          className='rounded-2xl object-cover w-full h-48' 
        />
        
        
        <div className='absolute inset-0 flex items-center justify-center bg-black/0 group-hover:bg-black/30 transition duration-300'>
          <Play className='w-10 h-10 text-white opacity-0 group-hover:opacity-100 transition duration-300' />
        </div>
      </div>

      <span className='font-bold text-xl py-2'>{title}</span>

      <div className='flex justify-between p-2 text-sm text-gray-600'>
        <div className='flex items-center'><Clock className="w-4 h-4 mr-1" /> {duration} </div>
        <div className='flex items-center'> <Users className="w-4 h-4 mr-1" /> {students} </div>
      </div>

      <div className='flex justify-start p-2 text-sm text-gray-600'>
        <Star className="w-4 h-4 text-yellow-500" />
        <span className="ml-1">{rating} ratings</span>
      </div>

      <div className='flex justify-between p-2 items-center'>
        <button 
          onClick={onViewDetails}
          className='hover:shadow-2xl hover:shadow-blue-600 bg-slate-950 px-6 py-2 rounded-lg text-white flex items-center hover:-translate-y-1 hover:transition-transform duration-300'
        >
          View Details <ArrowUpRightIcon className="ml-2 w-4 h-4" />
        </button>
        <div className='border-2 p-2 font-bold'>{price}</div>
      </div>
    </div>
  );
}
