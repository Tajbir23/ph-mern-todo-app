import { useContext} from "react";
import { useLoaderData } from "react-router-dom";
import UpdateModal from "./UpdateModal";
import { UpdateContext } from "../Root";
import useDelete from "./DeleteCustomHook/useDelete";
import { Bounce, ToastContainer, toast } from "react-toastify";

const Users = () => {
  const users = useLoaderData()
  
  const {setData, modal, setModal} = useContext(UpdateContext)

  const UpdateData = (item) => {
    setModal(true)
    setData(item)
  }

  const deleteData = async(id) => {
    await useDelete(id)

    await toast.success('Data Update successful', {
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
    <div>
    <ToastContainer />
    <div className="flex gap-5 flex-wrap justify-around sm:m-5">
      {users.map((item) => <div key={item._id}>
        <div className="card w-96 bg-base-100 shadow-xl">
      <div className="card-body">
        <h2 className="card-title">{item?.name}</h2>
        <p>{item?.email}</p>
        <p>{item?.phone}</p>
        <div className="card-actions justify-end">
          <button onClick={() => UpdateData(item)} className="btn btn-primary">Update</button>
          <button onClick={() => deleteData(item._id)} className="btn btn-primary">Delete</button>
        </div>
      </div>
    </div>
      </div>)}
    </div>

    {modal && <div className="absolute h-screen z-50 flex  right-0 left-0 bottom-0 items-center justify-center">
      <UpdateModal />
    </div>}
    </div>
  );
};

export default Users;
