// 1.
// Отримати відповідь з цього ресурсу відповідь, та вивести в документ як в прикладі на занятті
// https://jsonplaceholder.typicode.com/users
//     кожному елементу юзера створити кнопку, при клику на яку в окремий блок виводяться всі пости поточного юзера.
//     Кожному елементу post створити кнопку, при клику на яку в окремий блок виводяться всі коментарі поточного поста

fetch ('https://jsonplaceholder.typicode.com/users')
.then(response => response.json())
.then(users => {
    for (const user of users) {
        let divUser = document.createElement('div');
        let userId = document.createElement('p');
        let name = document.createElement('h4');
        let userName = document.createElement('h6');
        let userEmail = document.createElement('div');
        let userAddress = document.createElement('p');
        let btn1 = document.createElement('button');

        userId.innerText = `${user.id}`;
        name.innerText = `${user.name}`;
        userName.innerText = `${user.username}`;
        userEmail.innerText = `${user.email}`;
        userAddress.innerText = `${user.address.street} ${user.address.city} ${user.address.suite} ${user.address.zipcode}`;
        btn1.innerText = `Show comments`;
        divUser.append(userId, name, userName, userEmail, userAddress, btn1);
        document.body.appendChild(divUser);
        btn1.addEventListener('click', function () {
            fetch('https://jsonplaceholder.typicode.com/posts')
                .then(response => response.json())
                .then(posts => {
                    for (const post of posts) {
                        if (user.id === post.userId) {
                            let divPost = document.createElement('div');
                            let id = document.createElement('p');
                            let title = document.createElement('h6');
                            let bodyPost = document.createElement('p');
                            let btn2 = document.createElement('button');
                            id.innerText = `${post.id}`;
                            title.innerText = `${post.title}`;
                            bodyPost.innerText = `${post.body}`;
                            btn2.innerText = `All comments`;
                            divPost.append(id, title, bodyPost, btn2);
                            divUser.appendChild(divPost);
                            btn2.addEventListener('click', function () {
                                fetch('https://jsonplaceholder.typicode.com/comments')
                                    .then(response => response.json())
                                    .then(comments => {
                                        for (const comment of comments) {
                                            if (post.id === comment.postId) {
                                                let divComment = document.createElement('div');
                                                let commentId = document.createElement('p');
                                                let commentName = document.createElement('h5');
                                                let commentEmail = document.createElement('div');
                                                let commentBody = document.createElement('p');

                                                commentId.innerText = `${comment.id}`;
                                                commentName.innerText = `${comment.name}`;
                                                commentEmail.innerText = `${comment.email}`;
                                                commentBody.innerText = `${comment.body}`;
                                                divComment.append(commentId, commentName, commentEmail, commentBody);
                                                divPost.appendChild(divComment);
                                            }
                                        }
                                    })
                            })
                        }
                    }
                })
        })
    }
})