import { useContext } from "react"
import { ShopContext } from "../context/ShopContext"
import Title from "../components/Title";


const Orders = () => {

  const { products, currency } = useContext(ShopContext);

  return (
    <div className="border-t pt-16">
      <div className="text-2xl">
        <Title text1={'MY'} text2={'ORDERS'} />

        <div>
          {products.slice(1, 4).map((item, index) => (
            <div key={index} className="py-4 border-t border-b text-gray-700 flex flex-col md:flex-row md:items-center md:justify-between gap-4">

              {/* --- Left Side: Image and Details --- */}
              <div className="flex items-start gap-6 text-sm">
                <img className="w-16 sm:w-20" src={item.image[0]} alt="ordered item" />
                <div>
                  <p className="sm:text-base font-medium">{item.name}</p>
                  <div className="flex items-center gap-3 mt-1 text-sm text-gray-600">
                    <p className="text-base font-semibold">{currency}{item.price}</p>
                    <p>Quantity: 1</p>
                    <p>Size: M</p>
                  </div>
                  <p className="mt-1 text-xs sm:text-sm">Date: <span className="text-gray-400">2, Mar 2026</span></p>
                </div>
              </div>

              {/* --- Right Side: Status and Action --- */}
              {/* Fixed: Changed md:w-12 to md:w-1/2 or simple flex-1 to allow proper spacing */}
              <div className="md:w-1/2 flex justify-between items-center">
                <div className="flex items-center gap-2">
                  <p className="min-w-2 h-2 rounded-full bg-green-500"></p>
                  <p className="text-sm md:text-base whitespace-nowrap">Ready to ship</p>
                </div>

                <button className="border px-4 py-2 text-sm font-medium rounded-sm hover:bg-black hover:text-white transition-all duration-300">
                  Track Order
                </button>
              </div>

            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Orders