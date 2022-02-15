import { get } from "../api/posts";
import Footer from "../components/footer";
import Header from "../components/header";

const DetailPage = {
    async render(id) {
        const { data } = await get(id);
        return `
        
        <div class="container mx-auto p-5">
        ${Header.render()}
        <div class = "text-center text-2xl py-8" >DetailPage</div>
        <h1 class= "text-2xl py-8 ">${data.title}</h1>
        <img src = "${data.img}" width="500"></img>
        <p class= "text-2xl " width="100">${data.desc}</p>
        ${Footer.render()}
        </div>`;
    },
};
export default DetailPage;
