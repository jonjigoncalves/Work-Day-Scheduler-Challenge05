// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.


// firsst thing i did was create a var for each of the important elements in the html.
// i jused the jquery method to select 
$(function () {
    var timeStamp = dayjs()
    // console.log(timeStamp);
    for (var i = 9; i < 18; i++) {
        var currentHour = timeStamp.hour()
        var colorKey = ''
        if(i<currentHour){
            colorKey='past'
        }
        else if(i ===currentHour){
            colorKey='present'
        }
        else{
            colorKey="future"
        }
        // slecect each element and back the jquery classes so that we can format them to look right. so that we can loop them and also update the timestamp hour
        var rowDiv = $('<div>').addClass('row time-block '+colorKey).attr('id', i);
        var hourDiv = $('<div>').addClass('col-2 col-md-1 hour text-center py-3').text(i>12?i-12:i);
        var textArea = $('<textarea>').addClass('col-8 col-md-10 description').attr('rows', '3').val(localStorage.getItem(i))
        var button = $('<button>')
        .addClass('btn saveBtn col-2 col-md-1')
        .attr('aria-label', 'save')
        // also had to the button an eventlistener which in jquery is .on
        .on('click',function(){
            // 
            var hourKey = $(this)
            .parent()
            .attr('id'); 
            
            var textInput = $(this).siblings('.description').val()
            console.log(textInput);
            
            localStorage.setItem(hourKey, textInput)
            })
        var icon = $('<i>').addClass('fas fa-save').attr('aria-hidden', 'true')


        $('.container-lg').append(rowDiv.append(hourDiv, textArea, button.append(icon)))
    }
});
// create a var for the current date with dayjs.
// remeber that when trying to reference the day #, you have to use the capital d, little d references the #index with sunday being 0.
var currentDate = dayjs().format('dddd, MMMM D, YYYY');
$('#currentDay').text(currentDate);


// TODO: Add a listener for click events on the save button. This code should
// use the id in the containing time-block as a key to save the user input in
// local storage. HINT: What does `this` reference in the click listener
// function? How can DOM traversal be used to get the "hour-x" id of the
// time-block containing the button that was clicked? How might the id be
// useful when saving the description in local storage?
//
// TODO: Add code to apply the past, present, or future class to each time
// block by comparing the id to the current hour. HINTS: How can the id
// attribute of each time-block be used to conditionally add or remove the
// past, present, and future classes? How can Day.js be used to get the
// current hour in 24-hour time?
//
// TODO: Add code to get any user input that was saved in localStorage and set
// the values of the corresponding textarea elements. HINT: How can the id
// attribute of each time-block be used to do this?
//
// TODO: Add code to display the current date in the header of the page.