import linkedin from "../../assets/linkedin-icon.svg"
import twitter from "../../assets/twitter-icon.svg"
import github from "../../assets/github-icon.svg"
import instagram from "../../assets/instagram-icon.svg"

export default function SocialMediaIcons(){
  return (
    <div className="flex">
      <a href="https://www.linkedin.com/in/your-linkedin-account" target="_blank" rel="noopener noreferrer">
        <img src={linkedin} alt="LinkedIn" />
      </a>
      <a href="https://twitter.com/your-twitter-account" target="_blank" rel="noopener noreferrer">
        <img src={twitter}alt="Twitter" />
      </a>
      <a href="https://github.com/your-github-account" target="_blank" rel="noopener noreferrer">
        <img src={github} alt="GitHub" />
      </a>
      <a href="https://www.instagram.com/your-instagram-account" target="_blank" rel="noopener noreferrer">
        <img src={instagram} alt="Instagram" />
      </a>
    </div>
  );
}
