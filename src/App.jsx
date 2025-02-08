import { useRef } from "react";
import "./App.css";

const images = [
  "/Images/img1.jpeg",
  "/Images/img2.jpeg",
  "/Images/img3.jpeg",
];

export default function ScrollPage() {
  const sectionRefs = {
    section1: useRef(null),
    section2: useRef(null),
    section3: useRef(null),
  };

  const scrollToSection = (key) => {
    sectionRefs[key].current.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="container">
      <h1>Scroll to Specific Section</h1>
      <div className="button-container">
        {Object.keys(sectionRefs).map((key, index) => (
          <button key={key} className="scroll-button" onClick={() => scrollToSection(key)}>
            Go to Image {index + 1}
          </button>
        ))}
      </div>

      {Object.keys(sectionRefs).map((key, index) => (
        <div key={key} ref={sectionRefs[key]} className="section">
          <img src={images[index]} alt={`Section ${index + 1}`} className="section-img" />
        </div>
      ))}
    </div>
  );
}
