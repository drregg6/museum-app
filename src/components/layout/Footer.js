import React from 'react';

export default function Footer() {
    const date = new Date();
    return (
        <footer>
            <h6>
                &copy;{date.getFullYear()} <a href="https://www.github.com/drregg6" target="_blank">Dave Regg</a>
                <br />
                Powered by <a href="https://www.rijksmuseum.nl/en/" target="_blank">Rijksmuseum</a>
            </h6>
        </footer>
    )
}