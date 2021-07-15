import React from "react";
import { Card } from 'react-bootstrap';

export function Horario({ horario }) {
  return (
    <Card
      bg={horario.disponibles === 0 ? 'danger' : 'light'}
      text={horario.disponibles === 0 ? 'white' : 'dark'}
      className="mb-2"
    >
      <Card.Header>Horario: {horario.hora}</Card.Header>
      <Card.Body>
        <Card.Text>
          Disponibles: {horario.disponibles}
        </Card.Text>
      </Card.Body>
    </Card>
  );
}
