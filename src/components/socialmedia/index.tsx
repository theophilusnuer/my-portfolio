import linkedin from "../../assets/linkedin-icon.svg"
import twitter from "../../assets/twitter-icon.svg"
import github from "../../assets/github-icon.svg"
import instagram from "../../assets/instagram-icon.svg"
import email from "../../assets/email.svg"

export default function SocialMediaIcons(){


  return (
    <div className="flex">
      <div>
      <a href="https://mail.google.com/mail/u/0/#inbox?compose=CllgCJNsLZfqXchcbdwSDhrDmLCCxsBtJRgSWXQmkVwzlBcSvKPtmBMXFpNTJLkJtlcNvpjdsXB" target="_blank" rel="noopener noreferrer">
        <img src={email} alt="email" />
      </a>
      </div>
      <a href="www.linkedin.com/in/theophilus-nuer-0a2096220" target="_blank" rel="noopener noreferrer">
        <img src={linkedin} alt="LinkedIn" />
      </a>
      <a href="https://x.com/TheophilusNuer1?t=iX8yiuEO0T3metYJT4YHJw&s=09" target="_blank" rel="noopener noreferrer">
        <img src={twitter}alt="Twitter" />
      </a>
      <a href="https://github.com/theophilusnuer" target="_blank" rel="noopener noreferrer">
        <img src={github} alt="GitHub" />
      </a>
      <a href="https://www.instagram.com/theophilusnuer_?igsh=MWVtOHliemY1cm1sbA==" target="_blank" rel="noopener noreferrer">
        <img src={instagram} alt="Instagram" />
      </a>
    </div>
  );
}
