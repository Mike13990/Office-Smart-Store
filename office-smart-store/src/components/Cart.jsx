function Cart({ carrito, onEliminar, onVaciar, total, cantidadTotal }) {
  return (
    <div
      className="offcanvas offcanvas-end"
      tabIndex="-1"
      id="cartOffcanvas"
      aria-labelledby="cartOffcanvasLabel"
    >
      <div className="offcanvas-header bg-brand-ink">
        <h2 className="offcanvas-title h5 text-white" id="cartOffcanvasLabel">
          <i className="bi bi-cart3 me-2" aria-hidden="true"></i>
          Carrito de compras
        </h2>
        <button
          type="button"
          className="btn-close btn-close-white"
          data-bs-dismiss="offcanvas"
          aria-label="Cerrar"
        ></button>
      </div>
      <div className="offcanvas-body d-flex flex-column">
        {carrito.length === 0 ? (
          <p className="text-muted text-center mt-4">
            <i className="bi bi-cart-x fs-1 d-block mb-2"></i>
            Tu carrito está vacío.
          </p>
        ) : (
          <>
            <div className="flex-grow-1 overflow-auto">
              {carrito.map((item) => (
                <div key={item.id} className="cart-item py-3">
                  <div className="d-flex gap-3">
                    <img
                      src={item.imagen}
                      alt={item.nombre}
                      width="64"
                      height="64"
                      className="rounded flex-shrink-0"
                      style={{ objectFit: "cover" }}
                    />
                    <div className="flex-grow-1">
                      <p className="mb-1 fw-semibold small">{item.nombre}</p>
                      <p className="mb-1 small text-muted">
                        Cantidad: {item.cantidad} &times; $
                        {item.precio.toFixed(2)}
                      </p>
                      <p className="mb-0 fw-bold text-brand">
                        Subtotal: ${(item.precio * item.cantidad).toFixed(2)}
                      </p>
                    </div>
                    <button
                      type="button"
                      className="btn btn-sm btn-outline-danger align-self-start"
                      onClick={() => onEliminar(item.id)}
                      aria-label={`Eliminar ${item.nombre}`}
                    >
                      <i className="bi bi-trash" aria-hidden="true"></i>
                    </button>
                  </div>
                </div>
              ))}
            </div>

            <div className="border-top pt-3 mt-3">
              <div className="d-flex justify-content-between mb-1">
                <span className="text-muted">Artículos en el carrito</span>
                <span className="fw-semibold">{cantidadTotal}</span>
              </div>
              <div className="d-flex justify-content-between cart-total fs-4 fw-bold mb-3">
                <span>Total</span>
                <span className="text-brand">${total.toFixed(2)}</span>
              </div>
              <div className="d-grid gap-2">
                <button type="button" className="btn btn-brand">
                  Finalizar compra
                </button>
                <button
                  type="button"
                  className="btn btn-outline-danger"
                  onClick={onVaciar}
                >
                  Vaciar carrito
                </button>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
}

export default Cart;
