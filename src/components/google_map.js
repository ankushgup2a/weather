import React, {Component} from 'react';

class GoogleMap extends Component {

    // Component Lifecycle method, called after component is loaded
    componentDidMount() {
        new google.maps.Map(this.refs.map, {
            zoom: 12,
            center: {
                lat: this.props.lat,
                lng: this.props.lon
            }
        });
    }

    render() {
        return <div ref="map" />
    }
}

export default GoogleMap;


