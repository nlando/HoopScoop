$(() => {

  //ideas:

  // - put name of searched park into review name
  //when clicking #search-review-btn, input the value into #review-park-name




  // - give all buttons actions

  // $(document).on('click', '.page', (event) => {
  //   $('#nav-overlay').hide();
  // });

  $(document).on('click', '#menu-hamburger', (event) => {
    console.log('working');
    $('#nav-overlay').show();
    $('#nav-page').show();
  });

  $(document).on('click', '#find-btn', (event) => {
    console.log('working');
    $('html, body').animate({
      scrollTop: $('#find-page').offset().top
    }, 500)
  });

  $(document).on('click', '#review-btn', (event) => {
    console.log('working');
    $('html, body').animate({
      scrollTop: $('#review-page').offset().top
    }, 500)
  });

  $(document).on('click', '#add-btn', (event) => {
    console.log('working');
    $('html, body').animate({
      scrollTop: $('#add-page').offset().top
    }, 500)
  });

  $(document).on('click', '#nav-overlay', (event) => {
    $('#nav-overlay').hide();
  });


  let reviewText = $('#review-search').val();
        if(reviewText !== "") {
            $('#review-park-name').text(reviewText);
        };


// let reviewSearch = '';
// reviewSearch = $('#review-search').value();
//
// $('#search-review-btn').on('click', function(event){
//   event.preventDefault();
// $('#review-park-name').value(reviewSearch);
//
// });


  // - make add page fill-in options with an array
  //when clicking #final-add-hoop-btn, populate the first submission input field
  //when each input field has at least one letter, add the next field
  //only make #final-add-hoop-btn clickable when all field are filled

  let addForm = ['Park/Location Name', 'Address', 'First Name', 'Last Name', 'Email Address'];
  let textElement = '';
    for (let i = 0; i < addForm.length; i++) {
      let inputElement = `<input class= 'add-hoop-info border' type = 'text'
            name = ${addForm[i]}
            placeholder = ${addForm[i]}></input>`;
      $('#add-form').append(inputElement);
    };


function initMap(){
  navigator.geolocation.getCurrentPosition(function(position) {
      // create an object to store lat/lng data
      var userLocation = {
        lat: position.coords.latitude,
        lng: position.coords.longitude
      };
      var map = new google.maps.Map(document.getElementById('map'), {
    center: userLocation,
    zoom: 10,
    scrollwheel: false
  });

  var marker = new google.maps.Marker({
      position: userLocation,
      map: map,
      title: 'User Location'
    });
    });
  }
  initMap();
};

});
