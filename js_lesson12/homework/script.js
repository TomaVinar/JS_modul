 // 1.
// Отримати відповідь з цього ресурсу відповідь, та вивести в документ об'єкти. Застилізувати, за допомоги css, щоб отримати 5 елементів в рядку.
// Для кожного елементу свій блок div.post
// Всі характеристики повинні мати свої блоки всередені div.post
// https://jsonplaceholder.typicode.com/posts

fetch('https://jsonplaceholder.typicode.com/posts')
.then (response => response.json())
     .then (posts => {
         for (const post of posts) {
             let wrap = document.createElement('div');
             wrap.classList.add('wrapper');
             let mainDiv = document.createElement('div');
             mainDiv.classList.add('main_container');
             let postContainer = document.createElement('div');
             postContainer.classList.add('post_container');
             let divId = document.createElement('p');
             let divIdUser = document.createElement('p');
             let h5 = document.createElement('h5');
             let bodyElement = document.createElement('p');
             divId.innerText = `${post.id}`;
             divIdUser.innerText = `User ID ${post.userId}`;
             h5.innerText = `${post.title}`;
             bodyElement.innerText = `${post.body}`;

             postContainer.append(divId, divIdUser, h5, bodyElement);
             mainDiv.append(postContainer);
             wrap.appendChild(mainDiv);
             document.body.appendChild(wrap);
         }
     })


//     2.
// Отримати відповідь з цього ресурсу відповідь, та вивести в документ як в прикладі на занятті.
//     Для кожного елементу свій блок div.comment
// Всі характеристики повинні мати свої блоки всередені div.comment
// https://jsonplaceholder.typicode.com/comments

fetch('https://jsonplaceholder.typicode.com/comments')
     .then(response => response.json())
     .then(comments => {
         console.log(comments)
         for (const comment of comments) {
             let divComment = document.createElement('div');
             let postId = document.createElement('h4');
             let id = document.createElement('div');
             let h3 = document.createElement('h3');
             let pElement =  document.createElement('p');
             let body = document.createElement('p');
             postId.innerText = `${comment.postId}`;
             id.innerText = `${comment.id}`;
             h3.innerText = `${comment.name}`;
             pElement.innerText = `${comment.email}`;
             body.innerText = `${comment.body}`;

             divComment.append(postId, h3, pElement, body);
             document.body.appendChild(divComment);
         }});