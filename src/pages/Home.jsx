import './Home.css';

function Home() {
  return (
    <main id="main-content" className="home-page">
      <section className="hero" aria-labelledby="page-title">
        <p className="hero-eyebrow">
          University of Genoa · Data Visualization
        </p>

        <h1 id="page-title">Mapping the Impact of AI</h1>

        <p className="hero-description">
          Exploring the impact of artificial intelligence
          through data and interactive visualizations.
        </p>

        <p className="hero-team">By DataDetectives</p>
      </section>

      <section className="home-section" aria-labelledby="about-title">
        <h2 id="about-title">About the project</h2>

        <p>
          Artificial intelligence is transforming how we work,
          learn, and interact with technology.
        </p>

        <p>
          This project explores the impact of AI through
          publicly available data. As the project develops,
          we will create interactive visualizations that
          communicate meaningful insights and make complex
          information easier to understand.
        </p>
      </section>

      <section
        className="home-section"
        aria-labelledby="visualizations-title"
      >
        <h2 id="visualizations-title">Explore visualizations</h2>

        <p>
          Each visualization will investigate a specific
          aspect of artificial intelligence using data.
          New visualizations will be added throughout
          the course.
        </p>

        <div className="visualization-grid">
          <article className="visualization-card">
            <span className="visualization-number">01</span>
            <h3>Visualization 01</h3>
            <p>Topic and dataset to be announced.</p>
            <span className="visualization-status">
              Coming soon
            </span>
          </article>

          <article className="visualization-card">
            <span className="visualization-number">02</span>
            <h3>Visualization 02</h3>
            <p>Topic and dataset to be announced.</p>
            <span className="visualization-status">
              Coming soon
            </span>
          </article>
        </div>
      </section>

      <section className="home-section" aria-labelledby="team-title">
        <h2 id="team-title">Meet the team</h2>

        <p>
          This project is developed by DataDetectives,
          a student team at the University of Genoa.
        </p>

        <ul className="team-list">
          <li>Marwan Alrifai</li>
          <li>Zarifa Karimova</li>
          <li>Vladislav Solodov</li>
        </ul>
      </section>
    </main>
  );
}

export default Home;
