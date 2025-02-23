const renderBlogList = () => {
    const blogList = document.getElementById("blog-list");
    if (!blogList) return;

    blogList.innerHTML = blogs.map(blog => {
        const date = new Date(blog.datePublished);
        const formattedDate = isNaN(date.getTime()) ? "Soon" : date.toLocaleDateString('en-GB', {
            day: '2-digit',
            month: '2-digit',
            year: 'numeric'
        });

        return `
            <tr>
                <td>${blog.title}</td>
                <td>${blog.description}</td>
                <td>${formattedDate}</td>
                <td class="wide-column"><a href="" onclick="event.preventDefault(); route('/blogdetails?id=${blog.id}')" class="btn btn-primary mt-3">Go to article</a></td>
            </tr>
        `;
    }).join('');
};