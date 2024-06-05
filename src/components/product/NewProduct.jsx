import { useContext, useState } from "react";
import { AuthContext } from "../../auth";
import { ProductContext } from "../context/ProductContext";

const initializeForm = {
  name: "",
  description: "",
  url: "",
  tags: "",
  images: "",
};

const NewProduct = () => {
  const [formState, setFormState] = useState(initializeForm);
  const { user } = useContext(AuthContext);
  const { name, description, url, tags, images } = formState;
  const { createProduct } = useContext(ProductContext);

  const resetForm = () => {
    setFormState(initializeForm);
  };

  const onCreateProduct = async (event) => {
    event.preventDefault();

    const currentDate = new Date();

    const newProduct = {
      name,
      description,
      url,
      tags,
      userId: user.uid,
      images,
      createdAt: currentDate,
    };
    await createProduct(newProduct);

    resetForm();
  };

  const onInputChange = ({ target }) => {
    const { name, value } = target;

    setFormState({
      ...formState,
      [name]: value,
    });
  };

  return (
    <div className="login-form-container">
      <form className="login-form-content">
        <div className="login-form-title">
          <h4>Let&apos;s create a new product</h4>
        </div>
        <div className="login-form-body">
          <input
            type="text"
            id="name"
            name="name"
            value={name}
            onChange={onInputChange}
            placeholder="Product name"
            required
          />
          <input
            type="text"
            id="description"
            name="description"
            value={description}
            onChange={onInputChange}
            placeholder="Description"
            required
          />
          <input
            type="text"
            id="url"
            name="url"
            value={url}
            onChange={onInputChange}
            placeholder="Product url"
            required
          />
          <input
            type="text"
            id="tags"
            name="tags"
            value={tags}
            onChange={onInputChange}
            placeholder="Tags or categories"
            required
          />
          <input
            type="text"
            id="images"
            name="images"
            value={images}
            onChange={onInputChange}
            placeholder="Url images"
            required
          />
          <div className="signup-options">
            <button
              onClick={onCreateProduct}
              type="button"
              className="btn-login"
            >
              Create product
            </button>
          </div>
          {/* {!errorMessage ? null : (
              <div className="alert alert-danger" role="alert">
                {errorMessage}
              </div>
            )} */}
        </div>
      </form>
    </div>
  );
};

export default NewProduct;
