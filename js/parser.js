function htmlEscape(str) {
    return String(str)
            .replace(/&/g, '&amp;')
            .replace(/"/g, '&quot;')
            .replace(/'/g, '&apos;')
            .replace(/</g, '&lt;')
            .replace(/>/g, '&gt;')
            .replace(/{/g, '&#123;')
            .replace(/}/g, '&#125;');
}

$("#source").on('keyup keypress change paste', function(event) {
    setTimeout(function () {
        var source = $("#source").val();
        $("#result").val(htmlEscape(source));
    }, 100);
});

$("#result").on('keyup keypress change paste', function(event) {
    setTimeout(function () {
        var result = $("#result").val();
        $("#source").html(result);
    }, 100);
});

$("#resultBtn").click(function(){
    $("#result").select();

    $("#result").mouseup(function() {
        return false;
    });
});

$("#sourceBtn").click(function(){
    $("#source").select();

    $("#source").mouseup(function() {
        return false;
    });
});