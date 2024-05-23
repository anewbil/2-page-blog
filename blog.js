const blogPosts =JSON.parse(localStorage.getItem("savedBlogs"))||[]

// Function to display blog posts on the page
function displayBlogPosts() {
    const blogPostsContainer = document.getElementById('blog-posts');

    blogPosts.forEach(post => {
        const postElement = document.createElement('article');
        postElement.innerHTML = `
        <div class="blog">
        <h2>${post.title}</h2>
        <p>${post.user}</p>
        <p>${post.content}</p>
        </div>
        `;
        blogPostsContainer.appendChild(postElement);
    });
}

// Call the function to display blog posts when the page loads
document.addEventListener('DOMContentLoaded', displayBlogPosts);
