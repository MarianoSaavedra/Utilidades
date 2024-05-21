import LinkedinSVG from "../assets/linkedin.svg";
import GithubSVG from "../assets/github.svg";
import { Button } from "react-bootstrap";

const Header = () => {
	return (
		<div className="text-white fs-1 py-2 mb-5 d-flex justify-content-around align-items-center">
			<h1 className="fw-bold w-75 fs-2 ">Mariano Saavedra</h1>
			<Button
				as="a"
				href="https://linkedin.com/in/dev-mariano-saavedra"
				target="_blank"
				className="p-0 bg-white border-0"
			>
				<img src={LinkedinSVG} alt="Enlace a Linkedin" className="redesSociales" />
			</Button>
			<Button as="a" href="https://github.com/MarianoSaavedra" target="_blank" className="p-0 bg-white border-0">
				<img src={GithubSVG} alt="Enlace a Github" className="redesSociales" />
			</Button>
		</div>
	);
};

export default Header;
