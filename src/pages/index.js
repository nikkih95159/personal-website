import React from "react"
import 'bootstrap/dist/css/bootstrap.min.css'
import Layout from "../components/layout"
import About from "../components/about"
import Contact from "../components/contact"
import Navbar from "../components/navbar"
import Projects from "../components/projects"
import Image from "../components/image"

export default class Home extends React.Component{

  render() {
    return (
      <div>
        <Navbar></Navbar>
        <Image/>
        <Layout>
          <Projects></Projects>
          <About></About>
          <Contact></Contact>
        </Layout>
      </div>
    )
  }
}