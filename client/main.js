const serverUrl = 'http://localhost:3000'
let todoId

$(document).ready(function() {
    auth()
})

function auth() {
    if(localStorage.token) {
        $('#login-page').hide()
        $('#home-page').show()
        fetchPost()
    } else {
        $('#login-page').show()
        $('#home-page').hide()
    }
}

function login(event) {
    event.preventDefault()
        let email = $('#email-user').val()
        let password = $('#password-user').val()
        $.ajax({
            url: `${serverUrl}/login`,
            method: 'post',
            data : {
                email, password
            }
        })
        .done(data => {
            console.log(data, 'Berhasil login')
            localStorage.setItem('token', data.token)
            auth()
        })
        .fail(err => {
            console.log(err.responseJSON, 'Gagal login')
        })
        .always(_ => {
            $('#email-user').val('')
            $('#password-user').val('')
        })
}

function register(event) {
    event.preventDefault()
    let email = $('#newEmail-user').val()
    let password = $('#newPassword-user').val()

    $.ajax({
        url: `${serverUrl}/register`,
        method: 'post',
        data: {
            email, password
        }
    })
    .done(data => {
        console.log('berhasil register user bar')
        auth()
        closeModal()
    })
    .fail(err => {
        console.log(err.responseJSON, 'gagal register')
    })
    .always(_ => {
        $('#newEmail-user').val('')
        $('#newPassword-user').val('')
    })
}

function logout() {
    localStorage.clear()
    auth()
}

function fetchPost() {
    $.ajax({
        url: `${serverUrl}/todos`,
        method: 'get',
        headers: {
            token: localStorage.token 
        }
    })
    .done(data => {
        todo = data.data
        $('#todo-container').empty()
        data.data.forEach(todo => {
            $('#todo-container').append(`
            <li>
                    <div><br>
                        <h5> <b>${todo.title}</b></h5>
                        <h6><b>Description:</b>  ${todo.description}</h4>
                        <p><b>Due date:</b>  ${new Date(todo.due_date).toDateString()}</p>
                        <button onclick="updateTodo(${todo.id})" data-toggle="modal" data-target="#edit-modal" type="button" class="btn btn-primary">Update</button>
                        <button onclick="deleteTodo(${todo.id})" type="button" class="btn btn-success">Done</button>
                    </div><br>
            </li>
            `)
        });
    })
    .fail(err => {
        console.log(err.responseJSON, 'data error')
    })
}

function addTodo(event) {
    event.preventDefault()
    let title = $('#title-todo').val()
    let due_date = $('#date-todo').val()
    let description = $('#description-todo').val()

    $.ajax({
        url: `${serverUrl}/todos`,
        method: 'post',
        headers: {
            token: localStorage.token 
        },
        data: {
            title, due_date, description
        }
    })
    .done(data => {
        fetchPost()
        closeModal()
    })
    .fail(err => {
        console.log(err.responseJSON, 'data error')
    })
}

function deleteTodo(id) {
    $.ajax({
        url: `${serverUrl}/todos/${id}`,
        method: 'delete',
        headers: {
            token : localStorage.token
        }
    })
    .done(_ => {
        fetchPost()
    })
    .fail(err => {
        console.log(err.responseJSON, 'data error')
    })
}

