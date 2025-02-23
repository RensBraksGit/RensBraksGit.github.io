function renderBlogGrid() {
    const blogGrid = document.getElementById("blog-grid");
    if (!blogGrid) return; // Safety check
    
    blogGrid.innerHTML = `
        <div class="row">
            ${blogs.map(blog => `
                <div class="col-md-4 mb-4">
                    <div class="card">
                        <img src="${blog.image}" class="card-img-top" alt="${blog.title}">
                        <div class="card-body">
                            <h5 class="card-title">${blog.title}</h5>
                            <p class="card-text">${blog.description}</p>
                            <button class="btn btn-primary" onclick="route('/blogdetails?id=${blog.id}')">Read More</button>

                        </div>
                    </div>
                </div>
            `).join('')}
        </div>
    `;
}