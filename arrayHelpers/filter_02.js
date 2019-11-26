const post = { id: 4, title: 'New post' };

var comments = [
    { postId: 4, content: "hello world" },
    { postId: 4, content: "Good bye world" },
    { postId: 4, content: "I'm sorry" }
];

function commentsForPost(post, comments){
    return comments.filter((comment) => {
        return comment.postId === post.id;
    })
}

console.log(commentsForPost(post, comments));