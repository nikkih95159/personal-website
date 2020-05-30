import React from "react"
import 'bootstrap/dist/css/bootstrap.min.css'
import Layout from "../components/layout"
import Navbar from "../components/navbar"
import "../styles/photos.css"

export default class Photos extends React.Component{

  render() {
    return (
      <div>
        <Navbar></Navbar>
        <Layout>
            <h3>A Collection of My Favorite Photos</h3>
            <p>I love taking photos and had the opportunity to travel a lot. Please enjoy my photos!</p>
            <div className="photos-container">
                <div className="photos-image">
                    <img src={require("../images/photos/cliffs of moher.jpg")} style={{width: `100%`}}/>
                </div>
                {/* <div className="photos-h-description">
                    <p>Cliffs of Moher, Ireland</p>
                </div> */}
            </div>
            <div className="photos-container">
                <div className="photos-image">
                    <img src={require("../images/photos/cinque terre.jpg")} style={{width: `100%`}}/>
                </div>
            </div>
            <div className="photos-container">
                <div className="photos-image">
                    <img src={require("../images/photos/edinburgh.jpg")} style={{width: `100%`}}/>
                </div>
            </div>
            <div className="photos-container">
                <div className="photos-image">
                    <img src={require("../images/photos/cliffs of moher.jpg")} style={{width: `100%`}}/>
                </div>
            </div>
            <div className="photos-container">
                <div className="photos-image">
                    <img src={require("../images/photos/vatican.jpg")} style={{width: `100%`}}/>
                </div>
            </div>
            <div className="photos-container">
                <div className="photos-image">
                    <img src={require("../images/photos/cathedral.jpg")} style={{width: `100%`}}/>
                </div>
            </div>
            <img src={require("../images/photos/cliffs of moher2.jpg")} style={{width: `100%`}}/>
            <img src={require("../images/photos/denmark.jpg")} style={{width: `100%`}}/>
            <img src={require("../images/photos/isleofskye.jpg")} style={{width: `100%`}}/>
            <img src={require("../images/photos/italy.jpg")} style={{width: `100%`}}/>
            <img src={require("../images/photos/london.jpg")} style={{width: `100%`}}/>
            <img src={require("../images/photos/louvre.jpg")} style={{width: `100%`}}/>
            <img src={require("../images/photos/prague.jpg")} style={{width: `100%`}}/>
            <img src={require("../images/photos/isleofskyelake.jpg")} style={{width: `100%`}}/>
            <img src={require("../images/photos/rome.jpg")}/>
        </Layout>
      </div>
    )
  }
}