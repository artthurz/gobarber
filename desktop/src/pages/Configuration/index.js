import React from 'react';
import { Form, Input } from '@rocketseat/unform';
import { Container } from './styles';

export default function Profile() {
  function handleSubmit() {
    return null;
  }

  return (
    <Container>
      <strong>Dias de funcionamento</strong>
      <Form onSubmit={handleSubmit}>
        <div>
          <span>Domingo</span>
          <label className="switch">
            <Input name="sunday" type="checkbox" placeholder="Checkbox" />
            <div className="slider" />
          </label>
        </div>

        <div>
          <span>Segunda</span>
          <label className="switch">
            <Input name="monday" type="checkbox" placeholder="Checkbox" />
            <div className="slider" />
          </label>
        </div>

        <div>
          <span>Terça</span>
          <label className="switch">
            <Input name="tuesday" type="checkbox" placeholder="Checkbox" />
            <div className="slider" />
          </label>
        </div>

        <div>
          <span>Quarta</span>
          <label className="switch">
            <Input name="wednesday" type="checkbox" placeholder="Checkbox" />
            <div className="slider" />
          </label>
        </div>

        <div>
          <span>Quinta</span>
          <label className="switch">
            <Input name="thursday" type="checkbox" placeholder="Checkbox" />
            <div className="slider" />
          </label>
        </div>

        <div>
          <span>Sexta</span>
          <label className="switch">
            <Input name="friday" type="checkbox" placeholder="Checkbox" />
            <div className="slider" />
          </label>
        </div>

        <div>
          <span>Sábado</span>
          <label className="switch">
            <Input name="saturday" type="checkbox" placeholder="Checkbox" />
            <div className="slider" />
          </label>
        </div>

        <hr />

        <button type="submit">Atualizar Dias de Funcionamento</button>
      </Form>
    </Container>
  );
}
