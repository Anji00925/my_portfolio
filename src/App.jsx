// import { Routes, Route } from "react-router-dom";
// import "./App.css";
// import { createBrowserRouter } from "react-router-dom";
// import Navbar from "./components/Navbar";  // Corrected spelling
// import Footer from "./components/Footer";
// import Home from "./pages/Home";
// import About from "./pages/About";
// import Projects from "./pages/Projects";
// import Contact from "./pages/Contact";
// import "./styles/global.css";

// function App() {
//   const Router = createBrowserRouter([
//     {path :'/',
//             element:<><Navbar/><Home/></>},
//     {path:'/about',
//       element:<><Navbar/><About/></>
//     },
//     {path:'/project',
//       element:<><Navbar/><Projects/></>
//     },
//     {path:'/Contact',
//       element:<><Navbar/><Contact/></>
//     },
//   ])
//   return (
//     <div>
//       <Navbar />
//       <Footer/>
//       <Home/>
//       <Contact/>
//       <Projects/>
      
//     </div>
//   );
// }

// export default App;


import { Routes, Route } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";
import "./styles/global.css";

function App() {
  return (
    <div>
      <Navbar />
      
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;

