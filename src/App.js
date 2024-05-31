import resume from './resume.pdf';
import profilepic from './profile-pic.png';

import bunbun from './bunbunadventure.png';
import honeycomb from './honeycomb.png';
import logicmodel from './logicmodel.png';

import { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [isLightMode, setIsLightMode] = useState(false);

  if (localStorage.getItem('Light-mode')) {
    document.documentElement.classList.add('Light-mode');
  }

  useEffect(() => {
    if (isLightMode) {
      document.documentElement.classList.add('Light-mode');
      localStorage.removeItem('Light-mode');
    } else {
      document.documentElement.classList.remove('Light-mode');
      localStorage.setItem('Light-mode', true);
    }
  }, [isLightMode]); 

  return (
    <div className="App">
      <nav className="Nav-bar">
        <span id="hz-logo">h.z</span>
        <u1 className="Nav-bar-list">
          <li className="List-item">
            <a href="#">☁</a>
          </li>
          <li className="List-item">
            <a href="#education">education</a>
          </li>
          <li className="List-item">
            <a href="#skills">skills</a>
          </li>
          <li className="List-item">
            <a href="#projects">projects</a>
          </li>
          <li className="List-item">
            <a href="#contact">contact</a>
          </li>
        </u1>
      </nav>

      <div className="Toggle-switch">
          <label>
            <input
              type="checkbox"
              name="check"
              checked={isLightMode}
              onChange={(e) => {
                setIsLightMode(e.target.checked)
              }}
            />
            <span className="Slider"></span>
          </label>
      </div>

      <section id="intro">
          <img className="Intro-img" src={profilepic}/>
          <div className="Intro-text">
            hi! I'm
            <div className="Big-text">Helen Zhang</div>
            Software Developer
          </div>
      </section>

      <section id="about">
        <div className="About">
          <p>I am a software developer with a focus on front end development, and have experience in using <mark>JavaScript</mark>, <mark>React</mark>, and <mark>CSS</mark>, as well as various other languages such as <mark>Python</mark> and <mark>C</mark>.</p>
          <p>I am a highly motivated quick learner, with strong communication skills and the ability to adapt to many situations.</p>
          <p>Outside of code, I enjoy creating digital art, design, and gaming.</p>
        </div>
      </section>

      <section id="skills">
        <h1>Skills</h1>
        <div className="Skills-grid">
          <div className="Skills-grid-item">
            <i className="devicon-javascript-plain"></i>
            <span className="Skills-grid-name">JavaScript</span>
          </div>
          <div className="Skills-grid-item">
            <i className="devicon-html5-plain"></i>
            <span className="Skills-grid-name">HTML</span>
          </div>
          <div className="Skills-grid-item">
            <i className="devicon-css3-plain"></i>
            <span className="Skills-grid-name">CSS</span>
          </div>
          <div className="Skills-grid-item">
            <i className="devicon-react-original"></i>
            <span className="Skills-grid-name">React</span>
          </div>
          <div className="Skills-grid-item">
            <i className="devicon-python-plain"></i>
            <span className="Skills-grid-name">Python</span>
          </div>
          <div className="Skills-grid-item">
            <i className="devicon-java-plain"></i>
            <span className="Skills-grid-name">Java</span>
          </div>
          <div className="Skills-grid-item">
            <i className="devicon-csharp-plain"></i>
            <span className="Skills-grid-name">C#</span>
          </div>
          <div className="Skills-grid-item">
            <i className="devicon-c-plain"></i>
            <span className="Skills-grid-name">C</span>
          </div>
          <div className="Skills-grid-item">
            <i className="devicon-cplusplus-plain"></i>
            <span className="Skills-grid-name">C++</span>
          </div>
        </div>
      </section>

      <section id="education">
        <h1>Education</h1>
        <div className="Edu-container">
          <div className="Ubc-logo"></div>
          <div className='Edu-text-box'>
            <p className="Edu-text">University of British Columbia</p>
            <p className="Edu-text">2016-2021</p>
            <p className="Edu-text">BSc Cognitive Systems</p>
          </div>
        </div>
      </section>

      <section id="projects">
        <h1>Projects</h1>
        <div className="Projects-container">
          <div className="Project">
            <img className="Project-img" src={honeycomb}/>
            <div className="Project-text">
              <div className="Project-text-title">Honeycomb.ai</div>
              <ul className="Project-text-list">
                <li className="Project-text-list-item">
                Worked as a <mark>Software</mark> <mark>Developer</mark> <mark>Intern</mark>
                </li>
                <li className="Project-text-list-item">
                <mark>JavaScript</mark>, <mark>React</mark>, and <mark>CSS</mark> for web app development
                </li>
                <li className="Project-text-list-item">
                Worked on front end and design of interactive map on the Canadian Celiac Association British Columbia website (link no longer available)
                </li>
              </ul>
            </div>
          </div>
          <div className="Project">
          <img className="Project-img" src={bunbun}/>
            <div className="Project-text">
              <div className="Project-text-title">Bun Bun Adventure</div>
              <ul className="Project-text-list">
                <li className="Project-text-list-item">
                Cute pixel art style isometric adventure game
                </li>
                <li className="Project-text-list-item">
                <mark>Unity</mark>, scripts in <mark>C#</mark>, all art, assets, and design done by me
                </li>
                <li className="Project-text-list-item">
                Made at a Game Jam, collaborated closely with one partner, communicating and dividing work
                </li>
              </ul>
            </div>
          </div>
          <div className="Project">
          <img className="Project-img" src={logicmodel}/>
            <div className="Project-text">
              <div className="Project-text-title">Diagnostic Tool Prototype</div>
              <ul className="Project-text-list">
                <li className="Project-text-list-item">
                Designed for eventual use by clinicians, based on a researched logic model
                </li>
                <li className="Project-text-list-item">
                <mark>Python</mark> and <mark>Tableau</mark> (data vis software) to filter, process, and visualize patient data
                </li>
                <li className="Project-text-list-item">
                Worked with three different supervisors to meet complex and changing requirements
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section id="contact">
        <div className="Contact-box">
          <h1>Contact</h1>
          <a className="Contact-item" href={resume} download="Helen_Zhang_Resume">resume</a>
          <a className="Contact-item" href="mailto:z.helen.172@gmail.com" rel="noreferrer">email</a>
        </div>
      </section>

      <footer className="Footer">
        <div>© 2024 Helen Zhang</div>
      </footer>

    </div>  
  );
}

export default App;