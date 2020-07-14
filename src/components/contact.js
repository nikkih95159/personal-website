import React from "react"

class Contact extends React.Component {
    render() {
        return (
        <div className="contact-links">
        <span>
          <a rel="noopener noreferrer" target="_blank" href="mailto:nhardima@ucsd.edu">
              nhardima@ucsd.edu
          </a>
        </span>
        <span>
          <a
            rel="noopener noreferrer"
            target="_blank"
            href="https://www.linkedin.com/in/nikki-hardiman/"
          >
            LinkedIn
          </a>
        </span>
        <span>
          <a rel="noopener noreferrer" target="_blank" href="https://github.com/nikkih95159">
            Github
          </a>
        </span>
      </div>
        );
    }
}

export default Contact;