import "./Products.css"
import ProductContainer from "../../../components/product-container/ProductContainer";

export default function Products() {
  return (
    <div className="products">
      <div className="products-title">
        <h2>Productos</h2>
      </div>
      <ProductContainer />
    </div>
  )
}
