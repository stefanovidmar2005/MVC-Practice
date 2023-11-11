import * as star from "../../img/star.png";
class productView {
  #parentElement = document.querySelector(".main");
  #data;
  render(data) {
    this.#data = data;
    this.#clear();
    // Guard Clause to prevent data to be displayed when there is no data in state
    if (Object.keys(data).length === 0) return;
    const markup = this.#generateMarkup(data);
    this.#parentElement.insertAdjacentHTML("afterbegin", markup);
  }
  #generateMarkup(data) {
    return `
    <div class="product__container">
    <img
          src="${data.image}"
          alt="${data.title}"
          class="product__container-image"
        />
        <div class="product__container-content">
          <h3 class="product__container-content-title">${data.title}</h3>
          <div class="product__container-review">
          <span class="product__container-content-review-category">${
            data.category
          }</span>
          <div class="product__container-review-rating">
          ${this.#renderRating(data.rating.rate).join("")}
          </div>
        </div>
          
          <h4 class="product__container-content-price">$ ${data.price}</h4>
          <p class="product__container-content-description">
      ${data.description}
          </p>
          <button class="btn product__container-content-btn">
            Add to cart
          </button>
        </div>
        </div>`;
  }
  #renderRating(num) {
    const ratings = [];
    for (let i = 0; i < Math.round(num); i++) {
      ratings.push(
        `<img class="product__container-review-rating-rate" src=${star.default} alt="rating">`
      );
    }
    return ratings;
  }
  renderSpinner(container) {
    const html = `
   <svg class="spinner" xmlns="http://www.w3.org/2000/svg" width="200" height="200" fill="none" viewBox="0 0 200 200" version="1.1" xmlns:xlink="http://www.w3.org/1999/xlink" xmlns:svgjs="http://svgjs.dev/svgjs"><path fill="rgba(11, 94, 215, 1)" fill-rule="evenodd" d="M128.603 16.335c-12.778-21.78-44.267-21.78-57.045 0l-.464.79A33.07 33.07 0 0 1 42.803 33.46l-.917.006C16.635 33.643.89 60.912 13.363 82.869l.453.797a33.07 33.07 0 0 1 0 32.668l-.453.797c-12.472 21.957 3.272 49.226 28.523 49.403l.917.006a33.072 33.072 0 0 1 28.29 16.334l.465.791c12.778 21.78 44.267 21.78 57.045 0l.464-.791a33.073 33.073 0 0 1 28.291-16.334l.918-.006c25.251-.177 40.995-27.446 28.522-49.403l-.453-.797a33.07 33.07 0 0 1 0-32.668l.453-.797c12.473-21.957-3.271-49.226-28.522-49.403l-.918-.006a33.07 33.07 0 0 1-28.291-16.334l-.464-.791Zm-28.522 133.269c27.395 0 49.604-22.208 49.604-49.604s-22.209-49.605-49.604-49.605c-27.396 0-49.605 22.21-49.605 49.605 0 27.396 22.209 49.604 49.605 49.604Z" clip-rule="evenodd"></path></svg> 
  `;
    return container.insertAdjacentHTML("afterbegin", html);
  }
  #clear() {
    this.#parentElement.innerHTML = "";
  }
  #imageLoad() {
    // TODO: Render spinner until image has loaded
  }
}
export default new productView();
