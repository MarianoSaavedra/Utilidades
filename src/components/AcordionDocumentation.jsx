import { Accordion, ListGroup } from "react-bootstrap";

const AccordionDocumentation = () => {
	return (
		<Accordion.Item eventKey="3">
			<Accordion.Header>Documentation</Accordion.Header>
			<Accordion.Body className="text-center p-0">
				<ListGroup>
					<ListGroup.Item action href="https://devdocs.io" target="_blank" variant="dark">
						Dev Docs
					</ListGroup.Item>
				</ListGroup>
			</Accordion.Body>
		</Accordion.Item>
	);
};

export default AccordionDocumentation;
