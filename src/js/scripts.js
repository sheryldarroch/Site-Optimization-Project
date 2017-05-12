var arr = [
            {
              "id": "photo1-1",
							"photo": "img/photos/photo1.jpg",
              "avatar": "img/avatars/avatar2.jpg"
            },
            {
              "id": "photo1-2",
							"photo": "img/photos/photo2.jpg",
              "avatar": "img/avatars/avatar3.jpg"
            },           
            {
              "id": "photo1-3",							
              "photo": "img/photos/photo3.jpg",
              "avatar": "img/avatars/avatar4.jpg"
            },
            {
              "id": "photo2-1",
							"photo": "img/photos/photo4.jpg",
              "avatar": "img/avatars/avatar5.jpg"
            },
            {
              "id": "photo2-2",
							"photo": "img/photos/photo5.jpg",
              "avatar": "img/avatars/avatar6.jpg"
            },
            {
              "id": "photo2-3",
							"photo": "img/photos/photo6.jpg",
              "avatar": "img/avatars/avatar7.jpg"
            },
            {
              "id": "photo3-1",
							"photo": "img/photos/photo7.jpg",
              "avatar": "img/avatars/avatar3.jpg"
            },	
            {
              "id": "photo3-2",
							"photo": "img/photos/photo8.jpg",
              "avatar": "img/avatars/avatar7.jpg"
            },
            {
              "id": "photo3-3",
							"photo": "img/photos/photo9.jpg",
              "avatar": "img/avatars/avatar4.jpg"
            },
];

var modal ='';
$.each(arr, function(index, item) {
    modal += '<div id="' + item.id + '" class="reveal-modal" data-reveal aria-hidden="true" role="dialog">';
    modal += '<h2 class="modalTitle">Photo</h2>';
    modal += '<img src="' + item.photo + '" alt="Photo one" >';
    modal += '<div class="info">';
    modal += '<img src="' + item.avatar + '" alt="Photo"  class="avatar">';
    modal += '<span class="attribution">Photo by <b>Werner Bechtelar</b></span>';
    modal += ' </div>';
    modal += '<a class="close-reveal-modal" aria-label="Close">&#215;</a>';
    modal += '</div>';
});  

$('#lightbox').html(modal);

            
            
            
                
                
           
            
        