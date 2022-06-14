import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import { Row, Col } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import Image from "react-bootstrap/Image";

export default function App() {
	return (
		<Container>
			<h4>React-Bootstrap Image Component</h4>
			<Row>
				<Col>
					<div>
						<h2>hi there</h2>
						<p>skjgbiuasdgefa fl l iugzdksv fkueiake iaebj uoefbj lq</p>
					</div>
				</Col>
				<Col>
					<Image
						src="https://media.geeksforgeeks.org/wp-content/uploads/20210425000233/test-300x297.png"
						rounded
					/>
				</Col>
			</Row>
		</Container>
	);
}
