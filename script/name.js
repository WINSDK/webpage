var BLOCK = false;
setInterval(function() {
    if(BLOCK) {
        document.getElementById("name").innerHTML = "./nicolas_mazzon■";
    } else {
        document.getElementById("name").innerHTML = "./nicolas_mazzon ";
    }

    BLOCK = !BLOCK;
}, 500);
