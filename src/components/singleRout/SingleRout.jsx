// eslint-disable-next-line no-unused-vars
import axios from "../../api";
// eslint-disable-next-line no-unused-vars
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const SingleRout = () => {
  const { id } = useParams();
  console.log(id);
  const [product, setProduct] = useState(null);

  useEffect(() => {
    axios
      .get(`/products/${id}`)
      .then((res) => setProduct(res.data))
      .catch((err) => console.log(err));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  // const card = product?.map((pro) => (
  //   <div key={pro.id}>
  //     <img src={pro.images[0]} alt="img" />
  //   </div>
  // ));

  return (
    <section className="single">
      <div className="container">
        <div className="content">
          <img src={product?.thumbnail} alt="img" />
          <h1>{product?.title}</h1>
          <p>{product?.description}</p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. In illum
            ex quo rem obcaecati assumenda modi nihil reiciendis quidem ipsa
            magnam, facere itaque impedit veniam quisquam quasi, expedita nisi
            quas natus unde accusantium excepturi, nobis vero doloribus!
            Similique, ab tempora vel, vero iure, omnis quae harum ipsum
            quibusdam hic sequi.
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. In illum
            ex quo rem obcaecati assumenda modi nihil reiciendis quidem ipsa
            magnam, facere itaque impedit veniam quisquam quasi, expedita nisi
            quas natus unde accusantium excepturi, nobis vero doloribus!
            Similique, ab tempora vel, vero iure, omnis quae harum ipsum
            quibusdam hic sequi.
          </p>
        </div>
      </div>
    </section>
  );
};

export default SingleRout;
