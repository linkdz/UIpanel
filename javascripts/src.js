function changeSource() {

    var image = document.querySelectorAll("img");
    var source = image.getAttribute("src").replace("placeHolder.png", "01.png");
    image.setAttribute("src", source);
}

changeSource();
