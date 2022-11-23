import Button from "./Button";
import Menu from "./Menu";

export default function Header(){
    return(
        <header className="header">
        <div className="container">
          <section className="header-top">
            <nav className="nav">
              <div className="nav-logo">
                <img
                  className="nav-logo-img"
                  src="./src/assets/images/Interactive-ART.png"
                  alt="logo"
                />
              </div>
              <Menu/>
            </nav>
            <a href="#" className="header-link">
              Contact us
            </a>
            <span className="header-icon">
              <i className="fa fa-bars"></i>
            </span>
          </section>
          <section className="header-bottom" id="header-bottom">
            <div className="header-content">
              <div className="header-content-left">
                <div className="header-content-wrapper">
                  <h1 className="header-content-title">
                    Create a new generation website for your business.
                  </h1>
                  <p className="header-content-text">
                    There are many variations of passages of Lorem Ipsum
                    available, but the majority have suffered alteration in some
                    form, by injected humour, or randomised words which don't
                  </p>
                  <Button/>
                </div>
              </div>
              <div className="header-content-right">
                <img
                  src="./src/assets/images/header-img.svg"
                  className="header-content-img"
                  alt=""
                />
              </div>
            </div>
          </section>
        </div>
      </header>
    )
}