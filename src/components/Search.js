import React from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import PropTypes from 'prop-types';


class Search extends React.Component{
    constructor(props){
        super(props);

        this.state = {
            highlightText:''
        }
    }

    onSubmit = (e) => {
        e.preventDefault();
        this.props.searchHighlights(this.state.highlightText);
        this.setState({highlightText: ''});
    }
    onChange = (e) => {
        this.setState({[e.target.name]: e.target.value});
    }
    render(){
        return(
            <div className="form">
            <Form onSubmit={this.onSubmit}>
                <Form.Control type="text" name="highlightText" placeholder="Search Highlight" value={this.state.highlightText} onChange={this.onChange}autoFocus/> 
                <Button variant="primary" type="submit" block sytle={{marginTop: '0.5rem'}}>
                Search 
                </Button>
            </Form>
            </div>
        );
    }
}
Search.propTypes = {
    searchHighlights: PropTypes.func.isRequired
}

export default Search;