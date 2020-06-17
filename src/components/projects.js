import React from "react"
import Layout from "./layout"
import "../styles/projects.css"

class Projects extends React.Component {
    render () {
        return (
            <Layout>
                <h2>Projects</h2>
                <div className="project-container">
                    <div className="project-card">
                        <div className="image-container">
                            <img src={require('../images/cnn.png')} alt="" style={{marginBottom: `0rem`}}/>
                        </div>
                        <div className="description-container">
                            <h5>Image Classification</h5>
                            <p>An neural network project for my deep learning class where I train a convolutional neural network on landmark images.</p>
                            <a href="https://github.com/nikkih95159/COGS181Project">Github</a>
                            {/* <button type="button" className="btn btn-outline-secondary btn-sm">Demo</button> */}
                        </div>
                    </div>
                    <div className="project-card">
                        <div className="image-container">
                            <img src={require('../images/gym-pal.png')} alt="" style={{ marginBottom: `0rem`}}/>
                        </div>
                        <div className="description-container">
                            <h5>Gym-Pal</h5>
                            <p>Team project for a design interaction class at UCSD. Produces specialized workouts catered towards the user's specific muscles.</p>
                            <a href="https://github.com/nikkih95159/Gym-Pal">Github</a>&ensp;
                            <a href="https://nikkih95159.github.io/Gym-Pal/">Demo</a>
                        </div>
                    </div>
                    <br/>
                    <div className="project-card">
                        <div className="image-container">
                            <img src={require('../images/ign.png')} alt="" style={{width: `100%`, marginBottom: `0rem`}}/>
                        </div>
                        <div className="description-container">
                            <h5>IGN</h5>
                            <p>Part of a challenge for an internship at IGN. Contains a stylized video player pulled from the IGN API with more related videos and descriptions.</p>
                            <a href="https://github.com/nikkih95159/IGN">Github</a>&ensp;
                            <a href="https://nikkih95159.github.io/IGN/">Demo</a>
                        </div>
                    </div>
                    <br/>
                    <div className="project-card">
                        <div className="image-container">
                            <img src={require('../images/spotify.png')} alt="" style={{marginBottom: `0rem`}}/>
                        </div>
                        <div className="description-container">
                            <h5>Spotify Playlist</h5>
                            <p>Largely inspired from the Youtuber, TheComeUp. Takes your liked videos from YouTube and creates a new Spotify playlist and includes suggested songs based on Spotify's API. </p>
                            <a href="https://github.com/nikkih95159/Spotify-Playlist">Github</a>
                            {/* <button type="button" className="btn btn-outline-secondary btn-sm">Demo</button> */}
                        </div>
                    </div>
                    <br/>
                    <div className="project-card">
                        <div className="image-container">
                            <img src={require('../images/portfolio.png')} alt="" style={{marginBottom: `0rem`}}/>
                        </div>
                        <div className="description-container">
                            <h5>Portfolio</h5>
                            <p>This website! Created with React and Gatsby.</p>
                            <a href="https://github.com/nikkih95159/personal-website">Github</a>
                            {/* <button type="button" className="btn btn-outline-secondary btn-sm">Demo</button> */}
                        </div>
                    </div>
                </div>
            </Layout>
        )
    }
}

export default Projects;