console.log("testing main.js");

$(document).ready(() => {
    $('#form').submit((e) => {
        e.preventDefault();
        $.ajax({
            url: '/',
            type: 'post',
            contentType: 'application/json',
            data: JSON.stringify($('#form').serializeArray()),
            success: (responce) => {
                console.log('successfully got responce');
                console.log(responce);
            }

        });
    });
});