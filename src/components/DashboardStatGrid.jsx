import React from 'react';
import { IoBagHandle, IoPieChart, IoPeople,IoCart} from 'react-icons/io5'

function DashboardStatGrid() {
  return (
    <div className='flex gap-4 w-full'>
        <Boxwrapper>
            <div className='rounded-full h-12 w-12 flex items-center justify-center bg-sky-500'>
                <IoBagHandle className='text-2xl text-white'></IoBagHandle>
            </div>
            <div className='pl-4'>
                <span className='text-sm text-gray-500 font-light'>Total sales</span>
                <div className='flex items-center'>
                    <strong className='text-xl text-gray-700 font-semibold'>$3452</strong>
                    <span className='text-sm text-green-500 pl-2'>+234</span>
                </div>
            </div>
        </Boxwrapper>
        <Boxwrapper>
              <div className='rounded-full h-12 w-12 flex items-center justify-center bg-orange-500'>
                  <IoPieChart className='text-2xl text-white'></IoPieChart>
              </div>
              <div className='pl-4'>
                  <span className='text-sm text-gray-500 font-light'>Total Expenses</span>
                  <div className='flex items-center'>
                      <strong className='text-xl text-gray-700 font-semibold'>$8964</strong>
                      <span className='text-sm text-green-500 pl-2'>+34</span>
                  </div>
              </div>
        </Boxwrapper>
        <Boxwrapper>
              <div className='rounded-full h-12 w-12 flex items-center justify-center bg-yellow-400'>
                  <IoPeople className='text-2xl text-white'></IoPeople>
              </div>
              <div className='pl-4'>
                  <span className='text-sm text-gray-500 font-light'>Total Customers</span>
                  <div className='flex items-center'>
                      <strong className='text-xl text-gray-700 font-semibold'>$12313</strong>
                      <span className='text-sm text-green-500 pl-2'>-30</span>
                  </div>
              </div>
        </Boxwrapper>
        <Boxwrapper>
        <div className='rounded-full h-12 w-12 flex items-center justify-center bg-green-400'>
                  <IoCart className='text-2xl text-white'></IoCart>
              </div>
              <div className='pl-4'>
                  <span className='text-sm text-gray-500 font-light'>Total orders</span>
                  <div className='flex items-center'>
                      <strong className='text-xl text-gray-700 font-semibold'>$16432</strong>
                      <span className='text-sm text-green-500 pl-2'>-3</span>
                  </div>
              </div>
        
        </Boxwrapper>
    </div>
  );
}

export default DashboardStatGrid;

function Boxwrapper({children}) {
    return <div className='bg-white rounded-sm p-4 flex-1 border border-gray-200 flex items-center'>{children}</div>       
}