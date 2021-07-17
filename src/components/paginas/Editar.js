import React from 'react';

class Editar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <div className="card">
                <div className="card-header fw-bold fs-5 text-center">
                    Ingrese los Datos a Editar del Alumno
                </div>
                <div className="card-body">
                <form>
                        <div className="form-group">
                          <label htmlFor="">Matricula</label>
                          <input type="text" name="" id="" className="form-control" placeholder="Ingrese la Matricula"/>
                        </div>
                    </form>

                    <form>
                        <div className="form-group">
                          <label htmlFor="">Nombre Completo</label>
                          <input type="text" name="" id="" className="form-control" placeholder="Ingrese el Nombre"/>
                        </div>
                    </form>

                    <form>
                        <div className="form-group">
                          <label htmlFor="">E-mail</label>
                          <input type="text" name="" id="" className="form-control" placeholder="Ingrese el E-mail"/>
                        </div>
                    </form>

                    <form>
                        <div className="form-group">
                          <label htmlFor="">Telefono</label>
                          <input type="text" name="" id="" className="form-control" placeholder="Ingrese el telefono"/>
                        </div>
                    </form>
                    <br></br>
                    <button type="submit" className="btn btn-success">Actualizar Datos</button>
                    <button type="button" className="btn btn-light">Cancelar</button>
                </div>
                <div className="card-footer text-muted">
                </div>
            </div>
        );
    }
}
 
export default Editar;