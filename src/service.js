// function getImagesOld(choiceSource, pageNumber, countPictures) {
//
//     const promise = $.ajax(`${choiceSource}${pageNumber}${countPictures}`);
//     return promise;
// }

function getImages(choiceSource, pageNumber, countPictures) {

    const promise = axios.get(`${choiceSource}${pageNumber}${countPictures}`);
    return promise.then((data)=>{
        return data.data;
    });
}

function getTasks() {
    const promise = axios.get('https://repetitora.net/api/JS/Tasks?widgetId=15984')
    return promise.then((response) => {
        return response.data;
    })
}

function createTask(title) {
    const promise = axios.post(`https://repetitora.net/api/JS/Tasks?widgetId=15984&title=${title}`)
    return promise.then((response) => {
        return response.data;
    })
}