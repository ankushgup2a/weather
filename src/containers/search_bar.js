import React, {Component} from 'react';
import { connect } from 'react-redux';
import {bindActionCreators} from 'redux';
import {fetchWeather} from '../actions/index';

class SearchBar extends Component {

    constructor(props) {
        super(props);
        this.state = {term: ""};
        this.onInputChange = this.onInputChange.bind(this);
        this.onFormSubmit = this.onFormSubmit.bind(this);
    }

    onInputChange(event) {
        
        this.setState({term: event.target.value});
    }

    onFormSubmit(event) {
        event.preventDefault();

        this.props.fetchWeather(this.state.term);
        this.setState({term: ''});
    }

    render() {

        return (
            <form className="input-group" onSubmit={this.onFormSubmit} >
                <input placeholder="अपने पसंदीदा शहर में पांच दिन का मौसम पूर्वानुमान प्राप्त करें!" 
                className="form-control"
                value={this.state.term}
                onChange={this.onInputChange}
                />
                <span className="input-group-btn" >
                    <button type="submit" className="btn btn-secondary">दबाएँ</button>
                </span>
            </form>
        );
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({fetchWeather}, dispatch);
}
// map state to props (null means, don't care) map dispatch to props and 
export default connect(null, mapDispatchToProps)(SearchBar);