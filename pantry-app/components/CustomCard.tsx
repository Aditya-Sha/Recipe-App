import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

interface CustomCardProps {
  index: number;
  imgSrc: string;
  title: string;
  content: string;
  buttonText: string; 
  onButtonClick: () => void;
}
function CustomCard({index, imgSrc, title, content, buttonText, onButtonClick}: CustomCardProps) {
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={imgSrc} />
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>{content}</Card.Text>
        <Button variant="primary" onClick={onButtonClick}> {buttonText}</Button>
      </Card.Body>
    </Card>
  );
}
export default CustomCard;
