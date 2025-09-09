// footer.js

document.addEventListener("DOMContentLoaded", function () {
  const footer = document.createElement("footer");
  footer.classList.add("site-footer");

  footer.innerHTML = `
    <div class="footer-container">
      <div class="footer-about">
        <h3>About Us</h3>
        <p>We provide the best solutions for your digital needs.</p>
      </div>

      <div class="footer-links">
        <h3>Quick Links</h3>
        <ul>
          <li><a href="/about">About</a></li>
          <li><a href="/services">Services</a></li>
          <li><a href="/contact">Contact</a></li>
          <li><a href="/privacy-policy">Privacy Policy</a></li>
        </ul>
      </div>

      <div class="footer-social">
        <h3>Follow Us</h3>
        <a href="https://facebook.com" target="_blank">Facebook</a> |
        <a href="https://twitter.com" target="_blank">Twitter</a> |
        <a href="https://linkedin.com" target="_blank">LinkedIn</a>
      </div>
    </div>
    <div class="footer-bottom">
      <p>© ${new Date().getFullYear()} MyCompany. All rights reserved.</p>
    </div>
  `;

  // Append footer to body
  document.body.appendChild(footer);
});
