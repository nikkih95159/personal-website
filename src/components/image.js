import React from "react";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';

class Image extends React.Component {
    render() {
        return (
            <div className="background-container">
                <img src={require('../images/background2.jpg')} alt="background"/>
                <div className="centered">
                    <h1>Nikki Hardiman</h1>
                </div>
                <div className="image-location">
                    <FontAwesomeIcon icon={['fas', 'map-marker-alt']} />
                    <p>Queenstown, NZ</p>
                </div>
            </div>
        );
    }
}

export default Image;