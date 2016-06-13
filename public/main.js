function buildHomepage() {
    buildLogoBar();
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
    (barPanel).addClass("logo-background");
    var logo = $("<img/>").attr("src", "public/img/jkang.svg")
        .addClass("img-simple bar-padding-mid")
        .click(function() {
            window.location = "/"; //TODO Should go to resume
        });
    $(barPanel).append(logo);
}

function buildCircleLinkBtn(icon, color, href = "#") {
    var img = $("<i/>").addClass("fa fa-4x " + icon);
    var link = $("<a/>").attr("href", href)
        .addClass("circle-link")
        .css("color", color)
        .append(img);
    return link;
}

function buildContactsBar() {
    var barPanel = buildBar();
    $(barPanel).addClass("contacts-background");
    var cloudPanel = $("<div/>").addClass("clouds");
    $(barPanel).append(buildCircleLinkBtn("fa-envelope", "#9EC44F"));
    $(barPanel).append(buildCircleLinkBtn("fa-facebook", "#427BA6"));
    $(barPanel).append(buildCircleLinkBtn("fa-github", "#BE2481"));
    $(barPanel).append(buildCircleLinkBtn("fa-linkedin", "#F1822D"));
    $(barPanel).append(buildCircleLinkBtn("fa-tumblr", "#FFD65B"));
    $(barPanel).append(cloudPanel);
}
