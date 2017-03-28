var index;
var photos;
var total;
function onClickListItem()
{
    var selectedPhotos;
    $(this).toggleClass('selected');
    selectedPhotos = $('.photo-list li.selected');
    total.textContent = selectedPhotos.length;
}
photos = $('.photo-list li');
total  = $('#total em');
$('li').on('click', onClickListItem);
