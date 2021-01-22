// The function receives images from the server
function getImages(choiceSource, pageNumber, countPictures) {
    const promise = axios.get(`${choiceSource}${pageNumber}${countPictures}`);
    return promise.then((data) => {
        return data.data;
    });
}

// The function receives tasks from the server
function getTasks() {
    const promise = axios.get('https://repetitora.net/api/JS/Tasks?widgetId=1336&count=30')
    return promise.then((response) => {
        return response.data;
    })
}

// The function sends a task to the server
function createTask(title, taskDescription) {
    const promise = axios.post('https://repetitora.net/api/JS/Tasks', {
        widgetId: 1336,
        title: title,
        description: taskDescription,
    })
    return promise.then((response) => {
        return response.data;
    })
}

// Function corrects the task
function updateTask(title) {
    const promise = axios.put('https://repetitora.net/api/JS/Tasks', {
        widgetId: 1336,
        title: title
    })
    return promise.then((response) => {
        return response.data;
    })
}

// The function deletes the task by id
function deleteTask(id) {
    const promise = axios.delete(`https://repetitora.net/api/JS/Tasks?widgetId=1336&taskId=${id}`)
    return promise.then((response) => {
        return response.data;
    })
}