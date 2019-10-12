

// $( document ).ready(function() {
//  $.get("https://jsonplaceholder.typicode.com/photos", function(data, status){
//    console.log(status)
//   let title = data[0].title
//   let url = data[0].url
//   let id = data[0].id
//   let thumbUrl = data[0].thumbnailUrl

//   console.log(`${title} - ${url} - ${id} - ${thumbUrl}`)
//   let imgElement = $('.card-img-top')
//   imgElement.attr('src', url)

//   let cardTitle = $('.card-title')
//   cardTitle.html(id)

//   let cardText = $('.card-text')
//   cardText.html(title)

//   let cardBtn = $('.btn')
//   cardBtn.attr('href', thumbUrl)

// });
// });

$( document ).ready(function() {
  $.get("https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY", function(data, status){
    console.log(status)
   let title = data.explination
   let url = data.url
   let id = data.title
   let thumbUrl = data.hdurl
 
   console.log(`${title} - ${url} - ${id} - ${thumbUrl}`)
   let imgElement = $('.card-img-top')
   imgElement.attr('src', url)
 
   let cardTitle = $('.card-title')
   cardTitle.html(id)
 
   let cardText = $('.card-text')
   cardText.html(title)
 
   let cardBtn = $('.btn')
   cardBtn.attr('href', thumbUrl)
 
 });
 });