function Banner() {
  return (
    <header id="inicio" className="hero-banner">
      <div className="container position-relative">
        <div className="row align-items-center">
          <div className="col-lg-7">
            <p className="eyebrow mb-2">Todo para tu espacio de trabajo</p>
            <h1 className="display-5 fw-bold text-white mb-3">
              Equipa tu oficina con estilo e inteligencia
            </h1>
            <p className="fs-5 mb-4" style={{ color: "#d7dde0" }}>
              Papelería, mobiliario, tecnología, organización y ergonomía en un
              solo lugar. Descubre promociones exclusivas de la semana.
            </p>
            <div className="d-flex flex-wrap gap-3">
              <a href="#catalogo" className="btn btn-brand btn-lg">
                Ver catálogo
              </a>
              <a
                href="#destacados"
                className="btn btn-outline-light btn-lg"
              >
                Productos destacados
              </a>
            </div>
          </div>
          <div className="col-lg-5 d-none d-lg-block">
            <div className="d-flex justify-content-center">
              <span className="badge ribbon-badge fs-6 px-3 py-2 rounded-pill">
                <i className="bi bi-truck me-1" aria-hidden="true"></i>
                Envío gratis en compras mayores a $50
              </span>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Banner;