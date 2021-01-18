$(document).ready(function () {

    const resultBlock = document.querySelector('.content')
    const clickMeButton = document.querySelector('#click-me')
    const choiceSource = document.getElementById('select_content')

    clickMeButton.addEventListener('click', () => {

        let pageNumber;
        let countPictures;

        if (choiceSource.value === "https://jsonplaceholder.typicode.com/photos") {
            pageNumber = '';
            countPictures = '';
        } else {
            pageNumber = '?page=' + document.getElementById('page-number').value
            countPictures = '&count=' + document.getElementById('countPictures').value
        }

        const promise = getImages(choiceSource.value, pageNumber, countPictures);
        promise
            .then(onDataReceived)
    })

    function onDataReceived(data) {
        data.forEach(
            el => {
                const pic = document.createElement('img');
                pic.src = el.thumbnail;
                resultBlock.appendChild(pic);
            }
        )
    }
});

