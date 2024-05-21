import { Accordion, ListGroup } from "react-bootstrap";

const AccordionFondos = () => {
	return (
		<Accordion.Item eventKey="1">
			<Accordion.Header>Fondos</Accordion.Header>
			<Accordion.Body className="text-center p-0">
				<ListGroup>
					<ListGroup.Item action href="https://heropatterns.com" target="_blank" variant="dark">
						Hero Patterns
					</ListGroup.Item>
				</ListGroup>
			</Accordion.Body>
		</Accordion.Item>
	);
};

export default AccordionFondos;
