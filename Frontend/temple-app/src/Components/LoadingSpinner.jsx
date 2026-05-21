import {Spinner} from 'react-bootstrap';

function LoadingSpinner() {
  return (
    <Spinner style={{color:"blue"}} animation="border" role="status">
      <span className="visually-hidden">Loading...</span>
    </Spinner>
  );
}

export default LoadingSpinner;