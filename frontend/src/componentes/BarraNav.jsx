function BarraNav() {
  return (
    <div style={{ margin: "0px", padding: "0px"}}>
      <nav className="navbar navbar-expand-lg bg-body-secondary">
        <div className="container-fluid">
          <a className="navbar-brand" href="index.html">
            Home
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Link 1
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Link 2
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link disabled" aria-disabled="true">
                  Link 3
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <hr style={{ margin: "0px", padding: "0px" }} />
    </div>
  );
}
export default BarraNav;
