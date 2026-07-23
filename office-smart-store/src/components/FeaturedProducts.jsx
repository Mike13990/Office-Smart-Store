function FeaturedProducts({ productos, onVerDetalles, onAgregarCarrito }) {
  return (
    <section id="destacados" className="py-5 bg-brand-ink">
      <div className="container">
        <h2 className="section-title text-white">
          Productos destacados de la semana
        </h2>
        <div className="row">
          {productos.map((producto) => (
            <div className="col-12 col-sm-6 col-lg-3 mb-4" key={producto.id}>
              <div className="card h-100 product-card shadow-sm">
                <div className="position-relative">
                  <img
                    src={producto.imagen}
                    className="card-img-top"
                    alt={producto.nombre}
                    loading="lazy"
                  />
                  <span className="badge ribbon-badge position-absolute top-0 start-0 m-2">
                    <i className="bi bi-star-fill me-1"></i>Destacado
                  </span>
                </div>
                <div className="card-body d-flex flex-column">
                  <h3 className="h6 card-title mb-1">{producto.nombre}</h3>
                  <p className="fw-bold text-brand fs-5 mb-3">
                    ${producto.precio.toFixed(2)}
                  </p>
                  <div className="mt-auto d-grid gap-2">
                    <button
                      type="button"
                      className="btn btn-outline-secondary btn-sm"
                      onClick={() => onVerDetalles(producto)}
                    >
                      Ver detalles
                    </button>
                    <button
                      type="button"
                      className="btn btn-brand btn-sm"
                      onClick={() => onAgregarCarrito(producto)}
                    >
                      Agregar al carrito
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default FeaturedProducts;
