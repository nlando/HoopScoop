$(() => {

  //ideas:

  // - put name of searched park into review name
  //when clicking #search-review-btn, input the value into #review-park-name




  // - give all nav buttons actions

  $('.page').on('click', function() {
    $('#nav-overlay').hide();
  });

//Mobile hamburger nav button
  $('#menu-hamburger').on('click', function() {
    console.log('working');
    $('#nav-overlay').show();
    $('#nav-page').show();
  });

//Find hoops button
  $('#find-btn').on('click', function() {
    console.log('working');
    $('html, body').animate({
      scrollTop: $('#find-page').offset().top
    }, 500)
  });

//Hoop reviews button
  $('#review-btn').on('click', function() {
    console.log('working');
    $('html, body').animate({
      scrollTop: $('#review-page').offset().top
    }, 500)
  });

//Add hoop button
  $('#add-btn').on('click', function() {
    console.log('working');
    $('html, body').animate({
      scrollTop: $('#add-page').offset().top
    }, 500)
  });




//Hiding the mobile hamburger overlay
  $(document).on('click', '#nav-overlay', (event) => {
    $('#nav-overlay').hide();
  });

  //Update park name when searching for new park
    $('#search-review-btn').on('click', function(event){
      let reviewSearch = '';
      reviewSearch = $('#review-search').val();
      event.preventDefault();
    $('#review-park-name').text(reviewSearch);
    $('#review-search').val('');
    });


  //Update form when submitting with with new park info

  $('#final-add-hoop-btn').on('click', function(event){
  event.preventDefault();
  $('#add-overlay').show();
  $('#add-overlay-page').show();
  });


  //Hide "Add Overlay" function

  $(document).on('click', '#add-overlay', (event) => {
    $('#add-overlay').hide();
  });


  // - make add page fill-in options with an array
  //when clicking #final-add-hoop-btn, populate the first submission input field
  //when each input field has at least one letter, add the next field
  //only make #final-add-hoop-btn clickable when all field are filled

  let addForm = ['Park/Location Name', 'Address', 'Name(First)', 'Name(Last)', 'Email-Address'];
  let textElement = '';
    for (let i = 0; i < addForm.length; i++) {
      let inputElement = `<input class= 'add-hoop-info border' type = 'text'
            name = ${addForm[i]}
            placeholder = ${addForm[i]}></input>`;
      $('#add-form').append(inputElement);
    };

//Google maps API
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

});
