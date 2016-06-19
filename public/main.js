function buildHomepage() {
    buildLogoBar();
    buildAboutMeBar();
//    buildVideosBar();
//    buildRainBar();
    buildContactsBar();
}

function buildBarPage(imagePath) {
    var barPanel = $("<div/>").addClass("bar-panel parallax-window")
        .attr("data-parallax", "scroll")
        .attr("data-image-src", "public/img/" + imagePath);
    $("body").append(barPanel);
    return barPanel;
}

function buildLogoBar() {
    var barPanel = buildBarPage("rainbow-star-min.png");
    var logo = $("<img/>").attr("src", "public/img/jkang.svg")
        .attr("id", "logo-img")
    var nameLabel = $("<h3/>").addClass("name-label")
        .text("Justin   Seokhyun   Kang");
    var scrollDownImg = $("<i/>").addClass("fa fa-angle-down fa-4x scroll-down-img");
    $(barPanel).append(logo)
        .append(nameLabel)
        .append(scrollDownImg);
}

function buildAboutMeBar() {
    var barPanel = buildBarPage("field-min.jpg");
    var selfImg = $("<img/>").attr("id", "self-img")
        .attr("src", "public/img/run.svg");
    $(barPanel).append(selfImg);
}

function buildContactsBar() {
    var barPanel = buildBarPage("clouds-min.jpg");
    $(barPanel).addClass("contacts-background");
    var cloudPanel = $("<div/>").addClass("clouds");
    $(barPanel).append(buildCircleLinkBtn("fa-envelope", "#9EC44F", "mailto:justinkan9@yahoo.com"));
    $(barPanel).append(buildCircleLinkBtn("fa-linkedin", "#F1822D", "https://www.linkedin.com/in/justin-kang-a4b5125b"));
    $(barPanel).append(buildCircleLinkBtn("fa-github", "#BE2481", "https://github.com/justinkan9"));
    $(barPanel).append(buildCircleLinkBtn("fa-facebook", "#427BA6", "https://www.facebook.com/justinokang"));
    $(barPanel).append(cloudPanel);
}

function buildCircleLinkBtn(icon, color, href) {
    var img = $("<i/>").addClass("fa fa-4x " + icon);
    var link = $("<a/>").attr("href", href)
        .attr("target", "_blank")
        .addClass("circle-link")
        .css("color", color)
        .append(img);
    return link;
}





/*
function buildVideosBar() {
    var barPanel = buildBarPage();
    $(barPanel).addClass("lights-background");
    var selfImg = $("<img/>").attr("id", "self-img")
        .attr("src", "public/img/run.svg");
    $("body").append(selfImg);
}

function buildRainBar() {
    var barPanel = buildBarPage();
    $(barPanel).addClass("rain-background");
}
*/
