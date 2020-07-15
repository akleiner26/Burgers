$(function () {
    //Sends Burgers to Devoured Column
    $(".change-devoured").on("click", function (event) {
        var id = $(this).data("id");
        var newDevouredState = {
            devoured: true
        };
        //Send Put Request
        $.ajax("/api/burgers/" + id, {
            type: "PUT",
            data: newDevouredState
        }).then(
            function (newDevoured) {
                console.log("changed devoured to", newDevoured);
                //Reload Page for Updated Lists
                location.reload();
            }
        )
    });

//Creates a New Burger
    $(".create-form").on("submit", function (event) {
        event.preventDefault();
        var newBurger = {
            name: $("#burg").val().trim(),
            devoured: 0
        };
//Send Post Request
        $.ajax("/api/burgers", {
            type: "POST",
            data: newBurger
        }).then(
            function () {
                console.log("Created new Burger");
                //Reload page to get updated lists
                location.reload();
            }
        );
    });

//On click function for delete
    $(".del-btn").on("click", function(event){
        event.preventDefault();
        let id = $(this).attr("data-id");

        $.ajax("/api/burgers/" + id, {
            type: "DELETE"
        }).then (function(id){
            console.log(`Deleted burger with ID = ${id}`)
            location.reload();
        })
    })
});
