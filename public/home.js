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
                    <FillerPanel/>
                    <AboutMePanel/>
                    <FillerPanel/>
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

var FillerPanel = React.createClass({
    render: function() {
        return(
            <div className="parallax__group">
                <div className="parallax__layer parallax__layer--base">
                </div>
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

var PortfolioPanel = React.createClass({
    render: function() {
        return(
            <div id="portfolio-parallax" className="parallax__group">
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

var ContactsPanel = React.createClass({
    render: function() {
        return(
            <div id="contacts-parallax" className="parallax__group">
                <div className="parallax__layer parallax__layer--base">
                    <img id="logo-img" src="public/img/jkang.svg"/>
                    <h3 className="name-label">Justin   Seokhyun   Kang</h3>
                    <i className="fa fa-angle-down fa-4x scroll-down-img"/>
                </div>
            </div>
        );
    }
});

ReactDOM.render(
    <HomePage/>,
    document.getElementById('content')
);
