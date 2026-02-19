import { assets } from "../assets/assets";
import Title from "../components/Title";
import NewsletterBox from "../components/NewsletterBox"

const Contact = () => {
  return (
    <div>
      <div className="text-center text-2xl pt-20 border-t">
        <Title text1={'CONTACT'} text2={'US'} />
      </div>

      <div className="my-10 flex flex-col justify-center md:flex-row gap-10 mb-28">

        <img
          src={assets.contact_img}
          className="w-full md:max-w-[480px] rounded-xl shadow-md object-cover"
          alt="Contact"
        />

        <div className="flex flex-col justify-center items-start gap-4 max-w-md">
          <p className="text-gray-600 text-base leading-relaxed">
            We are here to help you with any questions or support you need.
            Feel free to reach out to us anytime.
          </p>
          <div className="flex flex-col gap-2 text-gray-700 text-sm">
            <p>
              <span className="font-semibold text-gray-900">Address:</span><br />
              Addis Ababa, Ethiopia
            </p>
            <p>
              <span className="font-semibold text-gray-900">Phone:</span><br />
              +251 926 666 969
            </p>
            <p>
              <span className="font-semibold text-gray-900">Email:</span><br />
              support@forever.com
            </p>
            <button className="border border-black px-8 py-4 text-sm hover:bg-black hover:text-white">Explore Now</button>
          </div>
        </div>
      </div>

      <NewsletterBox />
    </div>
  )
}

export default Contact;