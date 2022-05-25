$(document).ready(function() {

    init();
    selectUserFromAllUsers();
    $('.all-users-wrapper').hide();
})
const assignedUsers = new Set();

var allUsers;

function init() {
    allUsers = new Set([
        {
            "name": "ihsan",
            "surname" : "akk",
            "department" : "IT"
        },
        {
            "name": "arif",
            "surname" : "esn",
            "department" : "HR"
        },
        {
            "name": "hamza",
            "surname" : "yvz",
            "department" : "ER"
        },
        {
            "name": "kadir",
            "surname" : "bsy",
            "department" : "FG"
        },
        {
            "name": "jack",
            "surname" : "ldn",
            "department" : "IT"
        },
        {
            "name": "linda",
            "surname" : "snm",
            "department" : "JU"
        },
        {
            "name": "mary",
            "surname" : "mkl",
            "department" : "HR"
        }
    ])

    // console.log(allUsers)
    allUsers.forEach(user => listUserJQuery(user))
}

function listUserJQuery(user) {
    $('.all-users-list'). append(`<li class="list-group-item"> 
    Name: ${user.name}
    Surname: ${user.surname}
    Department: ${user.department}
    </li>`)
}

function selectUserFromAllUsers() {
    $(document).on('click', '.list-group-item',function(e) {
        $(e.target).remove();
        $('.assigned-users-list'). append(`<li class="list-group-item"> 
        ${e.target.innerHTML}
    </li>`)
    })
}


function test() {
    console.log(isUploaded)
    console.log(getFromLS())
}

function saveToLS(input) {
    localStorage.setItem('input', JSON.stringify(input));
}

function getFromLS() {
    if(localStorage.getItem("input"))
        return JSON.parse(localStorage.getItem("input"));
    else 
        return null;
}

var isUploaded = false;





function readURL(input) {
    if (input.files && input.files[0]) {

        isUploaded = true;

        saveToLS(input)

        var reader = new FileReader();

        reader.onload = function (e) {
            $('.document-upload-wrap').hide();

            $('.all-users-wrapper').show();
            $('.file-upload-content').show();

            $('.document-title').html(input.files[0].name);
        };

        reader.readAsDataURL(input.files[0]);

    } else {
        removeUpload();
    }
}

function removeUpload() {
    $('.file-upload-input').replaceWith($('.file-upload-input').clone());
    $('.file-upload-content').hide();
    $('.document-upload-wrap').show();
}

$('.document-upload-wrap').bind('dragover', function () {
    $('.document-upload-wrap').addClass('document-dropping');
});
$('.document-upload-wrap').bind('dragleave', function () {
    $('.document-upload-wrap').removeClass('document-dropping');
});