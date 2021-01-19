$(document).ready(function () {

    const resultBlock = document.querySelector('.content')
    const clickMeButton = document.querySelector('#click-me')
    const getTasksButton = document.querySelector('#get-tasks')
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
            .then(onImagesReceived)
    })

    getTasksButton.addEventListener('click', () => {
        const promise = getTasks()
        promise.then(onTasksReceived)
    })

    createTask('bla1-bla1-bla1')
        .then((data) => {
            console.log(data)
        })

    createTask('bla2-bla2-bla2')
        .then((data) => {
            console.log(data)
        })


    function onTasksReceived(tasks) {
        tasks.forEach(
            el => {
                const li = document.createElement('li')
                li.innerHTML = el.title;
                document.getElementById('tasks__content').appendChild(li)
            }
        )
    }


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


// PROMISES

// console.log('Request data...')

// setTimeout(()=>{
//     console.log('Preparing data...')
//
//     const backendData = {
//         server: 'aws',
//         port: 2000,
//         status: 'working',
//     }
//
//     setTimeout(()=>{
//         backendData.modified = true;
//         console.log('Data received', backendData)
//     }, 2000)
//
// }, 2000)


// const p = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         console.log('Preparing data...')
//         const backendData = {
//             server: 'aws',
//             port: 2000,
//             status: 'working',
//         }
//         resolve(backendData)
//     }, 2000)
// })
//
// p.then(data => {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             data.modified = true
//             resolve(data)
//         }, 2000)
//     })
// })
//     .then(clientData => {
//         clientData.fromPromise = true
//         return clientData
//     })
//     .then(dat => {
//         console.log('Modified', dat)
//     })
//     .catch(err => {
//         console.log('Error:', err)
//     })
//     .finally(() => {
//         console.log('Finally')
//     })


// const sleep = ms => {
//     return new Promise(resolve => {
//         setTimeout(() => resolve(), ms)
//     })
// }

// sleep(3000).then(() => console.log('After 3 seconds'))
// sleep(5000).then(() => console.log('After 5 seconds'))

// Promise.all([sleep(2000), sleep(5000)])
//     .then(() => console.log('All promises'))
//
// Promise.race([sleep(2000), sleep(5000)])
//     .then(() => console.log('Race promises'))