import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react';
 import React,{Component} from 'react'
export class MapContainer extends Component {
  render() {
    return (
      <Map google={this.props.google} zoom={14}>
 
        <Marker onClick={this.onMarkerClick}
                name={'Current location'} />
 
        
      </Map>
    );
  }
}
 
export default GoogleApiWrapper({
  apiKey: ('AIzaSyB3mrLZQKKfdw8GW1wATKH9iVV6iC52Rq0')
})(MapContainer)