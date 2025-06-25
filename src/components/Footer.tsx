import Image from 'next/image'
import React from 'react'

const Footer = () => {
  return (
    <div className='w-full h-auto flex justify-center items-center py-20'>
        <div className='w-[90%] h-auto flex flex-col gap-3 justify-center items-center'>
                <div className="heading w-full h-auto">
                        <h2 className='text-primary text-8xl'>Let’s Brew a Connection</h2>
                </div>
                <div className='flex gap-6 justify-between h-auto w-full items-start'>
                        <div className="w-[60%] flex flex-col gap-3">
                                <p className='font-sans font-normal text-base'>Got a question, a suggestion, or just want to say hello? We’d love to hear from you!</p>
                                
                        </div>
                        <div className="w-[40%]">
                                <Image src='/images/footer-image.png' alt='iamge' width={550} height={550} />
                        </div>
                </div>
                <div className="copyright w-full text-center py-4 flex justify-center items-center">
                        <p className='md:text-base text-sm font-sans'>© 2021 all copyright reserved. All Rights Reserved.</p>
                </div>
        </div>
    </div>
  )
}

export default Footer