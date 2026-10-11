import { useForm } from "react-hook-form"
import "./AdminProduct.css"
import Swal from "sweetalert2";
import { useEffect, useRef, useState } from "react";
import ProductRow from "../../../components/product-row/ProductRow";
import { createProduct, deleteProduct, getProducts, updateProduct } from "../../../services/product.service";

export default function AdminProduct() {
  const nameInputRef = useRef(null);
  const [products, setProducts] = useState([]);
  const { register, handleSubmit, setValue, reset, formState: { errors, isValid } } = useForm({ mode: "onBlur" });
  const [editingProductId, setEditingProductId] = useState(null);

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
        title: "Error al obtener los productos",
        text: `Verifique nuevamente, ocurrió un error obtener los productos: ${error}`,
      });
    }
  }

async function envioFormulario(data) {
  let resultado;
  if (editingProductId) {
    const productoActual = products.find(
      (prod) => prod.id === editingProductId
    );
    const product = {
      ...data,
      createDate: productoActual.createDate,
    };
    resultado = await updateProduct(editingProductId, product);
  } else {
    resultado = await createProduct(data);
  }
  if (resultado) {
    setEditingProductId(null);
    reset();
    nameInputRef?.current?.focus();
    obtenerProductos();
  }
}

  async function handleDelete(id) {
    const resultado = await deleteProduct(id);
    if (resultado) {
      await obtenerProductos();
    }
  }

  function handleEdit(id) {
    try {
      const editProduct = products.find((prod) => prod.id === id);
      if (editProduct) {
        setValue("name", editProduct.name);
        setValue("price", editProduct.price);
        setValue("description", editProduct.description);
        setValue("category", editProduct.category);
        setValue("image", editProduct.image);
        setValue("stock", editProduct.stock);
        setValue("height", editProduct.height);
        setValue("width", editProduct.width);
        setValue("depth", editProduct.depth);
        setEditingProductId(editProduct.id);
      }
    } catch (error) {
      Swal.fire({
        icon: "error",
        title: "Error al editar el producto",
        text: `Verifique nuevamente, ocurrió un error al editar el producto: ${error}`,
      });
    }
  }

  return (
    <div className="admin-section">
      <section className="section-table">
        <div className="title-table">
          <h2>
            <span className="highlight">Listado de productos</span>
          </h2>
        </div>
        <div className="products-table">
          <table>
            <thead>
              <tr>
                <th>Nombre</th>
                <th>Precio</th>
                <th>Descripción</th>
                <th>Foto</th>
                <th>Categoria</th>
                <th>Fecha de ingreso</th>
                <th>Acciones</th>
              </tr>
            </thead>
            <tbody>
              {
                products.map((producto) =>
                  <ProductRow key={producto.id} prod={producto} handleDelete={handleDelete} handleEdit={handleEdit} />)
              }
            </tbody>
          </table>
        </div>
      </section>

      <section className="section-create">
        <div className="create-title">
          <h2>
            <span className="highlight">Carga de productos</span>
          </h2>
        </div>
        <div className="create-container">
          <form action="" className="create-form" onSubmit={handleSubmit(envioFormulario)} noValidate>

            <label htmlFor="name">
              Nombre <span className="required">*</span>
            </label>
            <input
              id="name"
              type="text"
              ref={nameInputRef}
              {...register("name", {
                required: "El nombre del producto es obligatorio",
                minLength: {
                  value: 3,
                  message: "El nombre del producto debe tener al menos 3 caracteres"
                },
                maxLength: {
                  value: 50,
                  message: "El nombre del producto no puede tener más de 50 caracteres"
                }
              })}
              placeholder="Escribe el nombre del producto"
            />
            {errors.name && (
              <p className="error">{errors.name.message}</p>
            )}

            <label htmlFor="price">
              Precio <span className="required">*</span>
            </label>
            <input
              id="price"
              type="number"
              {...register("price", {
                valueAsNumber: true,
                required: "El precio del producto es obligatorio",
                min: {
                  value: 1,
                  message: "El precio del producto debe ser igual o mayor a 1",
                },
              })}
              placeholder="Escribe el precio del producto"
            />
            {errors.price && (
              <p className="error">{errors.price.message}</p>
            )}

            <label htmlFor="description">
              Descripción <span className="required">*</span>
            </label>
            <textarea
              id="description"
              {...register("description", {
                required: "La descripción del producto es obligatoria",
                minLength: {
                  value: 10,
                  message: "La descripción del producto debe tener al menos 10 caracteres"
                },
                maxLength: {
                  value: 100,
                  message: "La descripción del producto no puede tener más de 100 caracteres"
                }
              })}
              placeholder="Escribe la descripcion del producto"
              rows={3}
              maxLength={100}
            />
            {errors.description && (
              <p className="error">{errors.description.message}</p>
            )}

            <label htmlFor="category">
              Categoria <span className="required">*</span>
            </label>
            <select id="category" {...register("category", {
              required: "La categoría del producto es obligatoria"
            })}>
              <option value="">Selecciona la categoria del producto</option>
              <option value="marroquinera">Marroquineria</option>
              <option value="indumentaria">Indumentaria</option>
            </select>
            {errors.category && (
              <p className="error">{errors.category.message}</p>
            )}

            <label htmlFor="image">
              Imagen <span className="required">*</span>
            </label>
            <input
              id="image"
              type="url"
              {...register("image", {
                required: "La url del producto es obligatoria"
              })}
              placeholder="Escribe la url del producto"
            />
            {errors.image && (
              <p className="error">{errors.image.message}</p>
            )}

            <label htmlFor="stock">
              Stock <span className="required">*</span>
            </label>
            <input
              id="stock"
              type="number"
              {...register("stock", {
                valueAsNumber: true,
                required: "El stock del producto es obligatorio",
                min: {
                  value: 0,
                  message: "El stock del producto no puede ser menor a 0"
                }
              })}
              placeholder="Escribe el stock del producto"
            />
            {errors.stock && (
              <p className="error">{errors.stock.message}</p>
            )}

            <p className="form-p">
              Dimensiones:
              <br />
              <label htmlFor="height">
                Alto <span className="required">*</span>
              </label>
              <input
                id="height"
                type="number"
                {...register("height", {
                  valueAsNumber: true,
                  required: "La altura del producto es obligatoria",
                  min: {
                    value: 1,
                    required: "La altura del producto debe ser igual o mayor a 1",
                  }
                })}
                placeholder="Escribe la altura del producto"
              />
              {errors.height && (
                <p className="error">{errors.height.message}</p>
              )}

              <label htmlFor="width">
                Ancho <span className="required">*</span>
              </label>
              <input
                id="width"
                type="number"
                {...register("width", {
                  valueAsNumber: true,
                  required: "El ancho del producto es obligatorio",
                  min: {
                    value: 1,
                    required: "El ancho del producto debe ser igual o mayor a 1",
                  }
                })}
                placeholder="Escribe el ancho del producto"
              />
              {errors.width && (
                <p className="error">{errors.width.message}</p>
              )}

              <label htmlFor="depth">Profundidad </label>
              <input
                id="depth"
                type="number"
                {...register("depth", { valueAsNumber: true })}
                placeholder="Escribe la profundidad del producto"
              />

              <button disabled={!isValid} type="submit" className={` ${editingProductId ? "edit-button" : "create-button"}`}>
                {editingProductId ? "Editar" : "Agregar"} producto
              </button>

            </p>
          </form>
        </div>
      </section>
    </div>

  )
}

