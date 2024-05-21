import { Accordion } from "react-bootstrap";

import AccordionIconos from "./AcordionIconos";
import AccordionDocumentation from "./AcordionDocumentation";
import AccordionBootcamps from "./AcordionBootcamps";
import AccordionFondos from "./AcordionFondos";
import AccordionExtensionsVSC from "./AcordionExtensionsVSC";

const Acordion = () => {
	return (
		<Accordion className="w-50 m-auto ">
			<AccordionIconos />
			<AccordionFondos />
			<AccordionBootcamps />
			<AccordionDocumentation />
			<AccordionExtensionsVSC />
		</Accordion>
	);
};

export default Acordion;
