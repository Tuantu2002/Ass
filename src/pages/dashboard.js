import NavAdmin from "../components/Nav";

const Dashboard = {
    render() {
        return `
              
<div class="bg-gray-800 font-sans leading-normal tracking-normal mt-12">
    ${NavAdmin.render()}
</div>
        
            `;
    },
};
export default Dashboard;
