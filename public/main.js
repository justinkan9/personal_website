function buildHomepage() {
    buildLogoBar();
    buildAboutMeBar();
    buildPortfolioBar();
//    buildVideosBar();
//    buildRainBar();
    buildContactsBar();
}

function buildBarPage(imagePath) {
    var barPanel = $("<div/>").addClass("bar-panel");
    if(imagePath) {
        $(barPanel).addClass("parallax-window")
            .attr("data-parallax", "scroll")
            .attr("data-image-src", "public/img/" + imagePath);
    }
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
    var selfImg = $("<div/>").attr("id", "self-img");
    $(barPanel).append(selfImg);

    var mainDiv = $("<div/>").addClass("left-main");
    var header = $("<h1/>").addClass("text-header")
        .text("A little bit about me...");
    var innerText = $("<p/>").text("\"Winning is great, sure, but if you are really going to do something in life, the secret is learning how to lose.\"");
    var innerText2 = $("<p/>").text(" --Wilma Rudolph, Olympic Gold Medalist Sprinter");
    var innerText3 = $("<p/>").css("color", "#341798")
        .text("My life began in sunny Southern California where I was born and raised. Graduated from UCSD and eventually made my way up to the lovely Bay Area. Software engineering is my passion and career. Avid runner and admirer of all varieties of art. You may typically find me jogging before dinner, experimenting with unusual and compelling UI code, or painting past midnight.");
    var innerText4 = $("<p/>").css("color", "#A80773")
        .text("Love is love.");
    $(mainDiv).append(header)
        .append(innerText)
        .append(innerText2)
        .append(innerText3)
        .append(innerText4);
    $(barPanel).append(mainDiv);
}

function buildPortfolioBar() {
    var barPanel = buildBarPage("ocean-min.jpg");
    var koiImg = $("<img/>").attr("id", "koi-img")
        .attr("src", "public/img/koi.svg");
    $(barPanel).append(koiImg);
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
