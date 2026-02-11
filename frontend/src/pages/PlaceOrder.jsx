import Title from "../components/Title"
import CartTotal from "../components/CartTotal"
import { assets } from "../assets/assets"

const PlaceOrder = () => {
  return (
    <div className="flex sm:flex-row flex-col justify-between px-12 gap-4 pt-5 sm:pt-14 min-h-[80vh] border-t">
      <div className="flex flex-col gap-4 w-full sm:max-w-[480px]">
        <div className="text-xl sm:text-2xl my-3">
          <Title text1={'DELIVERY'} text2={'INFORMATION'} />
        </div>
        <div className="flex gap-3">
          <input className="border border-gray-300 rounded py-1.5 px-3.5 w-full" type="text" placeholder="First name" />
          <input className="border border-gray-300 rounded py-1.5 px-3.5 w-full" type="text" placeholder="Last name" />
        </div>

        <input className="border border-gray-300 rounded py-1.5 px-3.5 w-full" type="text" placeholder="Email address" />

        <input className="border border-gray-300 rounded py-1.5 px-3.5 w-full" type="text" placeholder="Street" />

        <div className="flex gap-3">
          <input className="border border-gray-300 rounded py-1.5 px-3.5 w-full" type="text" placeholder="City" />
          <input className="border border-gray-300 rounded py-1.5 px-3.5 w-full" type="text" placeholder="State" />
        </div>

        <div className="flex gap-3">
          <input className="border border-gray-300 rounded py-1.5 px-3.5 w-full" type="number" placeholder="Zipcode" />
          <input className="border border-gray-300 rounded py-1.5 px-3.5 w-full" type="text" placeholder="Country" />
        </div>

        <input className="border border-gray-300 rounded py-1.5 px-3.5 w-full" type="number" placeholder="Phone" />
      </div>

      {/* Right side of the checkout page */}

      <div className="mt-8">
        <div className="mt-8 min-w-80">
          <CartTotal />
        </div>
        <div className="mt-12">
        {/* Payment method selection */}
          <Title text1={'PAYMENT'} text2={'METHODS'} />
          <div className="flex gap-3 flex-col lg:flex-row">

            <div className="flex items-center gap-3 border border-gray-200 p-3 px-4 cursor-pointer rounded-xl hover:bg-blue-50/50 transition-all group">
              {/* The Radio Circle */}
              <div className="min-w-4 h-4 border-2 border-gray-300 rounded-full flex items-center justify-center group-hover:border-blue-500 transition-colors">
                {/* Inner dot - can be toggled with a 'selected' state */}
                <div className="w-2 h-2 bg-blue-600 rounded-full scale-0 group-hover:scale-100 transition-transform"></div>
              </div>

              {/* The Image Tag (Untouched as requested) */}
              <img src={assets.razorpay_logo} className="h-5 mx-4" alt="" />

              {/* Optional: Add a label if you want more clarity, otherwise leave it */}
              <span className="text-gray-400 text-[10px] font-medium ml-auto uppercase tracking-widest">
                Secure
              </span>
            </div>

            <div className="flex items-center gap-3 border border-gray-200 p-4 px-5 cursor-pointer rounded-xl hover:bg-slate-50 transition-all group">
              {/* The Radio Circle */}
              <div className="min-w-5 h-5 border-2 border-gray-300 rounded-full flex items-center justify-center group-hover:border-indigo-500 transition-colors">
                {/* Inside circle - show/hide based on selection */}
                <div className="w-2.5 h-2.5 bg-indigo-600 rounded-full scale-0 group-hover:scale-100 transition-transform"></div>
              </div>

              {/* The Text Label */}
              <div className="flex flex-col">
                <p className="text-gray-800 text-sm font-semibold tracking-wide">
                  CASH ON DELIVERY
                </p>
                <p className="text-gray-400 text-[11px] leading-tight">
                  Pay with cash when your order arrives.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default PlaceOrder