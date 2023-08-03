function Banner() {
    return (
        <>
        <section className="hero-area hero-area-lg position-relative" id="home">
  <div className="container">
    <div className="row banner_bg">
      <div className="col-lg-6 text-center text-lg-left mb-4 mb-lg-0">
        <h1
          className="position-relative aos-init aos-animate"
          data-aos="zoom-in-up"
          data-aos-delay={600}
        >
          Elevate Your Food &amp; Restaurant Business With{" "}
          <img src="assets/images/feature/maspes.png" className="mt-3" alt="Banner"/>
        </h1>
        <p
          className="position-relative h3 aos-init aos-animate"
          data-aos="zoom-in-up"
          data-aos-delay={800}
        >
          An Ultimate Ordering And Delivery Solution
        </p>
        <h6
          className="text-dark font-weight-normal aos-init aos-animate"
          data-aos="zoom-in-up"
          data-aos-delay={1000}
        >
          With food delivery app development, you can get a
        </h6>
        <p
          className="mb-4 aos-init aos-animate"
          data-aos="zoom-in-up"
          data-aos-delay={1000}
        >
          business-focused solution that will help your business succeed. Our
          dedicated <br />
          developers will work with you to ensure you have full control over
          your <br /> restaurant's business activities.
        </p>
        <ul className="list-inline">
          <li
            className="list-inline-item aos-init aos-animate"
            data-aos="zoom-in"
            data-aos-delay={1500}
          >
            <a className="btn btn-white" href="#">
              <div style={{ display: "flex", flexDirection: "row" }}>
                <div>
                  <i className="fa fa-apple mr-2" />
                </div>
                <div>
                  <div style={{ fontSize: 10, textAlign: "left" }}>
                    Available on the
                  </div>
                  <div className="banner-btn">App Store </div>
                </div>
              </div>
            </a>
          </li>
          <li
            className="list-inline-item mb-3 mb-lg-0 aos-init aos-animate"
            data-aos="zoom-in"
            data-aos-delay={1600}
          >
            <a className="btn btn-white" href="#">
              <div style={{ display: "flex", flexDirection: "row" }}>
                <div>
                  {/* <img
                    src="assets/images/icon/001-google-play.png"
                    className="img-fluid mr-2"
                    alt="googleplay"
                  /> */}
                </div>
                <div>
                  <div style={{ fontSize: 10, textAlign: "left" }}>
                    Get it on
                  </div>
                  <div className="banner-btn"> Google Play</div>
                </div>
              </div>
            </a>
          </li>
        </ul>
      </div>
      <div className="col-lg-6">
        <img
          src="/static/media/banner.3d2cccd44c867e74beb64814eeb0d201.svg"
          className="img-fluid aos-init aos-animate"
          data-aos="fade-left"
          data-aos-delay={1500}
          alt="Banners"
        />
      </div>
    </div>
  </div>
  {/* <img
    src="assets/images/shape/about_s4_lines 1.png"
    className="img-fluid bg-shape-4 aos-init aos-animate"
    alt="shape"
    data-aos="fade-left"
    data-aos-delay={1500}
  /> */}
</section>
</>
    )
}

export default Banner;