import React from 'react'
import { MdOutlineSupervisorAccount } from 'react-icons/md';
import { HiOutlineNewspaper } from 'react-icons/hi';
import { AiOutlineAntDesign } from 'react-icons/ai';

import mscs_logo from '../images/mscs_logo.png'


const Home = () => {
  return (
    <div className='mt-12'>
      <div className='flex flex-wrap lg:flex-nowrap justify-center'>

        <div className='bg-white dark:text-gray-200 dark:bg-secondary-dark-bg rounded-xl w-full lg:w-3/5 p-5 pt-6 m-4 lg:m-1 lg:ml-3'>
          <div className="flex items-center">
            <div className='ml-5 w-1/6'>
              <img src={mscs_logo} alt="Logo" 
              className='' style={{maxHeight:'160px'}} />
               
            </div>
            
            <div className='w-5/6 pl-10'>
              <p className='font-bold text-xl md:text-2xl '>MULTI-STATE CO-OPERATIVE SOCIETIES</p>
              <p className='text-lg md:text-xl'>Ministry of Cooperation, Govt. of India</p>
            </div>
          </div>
          {/* <div className='mt-6'>
            <button>Download Report</button>
          </div> */}
        </div> {/* Earning Ends */}
        <div className='flex m-3 flex-nowrap justify-evenly gap-4 items-center lg:w-2/5'>
            <div className='bg-white dark:text-gray-200 dark:bg-secondary-dark-bg md:w-60 p-3 md:p-4 pt-2 md:pt-5 rounded-2xl flex-col gap-2 justify-center'>
              <div className='items-center flex'>
                <button type='button'
                  className='rounded-full p-2 md:p-4 opacity-0.9 hover:drop-shadow-2xl'
                >
                  <MdOutlineSupervisorAccount
                    style={{ color: 'black' }}
                    className='text-3xl md:text-3xl '
                  />
                </button>
                <p className='text-base md:text-lg font-bold text-black-400 mt-1'>
                     Registered MSCS
                  </p>
              </div>

              <div className='mt-1 md:mt-2 flex justify-center items-center '>
                
                  <span className='text-2xl md:text-3xl font-semibold'>
                    30,000
                  </span>
                
                  {/* <span className={`text-sm text-green-600 ml-2`}>
                    33%
                  </span> */}
                
              </div>
          
            </div> {/* bg white grid div */}

            <div className='bg-white dark:text-gray-200 dark:bg-secondary-dark-bg md:w-60 p-3 md:p-4 pt-2 md:pt-5 rounded-2xl flex-col gap-2 justify-center'>
              <div className='items-center flex'>
                <button type='button'
                  className='rounded-full p-2 md:p-4 opacity-0.9 hover:drop-shadow-2xl'
                >
                  <HiOutlineNewspaper
                    style={{ color: 'black' }}
                    className='text-3xl md:text-3xl '
                  />
                </button>
                <p className='text-base md:text-lg font-bold text-black-400 mt-1'>
                Amendments 
                  </p>
              </div>

              <div className='mt-1 md:mt-2 flex justify-center items-center '>
                
                  <span className='text-2xl md:text-3xl font-semibold'>
                    11,234
                  </span>
                
                  {/* <span className={`text-sm text-green-600 ml-2`}>
                    33%
                  </span> */}
                
              </div>
          
            </div> {/* bg white grid div */}

            <div className='bg-white dark:text-gray-200 dark:bg-secondary-dark-bg md:w-60 p-3 md:p-4 pt-2 md:pt-5 rounded-2xl flex-col gap-2 justify-center'>
              <div className='items-center flex'>
                <button type='button'
                  className='rounded-full p-2 md:p-4 opacity-0.9 hover:drop-shadow-2xl'
                >
                  <AiOutlineAntDesign
                    style={{ color: 'black' }}
                    className='text-3xl md:text-3xl '
                  />
                </button>
                <p className='text-base md:text-lg font-bold text-black-400 mt-1'>
                  Appeals
                  </p>
              </div>

              <div className='mt-1 md:mt-2 flex justify-center items-center '>
                
                  <span className='text-2xl md:text-3xl font-semibold'>
                    124
                  </span>
                
              </div>
          
            </div> {/* bg white grid div */}
             
          
        </div> {/* contains white grids */}
      </div> {/* Has MSCS and white grids */}
      
      {/* News */}

      <div className='flex flex-wrap lg:flex-nowrap justify-center mt-4'>

        <div className='bg-white dark:text-gray-200 dark:bg-secondary-dark-bg rounded-xl w-1/2  p-5 pt-6 m-4 lg:m-1 lg:ml-3'>
                  
        </div>

        <div className='bg-white dark:text-gray-200 dark:bg-secondary-dark-bg rounded-xl w-1/2 p-5 pt-6 m-4 lg:m-1 lg:ml-3'>

        </div>

         

      </div> {/* End News */}

    </div>
  )
}

export default Home