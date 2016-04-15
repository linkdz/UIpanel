function changeSource() {
    var image = document.querySelectorAll("img")[0];
    var source = image.src = image.src.replace("/images/icon-beginhere.gif","01.png");
}
changeSource();
