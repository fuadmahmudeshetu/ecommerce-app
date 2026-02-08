import { useContext, useEffect, useState } from "react"
import { ShopContext } from "../context/ShopContext"
import { useParams } from "react-router";
import { assets } from "../assets/assets";
import RelatedProducts from "../components/RelatedProducts";

 
const Product = () => {

  const { products } = useContext(ShopContext);
  const {productId} = useParams();
  const [productData, setProductData] = useState(false);
  const [image, setImage] = useState('');
  const currency = '$';
  const [size, setSize] = useState('');

  const fetchProductData = async () => {
    products.map((item) => {
      if (item._id === productId) {
        setProductData(item);
        setImage(item.image[0])
        return null;
      }
    })
  }


  useEffect(() => {
    fetchProductData();
  }, [productId])

  return productData ? (
    <div className="border-t-2 pt-10 transition-opacity ease-in duration-500 opacity-100">
      {/* Product Data Container */}
      <div className="flex gap-8 lg:gap-12 flex-col sm:flex-row">

        {/* --- Thumbnail List --- */}
        {/* sm:h-[500px] ensures the vertical scroll has a limit on desktop */}
        <div className="flex sm:flex-col overflow-x-auto sm:overflow-y-auto justify-start gap-3 sm:w-[18.7%] w-full order-2 sm:order-1 sm:h-[500px] no-scrollbar">
          {
            productData.image.map((item, index) => (
              <img
                onClick={() => setImage(item)}
                src={item}
                key={index}
                className="w-[22%] sm:w-full flex-shrink-0 cursor-pointer hover:opacity-80 transition-all duration-300 border border-gray-100 aspect-square object-cover rounded-md active:border-orange-500"
                alt="Product Thumbnail"
              />
            ))
          }
        </div>

        {/* --- Main Image View --- */}
        <div className="w-full sm:w-[50%] lg:w-[40%] order-1 sm:order-2">
          <img
            src={image}
            className="w-full h-auto rounded-lg shadow-sm object-contain bg-gray-50 max-h-[500px] sm:max-h-none"
            alt="Main Product"
          />
        </div>

        {/* --- Product Info --- */}
        <div className="flex-1 order-3">
          <h1 className="font-semibold text-2xl lg:text-3xl text-gray-800 mt-2">{productData.name}</h1>

          {/* Stars/Rating */}
          <div className="flex items-center gap-1 mt-3">
            <img src={assets.star_icon} alt="" className="w-3.5" />
            <img src={assets.star_icon} alt="" className="w-3.5" />
            <img src={assets.star_icon} alt="" className="w-3.5" />
            <img src={assets.star_icon} alt="" className="w-3.5" />
            <img src={assets.star_dull_icon} alt="" className="w-3.5" />
            <p className="pl-2 text-sm text-gray-500 font-light">(122 Reviews)</p>
          </div>

          <p className="mt-6 text-3xl font-bold text-orange-600">
            {currency}{productData.price}
          </p>

          <p className="mt-5 text-gray-600 leading-relaxed md:w-11/12 text-sm lg:text-base">
            {productData.description}
          </p>

          <div className="flex flex-col gap-4 my-8">
            <p>Select Size</p>
            <div className="flex gap-2">
              {
                productData.sizes.map((item, index) => {
                  return <button onClick={() => setSize(item)} className={`border py-2 px-4 bg-gray-100 ${item === size ? 'border-orange-500' : ''}`} key={index}>{item}</button>
                })
              }
            </div>
          </div>

          {/* Suggested Addition: Size/Action Buttons */}
          <div className="mt-8">
            <button className="bg-black text-white px-8 py-3 text-sm active:bg-gray-700 transition-colors rounded-sm uppercase tracking-wider font-medium">
              Add to Cart
            </button>
            <hr  className="mt-8 sm:h-4/5"/>
            <div className="text-sm text-gray-500 flex flex-col gap-1">
              <p>100% Original Product.</p>
              <p>Cash on delivery is available on this product.</p>
              <p>Easy return and exchange policy within 7 days</p>
            </div>
          </div>
        </div>

      </div>

      {/* Description and review section */}
      <div className="mt-20">
        <div className="flex gap-3">
          <p className="border px-5 py-3 text-sm">Description</p>
          <p className="border px-5 py-3">Reviews (122)</p>
        </div>
        <div className="flex flex-col gap-4 border px-6 py-6 text-sm text-gray-600">
          <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolor aspernatur praesentium sint nobis commodi sapiente perspiciatis quia quod odit error incidunt ipsum ut provident molestias officia, quibusdam dolorem sequi laboriosam.</p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam temporibus vel asperiores facere pariatur. Quidem beatae aperiam at itaque reprehenderit deleniti, est exercitationem, totam voluptatum amet error nobis provident alias.</p>

          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Accusamus eaque ut magni veniam aliquam natus optio eligendi</p>
        </div>
      </div>

      {/* Display Related Products */}

      <RelatedProducts category={productData.category} subCategory={productData.subCategory}/>

    </div>
  ) : <div className="opacity-0"></div>
}

export default Product