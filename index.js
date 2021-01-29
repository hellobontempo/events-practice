//select button

const alertButton = document.querySelector("button.btn")
const consoleButton = document.querySelectorAll("button.btn")[1]
// alertButton.addEventListener('click', clickButtonAlert)


// function clickButtonAlert(event) {
//     alert('Alert!')
// }

// alertButton.addEventListener('click', function (event) {alert('Alert!')})

alertButton.addEventListener('click', (event) => {alert('using JS command alert')})

consoleButton.addEventListener('click', (event) => {console.log('this should be console logged?')})


const form = document.getElementById('comment-form')
const commentContainer = document.getElementById('comments-container')

form.addEventListener("submit", handleCommentSubmit)

function handleCommentSubmit(event) {
    event.preventDefault()
    const getComment = document.getElementById('new-comment').value
    commentContainer.innerHTML += `<p class='comments'>${getComment}</p>`
    form.reset()
}


const comments = document.getElementsByClassName('comments')


comments. addEventListener('mouseover', (event) => {console.log('hovering over comment')})

// add event listener, change text to blue over comment