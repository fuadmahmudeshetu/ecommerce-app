import { assets } from "../assets/assets"
import Title from "../components/Title"
import NewsletterBox from "../components/NewsletterBox"

const About = () => {
  return (
    <div className="">
      <div className="text-2xl text-center pt-8 border-t">
        <Title text1={'ABOUT'} text2={'US'} />
      </div>

      <div className="my-10 flex flex-col md:flex-row gap-16">
        <img src={assets.about_img} className="w-full md:max-w-[450px]" alt="" />
        <div className="flex flex-col justify-center gap-6 md:w-2/4 text-gray-600">
          <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatum error voluptas tempora provident sapiente possimus blanditiis! Possimus eum mollitia, magnam officiis necessitatibus aut sint modi, delectus numquam excepturi, consectetur porro.</p>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iusto reprehenderit accusamus nostrum officia earum similique, nisi voluptas explicabo rerum quia tempora nulla tempore, doloremque aliquam, quis sed facilis necessitatibus voluptatem!</p>
          <b className="text-gray-800">Our Mission</b>
          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Pariatur commodi ullam, fugiat tempore quidem autem consequuntur magnam, nam sit cupiditate ad architecto! Perferendis explicabo, nemo asperiores magnam dolorum impedit quae?</p>
        </div>
      </div>

      <div className="flex flex-col md:flex-row text-sm mb-20">
        <div className="border px-10 md:px-16 sm:py-20 flex flex-col gap-5">
          <b>Quality Assurance</b>
          <p className="text-gray-600">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatum exercitationem dolorum eaque veritatis officia aut perferendis, minus commodi, earum qui soluta nobis eius, eum id temporibus expedita illo sed. Explicabo.</p>
        </div>
        <div className="border px-10 md:px-16 sm:py-20 flex flex-col gap-5">
          <b>Quality Assurance</b>
          <p className="text-gray-600">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatum exercitationem dolorum eaque veritatis officia aut perferendis, minus commodi, earum qui soluta nobis eius, eum id temporibus expedita illo sed. Explicabo.</p>
        </div>
        <div className="border px-10 md:px-16 sm:py-20 flex flex-col gap-5">
          <b>Quality Assurance</b>
          <p className="text-gray-600">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatum exercitationem dolorum eaque veritatis officia aut perferendis, minus commodi, earum qui soluta nobis eius, eum id temporibus expedita illo sed. Explicabo.</p>
        </div>
      </div>

      <NewsletterBox />
    </div>
  )
}

export default About
