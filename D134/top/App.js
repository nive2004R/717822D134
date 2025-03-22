import{BrowserRouter as Router, Routes, Route} from "react-router-dom";
import NavBar from "./components/Navbar";
import TopUsers from "./pages/TopUsers";
import TrendingPosts from "/pages/TrendingPosts";
import Feed from "./pages/Feed";
function App(){
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<TopUsers />}/>\
        <Route path="/trending" element={<TrendingPosts />} />
        <Route path="/feed" element={<Feed />} />

      </Routes>
    </Router>
  );
}
export default App;