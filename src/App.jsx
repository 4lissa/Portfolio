import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import { useLenis } from "./hooks/useLenis"
import Navbar from "./components/layout/Navbar"
import Hero from "./components/sections/Hero"
import Work from "./components/sections/Work"
import About from "./components/sections/About"
import Contact from "./components/sections/Contact"
import Footer from "./components/layout/Footer"
import Jobboard from "./components/projects/Jobboard"

function App() {
  useLenis();
  return (
    <Router>
      <div className="min-h-screen">
        <Navbar />
        <Routes>
          <Route
            path="/"
            element={
              <>
                <section id="home"><Hero /></section>
                <section id="work"><Work /></section>
                <section id="about"><About /></section>
                <section id="contact"><Contact /></section>
                <Footer />
              </>
            }
          />
          <Route path="/Jobboard" element={<Jobboard />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App