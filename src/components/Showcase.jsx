export default function Showcase() {
  return (
    <section className="showcase"id="showcase">
      <div className="container">

        {/* ROW 1 */}
        <div className="row row1">
          <div className="img-box">
            <img src="/img/showcase-photo3.jpg" alt="Deganwy, UK" />
          </div>
          <div className="text-box">
            <h2 className="lg-heading text-black">DEGANWY, U.K</h2>
            <p className="text-gray">
              A peaceful seaside town known for its historic castle ruins,
              scenic harbors, and calming coastal sunsets — a perfect retreat
              for travelers seeking tranquility.
            </p>
            <a href="/about" className="btn btn-secondary">More</a>
          </div>
        </div>

        {/* ROW 2 */}
        <div className="row row2">
          <div className="img-box">
            <img src="/img/showcase-photo1.jpg" alt="Egypt Desert" />
          </div>
          <div className="text-box">
            <h2 className="lg-heading text-black">DESERT, EGYPT</h2>
            <p className="text-gray">
              Explore the golden sands, ancient wonders, and unforgettable
              desert landscapes that have inspired explorers for centuries.
            </p>
            <a href="/about" className="btn btn-secondary">More</a>
          </div>
        </div>

      </div>
    </section>
  );
}
