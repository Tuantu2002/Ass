import toastr from "toastr";
import { reRender } from "../utils";
import { decreaseQuantity, increaseQuantity, removeItemInCart } from "../utils/cart";
import "toastr/build/toastr.min.css";
import Header from "../components/header";
import Footer from "../components/footer";

const CartPage = {
    render() {
        let cart = [];
        if (localStorage.getItem("cart")) {
            cart = JSON.parse(localStorage.getItem("cart"));
        }
        return `
        <div class="container mx-auto p-5">
        ${Header.render()}
        <div class="flex flex-col">
        <div class="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div class="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
            <div class="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
              <table class="min-w-full divide-y divide-gray-200">
                <thead class="bg-gray-50">
                  <tr>
                    <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Tên sản phẩm </th>
                    <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">giá sản phẩm</th>
                    <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">số lượng</th>
                    <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">ảnh sản phẩm</th>
                    
                  
                  </tr>
                </thead>
                <tbody class="bg-white divide-y divide-gray-200">
                ${cart.map((item) => `
                <tr>
                <td class="px-6 py-4 whitespace-nowrap">
                  <div class="text-sm text-gray-900">${item.name}</div>
                </td>
                <td class="px-6 py-4 whitespace-nowrap">
                <div class="text-sm text-gray-900">${item.price}</div>
              </td>
              <td class="px-6 py-4 whitespace-nowrap">
              <div class="text-sm text-gray-900">${item.quantity}</div>
            </td>
                <td class="px-6 py-4 whitespace-nowrap">
                <div class="flex items-center">
                  <div class="flex-shrink-0 h-10 w-10">
                    <img class="h-10 w-10 rounded-full" src="${item.img}" alt="">
                  </div>
                </div>
              </td>
              <td class="px-6 py-4 whitespace-nowrap">
              <a href="#" class="text-indigo-600 hover:text-indigo-900 btn btn-increase"  data-id="${item.id}">tăng</a>
              <td class="px-6 py-4 whitespace-nowrap">
              <a href="#" class="text-indigo-600 hover:text-indigo-900 btn btn-decrease" data-id="${item.id}">giảm</a>
            </td>
          <td>
                  <a href="#" class="text-indigo-600 hover:text-indigo-900 btn btn-remove" data-id="${item.id}">xóa</a>
                </td>
              </tr>
                
                
                
                
                `)};
                
      
                  <!-- More people... -->
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
      ${Footer.render()}
        </div>
      
        
        
        `;
    },
    afterRender() {
        const btns = document.querySelectorAll(".btn");
        btns.forEach((btn) => {
            const { id } = btn.dataset;
            btn.addEventListener("click", () => {
                if (btn.classList.contains("btn-increase")) {
                    increaseQuantity(id, () => {
                        reRender(CartPage, "#app");
                        toastr.success("Tăng số lượng thành công");
                    });
                } else if (btn.classList.contains("btn-decrease")) {
                    decreaseQuantity(id, () => {
                        reRender(CartPage, "#app");
                        toastr.success("Giảm số lượng thành công");
                    });
                } else {
                    removeItemInCart(id, () => {
                        reRender(CartPage, "#app");
                        toastr.success("Xóa sản phẩm thành công");
                    });
                }
            });
        });
    },
};
export default CartPage;
