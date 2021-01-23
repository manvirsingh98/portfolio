import React from "react";

const Footer = () => {
  return (
    // <!-- ======= Footer ======= -->
    <footer id="footer">
      <div className="container">
        <h3>Brandon Johnson</h3>
        <p>
          Et aut eum quis fuga eos sunt ipsa nihil. Labore corporis magni
          eligendi fuga maxime saepe commodi placeat.
        </p>
        <div className="social-links">
          <a href="#linkedin" className="twitter">
            <i className="bx bxl-twitter"></i>
          </a>
          <a href="#linkedin" className="facebook">
            <i className="bx bxl-facebook"></i>
          </a>
          <a href="#linkedin" className="instagram">
            <i className="bx bxl-instagram"></i>
          </a>
          <a href="#linkedin" className="google-plus">
            <i className="bx bxl-skype"></i>
          </a>
          <a href="#linkedin" className="linkedin">
            <i className="bx bxl-linkedin"></i>
          </a>
        </div>
        <div className="copyright">
          &copy; Copyright{" "}
          <strong>
            <span>MyResume</span>
          </strong>
          . All Rights Reserved
        </div>
        <div className="credits">
          Designed by <a href="https://bootstrapmade.com/">BootstrapMade</a>
        </div>
      </div>
    </footer>
    // <!-- End Footer -->
  );
};

export default Footer;
