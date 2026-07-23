import './App.css'
import { useEffect, useState } from "react";
import { Modal } from "bootstrap";
import productos from "./data/products";
import NavbarComponent from "./components/NavbarComponent";
import Banner from "./components/Banner";
import Catalog from "./components/Catalog";
import ProductModal from "./components/ProductModal";
import Cart from "./components/Cart";
import FeaturedProducts from "./components/FeaturedProducts";
import VideoSection from "./components/VideoSection";
import CatalogoDigital from "./components/CatalogoDigital";
import Footer from "./components/Footer";

// Productos destacados de la semana: se muestran 4 fijos
const productosDestacados = productos.filter((p) =>
  [2, 7, 11, 21].includes(p.id)
);

function App() {
  const [carrito, setCarrito] = useState([]);
  const [productoSeleccionado, setProductoSeleccionado] = useState(null);
  const [toastMsg, setToastMsg] = useState("");

  // Muestra el modal de Bootstrap cuando se selecciona un producto
  useEffect(() => {
    if (productoSeleccionado) {
      const modalEl = document.getElementById("productModal");
      const modal = Modal.getOrCreateInstance(modalEl);
      modal.show();
    }
  }, [productoSeleccionado]);

  // Oculta la alerta de confirmación después de 2.5s
  useEffect(() => {
    if (!toastMsg) return;
    const timer = setTimeout(() => setToastMsg(""), 2500);
    return () => clearTimeout(timer);
  }, [toastMsg]);

  const handleVerDetalles = (producto) => {
    setProductoSeleccionado(producto);
  };

  const handleAgregarCarrito = (producto) => {
    setCarrito((prev) => {
      const existente = prev.find((item) => item.id === producto.id);
      if (existente) {
        return prev.map((item) =>
          item.id === producto.id
            ? { ...item, cantidad: item.cantidad + 1 }
            : item
        );
      }
      return [...prev, { ...producto, cantidad: 1 }];
    });
    setToastMsg(`"${producto.nombre}" se agregó al carrito.`);
  };

  const handleEliminarDelCarrito = (id) => {
    setCarrito((prev) => prev.filter((item) => item.id !== id));
  };

  const handleVaciarCarrito = () => setCarrito([]);

  const total = carrito.reduce(
    (acc, item) => acc + item.precio * item.cantidad,
    0
  );
  const cantidadTotal = carrito.reduce((acc, item) => acc + item.cantidad, 0);

  return (
    <>
      <NavbarComponent cantidadCarrito={cantidadTotal} />
      <Banner />

      <Catalog
        productos={productos}
        onVerDetalles={handleVerDetalles}
        onAgregarCarrito={handleAgregarCarrito}
      />

      <FeaturedProducts
        productos={productosDestacados}
        onVerDetalles={handleVerDetalles}
        onAgregarCarrito={handleAgregarCarrito}
      />

      <VideoSection />

      <CatalogoDigital />

      <Footer />

      <ProductModal
        producto={productoSeleccionado}
        onAgregarCarrito={handleAgregarCarrito}
      />

      <Cart
        carrito={carrito}
        onEliminar={handleEliminarDelCarrito}
        onVaciar={handleVaciarCarrito}
        total={total}
        cantidadTotal={cantidadTotal}
      />

      {toastMsg && (
        <div
          className="position-fixed bottom-0 end-0 p-3"
          style={{ zIndex: 1080 }}
        >
          <div className="alert alert-success shadow mb-0 d-flex align-items-center">
            <i className="bi bi-check-circle-fill me-2"></i>
            {toastMsg}
          </div>
        </div>
      )}
    </>
  );
}

export default App;
