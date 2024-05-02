const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg sticky-top bg-body-tertiary">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">
          <img
            src="src\assets\react.svg"
            alt="Logo"
            width="30"
            height="24"
            className="d-inline-block align-text-top"
          ></img>
          Product Hunter
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav">
            <a className="nav-link active" aria-current="page" href="#">
              Products
            </a>
            <a className="nav-link" href="#">
              Articles
            </a>
            <a className="nav-link" href="#">
              Another thing
            </a>
          </div>
        </div>
        <form className="container-fluid justify-content-start">
          <button className="btn btn-sm btn-outline-secondary me-2" type="button">
            Sign in
          </button>
          <button className="btn btn-outline-success" type="button">
            Sign up
          </button>
        </form>
      </div>
    </nav>
  );
};

export default Navbar;
