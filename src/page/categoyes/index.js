import React from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import "./style.css";

function Category() {

  const dispatch = useDispatch();
  const navigate = useNavigate();

  var taom_category = [
    { id: 1, name: "Suyuq" },
    { id: 2, name: "Ichimlik" },
    { id: 3, name: "Qo`yiq" },
    { id: 4, name: "Shirinliklar" },
    { id: 5, name: "Salatlar" },
    { id: 6, name: "Fastfood" },
  ];

  const handleClick = (id) => {
    dispatch({ type: "ADD_CATEGORY", payload: { id } });

    navigate("/products");
  };

  return (
    <div className="container home-container d-flex row m-2 align-items-center justify-content-center">
      <h1 className="h1-text text-white">Taomlar</h1>
      {taom_category.map((v) => (
        <div
          type="button"
          className="stol btn m-1 mt-4 d-flex align-items-center justify-content-center fs-2 text-white"
          key={v.id}
          onClick={() => handleClick(v.id)}
        >
          {v.name}
        </div>
      ))}
    </div>
  );
}

export default Category;
