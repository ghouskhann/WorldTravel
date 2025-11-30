export default function About() {
  return (
    <section className="about">
      <div className="container">

        <h2 className="lg-heading text-black about-heading">About Us</h2>

        <p className="text-gray">
          World Travel is dedicated to bringing unforgettable travel experiences 
          from every corner of the globe. For over a decade, we have helped travelers 
          discover breathtaking landscapes, rich cultures, and once-in-a-lifetime adventures.
        </p>

        <div className="about-wrapper">

          {/* LEFT LIST */}
          <div className="left">
            <ul>
              <li>Expert-led travel planning for all destinations</li>
              <li>Customized tours designed around your interests</li>
              <li>Trusted by thousands of travelers worldwide</li>
            </ul>
          </div>

          {/* RIGHT LIST */}
          <div className="right">
            <ul>
              <li>24/7 customer assistance during your journey</li>
              <li>Affordable packages without hidden costs</li>
              <li>Certified and experienced travel guides</li>
            </ul>
          </div>
        </div>

        {/* COUNTS SECTION */}
        <div className="counts">

          <div className="count-item count-item1">
            <span>12,800+</span>
            <p>Travelers Served</p>
          </div>

          <div className="count-item count-item2">
            <span>1,200+</span>
            <p>Destinations</p>
          </div>

          <div className="count-item count-item3">
            <span>350+</span>
            <p>Tour Guides</p>
          </div>

          <div className="count-item count-item4">
            <span>50+</span>
            <p>Adventure Sports</p>
          </div>

        </div>

        {/* CTA BANNER */}
        <div className="cta-banner">
          <div className="cta-banner-left">
            <p className="cta-line">
              Ready to start your journey? Let us plan your next adventure.
            </p>
          </div>
          <div className="cta-banner-right">
            <a href="/contact" className="btn-cta">Contact Us</a>
          </div>
        </div>

      </div>
    </section>
  );
}
