import React from 'react';
import { Form, Input } from '@rocketseat/unform';
import { Container } from './styles';
import * as Yup from 'yup';

const schema = Yup.object().shape({

  morning_start: Yup.string().required('Horário abertura manhã é obrigatório'),
  morning_end: Yup.string().required('Horário fechamento manhã é obrigatório'),
  afternoon_start: Yup.string().required('Horário abertura tarde é obrigatório'),
  afternoon_end: Yup.string().required('Horário fechamento tarde é obrigatório'),
  sunday: Yup.string().required('Domingo é obrigatório'),
  monday: Yup.string().required('Segunda é obrigatório'),
  tuesday: Yup.string().required('Terça é obrigatório'),
  wednesday: Yup.string().required('Quarta é obrigatório'),
  thursday: Yup.string().required('Quinta é obrigatório'),
  friday: Yup.string().required('Sexta é obrigatório'),
  saturday: Yup.string().required('Sábado é obrigatório'),

});


export default function Configuration() {
  function handleSubmit() {
    return null;
  }

  return (
    <Container>
      <strong>Dias de funcionamento</strong>

      <Form schema={schema} onSubmit={handleSubmit}>
        
        <Input name="morning_start" placeholder="Horário abertura manhã" />
        <Input name="morning_end" placeholder="Horário fechamento manhã" />
        <Input name="afternoon_start" placeholder="Horário abertura tarde" />
        <Input name="afternoon_end" placeholder="Horário fechamento tarde" />
          
        <hr />
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
