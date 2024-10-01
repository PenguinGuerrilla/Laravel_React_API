import reactLogo from "../assets/react.svg";

function Nav() {
  return (
    <nav className="navbar bg-body-tertiary">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">
          <img
            src={reactLogo}
            alt="Logo"
            width="30"
            height="24"
            className="d-inline-block align-text-top"
          />
          Facebook 2
        </a>
      </div>
    </nav>
  );
}

export default Nav;
