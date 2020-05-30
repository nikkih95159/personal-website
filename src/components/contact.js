import React from "react"
import Layout from "./layout"

class Contact extends React.Component {
    render() {
        return (
            <Layout>
                <h2>Contact</h2>
                <p>Email: nhardima@ucsd.edu</p>
                <p>Github: <a href="https://github.com/nikkih95159">github.com/nikkih95159</a></p>
                <p>LinkedIn: <a href="https://www.linkedin.com/in/nikki-hardiman/">linkedin.com/in/nikki-hardiman/</a></p>
            </Layout>
        );
    }
}

export default Contact;