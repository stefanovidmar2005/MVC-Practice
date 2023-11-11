const BASE_URL = "https://fakestoreapi.com/products";
export const state = {
  product: {},
};
export const loadProduct = async (productID) => {
  try {
    const request = await fetch(`${BASE_URL}/${productID}`);
    const response = await request.json();
    state.product = response;
  } catch (err) {
    state.product = {};
    alert(`Invalid Product ID`);
  }
};
