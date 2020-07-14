$(function () {
    $(".change-devoured").on("click", function (event) {
        var id = $(this).data("id");
        var newDevoured = $(this).data("newdevoured");

        var newDevouredState = {
            devoured: neDevoured
        };
        $.ajax("/api/burgers/" + id, {
            type: "PUT",
            data: newDevouredState
        }).then(
            function () {
                console.log("changed devoured to", newDevoured);
                location.reload();
            }
        )
    });


    $(".create-form").on("submit", function (event) {
        event.preventDefault();
        var newBurger = {
            name: $("#burg").val().trim(),
            devoured: $("[name = devoured]: checked").val().trim()
        };

        $.ajax("/api/cats", {
            type: "POST",
            data: newBurger
        }).then(
            function () {
                console.log("Created new Burger");
                location.reload();
            }
        );
    });

    $(".del-btn").on("click", function(event){
        event.preventDefault();
        let id = $(this).attr("data-id");

        $.ajax("/api/burgers" + id, {
            type: "DELETE"
        }).then (function(){
            console.log(`Deleted burger with ID = ${id}`)
            location.reload();
        })
    })
});
