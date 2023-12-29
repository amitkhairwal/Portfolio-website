import React from 'react'
import { Style } from '../utils/Style'
import Contactx from '../assets/contact-us.jpg'

function Contact() {
    return (
        <div id='Contact'>
            <div>
                <div className='flex-row items-center pl-5  pt-3 ' id='Overview'>
                    <span className={Style.sectionHeadText}>
                        Conatct
                    </span>
                    <hr className='w-[35%]'></hr>

                </div>

            </div >


            <div className='mt-5'>

         
            <div className='flex flex-row flex-wrap justify-around '>
                <div className=' lg:w-[40%]'>
              
                <form action="https://formsubmit.co/amitkhairwal264@gmail.com" method="POST"
          className=' m-5 flex flex-col gap-3'
        >
          <label className='flex flex-col'>
            <span className='text-violet-700 font-medium mb-2'>Your Name</span>
            <input
              type='text'
              name='name'
           
              placeholder="What's your good name?"
              className='bg-orange-200 py-4 px-6 placeholder:text-secondary text-orange-500 rounded-lg outline-none border-none font-medium'
            />
          </label>
          <label className='flex flex-col'>
            <span className='text-violet-700  font-medium mb-2'>Your email</span>
            <input
              type='email'
              name='email'
              
              placeholder="What's your web address?"
              className='bg-orange-200 py-4 px-6 placeholder:text-secondary text-orange-500  rounded-lg outline-none border-none font-medium'
            />
          </label>
          <label className='flex flex-col'>
            <span className='text-violet-700  font-medium mb-2'>Your Message</span>
            <textarea
              rows={5}
              name='message'
             
              placeholder='What you want to say?'
              className='bg-orange-200 py-4 px-6 placeholder:text-secondary text-orange-500 rounded-lg outline-none border-none font-medium'
            />
          </label>

          <button
            type='submit'
            className='bg-slate-100   hover:shadow-orange-300 py-3 px-8 mb-4 m-4 rounded-xl outline-none w-fit text-black font-bold shadow-md shadow-primary'
          >Submit
          </button>
        </form>

                </div>


                <div className='lg:w-[50%]'>
                    <img src={Contactx} alt='' />

                </div>

                </div>


            </div>
        </div>
    )
}

export default Contact
