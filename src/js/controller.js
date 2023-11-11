import * as model from "./model";
import productView from "./views/product-view";
const main = document.querySelector(".main");
const searchButton = document.querySelector(".search-button");
const searchField = document.querySelector(".search-field");

const controlProduct = async (ID) => {
  try {
    productView.renderSpinner(main);
    await model.loadProduct(ID);
    const data = model.state.product;
    productView.render(data);
  } catch (error) {
    console.error(new Error(error.message));
  }
};
searchButton.addEventListener("click", (e) => {
  e.preventDefault();
  // converting the ID to a number from string to avoid invalid characters
  const productValidation = new Promise((resolve, reject) => {});
  const ID = Number(searchField.value);
  if (!ID) {
    alert("please enter an ID");
    searchField.value = "";
    searchField.blur();
    return;
  }
  controlProduct(ID);
  searchField.value = "";
  searchField.blur();
});
