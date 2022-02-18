import Banner from "../components/banner";
import Header from "../components/header";
import NewList from "../components/news";
import Footer from "../components/footer";

const HomePage = {
    async   render() {
        return `
        <div class="container mx-auto p-5">
        <header>
        ${Header.render()}
    </header>
    <main>
        <div class="banner">
            ${Banner.render()}
        </div>
        <div class="prodcuts">
            ${await NewList.render()}
        </div>
       
    </main>
    <footer>
        ${Footer.render()}
    </footer>
        </div> `;
    },
    afterRender() {
        Header.afterRender();
    },
};
export default HomePage;
