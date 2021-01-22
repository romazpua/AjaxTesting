$(document).ready(function () {

    // receive tasks from the server on page load
    getTasks().then(onTasksReceived)

    //Receiving images from the server
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
            .then(onImagesReceived)
    })

    // Determine which element was clicked
    tasksList.addEventListener('click', (e) => {
        let target = e.target
        if (target.tagName !== 'LI') return
        hightLight(target)
    })

    // Deleting Selected Files
    deleteTasksButton.addEventListener('click', () => {
        const markElements = document.getElementsByClassName('task hightlight')
        let transformCollection = Array.from(markElements)
        const delList = transformCollection.forEach(elem=>{
            deleteTask(elem.dataset.id)
        })
    })

    //highlight the selected task
    const hightLight = (el) => {
        if (el.classList.contains('hightlight')) {
            el.classList.remove('hightlight')
        } else {
            el.classList.add('hightlight')
        }
    }

    // Button for receiving tasks
    getTasksButton.addEventListener('click', () => {
        const promise = getTasks()
        promise.then(onTasksReceived)
    })

    // Send a task to the server
    createTasksButton.addEventListener('click', () => {
        createTask(taskTitle.value, taskDescription.value)
            .then(response => console.log(response))
        taskTitle.value = ''
        taskDescription.value = ''
    })

    // Delete marked tasks
    deleteTasksButton.addEventListener('click', () => {
        deleteTask("a62e6f16-3175-41f1-a8c7-f9769f66fee5")
    })

    // Rendering tasks when they are received from the server
    function onTasksReceived(tasks) {
        const result = document.getElementById('tasks__content')
        result.innerHTML = ''
        tasks.forEach(
            el => {
                const li = document.createElement('li')
                li.innerHTML = el.title + ': ' + el.description;
                li.dataset.id = el.id;
                li.className = 'task'
                result.appendChild(li)
            }
        )
    }

    // Rendering images when they are received from the server
    function onImagesReceived(data) {
        data.forEach(
            el => {
                const pic = document.createElement('img');
                pic.src = el.thumbnail;
                resultBlock.appendChild(pic);
            }
        )
    }
});