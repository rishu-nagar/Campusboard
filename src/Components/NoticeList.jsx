import NoticeCard from "./NoticeCard";
import FilterBar from "./FilterBar";

function NoticeList() {
  const notices = [
    {
      id: 1,
      title: "End Semester Examination Schedule",
      description: "The end semester examination schedule has been announced. Students are advised to check the dates carefully.",
      category: "Examination",
      department: "All Departments",
      date: "26 Nov 2026"
    },
    {
      id: 2,
      title: "Annual Tech Fest Registration",
      description: "Registrations are open for the annual technical festival. Students can participate in various competitions.",
      category: "Events",
      department: "All Departments",
      date: "25 Nov 2026"
    },
    {
      id: 3,
      title: "Assignment Submission Notice",
      description: "Students must submit their pending assignments to their respective subject faculty before the deadline.",
      category: "Academic",
      department: "CSE Department",
      date: "24 Nov 2026"
    },
    {
      id: 4,
      title: "Library Timing Update",
      description: "The college library will remain open until 8 PM during the examination preparation period.",
      category: "General",
      department: "All Departments",
      date: "23 Nov 2026"
    },
    {
      id: 5,
      title: "Workshop on Artificial Intelligence",
      description: "An introductory AI workshop will be organized for interested students. Participation certificates will be provided.",
      category: "Events",
      department: "CSE Department",
      date: "22 Nov 2026"
    },
    {
      id: 6,
      title: "Internal Assessment Notice",
      description: "Internal assessment marks will be shared by the respective departments next week.",
      category: "Academic",
      department: "All Departments",
      date: "21 Nov 2026"
    }
  ];

  return (
    <section className="notice-section" id="notices">
     
      <div className="section-heading">
        <div>
          <span className="section-label">CAMPUS INFORMATION</span>
          <h2>Latest Notices</h2>
          <p>Stay up to date with what's happening on campus.</p>
        </div>
      </div>
<FilterBar />
      <div className="notice-grid">
        {notices.map((notice) => (
          <NoticeCard key={notice.id} notice={notice} />
       ) )}
      </div>
    </section>
  );
}

export default NoticeList;