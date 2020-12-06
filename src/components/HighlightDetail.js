import React from 'react';
import {Link} from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Image from 'react-bootstrap/Image';
import Button from 'react-bootstrap/Button';

class HighlightDetail extends React.Component {
    componentDidMount(){
        this.props.getHighlight(this.props.match.params.id)

    }
    render(){ 
        const {
            competition,
            date,
            thumbnail
        } = this.props.highlightDetail;
        
        return(
            <div>
            {/* // <div>
            // <Container>
            // <Link to="/"><Button className="mb-4">Back to Home</Button></Link>
            // <Card body>
            //   <Row>
            //     <Col>
            //       <Image src={thumbnail} rounded style={{width: '150px'}} /> */}
                  <h2>{competition}</h2>
                  <p>{date}</p>
            {/* //     </Col>
            //     </Row> 
            // </Container> */}
            </div>
        );


    }
}
export default HighlightDetail;