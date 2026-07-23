function Footer() {
  return (
    <footer id="contacto" className="footer-office pt-5 pb-4">
      <div className="container">
        <div className="row g-4">
          <div className="col-md-4">
            <h3 className="h5 text-white">
              <i className="bi bi-briefcase-fill me-2 text-brand"></i>
              Office Smart Store
            </h3>
            <p className="small mb-0">
              Tu tienda inteligente de artículos de oficina: papelería,
              mobiliario, tecnología, organización y ergonomía en un solo
              lugar.
            </p>
          </div>
          <div className="col-md-4">
            <h4 className="h6 text-white">Contacto</h4>
            <ul className="list-unstyled small">
              <li>
                <i className="bi bi-geo-alt me-2"></i>Av. Siempre Viva 123,
                Ciudad
              </li>
              <li>
                <i className="bi bi-telephone me-2"></i>+1 (555) 123-4567
              </li>
              <li>
                <i className="bi bi-envelope me-2"></i>
                contacto@officesmartstore.com
              </li>
            </ul>
          </div>
          <div className="col-md-4">
            <h4 className="h6 text-white">Síguenos</h4>
            <div className="d-flex gap-3 fs-5">
              <a href="#" aria-label="Facebook">
                <i className="bi bi-facebook"></i>
              </a>
              <a href="#" aria-label="Instagram">
                <i className="bi bi-instagram"></i>
              </a>
              <a href="#" aria-label="Twitter">
                <i className="bi bi-twitter-x"></i>
              </a>
              <a href="#" aria-label="LinkedIn">
                <i className="bi bi-linkedin"></i>
              </a>
            </div>
          </div>
        </div>
        <hr className="border-secondary my-4" />
        <p className="small text-center mb-0">
          &copy; {new Date().getFullYear()} Office Smart Store. Todos los
          derechos reservados.
        </p>
      </div>
    </footer>
  );
}

export default Footer;
