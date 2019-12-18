
$('#myBtn').click(function() {
$('#myModal').modal()
})
$('#alert').hide();
$('#myBtn2').click(function() {
    $('#alert').toggle();
})

function nothing(){
    console.log('notinf');
    let arr = [uv,ib,87]
}
var birthday = 19840710; // yyyymmdd
var format = 'DDMMYYYY';

$('<p></p>', {
    html: moment(birthday, "YYYYMMDD").format(format)
}).appendTo('#birthday');

$('#inputBirthday').focus(function(){
    let print = setInterval(getDay, 100);
    console.log('focus')
})
$('#inputBirthday').blur(function(){
    clearInterval('print');
    console.log('blur')

})

function getDay(){
    let value;
    value = $('#inputBirthday')[0].value;
    if (value.length == 8){
        $('.print').html(moment(value, "DDMMYYYY").format('[You were born in ] YYYY [year]'));
    }
}