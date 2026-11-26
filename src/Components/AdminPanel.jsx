function AdminPanel() {
  return (
    <section className="admin-section" id="admin">
      <div className="admin-container">
        <div className="admin-info">
          <span className="section-label">ADMINISTRATION</span>
          <h2>Manage Campus<br />Announcements.</h2>
          <p>
            Keep students informed. Create and manage important
            announcements for your department.
          </p>
        </div>

        <form className="admin-form">
          <h3>Create a Notice</h3>

          <input
            type="text"
            placeholder="Notice title"
          />

          <textarea
            placeholder="Write notice description..."
            rows="4"
          />

          <select defaultValue="">
            <option value="" disabled>Select category</option>
            <option>Academic</option>
            <option>Examination</option>
            <option>Events</option>
            <option>General</option>
          </select>

          <select defaultValue="">
            <option value="" disabled>Select department</option>
            <option>All Departments</option>
            <option>CSE Department</option>
            <option>IT Department</option>
            <option>ECE Department</option>
            <option>Mechanical Department</option>
          </select>

          <button type="button" className="publish-btn">
            Publish Notice ↗
          </button>
        </form>
      </div>
    </section>
  );
}

export default AdminPanel;