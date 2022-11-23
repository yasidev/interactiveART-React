export default function Footer(){
    return(
        <footer className="footer">
        <section className="newsletter">
          <div className="container">
            <div className="newsletter-wrapper">
              <h3 className="newsletter-text">
                Create a new generation website for your business.
              </h3>
              <div className="newsletter-email">
                <input
                  type="text"
                  className="newsletter-txt"
                  placeholder="Email address"
                />
                <button className="newsletter-btn">
                  <img src="./src/assets/images/right-arrow.svg" alt="" />
                </button>
              </div>
            </div>
          </div>
        </section>

        <section className="copyright">
          <div className="container">
            <div className="copyright-wrapper">
              <p className="copyright-text">Copyright © 2020</p>
              <p className="copyright-text">
                Interactive ART Company All rights reserved
              </p>
            </div>
          </div>
        </section>
      </footer>
    )
}