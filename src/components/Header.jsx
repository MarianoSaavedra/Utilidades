import LinkedinSVG from "../assets/linkedin.svg";
import GithubSVG from "../assets/github.svg";
import Logo from "../assets/logo.png";
import { Button } from "react-bootstrap";

const Header = () => {
	return (
		<div className="bg-secondary text-white fs-1 py-2 mb-5 d-flex justify-content-center align-items-center">
			<div className="w-50 d-flex">
				<div className="col-6">
					<img src={Logo} alt="Mariano Saavedra Logo" className="iconoLogo" />
				</div>
				<div className="col-6 d-flex justify-content-end">
					<div>
						<Button
							as="a"
							href="https://linkedin.com/in/dev-mariano-saavedra"
							target="_blank"
							className="p-0 mx-2 bg-white border-0"
						>
							<img src={LinkedinSVG} alt="Enlace a Linkedin" className="redesSociales" />
						</Button>
					</div>
					<div>
						<Button
							as="a"
							href="https://github.com/MarianoSaavedra"
							target="_blank"
							className="p-0 mx-2 bg-white border-0"
						>
							<img src={GithubSVG} alt="Enlace a Github" className="redesSociales" />
						</Button>
					</div>
					<div>
						<Button
							as="a"
							href="https://github.com/MarianoSaavedra"
							target="_blank"
							className="p-0 mx-2 bg-white border-0"
						>
							<img src={GithubSVG} alt="Enlace a Github" className="redesSociales" />
						</Button>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Header;
