import React from "react"
import "../styles/image.css"

class Image extends React.Component {
    render() {
        return (
            <div className="background-container">
                <img src={require('../images/background.jpg')} alt="" style={{width: `100%`, maxWidth: `2000px`, maxHeight: `1800px`, opacity: `0.8`}}></img>
                <div className="centered">
                    <h1>Nikki Hardiman</h1>
                </div>
            </div>
        );
    }
}

export default Image;