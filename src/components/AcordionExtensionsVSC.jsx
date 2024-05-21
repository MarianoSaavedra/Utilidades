import { Accordion, ListGroup } from "react-bootstrap";

const AccordionExtensionsVSC = () => {
	return (
		<Accordion.Item eventKey="4">
			<Accordion.Header>Extensions</Accordion.Header>
			<Accordion.Body className="text-center p-0">
				<ListGroup>
					<ListGroup.Item action variant="dark">
						JSON Crack
					</ListGroup.Item>
				</ListGroup>
			</Accordion.Body>
		</Accordion.Item>
	);
};

export default AccordionExtensionsVSC;
