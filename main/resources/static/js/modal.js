//deletelist.htmlの削除ボタンクリック時発火するモーダル
$(document).ready(function() {
    $('a.btn-secondary').on('click', function(e) {
        e.preventDefault();
        var href = $(this).attr('href');
        $('#deleteBtn').attr('href', href);
        $('#confirmModal').modal();
    });
});
