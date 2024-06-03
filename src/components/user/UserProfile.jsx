const UserProfile = () => {
  return (
    <div className="container d-flex justify-content-center mt-4">
      <div className="card d-flex flex-column align-items-center" style={{width: 450}}>
        <img
          src="src\assets\user-profile.jpg"
          className="card-img-top mt-4"
          style={{borderRadius: 250, width: 350, height: 350}}
          alt="..."
        />
        <div className="card-body d-flex flex-column align-items-center p-4">
          <h3 className="card-title">Card title</h3>
          <p className="card-text">
            Some quick example text to build on the card title and make up the
            bulk of the card content.
          </p>
        </div>
        <ul className="list-group list-group-flush">
          <li className="list-group-item">An item</li>
          <li className="list-group-item">A second item</li>
          <li className="list-group-item">A third item</li>
        </ul>
        <div className="card-body">
          <a href="#" className="card-link">
            Card link
          </a>
          <a href="#" className="card-link">
            Another link
          </a>
        </div>
      </div>
    </div>
  );
};

export default UserProfile;
