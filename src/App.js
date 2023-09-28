import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import './components/App.css';
import Post from "./pages/Post";
import Footer from "./components/Footer";

function App() {

  return (
    <BrowserRouter basename="/">
          <div id='blog'>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/post/:id" element={<Post />} />
            </Routes>
          </div>
          <Footer/>
    </BrowserRouter>
  );
}

export default App;
