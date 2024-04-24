// eslint-disable-next-line no-unused-vars
import React, { useEffect, useState } from "react";
import axios from "../../api";
import { Link } from "react-router-dom";
import loadingImg from "../../assets/images/loading.gif";
import Main from "../../components/main/Main";
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
        <img src={data.thumbnail} alt="img" />
      </Link>
    </div>
  ));

  const data = {
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
          {loading ? (
            <div className="loading">
              <img src={loadingImg} alt="loading" />
            </div>
          ) : (
            <></>
          )}
          <div className="cards">{card}</div>
        </div>
      </section>
    </>
  );
};

export default Products;
