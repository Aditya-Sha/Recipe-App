import { useState } from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Collapse from 'react-bootstrap/Collapse';

interface FoodCardProps {
  index: number;
  title: string;
  content: string;
  buttonText: string;
  onButtonClick: () => void;
}

function FoodCard({index, title, content, buttonText, onButtonClick}: FoodCardProps) {
  const [isOpen, setIsOpen] = useState(false); // state to handle collapse

  return (
    <Card className='text-bg-dark' style={{width: '18rem', backgroundColor: 'dark'}}>
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        
        {/* Toggle Button */}
        <Button 
          variant="link" 
          onClick={() => setIsOpen(!isOpen)} 
          aria-controls="example-collapse-text"
          aria-expanded={isOpen}
        >
          Toggle content
        </Button>
        <Button variant="primary" onClick={onButtonClick}>{buttonText}</Button>
        <Collapse in={isOpen}>
          <div id="example-collapse-text">
            <Card.Text>{content}</Card.Text>
          </div>
        </Collapse>

    
      </Card.Body>
    </Card>
  );
}

export default FoodCard;
