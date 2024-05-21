import { Accordion, ListGroup } from "react-bootstrap";

const AccordionIconos = () => {
	return (
		<Accordion.Item eventKey="0">
			<Accordion.Header>Iconos</Accordion.Header>
			<Accordion.Body className="text-center p-0">
				<ListGroup>
					<ListGroup.Item action href="https://icones.js.org" target="_blank" variant="dark">
						Icônes
					</ListGroup.Item>
					<ListGroup.Item action href="https://www.iconfinder.com" target="_blank" variant="dark">
						Icon Finder
					</ListGroup.Item>
					<ListGroup.Item action href="https://heroicons.com" target="_blank" variant="dark">
						Hero Icons
					</ListGroup.Item>
				</ListGroup>
			</Accordion.Body>
		</Accordion.Item>
	);
};

export default AccordionIconos;
