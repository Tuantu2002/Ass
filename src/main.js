import Navigo from "navigo";
import AdminNews from "./pages/admin/news";
import AdminNewsAdd from "./pages/admin/news/add";
import Update from "./pages/admin/news/update";
import AdminProduct from "./pages/admin/product";
import AdminProductAdd from "./pages/admin/product/add";
import UpdateProduct from "./pages/admin/product/update";
import CartPage from "./pages/cart";
import Dashboard from "./pages/dashboard";
import DetailPage from "./pages/detail";
import DetailProduct from "./pages/detailProduct";
import HomePage from "./pages/home";
import ProductPage from "./pages/product";
import Signin from "./pages/signin";
import SignUp from "./pages/signup";

const router = new Navigo("/", { linksSelector: "a", hash: true });

const print = async (component, id) => {
    document.querySelector("#app").innerHTML = await component.render(id);
    if (component.afterRender) await component.afterRender(id);
};
router.on("/admin/*", () => {}, {
    before: (done) => {
        const userId = JSON.parse(localStorage.getItem("user")).id;
        if (userId === 1) {
            done();
        } else {
            document.location.href = "/signin";
        }
    },
});

router.on({
    "/": () => print(HomePage),
    "/product": () => print(ProductPage),
    "/product/:id": ({ data }) => print(DetailProduct, data.id),
    "/news/:id": ({ data }) => print(DetailPage, data.id),
    "/admin/dashboard": () => print(Dashboard),
    "/admin/news": () => print(AdminNews),
    "/admin/news/add": () => print(AdminNewsAdd),
    "admin/news/:id/edit": ({ data }) => print(Update, data.id),
    "/admin/product": () => print(AdminProduct),
    "/admin/product/add": () => print(AdminProductAdd),
    "admin/product/:id/edit": ({ data }) => print(UpdateProduct, data.id),

    "/signup": () => print(SignUp),
    "/signin": () => print(Signin),
    "/cart": () => print(CartPage),
});
router.resolve();
