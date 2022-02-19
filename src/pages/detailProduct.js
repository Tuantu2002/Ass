/* eslint-disable no-undef */
import { get } from "../api/products";
import Footer from "../components/footer";
import Header from "../components/header";
import { addToCart } from "../utils/cart";

const DetailProduct = {
    async  render(id) {
        const { data } = await get(id);
        return `  <div class="container mx-auto p-5">
        ${Header.render()}
        <main>
          <div class="body-main max-w-7xl mx-auto px-4 grid grid-cols-2 gap-[100px]">
            <div class="body-product">
              <div class="detail-img-product">
                <div class="img-main">
                  <a href="">
                    <img 
                      src="${data.img}"
                      alt=""
                    />
                  </a>
                </div>
             
              </div>
            </div>
            <div class="intro-product">
              <div class="title-intro">
                <h2>${data.name}</h2>
                <p>${data.color}</p>
                <span class="price-product"> $ ${data.price} </span>
                <p class = "text-black">${data.quantity} sản phẩm có sẵn</p>
                <input
                          id="inpvalue"
                          type="number"
                          name=""
                          class="quantity-product"
                          placeholder="1"/>
              </div>
              <div class="btn-detail">
                  <div class="btn-item">
                      <button class="btn-now">By Now</button>
                    </div>
                    <div class="btn-item">
                        <button id="btnAddToCart" class="btn-add-card">Add To Card</button>
                    </div>
              </div>
              <div class="desc-product">
                <p>
                  ${data.desc}
                </p>
                <nav class="list-desc">
                  
                </nav>
              </div>
            </div>
          </div>
        </main>
        ${Footer.render()}
        </div>`;
    },
    afterRender(id) {
        const ADDCart = document.querySelector("#btnAddToCart");
        ADDCart.addEventListener("click", async () => {
            const { data } = await get(id);
            addToCart({ ...data, quantity: 1 }, () => {
                console.log("adđ nè");
            });
            // cart
            // click vào button
            // lưu vào local storerage
        });
    },
};
export default DetailProduct;
