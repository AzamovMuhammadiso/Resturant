import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

function Chek() {
  const data = useSelector((state) => state.products);
  const dispatch = useDispatch();
  var summ = 0;
  const navogate = useNavigate();

  data.products.forEach((v) => {
    summ += v.price;
  });

  const handelEnd = () => {
    dispatch({ type: "REMOVE" });
    navogate("/");
  };



  return (
    <div className="container home-container d-flex row m-2 align-items-center justify-content-center">
      <h1 className="h1-text mt-2">Xisob</h1>
      <h2 className="text-white">Stol raqami: {data.stol}</h2>
      <table className="table text-align-center">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col"> Ovqat Nomi</th>
            <th scope="col">Soni</th>
            <th scope="col">Narxi</th>
            {/* <th scope="col">Delete</th> */}
          </tr>
        </thead>
        <tbody>
          {data.products.map((v, index) => (
            <tr key={v.id}>
              <th scope="row">{index + 1}</th>
              <td>{v.name}</td>
              <td>{v.count}</td>
              <td>{v.price} so'm</td>
              <td>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <h3 className="my-3 mb-4">Total: {summ}</h3>
      <div className="btn btn-success my-3" type='button' onClick={handelEnd}>Tugatish</div>
    </div>
  );
}

export default Chek;

