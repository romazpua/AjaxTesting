function getImagesOld(choiceSource, pageNumber, countPictures) {

    const promise = $.ajax(`${choiceSource}${pageNumber}${countPictures}`);
    return promise;
}

function getImages(choiceSource, pageNumber, countPictures) {

    const promise = axios.get(`${choiceSource}${pageNumber}${countPictures}`);
    return promise.then((data)=>{
        return data.data;
    });
}