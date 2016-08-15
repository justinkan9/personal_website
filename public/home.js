var HomePage = React.createClass({
    componentDidMount: function() {
        setTimeout(function() { $("#loading-panel").remove(); }, 3000);
    },
    render: function() {
        return(
            <div id="home-page-div">
                <LoadingScreen/>
                <div className="parallax">
                    <LogoPanel/>
                    <AboutMePanel/>
                    <PortfolioPanel/>
                    <ContactsPanel/>
                </div>
            </div>
        );
    }
});

var LoadingScreen = React.createClass({
    render: function() {
        return(
            <div className="bar-panel" id="loading-panel">
                <div className="fortune-div" id="fortune2"/>
                <div className="fortune-div" id="fortune3"/>
                <div className="fortune-div" id="fortune4"/>
            </div>
        );
    }
});

var LogoPanel = React.createClass({
    render: function() {
        return(
            <div id="logo-parallax" className="parallax__group">
                <div className="parallax__layer parallax__layer--back"/>
                <div className="parallax__layer parallax__layer--base">
                    <img id="logo-img" src="public/img/jkang.svg"/>
                    <h3 className="name-label">Justin   Seokhyun   Kang</h3>
                    <i className="fa fa-angle-down fa-4x scroll-down-img"/>
                </div>
            </div>
        );
    }
});

var AboutMePanel = React.createClass({
    render: function() {
        return(
            <div id="about-me-parallax" className="parallax__group">
                <div className="parallax__layer parallax__layer--base"/>
                <div className="parallax__layer parallax__layer--fore">
                    <h1 className="title-top">about</h1>
                    <div className="container">
                        <AboutTile labelText="run" imgPath="public/img/forest.svg"/>
                        <AboutTile labelText="design" imgPath="public/img/design.svg"/>
                        <AboutTile labelText="code" imgPath="public/img/code.svg"/>
                        <AboutTile labelText="love" imgPath="public/img/heart.svg"/>
                    </div>
                </div>
            </div>
        );
    }
});


var AboutTile = React.createClass({
    render: function() {
        return(
            <div className="col-xs-6 col-sm-3 about-tile">
                <img src={this.props.imgPath}/>
                <p className="tile-label">{this.props.labelText}</p>
            </div>
        );
    }
});

var PortfolioPanel = React.createClass({
    render: function() {
        return(
            <div id="portfolio-parallax" className="parallax__group">
                <div className="parallax__layer parallax__layer--back"/>
                <div className="parallax__layer parallax__layer--base">
                    <img id="logo-img" src="public/img/jkang.svg"/>
                    <h3 className="name-label">Under Construction</h3>
                </div>
            </div>
        );
    }
});

var ContactsPanel = React.createClass({
    render: function() {
        return(
            <div id="contacts-parallax" className="parallax__group">
                <div className="parallax__layer parallax__layer--base">
                    <img id="logo-img" src="public/img/jkang.svg"/>
                    <h3 className="name-label">Under Construction</h3>
                </div>
                <ContactsButtonsPanel/>
            </div>
        );
    }
});

var ContactsButtonsPanel = React.createClass({
    render: function() {
        return(
            <div id="contacts-button-panel" className="bar-panel contacts-background">
                <div className="clouds"/>
                <ContactButton contactLink="mailto:justinkan9@yahoo.com" contactImg="fa-envelope" contactColor="#9EC44F"/>
                <ContactButton contactLink="https://www.linkedin.com/in/justin-kang-a4b5125b" contactImg="fa-linkedin" contactColor="#F1822D"/>
                <ContactButton contactLink="https://github.com/justinkan9" contactImg="fa-github" contactColor="#BE2481"/>
                <ContactButton contactLink="https://www.facebook.com/justinokang" contactImg="fa-facebook" contactColor="#427BA6"/>
            </div>
        );
    }
});

var ContactButton = React.createClass({
    render: function() {
        var style = {
            color: this.props.contactColor
        };
        return(
            <a style={style} href={this.props.contactLink} target="_blank" className="circle-link">
                <i className={"fa fa-4x " + this.props.contactImg}/>
            </a>
        );
    }
});



ReactDOM.render(
    <HomePage/>,
    document.getElementById('content')
);
