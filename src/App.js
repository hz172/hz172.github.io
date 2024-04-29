import logo from './logo.svg';
import ubclogo from './ubc-logo-white-2.png';
import resume from './resume.pdf';
import cloudblue from './cloud-blue.svg';
import cloudbig from './cloud.png';
import xiao from './20240306043450.png';
import cloudbottom from './SvgHeart.Com-389.png';
import test from './profile-pic.png';

import bunbun from './bunbunadventure.png';
import honeycomb from './honeycomb.png';
import logicmodel from './logicmodel.png';

import './App.css';

function App() {
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

      <section id="intro">
          <img className="Intro-img" src={test}/>
          <div className="Intro-text">
            hi! I'm
            <div className="Big-text">Helen Zhang</div>
            Software Developer
          </div>
      </section>

      <section id="about">
        <div className="About">
          <p>I am a software developer with a focus on front end development, and have experience in using JavaScript, React, and CSS, as well as various other languages such as Python and C.</p>
          <p>I am a highly motivated quick learner, with strong communication skills and the ability to adapt to many situations.</p>
          <p>Outside of code, I enjoy creating digital art, design, and gaming.</p>
        </div>
      </section>

      <section id="skills">
        <h1>Skills</h1>
        <div className="Skills-grid">
          <div className="Skills-grid-item">
            <i class="devicon-javascript-plain"></i>
            JavaScript
          </div>
          <div className="Skills-grid-item">
            <i class="devicon-html5-plain"></i>
            HTML
          </div>
          <div className="Skills-grid-item">
            <i class="devicon-css3-plain"></i>
            CSS
          </div>
          <div className="Skills-grid-item">
            <i class="devicon-react-original"></i>
            React
          </div>
          <div className="Skills-grid-item">
            <i class="devicon-python-plain"></i>
            Python
          </div>
          <div className="Skills-grid-item">
            <i class="devicon-csharp-plain"></i>
            C#
          </div>
          <div className="Skills-grid-item">
            <i class="devicon-java-plain"></i>
            Java
          </div>
          <div className="Skills-grid-item">
            <i class="devicon-c-plain"></i>
            C
          </div>
          <div className="Skills-grid-item">
            <i class="devicon-cplusplus-plain"></i>
            C++
          </div>
        </div>
      </section>

      <section id="education">
        <h1>Education</h1>
        <div className="Flex-row">
          <img src={ubclogo} className="Ubc-logo"/>
          <p className="Descp-text">University of British Columbia<br />
          2016-2021<br />
          BSc Cognitive Systems</p>
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
                Worked as an software developer intern
                </li>
                <li className="Project-text-list-item">
                Javascript, React, and CSS for web app development
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
                Unity, scripts in C#, all art, assets, and design done by me
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
                Python and Tableau (data vis software) to filter, process, and visualize patient data
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
          <a className="List-item" href={resume} download="Helen_Zhang_Resume">resume</a>
          <a className="List-item" href="mailto:z.helen.172@gmail.com" rel="noreferrer">email</a>
        </div>
      </section>

      <footer className="Footer">
        <div>© 2024 Helen Zhang</div>
      </footer>

    </div>  
  );
}

export default App;

/*
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reloadaaaaaaaaaaaaaaaaaaaaaa.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
*/