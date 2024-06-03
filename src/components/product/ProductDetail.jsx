import { useEffect, useState } from "react";
import { AiFillStar, AiOutlineStar, AiTwotoneStar } from "react-icons/ai";
import { useParams } from "react-router-dom";
import { getProductData } from "../../helpers/getProductData";
import Review from "../review/Review";

const ProductDetail = () => {
  const [productData, setProductData] = useState({});
  const { id } = useParams();

  useEffect(() => {
    const fetchProductData = () => {
      const productDataResponse = getProductData(id);
      setProductData(productDataResponse);
    };
    fetchProductData();
  }, []);

  return (
    <>
      <div className="container p-4 bg-light">
        <div className="product-images d-flex mb-5">
          <div className="product-icons d-flex flex-column me-3 gap-2">
            <img
              src="https://images.unsplash.com/photo-1572666341285-c8cb9790ca50?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              className="border border-secondary-subtle p-2"
              alt={productData.name}
              width={60}
              height={60}
            ></img>
            <img
              src="https://images.unsplash.com/photo-1572666341285-c8cb9790ca50?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              className="border border-secondary-subtle p-2"
              alt={productData.name}
              width={60}
              height={60}
            ></img>
            <img
              src="https://images.unsplash.com/photo-1572666341285-c8cb9790ca50?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              className="border border-secondary-subtle p-2"
              alt={productData.name}
              width={60}
              height={60}
            ></img>
            <img
              src="https://images.unsplash.com/photo-1572666341285-c8cb9790ca50?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              className="border border-secondary-subtle p-2"
              alt={productData.name}
              width={60}
              height={60}
            ></img>
            <img
              src="https://images.unsplash.com/photo-1572666341285-c8cb9790ca50?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              className="border border-secondary-subtle p-2"
              alt={productData.name}
              width={60}
              height={60}
            ></img>
          </div>
          <div className="product-main-image">
            <img
              src="https://images.unsplash.com/photo-1572666341285-c8cb9790ca50?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt={productData.name}
              width={500}
            ></img>
          </div>
        </div>
        <div className="product-information">
          <h2>{productData.name}</h2>
          <div className="card-average-rating mb-2">
            <span>
              <AiFillStar size={25} />
            </span>
            <span>
              <AiFillStar size={25} />
            </span>
            <span>
              <AiFillStar size={25} />
            </span>
            <span>
              <AiTwotoneStar size={25} />
            </span>
            <span>
              <AiOutlineStar size={25} />
            </span>
            <span className="ms-2">
              based on {productData.average_rating} reviews.
            </span>
          </div>
          <p>Published by ...</p>
          <p>{productData.description}</p>
        </div>
        <div className="product-reviews">
          <h3>Reviews</h3>
          <Review />
          <Review />
          <Review />
          <Review />
          <Review />
        </div>
      </div>
    </>
  );
};

export default ProductDetail;
