import { useContext, useEffect, useState } from "react";
import { AiFillStar, AiOutlineStar } from "react-icons/ai";
import { Link, useParams } from "react-router-dom";
import { AuthContext } from "../../auth";
import { getProductData } from "../../helpers/getProductData";
import Review from "../review/Review";
import { ReviewContext } from "../context/ReviewContext";
import { ProductContext } from "../context/ProductContext";

const ProductDetail = () => {
  const [productData, setProductData] = useState({});
  const [reviewText, setReviewText] = useState("");
  const { user } = useContext(AuthContext);
  // const { product } = useContext(ProductContext);
  // const { createReview } = useContext(ReviewContext);
  const { id } = useParams();

  useEffect(() => {
    const fetchProductData = () => {
      const productDataResponse = getProductData(id);
      setProductData(productDataResponse);
    };
    fetchProductData();
  }, []);

  const onTextReviewChange = (event) => {
    let newTextReview = event.target.value;
    setReviewText(newTextReview);
  };

  const onCreateReview = async (event) => {
    event.preventDefault();

    const currentDate = new Date();

    const newReview = {
      productId: '',
      userId: user.id,
      content: reviewText,
      createdAt: currentDate,
    };
    await createReview(newReview);
  };

  return (
    <>
      <div className="container p-4">
        <div className="row">
          <div className="col-7 p-5">
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
          </div>
          <div className="col-5 p-5">
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
                  <AiOutlineStar size={25} />
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
              <Link
                className="btn btn-outline-dark"
                to="https://www.samsung.com/co/monitors/gaming/odyssey-g9-43-inch-240hz-1ms-curved-lc49g95tssnxza/"
              >
                Get Product
              </Link>
            </div>
          </div>
        </div>
        <div className="row d-flex flex-column">
          {user ? (
            <div className="col p-5 pt-0 pb-0">
              <div className="w-75">
                <label htmlFor="review" className="form-label">
                  Leave a rating or review for the community
                </label>
                <textarea
                  className="form-control"
                  name="review"
                  id="review"
                  placeholder="Tell us about your experience..."
                  value={reviewText}
                  onChange={onTextReviewChange}
                  autoComplete="off"
                  rows={3}
                ></textarea>
              </div>
              <div className="d-flex align-items-end justify-content-end w-75">
                <button className="btn btn-outline-dark mt-3" onClick={onCreateReview}>Post</button>
              </div>
            </div>
          ) : (
            <></>
          )}
          <div className="col p-5">
            <h3>Reviews</h3>
            <Review />
            <Review />
            <Review />
            <Review />
            <Review />
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductDetail;
