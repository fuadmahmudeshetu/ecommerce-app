import { assets } from "../assets/assets"

const Footer = () => {
  return (
    <div className="flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-1 mt-10 text-sm">
      <div className="">
        <img src={assets.logo} className="mb-5 w-32" alt="" />

        <p className="w-full md:w-2/3 text-gray-600">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam atque quos dolorem et debitis eaque ut nisi, soluta delectus minus corrupti adipisci ratione cumque expedita laborum quae, iste quidem perferendis?</p>
      </div>

      <div className="">
        <p className="text-xl font-medium mb-5">COMPANY</p>
        <ul className="flex flex-col gap-1 text-gray-600">
            <li>Home</li>
            <li>About us</li>
            <li>Delivery</li>
            <li>Privacy policy</li>
        </ul>
      </div>

      <div className="">
        <p className="text-xl font-medium mb-5">GET IN TOUCH</p>

        <ul className="flex flex-col gap-1 text-gray-600">
            <li>+251-926-666-969</li>
            <li>contact@forever@gmail.com</li>
        </ul>
      </div>

      <div className="col-span-full">
        <hr />
        <p className="py-5 text-sm text-center">Copyright 2026@ forever.com - All Rights Reserved</p>
      </div>
    </div>
  )
}

export default Footer
