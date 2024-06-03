import products from "../products.json";

export const getProductData = (id) => {
    const productsArray = products.results;
    const response = productsArray.find((product) => product.id == id);
    return response;
};