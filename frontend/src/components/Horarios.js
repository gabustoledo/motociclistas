import React, { Component } from "react";
import { Horario } from "./Horario";
import { CardColumns, Container } from "react-bootstrap";
import axios from "axios";

class Horarios extends Component {
  constructor() {
    super();
    this.state = { horarios: [] };
    this.getHorarios = this.getHorarios.bind(this);
  }

  componentDidMount() {
    this.getHorarios();
  }

  getHorarios() {
    axios
      .get("http://localhost:8080/api/horario")
      .then((response) => {
        this.setState({ horarios: response.data });
      })
      .catch((err) => console.log(err));
  }

  render() {
    return (
      <Container>
        <CardColumns
          style={{
            margin: "3em",
            "min-width": "100px",
            "max-width": "1000px",
            "text-aling": "center",
          }}
        >
          {this.state.horarios.map((horario) => (
            <Horario horario={horario} onClick={console.log('aprete', horario.hora)}/>
          ))}
        </CardColumns>
      </Container>
    );
  }
}
export default Horarios;