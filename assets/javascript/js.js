
 $( document ).ready(function() {

// Variables for search. Animate keeps images still.
 var topics = ["shane","sleep","cats","daewon","loveandhiphop","kodak","cardi b"];
     // Button rendering function
    function renderButtons(topics, classToAdd, area) {

          $(area).empty();

         for (var i = 0; i < topics.length; i++) {
           var a = $("<button>");

          a.addClass(classToAdd);

          a.attr("data-name", topics[i]);
          a.text(topics[i]);

          $(area).append(a);
        }
      }

$(document).on("click", ".topics-button", function() {
    console.log("pushed");
    $("#gifs").empty();
    $(".topics-button").removeClass("active");
    $(this).addClass("active");

    var topic = $(this).attr("data-name");
    var queryURL = "http://api.giphy.com/v1/gifs/search?q=" + topic + "&api_key=dc6zaTOxFJmzC&limit=10";

    $.ajax({
        url: queryURL,
        method: "GET"
    })
        .done(function (response) {
            console.log(response);
            var results = response.data;
            for (var i = 0; i < results.length; i++) {

                    var gifDiv = $("<div>");
                    // Stores photo rating
                    var rates = results[i].rating;
                    //Creates paragraph
                    var p = $("<p>").text("Rating: " + rates);



                    var still = results[i].images.fixed_height_still.url;
                    var animated = results[i].images.fixed_height.url;
                    //Creates image class
                    var image = $("<img>");
                    image.attr("src", results[i].images.fixed_height_still.url).val(i);
                    image.attr("data-still", still);
                    image.attr("data-animate", animated);
                    image.attr("data-state", "still");
                    image.addClass("topic-image");

                    gifDiv.append(p);
                    gifDiv.append(image);



                    $("#gifs").append(gifDiv);

                            }

        });
});


$(document).on("click", ".topic-image", function(){
    var state = $(this).attr("data-state");

    if (state === "still") {
        $(this).attr("src", $(this).attr("data-animate"));
        $(this).attr("data-state", "animate");
    }
    else {
        $(this).attr("src", $(this).attr("data-still"));
        $(this).attr("data-state", "still");
    }

});


     $("#addTopic").on("click", function(event) {
         event.preventDefault();
         var newTopic = $("input").eq(0).val();

         if (newTopic.length > 2) {
             topics.push(newTopic);
         }

         renderButtons(topics,"topics-button", "#topicLames");

     });
renderButtons(topics, "topics-button", "#topicLames")
});


