import Navbar from "./Components/Navbar";
import Welcome from "./Components/Welcome";
import NoticeList from "./Components/NoticeList";
import FilterBar from "./Components/FilterBar";
import AdminPanel from "./Components/AdminPanel";
import Footer from "./Components/Footer";

import "./App.css";

function App() {
  return (
    <>
      <Navbar />
      <Welcome />
      <NoticeList />
      <AdminPanel />
      <Footer />
    </>
  );
}

export default App;