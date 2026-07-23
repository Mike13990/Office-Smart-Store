function ProductCard({ producto, onVerDetalles, onAgregarCarrito }) {
  return (
    <div className="col-12 col-sm-6 col-lg-4 col-xl-3 mb-4">
      <div className="card h-100 product-card shadow-sm">
        <div className="position-relative">
          <img
            src={producto.imagen}
            className="card-img-top"
            alt={producto.nombre}
            loading="lazy"
          />
          <span className="badge bg-primary-subtle text-primary-emphasis position-absolute top-0 start-0 m-2">
            {producto.categoria}
          </span>
          {producto.disponibilidad !== "En stock" && (
            <span className="badge bg-warning text-dark position-absolute top-0 end-0 m-2">
              {producto.disponibilidad}
            </span>
          )}
        </div>
        <div className="card-body d-flex flex-column">
          <h3 className="h6 card-title mb-1">{producto.nombre}</h3>
          <p className="small text-muted mb-2">{producto.descripcionCorta}</p>
          <p className="fw-bold fs-5 text-brand mb-3">
            ${producto.precio.toFixed(2)}
          </p>
          <div className="mt-auto d-grid gap-2">
            <button
              type="button"
              className="btn btn-outline-secondary btn-sm"
              onClick={() => onVerDetalles(producto)}
            >
              <i className="bi bi-eye me-1" aria-hidden="true"></i>
              Ver detalles
            </button>
            <button
              type="button"
              className="btn btn-brand btn-sm"
              onClick={() => onAgregarCarrito(producto)}
            >
              <i className="bi bi-cart-plus me-1" aria-hidden="true"></i>
              Agregar al carrito
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductCard;
