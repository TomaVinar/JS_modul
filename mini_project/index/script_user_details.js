let array = JSON.parse(localStorage.getItem('user'));

for (const element of array) {
        let block = document.createElement('div');
        block.classList.add('main_block');
        let userBlock = document.createElement('div');
        userBlock.classList.add('user_block');
        let idUser = document.createElement('div');
        idUser.classList.add('id_user')
        let name = document.createElement('h4');
        let userName = document.createElement('p');
        let phone = document.createElement('div');
        let email = document.createElement('p');
        let divGeo = document.createElement('div');
        divGeo.classList.add('geo_position');
        let geoLat = document.createElement('p');
        let geoLng = document.createElement('p');
        let companyName = document.createElement('p');
        let companyCatch = document.createElement('div');
        let companyBs = document.createElement('div');
        let website = document.createElement('div');
        let btn = document.createElement('button');
        let addressCity = document.createElement('div');
        let addressStreet = document.createElement('div');
        let addressSuite = document.createElement('div');
        let addressZip = document.createElement('div');

        idUser.innerText = `${element.id}`;
        name.innerText = `${element.name}`;
        userName.innerText = `${element.username}`;
        phone.innerText = `${element.phone}`;
        email.innerText = `${element.email}`;
        addressCity.innerText = `${element.address.city}`;
        addressStreet.innerText = `${element.address.street}`;
        addressSuite.innerText = `${element.address.suite}`;
        addressZip.innerText = `${element.address.zipcode}`;
        geoLat.innerText = `${element.address.geo.lat}`;
        geoLng.innerText = `${element.address.geo.lng}`;
        companyName.innerText = `${element.company.name}`;
        companyCatch.innerText = `${element.company.catchPhrase}`;
        companyBs.innerText = `${element.company.bs}`;
        website.innerText = `${element.website}`;
        btn.innerText = `Post of current user`;

        divGeo.append(geoLng, geoLat);
        userBlock.append(idUser, name, userName, phone, email, addressCity, addressStreet, addressSuite, addressZip,
            divGeo, companyName, companyCatch, companyBs, website, btn);
        block.append(userBlock);
        document.body.append(block);

        btn.addEventListener('click', function onClick () {
            console.log('On clicked');
                btn.removeEventListener('click', onClick);

                 fetch('https://jsonplaceholder.typicode.com/posts')
                .then(response => response.json())
                .then(posts => {
                    for (const post of posts) {
                        if (post.userId === element.id) {
                            let postSection = document.createElement('div');
                            postSection.classList.add('div_posts');
                            let divTitles = document.createElement('div');
                            divTitles.classList.add('titles');
                            let titleSection = document.createElement('div');
                            titleSection.classList.add('title_section');
                            let title = document.createElement('p');
                            title.classList.add('title_name');
                            let buttonPost = document.createElement('button');


                            buttonPost.innerText = `More`;
                            buttonPost.classList.add('button_posts');
                            title.innerText = `${post.title}`;

                            titleSection.append(title, buttonPost);
                            divTitles.append(titleSection);
                            postSection.append(divTitles);
                            document.body.appendChild(postSection);

                            buttonPost.addEventListener('click', function () {
                                let postInfo = posts.filter(value => value.id === post.id);
                                localStorage.setItem('post', JSON.stringify(postInfo));
                                location.href = 'post_details.html';
                            })
                        }
                    }
                })
            })
}

