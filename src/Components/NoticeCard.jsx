function NoticeCard({ notice }) {
  return (
    <div className="notice-card">
      <div className="notice-top">
        <span className="notice-category">{notice.category}</span>
        <span className="notice-date">{notice.date}</span>
      </div>

      <h3>{notice.title}</h3>

      <p>{notice.description}</p>

      <div className="notice-footer">
        <span>{notice.department}</span>
        <button>Read More →</button>
      </div>
    </div>
  );
}

export default NoticeCard;