import { assets } from "../assets/assets"

const OurPolicy = () => {
  return (
    <div className="flex flex-col items-center sm:items-center sm:flex-row justify-around gap-20 sm:gap-2 text-center py-20 sm:w-full text-xs sm:text-sm md:text-base text-gray-700">
        
          <div className="max-w-sm px-8 py-12 bg-white/80 backdrop-blur-md border w-full border-slate-100 rounded-3xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_20px_40px_rgba(0,0,0,0.08)] transition-all duration-500 group">
            <img src={assets.exchange_icon} className="w-12 m-auto mb-5" alt="" />
            <p className="font-semibold">Easy Exchange Policy</p>
            <p className="text-gray-400">We offer hassle free exchange policy</p>
        </div>
          <div className="max-w-sm px-8 py-12 bg-white/80 backdrop-blur-md border w-full border-slate-100 rounded-3xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_20px_40px_rgba(0,0,0,0.08)] transition-all duration-500 group">
            <img src={assets.quality_icon} className="w-12 m-auto mb-5" alt="" />
            <p className="font-semibold">7 Days Return Policy</p>
            <p className="text-gray-400">We provide 7 days free return policy</p>
        </div>
          <div className="max-w-sm px-8 py-12 bg-white/80 backdrop-blur-md border w-full border-slate-100 rounded-3xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_20px_40px_rgba(0,0,0,0.08)] transition-all duration-500 group">
            <img src={assets.support_img} className="w-12 m-auto mb-5" alt="" />
            <p className="font-semibold">Best Customer Support</p>
            <p className="text-gray-400">we provide 24/7 customer support</p>
        </div>
    </div>
  )
}

export default OurPolicy
