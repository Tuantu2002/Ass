import Navigo from "navigo";
import HomePage from "./pages/home";

const router = new Navigo("/", { linksSelector: "a", hash: true });

const print = async (component, id) => {
    document.querySelector("#app").innerHTML = await component.render(id);
};

router.on({
    "/": () => print(HomePage),
});
router.resolve();
