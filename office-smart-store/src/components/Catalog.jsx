import { useState } from "react";
import ProductCard from "./ProductCard";

function Catalog({ productos, onVerDetalles, onAgregarCarrito }) {
  const categorias = ["Todos", ...new Set(productos.map((p) => p.categoria))];
  const [categoriaActiva, setCategoriaActiva] = useState("Todos");

  const productosFiltrados =
    categoriaActiva === "Todos"
      ? productos
      : productos.filter((p) => p.categoria === categoriaActiva);

  return (
    <section id="catalogo" className="py-5">
      <div className="container">
        <h2 className="section-title">Catálogo de productos</h2>

        <div className="d-flex flex-wrap gap-2 mb-4">
          {categorias.map((categoria) => (
            <button
              key={categoria}
              type="button"
              className={`btn category-pill ${
                categoriaActiva === categoria
                  ? "btn-brand"
                  : "btn-outline-secondary"
              }`}
              onClick={() => setCategoriaActiva(categoria)}
            >
              {categoria}
            </button>
          ))}
        </div>

        <div className="row">
          {productosFiltrados.map((producto) => (
            <ProductCard
              key={producto.id}
              producto={producto}
              onVerDetalles={onVerDetalles}
              onAgregarCarrito={onAgregarCarrito}
            />
          ))}
        </div>

        {productosFiltrados.length === 0 && (
          <p className="text-muted">No hay productos en esta categoría.</p>
        )}
      </div>
    </section>
  );
}

export default Catalog;
