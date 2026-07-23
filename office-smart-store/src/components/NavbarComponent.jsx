function NavbarComponent({ cantidadCarrito }) {
  return (
    <nav className="navbar navbar-expand-lg navbar-office sticky-top py-3">
      <div className="container">
        <a className="navbar-brand fw-bold fs-4" href="#inicio">
          <i className="bi bi-briefcase-fill me-2" aria-hidden="true"></i>
          Office Smart Store
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Alternar navegación"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav mx-auto">
            <li className="nav-item">
              <a className="nav-link" href="#catalogo">
                Catálogo
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#destacados">
                Destacados
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#innovaciones">
                Innovaciones
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#catalogo-digital">
                Catálogo Digital
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#contacto">
                Contacto
              </a>
            </li>
          </ul>
          <button
            type="button"
            className="btn btn-brand position-relative"
            data-bs-toggle="offcanvas"
            data-bs-target="#cartOffcanvas"
            aria-controls="cartOffcanvas"
          >
            <i className="bi bi-cart3 me-1" aria-hidden="true"></i>
            Carrito
            {cantidadCarrito > 0 && (
              <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                {cantidadCarrito}
              </span>
            )}
          </button>
        </div>
      </div>
    </nav>
  );
}

export default NavbarComponent;
