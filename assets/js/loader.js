$(document).ready(function () {
    
    $(window).on("load", function () {
        $("#loader-wrapper").fadeOut("slow", function () {
            $("#content").fadeIn("slow"); 
            // Affiche le contenu une fois le loader masqué

        });
    });
});
