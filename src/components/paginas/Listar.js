import React from "react";
import { Link } from "react-router-dom";

class Listar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }

    render() { 
        return ( 
            <div className="card">
                <div className="card-header text-center fw-bold fs-5">
                    Lista de Alumnos
                </div>
                <div className="card-body">
                <table className="table">
                <thead>
                    <tr>
                        <th>Matricula</th>
                        <th>Nombre</th>
                        <th>Correo</th>
                        <th>Telefono</th>
                        <th>Acciones</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>17E20402</td>
                        <td>Leonel Aguilar Mendez</td>
                        <td>itsr-leo@outlook.es</td>
                        <td>9161386163</td>
                        <td>
                            <div className="btn-group" role="group" aria-label="">
                                <Link className="btn btn-outline-warning" to="/editar">Editar</Link>
                                <Link className="btn btn-outline-danger">Eliminar</Link>
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td>17E20403</td>
                        <td>Fernando Jimenez Juarez</td>
                        <td>itsr-fer@outlook.es</td>
                        <td>9161386163</td>
                        <td>
                            <div className="btn-group" role="group" aria-label="">
                                <Link className="btn btn-outline-warning" to="/editar">Editar</Link>
                                <Link className="btn btn-outline-danger">Eliminar</Link>
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td>17E20404</td>
                        <td>Cristonal Jimenez Guzman</td>
                        <td>itsr-cris@outlook.es</td>
                        <td>9161386163</td>
                        <td>
                            <div className="btn-group" role="group" aria-label="">
                                <Link className="btn btn-outline-warning" to="/editar">Editar</Link>
                                <Link className="btn btn-outline-danger">Eliminar</Link>
                            </div>
                        </td>
                    </tr>
                </tbody>
            </table>
                </div>
                <div class="card-footer text-muted">
                </div>
            </div> 
        );
    }
}
 
export default Listar;

