function Welcome() {
  return (
    <section className="hero" id="home">
      <div className="hero-content">
        <span className="hero-tag">
          YOUR CAMPUS, CONNECTED
        </span>

        <h1>
          Every Campus Update.
          <br />
          <span>One Place.</span>
        </h1>

        <p>
          Stay updated with everything happening around your campus.
          Academic notices, events, announcements and more — all in one place.
        </p>

        <a href="#notices" className="hero-btn">
          Explore Notices <span>→</span>
        </a>

        <div className="hero-stats">
          <div>
            <h3>01</h3>
            <span>Centralized Updates</span>
          </div>

          <div>
            <h3>02</h3>
            <span>Department Wise</span>
          </div>

          <div>
            <h3>03</h3>
            <span>Easy Access</span>
          </div>
        </div>
      </div>

      <div className="hero-visual">
        <div className="visual-card">
          <span className="visual-label">CAMPUS UPDATE</span>
          <div className="visual-icon">📢</div>
          <h3>Never Miss<br />An Important Notice.</h3>
          <p>Everything important. Nothing missed.</p>

          <div className="visual-bottom">
            <span className="live-dot"></span>
            Campus Notifications
            <span className="visual-arrow">↗</span>
          </div>
        </div>

        <div className="floating-card">
          <span>✦</span> Stay Informed
        </div>
      </div>
    </section>
  );
}

export default Welcome;