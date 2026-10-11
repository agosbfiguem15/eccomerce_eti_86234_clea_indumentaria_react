import { useState, useEffect } from "react";
import ProductCard from "../product-card/ProductCard";
import { getProducts } from "../../services/product.service";
import "./ProductContainer.css"
import Swal from "sweetalert2";

export default function ProductContainer() {

  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    obtenerProductos();
  }, []);

  async function obtenerProductos() {
    try {
      const productos = await getProducts();
      if (productos) {
        setProducts(productos);
      }
    } catch (error) {
      Swal.fire({
        icon: "error",
        title: "Error al cargar los productos",
        text: `Ocurrió un error: ${error}`,
      });
    } finally {
      setLoading(false);
    }
  }

  if (loading) {
    return (
      <div className="products-loading">
        <div className="spinner-border" role="status">
          <span className="visually-hidden">Cargando...</span>
        </div>
        <p>Estamos preparando nuestra colección para vos...</p>
      </div>
    );
  }

  return (
    <>
      <div className="products-container">
        {
          products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))
        }
      </div>
    </>
  )
}
