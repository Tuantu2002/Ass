import Footer from "../components/footer";
import Header from "../components/header";
import NewsList from "../components/news";

const ProductPage = {
    async  render() {
        return `<div class="container mx-auto p-5">
         <header>
         ${Header.render()}
     </header>
     <main>
         <div class="prodcuts">
             ${await NewsList.render()}
         </div>
        
     </main>
     <footer>
         ${Footer.render()}
     </footer>
         </div> `;
    },

};
export default ProductPage;
