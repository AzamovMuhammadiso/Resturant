import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

function Products() {
  const [data, setData] = useState([]);
  const id = useSelector((s) => s.products.category);
  const navigate = useNavigate();

  var taomlar = [
    { id: 1, category_id: 1, name: "Mastava", count: 9, price: 8000 },
    { id: 2, category_id: 1, name: "Sho`rva", count: 6, price: 10000 },
    { id: 3, category_id: 1, name: "Lag'mon", count: 6, price: 10000 },
    { id: 4, category_id: 1, name: "Dolma", count: 6, price: 10000 },
    { id: 5, category_id: 1, name: "Dolma", count: 6, price: 10000 },
    { id: 6, category_id: 1, name: "Dolma", count: 6, price: 10000 },
    { id: 7, category_id: 2, name: "Cola", count: 5, price: 12000 },
    { id: 8, category_id: 2, name: "Fanta", count: 5, price: 11000 },
    { id: 9, category_id: 2, name: "Pepsi", count: 5, price: 13000 },
    { id: 10, category_id: 2, name: "Dinay", count: 5, price: 13000 },
    { id: 11, category_id: 2, name: "Dinay", count: 5, price: 13000 },
    { id: 12, category_id: 2, name: "Dinay", count: 5, price: 13000 },
    { id: 13, category_id: 3, name: "Osh", count: 5, price: 20000 },
    { id: 14, category_id: 3, name: "Shashlik", count: 5, price: 20000 },
    { id: 15, category_id: 3, name: "Somsa", count: 5, price: 5000 },
    { id: 16, category_id: 3, name: "Tabaka", count: 5, price: 40000 },
    { id: 17, category_id: 4, name: "Tort", count: 5, price: 40000 },
    { id: 18, category_id: 4, name: "Pishiriq", count: 5, price: 5000 },
    { id: 19, category_id: 4, name: "Tort", count: 5, price: 20000 },
    { id: 20, category_id: 5, name: "Salat 1", count: 5, price: 8000 },
    { id: 21, category_id: 5, name: "Salat 2", count: 5, price: 20000 },
    { id: 22, category_id: 6, name: "Lavash", count: 5, price: 20000 },
    { id: 23, category_id: 6, name: "Xotdog", count: 5, price: 7000 },
  ];

  useEffect(() => {
    var malumot = taomlar.filter((v) => v.category_id == id);
    setData(malumot);
  }, []);

  const handleClick = (data) => {
    navigate("/info", { state: { data } });
  };

  return (
    <div className="container home-container d-flex row m-2 align-items-center justify-content-center">
      {data.map((v) => (
        <div
          type="button"
          className="stol btn m-1 mt-4 d-flex align-items-center justify-content-center fs-2 text-white"
          key={v.id}
          onClick={() => handleClick(v)}
        >
          {v.name}
        </div>
      ))}
    </div>
  );
}

export default Products;
