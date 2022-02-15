import Navigo from "navigo";
import AdminNews from "./pages/admin/news";
import Dashboard from "./pages/dashboard";
import DetailPage from "./pages/detail";
import HomePage from "./pages/home";
import ProductPage from "./pages/product";

const router = new Navigo("/", { linksSelector: "a", hash: true });

const print = async (component, id) => {
    document.querySelector("#app").innerHTML = await component.render(id);
};

router.on({
    "/": () => print(HomePage),
    "/product": () => print(ProductPage),
    "/news/:id": ({ data }) => print(DetailPage, data.id),
    "/admin/dashboard": () => print(Dashboard),
    "/admin/news": () => print(AdminNews),

});
router.resolve();
