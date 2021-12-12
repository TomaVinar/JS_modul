// 1.
// Отримати відповідь з цього ресурсу відповідь, та вивести в документ як в прикладі на занятті
// https://jsonplaceholder.typicode.com/posts
//     зробити кнопку до кожного поста. при кліку на яку виводяться в окремий блок всі коментарі поточного поста

fetch('https://jsonplaceholder.typicode.com/posts')
.then (response => response.json())
    .then (posts => {
            console.log(posts);
            for (const post of posts) {
                    let containerPost = document.createElement('div');
                    let title = document.createElement('p');
                    title.style.fontWeight = 'bold';
                    let id = document.createElement('p');
                    let userId = document.createElement('h6');
                    let bodyDiv = document.createElement('div');
                    let button = document.createElement('button');

                    title.innerText = ` ${post.title}`;
                    id.innerText = `${post.id}`;
                    userId.innerText = `USER Id ${post.userId}`;
                    bodyDiv.innerText = `${post.body}`
                    button.innerText = `Add`

                    containerPost.append(id, userId, title, bodyDiv, button);
                    document.body.appendChild(containerPost);
                    button.addEventListener('click', function () {
                        fetch('https://jsonplaceholder.typicode.com/comments')
                            .then (response => response.json())
                            .then(comments => {
                                for (const comment of comments) {
                                    if (post.id === comment.postId) {
                                        let commentDiv = document.createElement('div');
                                        let commentId = document.createElement('p');
                                        let commentName = document.createElement('h4');
                                        let email = document.createElement('div');
                                        let bodyComment = document.createElement('p');

                                        commentId.innerText = `${comment.id}`;
                                        commentName.innerText = `${comment.name}`;
                                        email.innerText = `${comment.email}`;
                                        bodyComment.innerText = `${comment.body}`;
                                        commentDiv.append(commentId, commentName, email, bodyComment);
                                        document.body.appendChild(commentDiv);
                                    }
                                }
                            })
                    })
            }
    })