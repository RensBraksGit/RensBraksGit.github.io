const renderBlogDetails = async (blogId) => {
    const blog = blogs.find(b => b.id == blogId);
    if (!blog) {
        document.getElementById("content").innerHTML = "<h1>Blog not found</h1>";
        return;
    }

try {
    const response = await fetch(`../../blog_content/blog-${blog.id}.md`);
    const markdown = await response.text();
    const htmlContent = marked.parse(markdown);
    const blogDetailsHtml = `
    <div class="container mt-5">
   
        <div>${htmlContent}</div>
    </div>
`;
document.getElementById("blog-details").innerHTML = blogDetailsHtml;
} catch (error) {
    document.getElementById("content").innerHTML = "<h1>Error loading blog content</h1>";
}


};