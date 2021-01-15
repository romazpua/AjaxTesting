$(document).ready(function () {

    const resultBlock = document.querySelector('.content')

    const clickMeButton = document.querySelector('#click-me')

    clickMeButton.addEventListener('click', () => {
        getImages(pageNumber.value, countPictures.value, onDataReceived)
    })
    let pageNumber = document.getElementById('page-number')

    let countPictures = document.getElementById('countPictures')

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

