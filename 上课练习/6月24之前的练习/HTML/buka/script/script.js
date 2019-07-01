var mark = $('#mark');
var mask = $('#mask');
var marknote = $('#marknote');
var close = $('.close');
var mybtn = $('.mymark button');
mark.click(function() {
    if (mark.hasClass('marked')) {
        mark.removeClass('marked');
        mark.text('收藏')
        marknote.hide();
    } else {
        mark.addClass('marked');
        mark.text('已收藏')
        marknote.show();
    }
})
marknote.click(function() {
    mask.show();
})
close.click(function() {
    console.log('hhh')
    mask.hide();
})
mybtn.click(function() {
    mask.show();
})