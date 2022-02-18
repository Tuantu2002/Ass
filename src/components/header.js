import { reRender } from "../utils";

const Header = {
    render() {
        return `  <div class="md:flex md:flex-row md:justify-between text-center text-sm sm:text-base">
        <div class="flex flex-row justify-center">
         <a href=""><img src="../../images/logo.jpg" width=" 100px" alt=""></a>
          <h1 class="text-2xl text-gray-600 ml-2 py-4">Louis vuituoi</h1>    
          ${localStorage.getItem("user") ? `
          <div class= "pl-20 pt-6">
          Xin chao : <span id="account-email">Username</span>
           <button id="logout">Logout</button>
         </div> 
          ` : ""}  
         
        </div>
        <div class="mt-4">
          <a href="#" class="text-gray-600 hover:text-purple-600 p-4 px-3 sm:px-4">Home</a>
          <a href="#" class="text-gray-600 hover:text-purple-600 p-4 px-3 sm:px-4">Shop</a>
          <a href="#" class="text-gray-600 hover:text-purple-600 p-4 px-3 sm:px-4">Blog</a>
          <a href="#" class="text-gray-600 hover:text-purple-600 p-4 px-3 sm:px-4">Contact</a>
          <a href="#" class="text-gray-600 hover:text-purple-600 p-4 px-3 sm:px-4">login</a>
         
        </div>
      </div><!-- header -->`;
    },
    afterRender() {
        const user = JSON.parse(localStorage.getItem("user"));
        document.querySelector("#account-email").innerHTML = user.email;

        const logout = document.querySelector("#logout");
        if (logout) {
            logout.addEventListener("click", () => {
                localStorage.removeItem("user");
                reRender(Header, "#header");
            });
        }
    },
};
export default Header;
