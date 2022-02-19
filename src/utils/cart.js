/* eslint-disable no-alert */
/* eslint-disable no-plusplus */
/* eslint-disable no-unused-expressions */
/* eslint-disable import/prefer-default-export */
/* eslint-disable no-unused-vars */
let cart = [];
if (localStorage.getItem("cart")) {
    cart = JSON.parse(localStorage.getItem("cart"));
}

export const addToCart = (newItem, next) => {
    const exsitItem = cart.find((item) => item.id === newItem.id);
    if (!exsitItem) {
        cart.push(newItem);
    } else {
        exsitItem.quantity++;
    }
    localStorage.setItem("cart", JSON.stringify(cart));
    next();
};
export const increaseQuantity = (id, next) => {
    cart.find((item) => item.id === +id).quantity++;
    localStorage.setItem("cart", JSON.stringify(cart));
    next();
};
export const decreaseQuantity = (id, next) => {
    const currentProduct = cart.find((item) => item.id === +id);
    currentProduct.quantity--;
    if (currentProduct.quantity < 1) {
        const confirm = window.confirm("Bạn có chắc chắn muốn xóa không?");
        if (confirm) {
            cart = cart.filter((item) => item.id !== id);
        }
    }
    localStorage.setItem("cart", JSON.stringify(cart));
    next();
};
export const removeItemInCart = (id, next) => {
    const confirm = window.confirm("Bạn có chắc chắn muốn xóa không?");
    if (confirm) {
        cart = cart.filter((item) => item.id !== +id);
    }
    localStorage.setItem("cart", JSON.stringify(cart));
    next();
};
