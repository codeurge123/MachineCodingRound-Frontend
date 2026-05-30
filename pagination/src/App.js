import React from "react";
import { useState, useEffect } from "react";
import "./styles.css";

// first is to fetch the data from dummy json

const ProductCard = ({ image, alt, title }) => {
  return (
    <>
      <div>
        <img src={image} alt={alt} />
        <p>{title}</p>
      </div>
    </>
  );
};

const PAGE_SIZE = 10;

export default function App() {
  const [prod, setProd] = useState([]);
  const [currentPage, setCurrentPage] = useState(0);

  const fetchProduct = async () => {
    const data = await fetch("https://dummyjson.com/products?limit=200");
    const product = await data.json(); // when converting into json then also use await
    setProd(product.products);
    // console.log(data.products);
  };

  const noOfPages = Math.ceil(prod.length / PAGE_SIZE);
  console.log(noOfPages);
  let start = PAGE_SIZE * currentPage;
  let end = start + PAGE_SIZE;
  // fetchProduct();

  useEffect(() => {
    fetchProduct();
  }, []);

  const handlePage = (e) => {
    setCurrentPage((prev) => prev + 1); // prev ka through prev mein +1 kar rh hota hai
    // console.log(prev);
  };

  const handleNext = () => {
    if (currentPage === noOfPages - 1) alert("Reached lastpage");
    setCurrentPage(currentPage + 1);
  };

  const handlePrev = () => {
    if (currentPage <= 1) alert("Reached first page");
    setCurrentPage(currentPage - 1);
  };

  return (
    <>
      <div>Paginition</div>
      <div class="pagination-cart">
        {/* keys() implement because we array means key and values */}
        <button onClick={() => handlePrev()}>previouse</button>
        {[...Array(noOfPages).keys()].map((n) => {
          return (
            <span key={n + 1} onClick={() => handlePage(n)}>
              {n}
            </span>
          );
        })}
        <button onClick={() => handleNext()}>Next</button>
      </div>
      {prod.slice(start, end).map((p) => (
        <div key={p.id} class="product-cart">
          <ProductCard image={p.images} alt={p.title} title={p.title} />
        </div>
      ))}
    </>
  );
}

// All things are done just have to disable the prev and next button
// Once again revise this for better growth
// always make the const file separate and follow the paticular folder structure
