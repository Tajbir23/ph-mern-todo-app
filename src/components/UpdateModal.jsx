import { useContext } from "react"
import { UpdateContext } from "../Root"
import { IoMdClose } from "react-icons/io";
import useUpdate from "./UpdateCustomHook/useUpdate";
import { Bounce, ToastContainer, toast } from "react-toastify";


const UpdateModal = () => {

    const {data, setModal} = useContext(UpdateContext);

    const updateData = async(e) => {
        e.preventDefault()
        const formData = {
            name: e.target.name.value,
            email: e.target.email.value,
            phone: e.target.phone.value
        }

        await useUpdate(formData, data?._id)
        
        
        toast.success('Data Update successful', {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
            transition: Bounce,
            });
    }
    
  return (
    <div className="flex items-center justify-center">
    <ToastContainer />
        <form onSubmit={updateData} className="max-w-md mx-auto bg-white shadow-2xl rounded-xl border px-8 pt-6 pb-8 mb-4">
        <div>
        <IoMdClose onClick={() => setModal(false)} className="cursor-pointer" />
        </div>
      <h2 className="text-2xl font-bold mb-6 text-center ">Add user</h2>
      <div className="mb-4">
        <label htmlFor="name" className="block text-gray-700 text-sm font-bold mb-2">
          Name
        </label>
        <input
          type="text"
          id="name"
          name="name"
          defaultValue={data.name}
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          placeholder="John Doe"
          
        />
      </div>
      <div className="mb-4">
        <label htmlFor="email" className="block text-gray-700 text-sm font-bold mb-2">
          Email
        </label>
        <input
          type="email"
          id="email"
          name="email"
          defaultValue={data.email}
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          placeholder="john@example.com"
          
        />
      </div>
      <div className="mb-6">
        <label htmlFor="phone" className="block text-gray-700 text-sm font-bold mb-2">
          Phone
        </label>
        <input
          type="tel"
          id="phone"
          name="phone"
          defaultValue={data.phone}
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          placeholder="123-456-7890"
          
        />
      </div>
      <div className="flex items-center justify-center">
        <button
          type="submit"
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
        >
          Submit
        </button>
      </div>
    </form>
    </div>
  )
}

export default UpdateModal