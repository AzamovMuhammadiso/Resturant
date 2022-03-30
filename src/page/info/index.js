import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
// import "./style.css";

function Info() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { data } = useLocation().state;
  const [count, setCount] = useState(1);
  console.log(data);

  const handleIncDic = (amal) => {
    if (data.count > count && amal == "+") {
      setCount(count + 1);
    } else if (count > 1 && amal == "-") {
      setCount(count - 1);
    }
  };

  const handleQoshish = () => {
    console.log("qoshdi");
    if (data.count > count) {
      const res = { ...data, count: count, price: data.price * count };
      dispatch({ type: "ADD_PRODUCTS", payload: res });
    }
    navigate("/products");
  };

  return (
    <div className="container home-container d-flex row m-2 align-items-center justify-content-center">
      <div className="d-flex align-items-ceter justify-content-center row">
        <h1 className="h1-text text-white">{data.name}</h1>
        <h3 className="fs-2 text-white">
          Holati: {data.count > 0 ? "Bor" : "Yo`q"}
        </h3>
      </div>
      <div className="m-4">
        <div
          type="button"
          className="btn btn-danger px-5 py-2"
          onClick={() => handleIncDic("-")}
        >
          -
        </div>
        <span className="text-white mx-3">{count}</span>
        <div
          type="button"
          className="btn btn-success px-5 py-2"
          onClick={() => handleIncDic("+")}
        >
          +
        </div>
        <br />
      </div>
      <div className="btn btn-info px-5 py-2 text-white" onClick={handleQoshish}>Qo`shish</div>
    </div>
  );
}

export default Info;
