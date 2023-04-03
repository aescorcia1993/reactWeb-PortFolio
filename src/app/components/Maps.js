import React, { Component} from "react";
import GoogleMaps from "simple-react-google-maps";

  /* const datos=[
        { lat: 10.96841, lng: -74.77132 },
        { lat: 10.96821, lng: -74.79132 },
        { lat: 10.96241, lng: -74.77142 }
      ] */

export default class Maps extends Component {
constructor(props){
super(props)

}

componentDidMount(){

}
    render(){
    return(
        <div className="container">
        <GoogleMaps
          apiKey={"AIzaSyAD9JT_LWBaUow1matcLSoug-JVmIHR734"}
          style={{ height: "400px", width: "300px" }}
          zoom={19}
          center={{
            lat: 10.96854,
            lng: -74.78132
          }}
          markers={this.props.sitios}
        />
      </div>
    )



}

}