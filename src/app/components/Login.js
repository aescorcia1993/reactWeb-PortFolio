import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import '../../App.css'

const usuariosdummy=[
  {user:'andres', password:'1234'},
  {user:'jennifer', password:'4567'},
]
class Login extends React.Component {
constructor(props){
   super(props);
   this.userName="pablo";
   this.userPassword="12345";
}
state={
  user:'none',
  pass:'none'
}
autorizar(){
  //this.setState({userName:this.user});
  //this.setState({userPs:this.pass});
}
  render(){
     return (
        <div style={{textAlign:'center',display:'inline-block'}}>
          <div style={{borderStyle:'2px solid #969696', boxShadow: '1px 1px 5px 5px rgba(30, 30, 30, 0.2)',width:'400px',height:'300px'}}>
              <div style={{marginTop:'100px'}}> 
                <p>Coloque sus Datos para Ingresar</p>
                <p className='mb-0 mt-1' style={{marginTop:'100px'}}>Usuario</p> 
                <input id="user1" type="text" placeholder="Usuario"></input>
              </div>
              <div style={{marginTop:'20px'}}>
                  <p className='mb-0'>Constraseña</p>
                  <input className='mt-40' type="password" placeholder="Contraseña"></input>
              </div>
              <button className='mt-5 btn btn-primary inline-block' 
                      type="submit" onClick={()=>this.autorizar()}>INGRESAR</button>
          </div>
          </div>
    ) };
}
export default Login;