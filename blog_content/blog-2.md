<!-- filepath: /c:/ThecodestrugglesofThesner/blog_content/blog-2.md -->
# Loading...

More blogs coming soon...

<div class="loading-animation">
    <div class="dot"></div>
    <div class="dot"></div>
    <div class="dot"></div>
</div>

<style>
.loading-animation {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 20px;
}

.dot {
    width: 10px;
    height: 10px;
    margin: 0 5px;
    background-color: #007bff;
    border-radius: 50%;
    animation: bounce 0.6s infinite alternate;
}

@keyframes bounce {
    to {
        opacity: 0.3;
        transform: translate3d(0, -10px, 0);
    }
}

.dot:nth-child(2) {
    animation-delay: 0.2s;
}

.dot:nth-child(3) {
    animation-delay: 0.4s;
}
</style>