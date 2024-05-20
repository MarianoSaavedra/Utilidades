import { Accordion, ListGroup } from "react-bootstrap";

const Acordion = () => {
	return (
		<Accordion defaultActiveKey="0" className="w-50 m-auto">
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
			<Accordion.Item eventKey="2">
				<Accordion.Header>Bootcamps</Accordion.Header>
				<Accordion.Body className="text-center p-0">
					<ListGroup>
						<ListGroup.Item action href="https://fullstackopen.com/es/" target="_blank" variant="dark">
							Full Stack Open
						</ListGroup.Item>
					</ListGroup>
				</Accordion.Body>
			</Accordion.Item>
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
		</Accordion>
	);
};

export default Acordion;
