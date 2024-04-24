// eslint-disable-next-line no-unused-vars
import React, { useEffect, useState } from "react";
import axios from "../../api";
import { Link } from "react-router-dom";
import loadingImg from "../../assets/images/loading.gif";
import Banner from "../../static/banner/Banner";

const Products = () => {
  const [apiData, setApiData] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    axios
      .get("/products")
      .then((res) => setApiData(res.data.products))
      .catch((err) => console.log(err))
      .finally(() => setLoading(false));
  }, []);
  const card = apiData?.map((data) => (
    <div key={data.id} className="card" data-aos="flip-up">
      <Link to={`/product/${data.id}`}>
        <img className="img " src={data.thumbnail} alt="img" />
      </Link>
      <div className="card__content">
        <h2>{data.title}</h2>
        <p className="desc">{data.description}</p>
        <a href="#">Learn More</a>
      </div>
    </div>
  ));

  const data = {
    page: "Products",
    img: "https://i.postimg.cc/mDmQDZmD/product-hero.png",
    title: "Our internal process and longerm vision",
    description:
      "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The Maker is a decentralized. We aim to attain the",
  };
  return (
    <>
      <section className="products__hero">
        <div className="container">
          <Banner {...data} />
        </div>
      </section>
      <section className="products">
        <div className="container">
          <div className="content">
            <h1>All Posts</h1>
            {loading ? (
              <div className="loading">
                <img className="gif" src={loadingImg} alt="loading" />
              </div>
            ) : (
              <></>
            )}
            <div className="cards">{card}</div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Products;
