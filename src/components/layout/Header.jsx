import './Header.css';

function Header() {
  return (
    <header className="site-header">
      <div className="header-container">
        <a className="site-brand" href={import.meta.env.BASE_URL}>
          DataDetectives
        </a>

        <nav aria-label="Main navigation">
          <ul className="nav-links">
            <li>
              <a href={import.meta.env.BASE_URL} aria-current="page">
                Home
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;
