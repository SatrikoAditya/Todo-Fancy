const serverUrl = 'http://localhost:3000'
let editId = null

$(document).ready(function() {
    auth()
})

function auth() {
    if(localStorage.token) {
        $('#login-page').hide()
        $('#home-page').show()
        fetchTodo()
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
            alertify.alert('Alert!', err.responseJSON.errors[0], function(){ console.log('Gagal login') });
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
        console.log('berhasil register user baru')
        $('#register-modal').modal('hide')
        alertify.alert('Alert!', 'Account successfully registered!', function(){ console.log('Berhasil Register') });
        auth()
    })
    .fail(err => {
        $('#register-modal').modal('hide')
        alertify.alert('Alert!', err.responseJSON.errors[0], function(){ console.log('Gagal Register') });
    })
    .always(_ => {
        $('#newEmail-user').val('')
        $('#newPassword-user').val('')
    })
}

function logout() {
    localStorage.clear()
    var auth2 = gapi.auth2.getAuthInstance();
    auth2.signOut().then(function () {
      console.log('User signed out.');
    });
    auth()
}

function fetchTodo() {
    $.ajax({
        url: `${serverUrl}/todos`,
        method: 'get',
        headers: {
            token: localStorage.token 
        }
    })
    .done(data => {
        $('#todo-container').empty()
        data.data.forEach(todo => {
            let date = new Date(todo.due_date)
            $('#todo-container').append(`
            <li>
                    <div><br>
                        <h5> <b>${todo.title}</b></h5>
                        <h6><b>Description:</b>  ${todo.description}</h4>
                        <p><b>Due date:</b>  ${new Date(date.getTime() - (date.getTimezoneOffset() * 60000)).toISOString().split("T")[0]}</p>
                        <button onclick="getTodo(${todo.id})" data-toggle="modal" data-target="#edit-modal" type="button" class="btn btn-primary">Update</button>
                        <button style="margin-left: 10px;" onclick="deleteTodo(${todo.id})" type="button" class="btn btn-success">Done</button>
                    </div><br>
            </li>
            `)
        });
    })
    .fail(err => {
        alertify.alert('Alert!', err.responseJSON.errors[0], function(){ console.log('gagal') });
    })
}

function getTodo(id) {
    event.preventDefault()
    editId = id
    $.ajax({
        url: `${serverUrl}/todos/${id}`,
        method: 'get',
        headers: {
            token: localStorage.token
        }
    })
    .done(data => {
        let date = new Date(data.data.due_date)
        $('#edit-title').val(data.data.title)
        $('#edit-date').val(new Date(date.getTime() - (date.getTimezoneOffset() * 60000)).toISOString().split("T")[0])
        $('#edit-description').val(data.data.description)
    })
    .fail(err => {
        console.log(err.responseJSON, 'data error di get todo')
    })
}

function editTodo(event) {
    event.preventDefault()
    let title = $('#edit-title').val()
    let due_date = $('#edit-date').val()
    let description = $('#edit-description').val()
    $.ajax({
        url: `${serverUrl}/todos/${editId}`,
        method: 'put',
        headers: {
            token: localStorage.token
        },
        data: {
            title, description, due_date
        }
    })
    .done(data => {
        fetchTodo()
        $('#edit-modal').modal('hide')
        alertify.alert('Alert!', 'Edit Todo Success!', function(){ console.log('Berhasil edit') });
    })
    .fail(err => {
        alertify.alert('Alert!', err.responseJSON.errors[0], function(){ console.log('gagal edit') });
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
        fetchTodo()
        $('#add-modal').modal('hide')
        alertify.alert('Alert!', 'Add Todo Success!', function(){ console.log('Berhasil add') });
        console.log('masuk')
    })
    .fail(err => {
        alertify.alert('Alert!', err.responseJSON.errors[0], function(){ console.log('gagal add') });
    })
    .always(_ => {
        $('#title-todo').val('')
        $('#date-todo').val('')
        $('#description-todo').val('')
    })
}


function deleteTodo(id) {
    alertify.confirm('Are you sure this activity is finished?', function(yes) {
        if(yes) {
            $.ajax({
                url: `${serverUrl}/todos/${id}`,
                method: 'delete',
                headers: {
                    token : localStorage.token
                },
            })
            .done(_ => {
                alertify.alert('Alert!', `This Todo is Finished!`, function(){ console.log('delete todo') });
                fetchTodo()
            })
            .fail(err => {
                console.log(err.responseJSON, 'data error di delete')
            })
        }
    })
}

function getActivity(event) {
    event.preventDefault()
    $.ajax({
        url: `${serverUrl}/activity`,
        method: 'get',
        headers: {
            token: localStorage.token
        }
    })
    .done(data => {
        alertify.alert('Your random activity', data.activity, function(){ console.log('berhasil random') });
    })
    .fail(err => {
        alertify.alert('Alert!', err.responseJSON.errors[0], function(){ console.log('gagal mendapatkan aktivitasmu') });
    })
}

function onSignIn(googleUser) {
    let id_token = googleUser.getAuthResponse().id_token;
    $.ajax({
        url: `${serverUrl}/googlesign`,
        method: 'post',
        data : {
            id_token 
        }
    })
    .done(data => {
        localStorage.setItem('token', data.token)
        auth()
    })  
    .fail(err => {
        console.log(err.responeJSON, 'err')
    })
}






