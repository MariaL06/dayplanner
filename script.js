$(document).ready(function(){
    console.log("jquery is loaded")
    $("#9am").val()
    $(".btn").on("click",function(){
        var btn=$(this).val()
  var userInput = $(btn).val()
        console.log(userInput)
    })
})

$(document).ready(function(){
    console.log("jquery is loaded")
    $("#10am").val()
    $(".btn").on("click",function(){
        var btn=$(this).val()
  var userInput = $(btn).val()
        console.log(userInput)
    })
})

$(document).ready(function(){
    console.log("jquery is loaded")
    $("#11am").val()
    $(".btn").on("click",function(){
        var btn=$(this).val()
  var userInput = $(btn).val()
        console.log(userInput)
    })
})

$(document).ready(function(){
    console.log("jquery is loaded")
    $("#12pm").val()
    $(".btn").on("click",function(){
        var btn=$(this).val()
  var userInput = $(btn).val()
        console.log(userInput)
    })
})

$(document).ready(function(){
    console.log("jquery is loaded")
    $("#1pm").val()
    $(".btn").on("click",function(){
        var btn=$(this).val()
  var userInput = $(btn).val()
        console.log(userInput)
    })
})

$(document).ready(function(){
    console.log("jquery is loaded")
    $("#2pm").val()
    $(".btn").on("click",function(){
        var btn=$(this).val()
  var userInput = $(btn).val()
        console.log(userInput)
    })
})

$(document).ready(function(){
    console.log("jquery is loaded")
    $("#3pm").val()
    $(".btn").on("click",function(){
        var btn=$(this).val()
  var userInput = $(btn).val()
        console.log(userInput)
    })
})

$(document).ready(function(){
    console.log("jquery is loaded")
    $("#4pm").val()
    $(".btn").on("click",function(){
        var btn=$(this).val()
  var userInput = $(btn).val()
        console.log(userInput)
    })
})
$(document).ready(function(){
    console.log("jquery is loaded")
    $("#5pm").val()
    $(".btn").on("click",function(){
        var btn=$(this).val()
  var userInput = $(btn).val()
        console.log(userInput)
    })
})

$(document).ready(function() {
    function formatDate(date) {
      date.each(function(){
        var formattedDate = $(this).text();
        var d = moment(formattedDate, "YYYY-MM-DDTHH:mm:ss");
        $(this).html( d.format("dddd, MMMM Do YYYY, h:mm:ss a"));

      });
  };

 formatDate($('.entry-time'));
});