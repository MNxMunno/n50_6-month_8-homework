// eslint-disable-next-line no-unused-vars
import React from "react";
import Product from "../../static/product/Product";
import Banner from "../../static/banner/Banner.jsx";
import Products from "../../router/products/Products.jsx";

const Main = (data, bg, card) => {
  return (
    <main style={bg}>
      <section className="hero">
        <div className="container">
          <Banner {...data} />
        </div>
      </section>
      {/* <section className="products">
        <div className="container">
          <div className="content">
            <h1>All posts</h1>
            <Products />
          </div>
        </div>
      </section> */}
      <section className="product" style={{ background: "#DCEAF5" }}>
        <div className="container">
          <div className="content">
            <h1>Latest Blog & News</h1>
            <Product />
          </div>
        </div>
      </section>
    </main>
  );
};

export default Main;
