import { AiFillStar, AiOutlineStar } from "react-icons/ai";
import profileImage from "../../assets/user-profile.jpg";

const Review = () => {
  return (
    <div className="card mb-3 w-75">
      <div className="row">
        <div className="col-md-2 d-flex align-items-start justify-content-center p-3">
          <img
            src={profileImage}
            className="img-fluid"
            style={{ width: 70, height: 70, borderRadius: 250 }}
            alt="..."
          />
        </div>
        <div className="col-md-10">
          <div className="card-body">
            <h5 className="card-title">Johan Rojas</h5>
            <div className="card-average-rating mb-2">
              <span>
                <AiFillStar size={20} />
              </span>
              <span>
                <AiFillStar size={20} />
              </span>
              <span>
                <AiFillStar size={20} />
              </span>
              <span>
                <AiOutlineStar size={20} />
              </span>
              <span>
                <AiOutlineStar size={20} />
              </span>
            </div>
            <p className="card-text">
              This is a wider card with supporting text below as a natural
              lead-in to additional content. This content is a little bit
              longer.
            </p>
            <p className="card-text">
              <small className="text-body-secondary">3 days ago</small>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Review;
