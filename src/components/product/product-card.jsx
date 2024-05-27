import PropTypes from "prop-types";
import {
  AiOutlineHeart,
  AiFillStar,
  AiOutlineStar,
  AiTwotoneStar,
} from "react-icons/ai";

const productPropTypes = PropTypes.shape({
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  image_url: PropTypes.string.isRequired,
  average_rating: PropTypes.number.isRequired,
});

const ProductCard = ({ product }) => {
  return (
    // <div className="product-card">
    //     <img src={product.image_url} alt={product.name} />
    //     <div className="product-card-title">
    //         <span>
    //             <AiOutlineHeart size={25} />
    //         </span>
    //         <h3>{product.name}</h3>
    //     </div>
    //     <div className="product-card-body">
    //         <p>{product.description}</p>
    //         <p><small>Average rating {product.average_rating}</small></p>
    //     </div>
    // </div>
    <div className="card mb-4">
      <div className="row g-0">
        <div className="col-sm-4">
          <img
            src={product.image_url}
            className="img-fluid p-3"
            alt={product.name}
          ></img>
        </div>
        <div className="col-sm-8 d-flex flex-column justify-content-center p-2">
          <div className="card-title-container d-flex">
            <h4 className="card-title me-2">{product.name}</h4>
            <span>
              <AiOutlineHeart size={25} />
            </span>
          </div>
          <div className="card-average-rating">
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
          </div>
          <p className="card-text">
            <small className="text-body-secondary">
              Average based on {product.average_rating} reviews.
            </small>
          </p>
        </div>
        <div className="card-body">
          <p className="card-text">{product.description}</p>
        </div>
      </div>
    </div>
  );
};

ProductCard.propTypes = {
  product: productPropTypes.isRequired,
};

export default ProductCard;
