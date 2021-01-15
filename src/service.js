function getImages(pageNumber, countPictures, onDataReceived) {
    $.ajax(`https://repetitora.net/api/JS/Images?page=${pageNumber}&count=${countPictures}`, {
        success: onDataReceived
    });
}