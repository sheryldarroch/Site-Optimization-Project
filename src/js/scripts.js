var arr = [
            {
              "id": "photo1-1",
							"photo": "img/photos/photo1.jpg",
              "avatar": "img/avatars/avatar2-tiny.jpg"
            },
            {
              "id": "photo1-2",
							"photo": "img/photos/photo2.jpg",
              "avatar": "img/avatars/avatar3-tiny.jpg"
            },           
            {
              "id": "photo1-3",							
              "photo": "img/photos/photo3.jpg",
              "avatar": "img/avatars/avatar4-tiny.jpg"
            },
            {
              "id": "photo2-1",
							"photo": "img/photos/photo4.jpg",
              "avatar": "img/avatars/avatar5-tiny.jpg"
            },
            {
              "id": "photo2-2",
							"photo": "img/photos/photo5.jpg",
              "avatar": "img/avatars/avatar6-tiny.jpg"
            },
            {
              "id": "photo2-3",
							"photo": "img/photos/photo6.jpg",
              "avatar": "img/avatars/avatar7-tiny.jpg"
            },
            {
              "id": "photo3-1",
							"photo": "img/photos/photo7.jpg",
              "avatar": "img/avatars/avatar3-tiny.jpg"
            },	
            {
              "id": "photo3-2",
							"photo": "img/photos/photo8.jpg",
              "avatar": "img/avatars/avatar7-tiny.jpg"
            },
            {
              "id": "photo3-3",
							"photo": "img/photos/photo9.jpg",
              "avatar": "img/avatars/avatar4-tiny.jpg"
            },
];

function createModal() {
	var modal ='';
	$.each(arr, function(index, item) {
		modal += '<div class="my-slides">';
		modal += '<h2 class="modal-title">Photo</h2>';
		modal += '<img src="' + item.photo + '" alt="Photo" class="modal-img">';
		modal += '<div class="grid-info modal-info">';
		modal += '<img src="' + item.avatar + '" alt="Photo"  class="avatar modal-avatar">';
		modal += '<span class="attribution modal-attr">Photo by <b>Werner Bechtelar</b></span>';
		modal += '</div>';
		modal += '</div>';
	});
	$('#modal-content').html(modal);
}

function displayModal(e) {      
  $(e).click(function(event) {
	  var imgIndex = $(event.target).attr("data-index");
	  var index = parseInt(imgIndex, 10);
	  var slides = $('.my-slides');
	  $('.modal').show();
	  slides.eq(index).show();
  });
} 

function closeModal(e) {
  $(e).click( function() {
      $('.modal').hide();
      $('.my-slides').hide();
  });
}
  
// Call Foundation Framework
$(document).foundation();

$('.grid-img').click( function(event) {
	createModal();
	var imgIndex = $(event.target).attr("data-index");
	console.log(imgIndex);
	  var index = parseInt(imgIndex, 10);
	  console.log(index);
	  var slides = $('.my-slides');
	  console.log(slides);
	  slides.hide();
	  $('.modal').show();
	  slides.eq(index).show();
    closeModal('.close-btn');  
 });  
