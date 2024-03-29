import LinkedIn from '../../assets/linkedinIcon.png';
import GitHub from '../../assets/githubIcon.png';
import Email from '../../assets/emailIcon.png';
import './style.css'; // Make sure you have the correct path to your CSS file

const Footer = () => {
    return (
        <footer className="customFooter">
            <div className="copyRights">
                <p>Copyright © 2024 Designs-By-Kate. All rights reserved.</p>
            </div>
            <div className="links">
                <a href="#contact"><img src={Email} alt="Email icon" /></a>
                <a href="https://www.linkedin.com/in/kate-pospiech-3b8846290/"><img src={LinkedIn} alt="LinkedIn icon" /></a>
                <a href="https://github.com/designs-by-kate"><img src={GitHub} alt="Github icon" /></a>
            </div>
        </footer>
    );
};

export default Footer;
