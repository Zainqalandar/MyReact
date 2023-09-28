import React from 'react'
import Logo from '../Logo'

function Footer() {
  return (
    <section className="relative overflow-hidden py-10 bg-gray-400 border border-t-2 border-t-black">
      <div className="w-full p-6 md:w-1/2 lg:w-5/12">
        <div className="flex h-full flex-col justify-between">
          <div className="mb-4 inline-flex items-center">
            <Logo width="100px" />
          </div>
          <div>
            <p className="text-sm text-gray-600">
              &copy; Copyright 2023. All Rights Reserved by DevUI.
            </p>
          </div>
        </div>
      </div>
      
    </section>
  )
}

export default Footer