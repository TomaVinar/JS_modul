let arr = JSON.parse(localStorage.getItem('post'));

for (const arrElement of arr) {
    let postDiv = document.createElement('div');
    postDiv.classList.add('posts_block');
    let titleId = document.createElement('div');
    let titlePost = document.createElement('h4');
    let content = document.createElement('p');
    let button = document.createElement('button');

    titleId.innerText = `${arrElement.id}`;
    titlePost.innerText = `${arrElement.title}`;
    content.innerText = `${arrElement.body}`;
    button.innerText = `Show all comments`;

    postDiv.append(titleId, titlePost, content, button);
    document.body.appendChild(postDiv);

    button.addEventListener('click', function onClick () {
        console.log('Click');
        button.removeEventListener('click', onClick);
        fetch('https://jsonplaceholder.typicode.com/comments')
            .then(response => response.json())
            .then(comments => {
                for (const comment of comments) {
                    if (arrElement.id === comment.postId) {
                        let divComments = document.createElement('div');
                        divComments.classList.add('main_section');
                        let postDiv = document.createElement('div');
                        postDiv.classList.add('post_div');
                        let section = document.createElement('div');
                        section.classList.add('post_block');
                        let commentId = document.createElement('p');
                        commentId.classList.add('text');
                        let name = document.createElement('h5');
                        name.classList.add('post_name');
                        let email = document.createElement('p');
                        email.classList.add('email_info');
                        let bodyComment = document.createElement('p');
                        bodyComment.classList.add('body_post');

                        commentId.innerText = `${comment.id}`;
                        name.innerText = `${comment.name}`;
                        email.innerText = `${comment.email}`;
                        bodyComment.innerText = `${comment.body}`;

                        section.append(commentId, name, email, bodyComment);
                        postDiv.append(section);
                        divComments.append(postDiv);
                        document.body.appendChild(divComments);
                    }
                }
            });
    });
}