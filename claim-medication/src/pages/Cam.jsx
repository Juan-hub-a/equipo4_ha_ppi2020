import React, { Component } from "react";
import QrReader from "react-qr-reader";
import Button from "react-bootstrap/Button";
import "./Style/PqrStyles.css";
import { Link } from "react-router-dom";

export default class Test extends Component {
  state = {
    result: "No result"
  };

  handleScan = (data) => {
    if (data) {
      this.setState({
        result: data
      });
    }
  };
  handleError = (err) => {
    console.error(err);
  };
  render() {
    return (
      <div>
        <br />
        <QrReader
          delay={300}
          onError={this.handleError}
          onScan={this.handleScan}
          style={{ width: "100%" }}
        />
        <p>{this.state.result}</p>
        <center>
          <Link to="/Formulas" className="nav-link">
            <div className="boton">
              <Button as="input" type="INGRESAR" value="SIGUIENTE" />
              {""}
            </div>
          </Link>
        </center>
      </div>
    );
  }
}
