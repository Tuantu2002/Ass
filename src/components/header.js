import toastr from "toastr";
import { reRender } from "../utils";

const Header = {
    render() {
        return `  <div class="md:flex md:flex-row md:justify-between text-center text-sm sm:text-base">
        <div class="flex flex-row justify-center">
         <a  href=""><img  class = "imgheader" src="../../images/logo1.png" width=" 100px" alt=""></a>
          <h1 class="text-2xl text-gray-600 ml-2 py-5">Tú Store</h1>    
          <div class ="pl-8 pt-6">
          <a href="#" class="text-gray-600 hover:text-purple-600 p-4 px-3 sm:px-4">Home</a>
          <a href="/product" class="text-gray-600 hover:text-purple-600 p-4 px-3 sm:px-4">Shop</a>
          <a href="#" class="text-gray-600 hover:text-purple-600 p-4 px-3 sm:px-4">Blog</a>
          <a href="#" class="text-gray-600 hover:text-purple-600 p-4 px-3 sm:px-4">Contact</a>
          <a href="#" class="text-gray-600 hover:text-purple-600 p-4 px-3 sm:px-4">login</a>
         
          </div>
         
        </div>
        <div class="pl-8 pt-6 flex">
        ${localStorage.getItem("user") ? `
        <div class= "mr-12"> <span id="account-user">Username</span>
         <button id="logout"><i class="fa-solid fa-right-from-bracket"></i></button>
       </div> 
        ` : ""}  
        <a href="#" class="text-gray-600 hover:text-purple-600  px-3 sm:px-4 " ><i class="fa-solid fa-bag-shopping"></i></a>
        </div>
      </div><!-- header -->`;
    },
    afterRender() {
        const user = JSON.parse(localStorage.getItem("user"));
        document.querySelector("#account-user").innerHTML = user.user;

        const logout = document.querySelector("#logout");
        if (logout) {
            logout.addEventListener("click", () => {
                localStorage.removeItem("user");
                reRender(Header, "#header");
                toastr.success("đăng xuất thành công");
            });
        }
    },
};
export default Header;
