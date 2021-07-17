import React, { useState } from "react";

function Crear(){

    const variablesInicio={
        matricula:"",
        nombre:"",
        correo:"",
        telefono:""
    };

    const [values, setValues]=useState(variablesInicio)

    const onChange=(e)=>{
        const{name, value}=e.target;
        setValues({...values,[name]:value});
    }

    const onClick= (e) =>{
        e.preventDefault();
        alert("LOS DATOS SON: "+" "+values.matricula+" "+values.nombre+" "+values.correo+" "+values.telefono);
        setValues(variablesInicio);
    }

    return(
        <div className="card">
        <div className="card-header text-center fw-bold fs-5">
            Ingrese los Datos del Alumno
        </div>
        <div className="card-body">
            <form>
                <div className="form-group">
                  <label htmlFor="">Matricula</label>
                  <input type="text"
                   name="matricula"
                   onChange={onChange}
                   value={values.matricula} 
                   className="form-control" 
                   placeholder="Ingrese la Matricula"/>
                </div>
            </form>

            <form>
                <div className="form-group">
                  <label htmlFor="">Nombre Completo</label>
                  <input type="text"
                   name="nombre"
                   onChange={onChange}
                   value={values.nombre}
                   className="form-control"
                   placeholder="Ingrese el Nombre"/>
                </div>
            </form>

            <form>
                <div className="form-group">
                  <label htmlFor="">E-mail</label>
                  <input type="text"
                   name="correo"
                   onChange={onChange}
                   value={values.correo} 
                   className="form-control" 
                   placeholder="Ingrese el E-mail"/>
                </div>
            </form>

            <form>
                <div className="form-group">
                  <label htmlFor="">Telefono</label>
                  <input type="text" 
                  name="telefono" 
                  onChange={onChange} 
                  value={values.telefono} 
                  className="form-control" 
                  placeholder="Ingrese el telefono"/>
                </div>
            </form>
            <br></br>
            <button type="submit" className="btn btn-primary" onClick={onClick}>Agregar Alumno</button>
            <button type="button" className="btn btn-light">Cancelar</button>
        </div>
        <div className="card-footer text-muted">  
        </div>
    </div>   
    )
}

export default Crear;