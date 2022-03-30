import React from "react";
import "./style.css";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

function Home() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const stol = [
    { id: 1, name: "1-stol" },
    { id: 2, name: "2-stol" },
    { id: 3, name: "3-stol" },
    { id: 4, name: "4-stol" },
    { id: 5, name: "5-stol" },
    { id: 6, name: "6-stol" },
    { id: 6, name: "6-stol" },
    { id: 6, name: "6-stol" },
    { id: 6, name: "6-stol" },
    { id: 6, name: "6-stol" },
  ];

  const handleClick = (id) => {
    dispatch({ type: "ADD_STOL", payload: { stol: id } });
    navigate("/category");
  };

  return (
    <div className="container home-container d-flex row m-2 align-items-center justify-content-center">
      <h1 className="h1-text text-white">Stollar</h1>
      {stol.map((value) => (
        <div
          type="button"
          className="stol btn m-1 mt-4 d-flex align-items-center justify-content-center fs-2 text-white"
          key={value.id}
          onClick={() => handleClick(value.id)}
        >
          <p className="home_name">{value.name}</p>
        </div>
      ))}
    </div>
  );
}

export default Home;
