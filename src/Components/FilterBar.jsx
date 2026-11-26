function FilterBar() {
  return (
    <div className="filter-bar">
      <div className="search-box">
        <span>⌕</span>
        <input type="text" placeholder="Search notices..." />
      </div>

      <select className="filter-select">
        <option value="All">All Categories</option>
        <option value="Academic">Academic</option>
        <option value="Examination">Examination</option>
        <option value="Events">Events</option>
        <option value="General">General</option>
      </select>

      <select className="filter-select">
        <option value="All">All Departments</option>
        <option value="CSE">Computer Science</option>
        <option value="IT">Information Technology</option>
        <option value="ECE">Electronics</option>
        <option value="ME">Mechanical</option>
      </select>
    </div>
  );
}

export default FilterBar;