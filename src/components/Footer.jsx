import LinkedinSVG from "../assets/linkedin.svg";
import GithubSVG from "../assets/github.svg";
import { Button } from "react-bootstrap";

const Footer = () => {
	return (
		<div className="footer fixed-bottom d-flex flex-wrap">
			<p className="col-12 fs-2 text-center fw-bold kanit-thin">Creado por Mariano Saavedra</p>
			<p className="col-12 fs-2 text-center fw-bold kanit-thin">Si queres ayudarme podes invitarme un cafecito</p>
			<p className="col-12 fs-2 text-center fw-bold kanit-thin">Donar por Paypal</p>
		</div>
	);
};

export default Footer;
