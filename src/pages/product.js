import Footer from "../components/footer";
import Header from "../components/header";
import ProductPageList from "../components/products";

const ProductPage = {
    async  render() {
        return `<div class="container mx-auto p-5">
         <header>
         ${Header.render()}
     </header>
     <main>
         <div class="prodcuts">
             ${await ProductPageList.render()}
         </div>
        
     </main>
     <footer>
         ${Footer.render()}
     </footer>
         </div> `;
    },

};
export default ProductPage;
