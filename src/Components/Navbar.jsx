function Navbar() {
  return (
    <nav className="navbar">
      <div className="logo">
        <span className="logo-icon">C</span>
        CampusBoard
      </div>

      <div className="nav-links">
        <a href="#home">Home</a>
        <a href="#notices">Notices</a>
        <a href="#about">About</a>
      </div>

      <button className="admin-btn">Admin Portal ↗</button>
    </nav>
  );
}

export default Navbar;