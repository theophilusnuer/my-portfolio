import linkedin from "../../assets/linkedin-icon.svg"
import twitter from "../../assets/twitter-icon.svg"
import github from "../../assets/github-icon.svg"
import instagram from "../../assets/instagram-icon.svg"
import email from "../../assets/email.svg"

export default function SocialMediaIcons(){


  return (
    <div className="flex">
      <div>
      <a href={`https://mail.google.com/mail/u/0/#inbox?${process.env.REACT_APP_EMAIL}`} target="_blank" rel="noopener noreferrer">
        <img src={email} alt="email" />
      </a>
      </div>
      <a href={`www.linkedin.com/in/${process.env.REACT_APP_LINKEDIN}`} target="_blank" rel="noopener noreferrer">
        <img src={linkedin} alt="LinkedIn" />
      </a>
      <a href={`https://x.com/${process.env.REACT_APP_X}`} target="_blank" rel="noopener noreferrer">
        <img src={twitter}alt="Twitter" />
      </a>
      <a href={`https://github.com/${process.env.REACT_APP_GITHUB}`} target="_blank" rel="noopener noreferrer">
        <img src={github} alt="GitHub" />
      </a>
      <a href={`https://www.instagram.com/${process.env.REACT_APP_IG}`} target="_blank" rel="noopener noreferrer">
        <img src={instagram} alt="Instagram" />
      </a>
    </div>
  );
}
