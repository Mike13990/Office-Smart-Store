const PDF_PATH = "/catalogo-office-smart-store.pdf";

function CatalogoDigital() {
  return (
    <section id="catalogo-digital" className="py-5 bg-white">
      <div className="container">
        <h2 className="section-title">Catálogo Digital</h2>
        <p className="text-muted mb-4">
          Consulta el catálogo completo de artículos de oficina en formato
          PDF, directamente desde la aplicación, sin necesidad de
          descargarlo.
        </p>

        <div className="d-flex flex-wrap gap-2 mb-3">
          <a
            href={PDF_PATH}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-outline-secondary"
          >
            <i className="bi bi-box-arrow-up-right me-1" aria-hidden="true"></i>
            Abrir en nueva pestaña
          </a>
          <a href={PDF_PATH} download className="btn btn-brand">
            <i className="bi bi-download me-1" aria-hidden="true"></i>
            Descargar catálogo
          </a>
        </div>

        <div className="pdf-frame-wrapper">
          <iframe src={PDF_PATH} title="Catálogo Digital Office Smart Store"></iframe>
        </div>
      </div>
    </section>
  );
}

export default CatalogoDigital;
