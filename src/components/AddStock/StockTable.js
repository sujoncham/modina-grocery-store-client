import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import auth from "../../Firebase/Firebase.init";
import useStockHouse from "../../hooks/useStockHouse";

const StockTable = ({ store, index }) => {
  const [user] = useAuthState(auth);
  const { _id, title, price, stock } = store;
  const [stores, setStores] = useStockHouse();
  const navigate = useNavigate();

  const handleDeleteStock = (id) => {
    const confirmDelete = window.confirm("Are you want to delete this Stock!!");
    if (confirmDelete) {
      const url = `https://dry-oasis-82123.herokuapp.com/inventory/${id}`;
      fetch(url, {
        method: 'DELETE'
      })
        .then(res => res.json())
        .then(data => {
          console.log("delete successfully", data);
          const result = stores.filter(store => store._id !== id);
          setStores(result);
          toast("Product deleted successfully");
        });
    }
  };

  const handleEditNavigate = (id) =>{
    navigate(`/updateData/${id}`)
}

  return (
    <tr>
      <td>{index + 1}</td>
      <td>{title}</td>
      <td>{price}</td>
      <td>{stock}</td>
      <td>{user?.displayName.slice(0, 6)}</td>
      <td>
      <button onClick={()=>handleEditNavigate(_id)} className='btn btn-primary'>Edit</button>
        ||
        <button onClick={()=>handleDeleteStock(store._id)} className="btn btn-primary">Delete</button>
      </td>
    </tr>
  );
};

export default StockTable;
