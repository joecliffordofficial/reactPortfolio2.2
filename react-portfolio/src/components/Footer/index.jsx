import React from 'react'
import './style.css'

const Footer = () => {
    return (
        <footer>
            <a
                href='https://www.instagram.com/_clifftography_/'
                target="_blank">
                <img src={`${process.env.PUBLIC_URL}/instagram_logo.svg`}
                    alt="instagram-icon" />
            </a>
            <a
                href='https://www.linkedin.com/in/joe-clifford/'
                target="_blank">
                <img src={`${process.env.PUBLIC_URL}/linkedIn_logo.svg`}
                    alt="linkedIn-icon" />
            </a>
            <a
                href='https://github.com/joecliffordofficial'
                target="_blank">
                <img src={`${process.env.PUBLIC_URL}/github_logo.svg`}
                    alt="github-icon" />
            </a>
        </footer>
    )
}

export default Footer;