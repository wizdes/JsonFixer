$(document).ready(function () {
    $('#inputbox').bind('input propertychange', function () {
        $('#outputbox').val(JSON.stringify(JSON.parse($('#inputbox').val()), null, 4));
    });
    
    $('#copybtn').click(function () {
        var copyTextarea = document.querySelector('.outputtextbox');
        copyTextarea.select();
        document.execCommand('copy');
        copyTextarea.selectionStart = copyTextarea.selectionEnd = -1;
    })    
})