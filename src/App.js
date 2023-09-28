import { BrowserRouter, Route, Routes, HashRouter } from "react-router-dom";
import Home from "./pages/Home";
import './components/App.css';
import Post from "./pages/Post";
import Footer from "./components/Footer";

function App() {

  return (
    <HashRouter basename="/">
          <div id='blog'>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/post/:id" element={<Post />} />
            </Routes>
          </div>
          <Footer/>
    </HashRouter>
  );
}

export default App;
