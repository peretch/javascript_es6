var posts = [
    { id: 1, title: 'New post' },
    { id: 2, title: 'Old post' }
];

var comment = { postId: 1, content: 'My post'};

// Function to bring the parent post of a comment
function postForComment(posts, comment){
    return posts.find((post) => {
        return post.id === comment.postId;
    })
}

console.log(postForComment(posts, comment));