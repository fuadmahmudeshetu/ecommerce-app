import React from 'react'
import { assets } from '../assets/assets'

const Add = () => {
  return (
    <form>
      <div className="flex flex-col w-full items-start gap-3">
        <p>Upload Image</p>

        <div className=" flex gap-2">
          <label htmlFor="image1">
            <img className='w-20' src={assets.upload_area} alt="" />
            <input type="file" name="" id="image1" hidden/>
          </label>
          <label htmlFor="image2">
            <img className='w-20' src={assets.upload_area} alt="" />
            <input type="file" name="" id="image2" hidden/>
          </label>
          <label htmlFor="image3">
            <img className='w-20' src={assets.upload_area} alt="" />
            <input type="file" name="" id="image3" hidden/>
          </label>
          <label htmlFor="image4">
            <img className='w-20' src={assets.upload_area} alt="" />
            <input type="file" name="" id="image4" hidden/>
          </label>
        </div>
      </div>

      <div className="w-full">
        <p className='m-2'>Product Name</p>
        <input className='w-full max-w-[500px] px-3 py-2' type="text" placeholder='Type here' required name="" id="" />
      </div>
    </form>
  )
}

export default Add