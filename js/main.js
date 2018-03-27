var cat = document.getElementById('cat');

cat.addEventListener("mouseover", function() {
    /* CHANGE THE HOVER IMAGE HERE */
    cat.setAttribute("src", "http://www.scaryforkids.com/pics/scary-faces.jpg");
});

cat.addEventListener("mouseout", function() {
    /* CHANGE THE HOVER IMAGE HERE TOO */
    cat.setAttribute("src", "https://gametransfers.com/wp-content/uploads/2018/01/Video-Games-750x460.jpg");
});