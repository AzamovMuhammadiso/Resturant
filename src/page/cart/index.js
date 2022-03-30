import React from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import "./style.css";
function Cart() {
  const data = useSelector((state) => state.products);
  const dispatch = useDispatch();
  console.log(data);

  const handeleDel = (id) => {
    dispatch({ type: "DEL_PRODUCTS", payload: { id } });
  };

  return (
    <div className="container home-container d-flex row m-2 align-items-center justify-content-center">
      <h1 className="h1-text text-white">Buyurtmalar</h1>
      <h1 className="text-white">Stol raqami: {data.stol}</h1>
      <table className="table text-align-center">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col"> Ovqat Nomi</th>
            <th scope="col">Soni</th>
            <th scope="col">Delete</th>
          </tr>
        </thead>
        <tbody>
          {data.products.map((v, index) => (
            <tr key={v.id}>
              <th scope="row">{index + 1}</th>
              <td>{v.name}</td>
              <td>{v.count}</td>
              <td>
                <div
                  className="btn btn-danger px-4 text-white"
                  onClick={() => handeleDel(v.id)}
                >
                  x
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <Link className="btn btn-success my-4" to="/chek">Yakunlash</Link>
    </div>
  );
}

export default Cart;

// <div className='text-white' key={v.id}>
//     <span className='count text-white'>{v.count}</span>
//     <span className='name text-white'>{v.name}</span>
// <button className='btn text-white' onClick={() => handeleDel(v.id)}>x</button>
// </div>
