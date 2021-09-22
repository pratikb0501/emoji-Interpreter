import React from 'react'
import githubLogo from "../images/github.png"
import linkedInLogo from '../images/linkedin.png';
import twitterInLogo from '../images/twitter.png';


export default function Footer() {
	return (
		<div className="footer--container">
			<div class="footer--heading">
				<p>Connect with me on !</p>
			</div>
			<div class="footer--content" >
				<div class="row">
					<a class="footer--logo" href="https://mobile.twitter.com/pratik_bagmare" target="blank">
						<img className="footer--img" title="pratik_bagmare" src={twitterInLogo} alt="twitter" />
					</a>
					<a class="footer--logo" href="https://www.linkedin.com/in/pratikbagmare" target="blank">
						<img className="footer--img" title="pratikbagmare" src={linkedInLogo} alt="linkedIn" />
					</a>
					<a class="footer--logo" href="https://www.github.com/pratikb0501" target="blank">
						<img className="footer--img" title="pratikb0501" src={githubLogo} alt="github" />
					</a>

				</div>
			</div>
		</div>
	)
}
