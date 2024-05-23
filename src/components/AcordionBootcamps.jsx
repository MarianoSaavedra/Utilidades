import { Accordion, ListGroup } from "react-bootstrap";

const AccordionBootcamps = () => {
	return (
		<Accordion.Item eventKey="2">
			<Accordion.Header>Bootcamps</Accordion.Header>
			<Accordion.Body className="text-center p-0">
				<ListGroup>
					<ListGroup.Item action href="https://fullstackopen.com/es/" target="_blank" variant="dark">
						Full Stack Open
					</ListGroup.Item>
				</ListGroup>
			</Accordion.Body>
			<Accordion.Body className="text-center p-0">
				<ListGroup>
					<ListGroup.Item action href="https://retosdeprogramacion.com/" target="_blank" variant="dark">
						Retos de Programacion
					</ListGroup.Item>
				</ListGroup>
			</Accordion.Body>
		</Accordion.Item>
	);
};

export default AccordionBootcamps;
