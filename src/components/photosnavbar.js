import React from 'react';

class PhotosNavbar extends React.PureComponent {

  render() {
    return (
      <div className="photosnavbar-container">
        <nav className="photosnavbar" ref="navbar">
          {/* <a href="/">Home</a> */}
          <a href="/personal-website">Home</a>
        </nav>
      </div>
    );
  }
}

export default PhotosNavbar;