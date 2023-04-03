import React, {  useEffect, useState } from 'react';
import { ReactDOM } from 'react';
import  {Table, Button, Container, Modal, ModalBody, ModalHeader,
     FormGroup, ModalFooter, Dropdown} from 'reactstrap';
import BeautyStars from "beauty-stars";
import Maps from './Maps';

const datosdummy=[
{id:1, lat:10.96835, lng:-74.78125, nombre:'piko riko', tipo:'restaurante',userId:1,
rateaverage:{rate:16,cali:4},comments:[{c1:'comentario1',userId:'1'},{c1:'comentario2',userId:'2'}]},
{id:2, lat:10.96840, lng:-74.78133, nombre:'mac donalds', tipo:'restaurante',userId:2,
rateaverage:{rate:16,cali:4},comments:[{c1:'comentario1',userId:'1'},{c1:'comentario2',userId:'2'}]},
{id:3, lat:10.96850, lng:-74.78127, nombre:'cc plaza 93', tipo:'centrocomercial',userId:1,
rateaverage:{rate:16,cali:4},comments:[{c1:'comentario1',userId:'1'},{c1:'comentario2',userId:'2'}]},
{id:4, lat:10.96860, lng:-74.78170, nombre:'cc buenavista', tipo:'centrocomercial',userId:2,
rateaverage:{rate:16,cali:4},comments:[{c1:'comentario1',userId:'1'},{c1:'comentario2',userId:'2'}]}
];

