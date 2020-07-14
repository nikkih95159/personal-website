import React from "react";
import Layout from "../components/layout";
import About from "../components/about";
import Contact from "../components/contact";
import Navbar from "../components/navbar";
import Projects from "../components/projects";
import Image from "../components/image";

import projects from '../content/projects';

export default class Home extends React.Component{

  componentDidMount() {
    var scrollTopBtn = document.getElementById("scrollTop");

    window.onscroll = function() {scrollFunction()};

    function scrollFunction() {
      if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        scrollTopBtn.style.display = "block";
      } else {
        scrollTopBtn.style.display = "none";
        window.history.replaceState('', '', '.');
      }
    }
  }

  // When the user clicks on the button, scroll to the top of the document
  topFunction() {
      window.scrollTo({top: 0, behavior: 'smooth'});
      window.history.replaceState('', '', '.');
  }

  render() {
    return (
      <div className="container-lg">
        <button onClick={this.topFunction} id="scrollTop"> ^
        </button>
        <Layout>
          <Navbar></Navbar>
          <Image/>
          <About></About>
          <h2 id="projects" className="section-title">
            Projects
          </h2>
          <Projects projects={projects}></Projects>
          <h2 id="contact" className="section-title">
            Contact
          </h2>
          <Contact></Contact>
        </Layout>
      </div>
    )
  }
}