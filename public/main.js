function buildHomepage() {
    buildLogoBar();
    buildVideosBar();
    buildContactsBar();
}

function buildTopBar() {
    var stars = $("<div/>").attr("id", "stars-banner");
    $("body").append(stars);
}

function buildBar() {
    var barPanel = $("<div/>").addClass("bar-panel");
    $("body").append(barPanel);
    return barPanel;
}

function buildLogoBar() {
    var barPanel = buildBar();
    $(barPanel).addClass("logo-background");
    var logo = $("<img/>").attr("src", "public/img/jkang.svg")
        .addClass("img-simple bar-padding-mid")
        .click(function() {
            window.location = "/"; //TODO Should go to resume
        });
    $(barPanel).append(logo);
}

function buildVideosBar() {
    var barPanel = buildBar();
    $(barPanel).addClass("lights-background");
    var selfImg = $("<img/>").attr("id", "self-img")
        .attr("src", "public/img/run.svg");
    $("body").append(selfImg);
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

function buildContactsBar() {
    var barPanel = buildBar();
    $(barPanel).addClass("contacts-background");
    var cloudPanel = $("<div/>").addClass("clouds");
    $(barPanel).append(buildCircleLinkBtn("fa-envelope", "#9EC44F", "mailto:justinkan9@yahoo.com"));
    $(barPanel).append(buildCircleLinkBtn("fa-linkedin", "#F1822D", "https://www.linkedin.com/in/justin-kang-a4b5125b"));
    $(barPanel).append(buildCircleLinkBtn("fa-github", "#BE2481", "https://github.com/justinkan9"));
    $(barPanel).append(buildCircleLinkBtn("fa-facebook", "#427BA6", "https://www.facebook.com/justinokang"));
    $(barPanel).append(cloudPanel);
}
