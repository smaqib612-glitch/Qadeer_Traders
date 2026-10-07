document.querySelectorAll("[data-site-footer]").forEach((placeholder) => {
  placeholder.outerHTML = `
    <footer class="site-footer">
      <div class="footer-inner">
        <div class="footer-top">
          <div class="footer-logo">QADEER TRADERS</div>
        </div>

        <div class="footer-row">
          <div class="footer-col">
            <h4>Pages</h4>
            <ul>
              <li><a href="index.html">Home</a></li>
              <li><a href="about-us.html">About Us</a></li>
              <li><a href="services.html">Services</a></li>
              <li><a href="contact-us.html">Contact Us</a></li>
            </ul>
          </div>

          <div class="footer-col">
            <h4>Products</h4>
            <ul>
              <li><a href="laminate-flooring.html">Laminate Wooden Flooring</a></li>
              <li><a href="pvc-marble-sheets.html">PVC UV Marble Sheets</a></li>
              <li><a href="wall-panels-pu-stone.html">Wall Panels &amp; PU Stone</a></li>
              <li><a href="roller-blinds-smart-motors.html">Roller Blinds &amp; Smart Motors</a></li>
              <li><a href="corian-vanities.html">Corian Vanities &amp; Tops</a></li>
              <li><a href="custom-kitchens-wardrobes.html">Custom Kitchens &amp; Wardrobes</a></li>
              <li><a href="wallpapers-murals.html">Wallpapers &amp; Murals</a></li>
            </ul>
          </div>

          <div class="footer-col newsletter">
            <h4>Join Our Mailing List</h4>
            <form class="newsletter-form" action="#">
              <input type="email" name="subscriberEmail" placeholder="Email address" aria-label="Email address" required />
              <button type="submit">Submit</button>
            </form>

            <div class="follow">
              <h5>Follow</h5>
              <div class="socials social-icons">
                <a href="https://wa.me/923054003812" target="_blank" aria-label="WhatsApp"><i class="fa-brands fa-whatsapp"></i></a>
                <a href="https://www.facebook.com/share/14rVFrcAW6p/" target="_blank" aria-label="Facebook"><i class="fa-brands fa-facebook"></i></a>
                <a href="https://www.instagram.com/qadeer_traders?igsh=NThneWZia2JzeDB6" target="_blank" aria-label="Instagram"><i class="fa-brands fa-instagram"></i></a>
                <a href="https://www.tiktok.com/@syedahsan12145?_r=1&amp;_t=ZS-99mDiMKHrJX" target="_blank" aria-label="TikTok"><i class="fa-brands fa-tiktok"></i></a>
              </div>
            </div>
          </div>
        </div>

        <div class="footer-bottom">
          <p>&copy; 2026 QADEER TRADERS. All rights reserved.</p>
        </div>
      </div>
    </footer>`;
});

document.querySelectorAll(".newsletter-form").forEach((form) => {
  form.addEventListener("submit", (event) => {
    event.preventDefault();
    const email = form.elements.subscriberEmail.value.trim();
    const subject = encodeURIComponent("Mailing List Subscription Request");
    const body = encodeURIComponent(
      "Please add this email address to the Qadeer Traders mailing list:\n\n" + email
    );
    window.location.href =
      "mailto:ahsannaqvi1122@gmail.com?subject=" + subject + "&body=" + body;
  });
});
