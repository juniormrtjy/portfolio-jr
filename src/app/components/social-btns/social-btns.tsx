import GithubIcon from '../icons/github'
import InstagramIcon from '../icons/instagram'
import LinkedinIcon from '../icons/linkedin-icon'
import TwitterIcon from '../icons/twitter'

import './social-btns.scss'

interface SocialBtnsProps {}
export default function SocialBtns(props: SocialBtnsProps) {
  return (
    <div className="social">
      <a href="#">
        <InstagramIcon />
      </a>
      <a href="#">
        <LinkedinIcon />
      </a>
      <a href="#">
        <GithubIcon />
      </a>
      <a href="#">
        <TwitterIcon />
      </a>
    </div>
  )
}
