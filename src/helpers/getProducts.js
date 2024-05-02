import products from "../products.json";

export const getProducts = () => {
    const response = products.results;
    return response;
};