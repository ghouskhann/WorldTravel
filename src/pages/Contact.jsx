export default function Contact() {
  return (
    <section className="contact-form">
      <div className="container">

        <div className="form-wrapper">

          {/* LEFT: Company Address Box */}
          <div className="company-address">
            <h2>Contact Us</h2>

            <div className="address-group">
              <i className="fas fa-map-marker-alt fa-2x text-red"></i>
              <h2>Location</h2>
              <p>DHA Phase 1, Lahore</p>
            </div>

            <div className="address-group">
              <i className="fas fa-envelope fa-2x text-red"></i>
              <h2>Email</h2>
              <p>support@worldtravel.com</p>
            </div>

            <div className="address-group">
              <i className="fas fa-phone fa-2x text-red"></i>
              <h2>Call Us</h2>
              <p>+923104564455</p>
            </div>

            <img src="/img/company-img.jpg" alt="Travel Office" />
          </div>

          {/* RIGHT: Contact Form */}
          <div className="form">
            <h1 className="lg-heading text-black">Send Message</h1>

            <form
              name="contact"
              method="POST"
              data-netlify="true"
              netlify-honeypot="bot-field"
            >
              {/* Required hidden field for Netlify */}
              <input type="hidden" name="form-name" value="contact" />
              <input type="hidden" name="bot-field" />

              <div className="form-group">
                <label>Your Name</label>
                <input type="text" name="name" required />
              </div>

              <div className="form-group">
                <label>Your Email</label>
                <input type="email" name="email" required />
              </div>

              <div className="form-group">
                <label>Message</label>
                <textarea name="message" required></textarea>
              </div>

              <button type="submit" className="form-btn">Send</button>

            </form>
          </div>

        </div>
      </div>
    </section>
  );
}
