const UserProfile = () => {
  return (
    <div className="container d-flex justify-content-center mt-4">
      <div className="card d-flex flex-column align-items-center" style={{width: 450}}>
        <img
          src="src\assets\user-profile.jpg"
          className="card-img-top mt-4"
          style={{borderRadius: 250, width: 250, height: 250}}
          alt="..."
        />
        <div className="card-body d-flex flex-column align-items-center p-4">
          <h3 className="card-title">Johan Rojas</h3>
          <p className="card-text">
            A curious person with passion about technology.
          </p>
        </div>
        <ul className="list-group list-group-flush">
          <li className="list-group-item">joh4n4lex4nder@gmail.com</li>
          <li className="list-group-item">Colombia</li>
          <li className="list-group-item">Software Developer</li>
        </ul>
        <div className="card-body">
          <a href="#" className="card-link">
            Products
          </a>
          <a href="#" className="card-link">
            Follow
          </a>
        </div>
      </div>
    </div>
  );
};

export default UserProfile;
