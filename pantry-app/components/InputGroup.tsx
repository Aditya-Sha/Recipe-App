import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';

interface SearchFormProps {
  value: string;
  onChange: (value: string) => void
}
function SearchForm({value, onChange}: SearchFormProps) {
  return (
    <>
      <InputGroup className="mb-3">
        <InputGroup.Text id="inputGroup-sizing-default">
          Please Enter Ingredient.
        </InputGroup.Text>
        <Form.Control
          value={value}
          onChange={e =>onChange(e.target.value)}
          aria-label="Default"
          aria-describedby="inputGroup-sizing-default"
        />
      </InputGroup>
      <br />
    </>
  );
}
export default SearchForm;