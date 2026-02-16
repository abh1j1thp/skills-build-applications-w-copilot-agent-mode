import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import heroImage from './assets/octofitapp-small.png';
import './App.css';

function Home() {
  return (
    <div className="page">
      <section className="hero">
        <div className="hero-copy">
          <p className="eyebrow">OctoFit Tracker</p>
          <h1>Train smart, compete loud, recover faster.</h1>
          <p className="lead">
            Log workouts, build teams, and climb the leaderboard with a fitness
            tracker that turns consistency into momentum.
          </p>
          <div className="hero-actions">
            <Link className="btn btn-primary" to="/workouts">
              Start a workout
            </Link>
            <Link className="btn btn-outline-light" to="/leaderboard">
              View leaderboard
            </Link>
          </div>
          <div className="hero-stats">
            <div>
              <p className="stat">42K</p>
              <span>weekly sessions</span>
            </div>
            <div>
              <p className="stat">1.6M</p>
              <span>minutes tracked</span>
            </div>
            <div>
              <p className="stat">280</p>
              <span>active teams</span>
            </div>
          </div>
        </div>
        <div className="hero-card">
          <img src={heroImage} alt="OctoFit mobile preview" />
          <div className="hero-card-meta">
            <span>Today</span>
            <h3>Strength sprint</h3>
            <p>Upper body focus, 38 min, 420 kcal</p>
          </div>
        </div>
      </section>

      <section className="feature-grid">
        <div className="feature">
          <h3>Personalized plans</h3>
          <p>Adaptive training blocks built from your streaks and recovery.</p>
        </div>
        <div className="feature">
          <h3>Team challenges</h3>
          <p>Launch weekly team battles with live score updates.</p>
        </div>
        <div className="feature">
          <h3>Activity insights</h3>
          <p>See sessions, volume, and PRs in one focused dashboard.</p>
        </div>
      </section>

      <section className="cta">
        <div>
          <h2>Turn your squad into a fitness league.</h2>
          <p>
            Invite teammates, set goals, and keep the energy high with shared
            leaderboards.
          </p>
        </div>
        <Link className="btn btn-light" to="/leaderboard">
          Create a team
        </Link>
      </section>
    </div>
  );
}

function Leaderboard() {
  return (
    <div className="page">
      <div className="page-header">
        <h2>Leaderboard</h2>
        <p>Track the teams pushing the hardest this week.</p>
      </div>
      <div className="leaderboard">
        {['Pulse Crew', 'Lift League', 'Tempo Squad', 'OctoFit Elite'].map(
          (team, index) => (
            <div className="leaderboard-row" key={team}>
              <span className="rank">#{index + 1}</span>
              <div>
                <p className="team-name">{team}</p>
                <span className="team-meta">{240 - index * 18} sessions</span>
              </div>
              <span className="score">{980 - index * 70} pts</span>
            </div>
          )
        )}
      </div>
    </div>
  );
}

function Workouts() {
  return (
    <div className="page">
      <div className="page-header">
        <h2>Suggested Workouts</h2>
        <p>Quick starts built for the pace you set this week.</p>
      </div>
      <div className="workout-grid">
        {[
          'Power circuit - 35 min',
          'Tempo run - 24 min',
          'Mobility reset - 18 min',
        ].map((workout) => (
          <div className="workout-card" key={workout}>
            <h3>{workout}</h3>
            <p>Auto-tailored for your recent activity mix.</p>
            <button className="btn btn-outline-light">Log session</button>
          </div>
        ))}
      </div>
    </div>
  );
}

function App() {
  return (
    <Router>
      <div className="app-shell">
        <nav className="top-nav">
          <div className="brand">
            <span className="brand-mark">OF</span>
            <span>OctoFit</span>
          </div>
          <div className="nav-links">
            <Link to="/">Home</Link>
            <Link to="/workouts">Workouts</Link>
            <Link to="/leaderboard">Leaderboard</Link>
          </div>
          <button className="btn btn-outline-light">Sign in</button>
        </nav>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/workouts" element={<Workouts />} />
          <Route path="/leaderboard" element={<Leaderboard />} />
        </Routes>
        <footer className="app-footer">
          <span>OctoFit Tracker</span>
          <span>Push. Recover. Repeat.</span>
        </footer>
      </div>
    </Router>
  );
}

export default App;