import React from 'react';
// import PropTypes from 'prop-types';
// import Helmet from 'react-helmet';

import '../scss/index.scss';
import '../fontawesome';

export default function Layout({ children }) {
    return (
    <div style={{ margin: `3em auto`, maxWidth: `1400px`, padding: `0 1rem`}}>
    {children}
    </div>
    )
}