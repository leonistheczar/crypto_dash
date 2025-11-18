import "../../index.css";
import { Link } from "react-router";
const AboutPage = () => {
  return (
    <>      <div className="header">
        <Link to="/">
          <h1 className="title-tag">🚀 Cypto Dash</h1>
        </Link>
        <div className="top-nav">
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
        </div>
      </div>
    <div className="about">
      <h1 className="title-tag">About Crypto Dash 🚀</h1>
      <p>
        Welcome to <strong>Crypto Dash</strong> – your sleek and simple
        dashboard for tracking cryptocurrencies in real-time 📈. Our goal is to
        provide clear and actionable insights about the crypto market in a
        user-friendly interface.
      </p>
      <p>
        With <strong>Crypto Dash</strong>, you can monitor prices 💰, market
        changes 🔄, and trends of various cryptocurrencies. Stay informed and
        make smarter investment decisions without the clutter.
      </p>

      <h2>Features ✨</h2>
      <ul className="coin-data custom-list">
        <li>Real-time price updates for top cryptocurrencies ⏱️.</li>
        <li>Market capitalization and trend analysis 📊.</li>
        <li>Interactive charts and visualizations 📉.</li>
        <li>Filter coins by name or symbol with ease 🔍.</li>
        <li>Responsive design for desktop and mobile devices 📱💻.</li>
      </ul>

      <h2>Get Started 🚦</h2>
      <p>
        Explore the crypto market effortlessly. Click below to return to the
        dashboard and start tracking your favorite coins! 🏁
      </p>
      <Link to="/" id="return-dash" className="top-nav-link">
        Go to Dashboard 🏠
      </Link>
    </div>
    </>
  );
};

export default AboutPage;