class Dashboard extends React.Component{
constructor(props){
    super(props)
    this.firsstate="Agregar Lugar";
    this.data=datosdummy;
    this.prueba=false;
};
state={
    modalinsertar:false, 
    modaleditar:false,   
    valuestar:0,
    form:{
        id:'',
        lat:'',
        lng:'',
        nombre:'',
        tipo:'',
        anime:'',
        userId:'',
        rateaverage:{}, 
        comments:{}
    },
    newform:{
        id:'',
        lat:'',
        lng:'',
        nombre:'',
        tipo:'',
        anime:'',
        userId:'',
        rate:0, 
        comments:''
    }
}
//hooks ciclos de vida
componentDidMount() {
};
//eventos
handleChange=e=>{
    this.setState({
        form:{
            ...this.state.form,
            [e.target.name]:e.target.value
        }
    })
}
guardarNuevoSitio(){

}
NuevaCalificacion=(value)=>{
    this.setState({ valuestar:value })
}
mostrarModal=()=>{
    this.setState({modalinsertar:true});
}
cerrarModal=()=>{
this.setState({modalinsertar:false});
}
mostrarEditar=(datosfila)=>{
    this.setState({modaleditar:true, form:datosfila});
}
cerrarEditar=()=>{
this.setState({modaleditar:false});
}
//componentejxs
render(){
        return(
           
   <Container>
       <div id="map"  style={{height:'400px'}} >
       <Maps sitios={datosdummy}/>
       </div>
             <Button className='btn btn-primary' onClick={()=>this.mostrarModal()} >{this.firsstate}</Button>
       <Table hover style={{ boxShadow: '1px 1px 5px 5px rgba(30, 30, 30, 0.2)'}}>
           <thead>
               <tr>
                   <th>id</th>
                   <th>latitud</th>
                   <th>longitud</th>
                   <th>nombre</th>
                   <th>tipo</th>
                   <th>userId</th>
                   <th>rateaverage</th>
               </tr>
               </thead>
               <tbody>
                   {this.data.map((elemento)=>(
                       <tr><td>{elemento.id}</td>
                       <td>{elemento.lat}</td>
                       <td>{elemento.lng}</td>
                       <td>{elemento.nombre}</td>
                       <td>{elemento.tipo}</td>
                       <td>{elemento.userId}</td>
                       <td>{elemento.rateaverage.rate/elemento.rateaverage.cali}</td>
                       <td><Button className='btn btn-info' onClick={()=>this.mostrarEditar(elemento)}>Editar</Button>
                       <Button className='btn btn-success'>Calificar</Button>
                       <Button className='btn btn-danger'>Borrar</Button></td>
                       </tr>
                       
                   ))}
               </tbody>
       </Table>
    

    <Modal isOpen={this.state.modalinsertar}>
        <ModalHeader>
            Agregar Nuevo Sitio
        </ModalHeader>

        <ModalBody>
            <FormGroup>
                <label>Latitud: </label>
                <input onChange={this.handleChange}
                value={this.state.newform.lat}
                 name="lat"
                  className="form-control"
                   type={Text}
                    placeholder="Ejemplo: 10.52"></input>  
            </FormGroup>
            <FormGroup>
                <label>Longitud: </label>
                <input onChange={this.handleChange}
                value={this.state.newform.lng}
                 name="lng"
                  className="form-control"
                   type={Text}
                    placeholder="Ejemplo: -73.2"></input>  
            </FormGroup> 
            <FormGroup>
                <label>Nombre: </label>
                <input onChange={this.handleChange}
                value={this.state.newform.nombre}
                 name="nombre"
                  className="form-control"
                   type={Text}
                    placeholder="Ejemplo: El gran banquete"></input>
            </FormGroup>
            <FormGroup>
                <label>Tipo: </label>
                <input onChange={this.handleChange}
                value={this.state.newform.tipo}
                 name="tipo"
                  className="form-control"
                   type={Dropdown}
                    placeholder="Ejemplo: Restaurante"></input>
            </FormGroup>
            <FormGroup>
                <p style={{textAlign:'left'}}>Calificación:</p>
                <div style={{marginTop:'20px', marginBottom:'20px', textAlign:'center'}}>
                <BeautyStars
                value={this.state.valuestar}  
                onChange={(value)=>this.NuevaCalificacion(value)}
                />
                </div>
                <input onChange={this.handleChange}
                 name="comments"
                 value={this.state.newform.commments}
                  className="form-control"
                   style={{height:'80px',display:'inline'}}
                    type="textarea"
                     placeholder="Ejemplo: El servicio es muy rápido."></input>
            </FormGroup>
            <FormGroup></FormGroup>
            <FormGroup></FormGroup>
            <FormGroup></FormGroup>
            <FormGroup style={{textAlign:'center',marginTop:'20px',borderRadius: '5px'}}>
            <Button className='btn btn-success ' onClick={()=>this.cerrarModal()}>Agregar</Button>
            {'  '}   
            <Button className='btn btn-danger ml-1' onClick={()=>this.cerrarModal()}>Cerrar</Button>
            </FormGroup>
        </ModalBody>

        <ModalFooter>
             Tus comentarios hacen que otros usuarios puedan vivir grandes
             experiencias.
        </ModalFooter>
    </Modal>
    <Modal isOpen={this.state.modaleditar}>
        <ModalHeader>
            Editar Sitio
        </ModalHeader>

        <ModalBody>
            <FormGroup>
                <label>Latitud: </label>
                <input onChange={this.handleChange} 
                value={this.state.form.lat}
                name="lat" 
                className="form-control" 
                type={Text} 
                placeholder="Ejemplo: 10.52"></input>  
            </FormGroup>
            <FormGroup>
                <label>Longitud: </label>
                <input onChange={this.handleChange}
                 value={this.state.form.lng}
                 name="lng" 
                 className="form-control" 
                 type={Text} 
                 placeholder="Ejemplo: -73.2"></input>  
            </FormGroup> 
            <FormGroup>
                <label>Nombre: </label>
                <input onChange={this.handleChange}
                 value={this.state.form.nombre}
                 name="nombre" 
                 className="form-control"
                 type={Text}
                 placeholder="Ejemplo: El gran banquete"></input>
            </FormGroup>
            <FormGroup>
                <label>Tipo: </label>
                <input onChange={this.handleChange}
                 name="tipo"
                 value={this.state.form.tipo}
                 className="form-control"
                 type={Dropdown}
                 placeholder="Ejemplo: Restaurante"></input>
            </FormGroup>
            <FormGroup>
                <p style={{textAlign:'left'}}>Calificación:</p>
                <div style={{marginTop:'20px', marginBottom:'20px', textAlign:'center'}}>
                <BeautyStars
                value={this.state.valuestar}  
                onChange={(value)=>this.NuevaCalificacion(value)}
                />
                </div>
                <input onChange={this.handleChange}
                 name="comments"
                  className="form-control"
                   style={{height:'80px',display:'inline'}}
                    type="textarea"
                     placeholder="Ejemplo: El servicio es muy rápido."></input>
            </FormGroup>
            <FormGroup></FormGroup>
            <FormGroup></FormGroup>
            <FormGroup></FormGroup>
            <FormGroup style={{textAlign:'center',marginTop:'20px',borderRadius: '5px'}}>
            <Button className='btn btn-success ' onClick={()=>this.cerrarEditar()}>Guardar</Button>
            {'  '}   
            <Button className='btn btn-danger ml-1' onClick={()=>this.cerrarEditar()}>Cerrar</Button>
            </FormGroup>
        </ModalBody>

        <ModalFooter>
             Tus comentarios hacen que otros usuarios puedan vivir grandes
             experiencias.
        </ModalFooter>
    </Modal>
    
    </Container>
             )
    }
}     

export default Dashboard;
