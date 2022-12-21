import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

function DebtDetails(props) {
    return (
        <Row xs={1} md={2} className="g-4">
            {Array.from({ length: props.length }).map((_, idx) => (
                <Col>
                    <Card>
                        <Card.Body>
                            <Card.Title>Card title</Card.Title>
                            <Card.Text>
                                Pls pay im broke
                            </Card.Text>
                            <Card.Link href="#">UPI Link</Card.Link>
                        </Card.Body>
                    </Card>
                </Col>
            ))}
        </Row>
    );
}

export default DebtDetails;