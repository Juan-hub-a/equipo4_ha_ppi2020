import React, { Component } from "react";
import Button from "react-bootstrap/Button";
import swal from "sweetalert";
import { Link } from "react-router-dom";

export default class Disponibles3 extends Component {
  render() {
    const mostrarAlerta = () => {
      swal("La notificación te llegará al correo");
    };
    return (
      <center>
        <div className="container">
          <br />
          <br />
          <br />
          <img
            src="data:image/jpeg;base64,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"
            alt=""
          />
          <h4>
            <strong> Medicamento:</strong>
          </h4>
          <p>-Acetato de aluminio</p>

          <br />
          <br />
          <h4>
            <strong>Lugares disponibles:</strong>
          </h4>
          <p>
            <strong>º</strong>Colsudio palo con echeveri 6:30 am - 5:00 pm{" "}
            <br />
            <strong>º</strong>Drogueria Colsubcidio 7:30 am - 7:00 pm <br />
            <strong>º</strong>Drogueria la rebaja 6:30 am - 7:30 pm <br />
            <strong>º</strong>Drogueria Cafam 8:30 am - 8:30 pm <br />
          </p>
        </div>
        <h4>
          {" "}
          <strong> ¿Deseas recibir notificaciones?</strong>
        </h4>
        <div>
          <Button variant="primary" size="sm" onClick={() => mostrarAlerta()}>
            Si
          </Button>
          <Link to="/Inicio" className="nav-link">
            <Button variant="secondary" size="sm">
              No
            </Button>
          </Link>
        </div>
      </center>
    );
  }
}
