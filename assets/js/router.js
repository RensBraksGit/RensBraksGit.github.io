const route = (path) =>{
    window.history.pushState({}, "",path);
    handleLocation();
}
const routes ={
    404: "../../404.html",
    "/":"../../home.html",
    "/blogs":"../../blogs/bloggrid.html",
    "/blogdetails":"../../blogs/blogdetails.html",
}
const handleLocation = async ()=>{
    const path = window.location.pathname;
    const route = routes[path] || routes[404];
    const html = await fetch(route).then((data)=> data.text());
    document.getElementById("content").innerHTML = html;
    
    if (path === "/") {
        renderBlogList();
    }
    if (path === "/blogs") {
        renderBlogGrid();
    }
    if (path === "/blogdetails") {
        const params = new URLSearchParams(window.location.search);
        const blogId = params.get("id");
        if (blogId) {
            renderBlogDetails(blogId);
        }
    }
    updateButtonStyles(path);
}
const updateButtonStyles = (path) => {
    const homeButton = document.getElementById("home-button");
    const blogsButton = document.getElementById("blogs-button");

    if (path === "/") {
        homeButton.classList.remove("btn-outline-success");
        homeButton.classList.add("btn-success");
        blogsButton.classList.remove("btn-primary");
        blogsButton.classList.add("btn-outline-primary");
    } else if (path === "/blogs") {
        homeButton.classList.remove("btn-success");
        homeButton.classList.add("btn-outline-success");
        blogsButton.classList.remove("btn-outline-primary");
        blogsButton.classList.add("btn-primary");
    } else {
        homeButton.classList.remove("btn-success");
        homeButton.classList.add("btn-outline-success");
        blogsButton.classList.remove("btn-primary");
        blogsButton.classList.add("btn-outline-primary");
    }
}
window.onpopstate = handleLocation;
window.route = route;
handleLocation();