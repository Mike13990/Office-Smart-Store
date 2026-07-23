function ProductModal({ producto, onAgregarCarrito }) {
  if (!producto) return null;

  return (
    <div
      className="modal fade"
      id="productModal"
      tabIndex="-1"
      aria-labelledby="productModalLabel"
      aria-hidden="true"
    >
      <div className="modal-dialog modal-dialog-centered modal-lg">
        <div className="modal-content">
          <div className="modal-header">
            <h2 className="modal-title h5" id="productModalLabel">
              {producto.nombre}
            </h2>
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="modal"
              aria-label="Cerrar"
            ></button>
          </div>
          <div className="modal-body">
            <div className="row g-4">
              <div className="col-md-5">
                <img
                  src={producto.imagen}
                  alt={producto.nombre}
                  className="img-fluid rounded"
                />
              </div>
              <div className="col-md-7">
                <span className="badge bg-primary-subtle text-primary-emphasis mb-2">
                  {producto.categoria}
                </span>
                <p className="fs-4 fw-bold text-brand mb-3">
                  ${producto.precio.toFixed(2)}
                </p>
                <p>{producto.descripcionCompleta}</p>
                <ul className="list-group list-group-flush mb-3">
                  <li className="list-group-item px-0 d-flex justify-content-between">
                    <span className="text-muted">Marca</span>
                    <span className="fw-semibold">{producto.marca}</span>
                  </li>
                  <li className="list-group-item px-0 d-flex justify-content-between">
                    <span className="text-muted">Color</span>
                    <span className="fw-semibold">{producto.color}</span>
                  </li>
                  <li className="list-group-item px-0 d-flex justify-content-between">
                    <span className="text-muted">Material</span>
                    <span className="fw-semibold">{producto.material}</span>
                  </li>
                  <li className="list-group-item px-0 d-flex justify-content-between">
                    <span className="text-muted">Garantía</span>
                    <span className="fw-semibold">{producto.garantia}</span>
                  </li>
                  <li className="list-group-item px-0 d-flex justify-content-between">
                    <span className="text-muted">Disponibilidad</span>
                    <span className="fw-semibold">{producto.disponibilidad}</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="modal-footer">
            <button
              type="button"
              className="btn btn-outline-secondary"
              data-bs-dismiss="modal"
            >
              Cerrar
            </button>
            <button
              type="button"
              className="btn btn-brand"
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

export default ProductModal;
