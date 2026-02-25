import axios from "axios";
import { useEffect, useState } from "react"
import { backendUrl, currency } from "../App";
import { toast } from "react-toastify";

const List = ({ token }) => {
  const [list, setList] = useState([]);
  const [deletingId, setDeletingId] = useState(null);

  const fetchList = async () => {
    try {
      const response = await axios.get(backendUrl + '/api/product/list')

      if (response.data.success) {
        setList(response.data.products);
      } else {
        toast.error(response.data.message)
      }
    } catch (error) {
      console.log(error);
      toast.error(error.message);
    }
  }

  const removeProduct = async (id, name) => {
    const isConfirmed = window.confirm(`Delete "${name}" product?`);
    if (!isConfirmed) return;

    if (deletingId) return;

    try {
      setDeletingId(id);
      const response = await axios.post(backendUrl + '/api/product/remove', { id }, { headers: { token } });

      if (response.data.success) {
        toast.success(response.data.message);
        await fetchList();
      } else {
        toast.error(response.data.message);
      }

    } catch (error) {
      console.log(error);
      toast.error(error.message)
    } finally {
      setDeletingId(null);
    }
  }


  useEffect(() => {
    fetchList();
  }, [])

  return (
    <>
      <p className="mb-2 text-lg font-semibold">All Products List</p>
      <div className="flex flex-col gap-2">
        {/* List table title */}

        <div className="hidden md:grid grid-cols-[1fr_3fr_1fr_1fr_1fr] items-center py-3 px-4 bg-gray-100 border rounded text-sm">
          <b>Image</b>
          <b>Name</b>
          <b>Category</b>
          <b>Price</b>
          <b className="text-center">Action</b>
        </div>

        {/* product list */}
        <div className="flex flex-col gap-2">
          {
            list.map((item, index) => (
              <div key={item._id || index}>
                <div className="md:hidden border rounded-lg p-3 bg-white shadow-sm flex items-center gap-3">
                  <img className="w-16 h-16 object-cover rounded" src={item.image[0]} alt={item.name} />
                  <div className="flex-1 min-w-0">
                    <p className="font-medium text-gray-800 truncate">{item.name}</p>
                    <p className="text-sm text-gray-500">{item.category}</p>
                    <p className="text-sm font-semibold text-gray-700">{currency}{item.price}</p>
                  </div>
                  <button
                    onClick={() => removeProduct(item._id, item.name)}
                    disabled={deletingId === item._id}
                    title="Delete product"
                    aria-label="Delete product"
                    className={`px-3 py-1.5 rounded-md text-sm font-medium transition-all ${deletingId === item._id
                        ? 'bg-red-100 text-red-400 cursor-not-allowed'
                        : 'bg-red-50 text-red-600 hover:bg-red-100 cursor-pointer'
                      }`}
                  >
                    {deletingId === item._id ? 'Deleting...' : 'Delete'}
                  </button>
                </div>

                <div className="hidden md:grid grid-cols-[1fr_3fr_1fr_1fr_1fr] items-center gap-2 py-2 px-4 border rounded bg-white">
                  <img className="w-12 h-12 object-cover rounded" src={item.image[0]} alt={item.name} />
                  <p className="truncate">{item.name}</p>
                  <p>{item.category}</p>
                  <p>{currency}{item.price}</p>
                  <div className="flex justify-center">
                    <button
                      onClick={() => removeProduct(item._id, item.name)}
                      disabled={deletingId === item._id}
                      title="Delete product"
                      aria-label="Delete product"
                      className={`px-3 py-1.5 rounded-md text-sm font-medium transition-all ${deletingId === item._id
                          ? 'bg-red-100 text-red-400 cursor-not-allowed'
                          : 'bg-red-50 text-red-600 hover:bg-red-100 cursor-pointer'
                        }`}
                    >
                      {deletingId === item._id ? 'Deleting...' : 'Delete'}
                    </button>
                  </div>
                </div>
              </div>
            ))
          }
        </div>
      </div>
    </>
  )
}

export default List