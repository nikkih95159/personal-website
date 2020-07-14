import React from "react"
import Layout from "../components/layout"
import PhotosNavbar from "../components/photosnavbar"

export default class Photos extends React.Component{

    componentDidMount() {
        var scrollTopBtn = document.getElementById("scrollTop");
    
        window.onscroll = function() {scrollFunction()};
    
        function scrollFunction() {
          if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
            scrollTopBtn.style.display = "block";
          } else {
            scrollTopBtn.style.display = "none";
          }
        }
      }
    
      // When the user clicks on the button, scroll to the top of the document
      topFunction() {
          window.scrollTo({top: 0, behavior: 'smooth'});
      }
    

  render() {
    return (
      <div className="container-lg">
        <button onClick={this.topFunction} id="scrollTop"> ^ </button>
        <Layout>
        <PhotosNavbar></PhotosNavbar>
            <h1>A Collection of My Favorite Photos</h1>
            <h3>I love taking photos and had the opportunity to travel a lot. Please enjoy my photos!</h3>
            <img src={require("../images/photos/cliffs of moher.jpg")} style={{width: `100%`}} alt="img"/>
            <img src={require("../images/photos/cinque terre.jpg")} style={{width: `100%`}} alt="img"/>
            <img src={require("../images/photos/edinburgh.jpg")} style={{width: `100%`}} alt="img"/>
            <img src={require("../images/photos/cliffs of moher.jpg")} style={{width: `100%`}} alt="img"/>
            <img src={require("../images/photos/vatican.jpg")} style={{width: `100%`}} alt="img"/>
            <img src={require("../images/photos/cathedral.jpg")} style={{width: `100%`}} alt="img"/>
            <img src={require("../images/photos/cliffs of moher2.jpg")} style={{width: `100%`}} alt="img"/>
            <img src={require("../images/photos/denmark.jpg")} style={{width: `100%`}} alt="img"/>
            <img src={require("../images/photos/isleofskye.jpg")} style={{width: `100%`}} alt="img"/>
            <img src={require("../images/photos/italy.jpg")} style={{width: `100%`}} alt="img"/>
            <img src={require("../images/photos/london.jpg")} style={{width: `100%`}} alt="img"/>
            <img src={require("../images/photos/louvre.jpg")} style={{width: `100%`}} alt="img"/>
            <img src={require("../images/photos/prague.jpg")} style={{width: `100%`}} alt="img"/>
            <img src={require("../images/photos/isleofskyelake.jpg")} style={{width: `100%`}} alt="img"/>
            <img src={require("../images/photos/rome.jpg")} style={{width: `100%`}} alt="img"/>
        </Layout>
      </div>
    )
  }
}