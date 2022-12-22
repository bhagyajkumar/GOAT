import { Card } from "react-bootstrap";

function DebtDetails(props) {
    return (
        <Card>
            <Card.Body>
                <Card.Title>Card title</Card.Title>
                <Card.Text>
                    Pls pay im broke
                </Card.Text>
                <Card.Link href="#">UPI Link</Card.Link>
            </Card.Body>
        </Card>
    );
}

export default DebtDetails;