
 $( document ).ready(function() {
 

 var topics = ["shane","luan","nyjah","daewon","jason park","",""]


    function renderButtons() {

          $("#animalsButLames").empty();

         for (var i = 0; i < topics.length; i++) {
           var a = $("<button>");
  
          a.addClass("animal");
   
          a.attr("data-name", topics[i]);
              a.text(to[i]);
       
          $("#animalsButLames").append(a);
        }
      }

            $("#addAnimal").on("click", function(event) {
               event.preventDefault();

                var topic = $("#animal-input").val().trim();
         
        topics.push(topic);

         ();
      });

           renderButtons();


    });