// NOVO
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Container, ButtonSave, ButtonBack, Slide, DivForm } from './styles';
import MaskedInput from 'react-text-mask';
import { toast } from 'react-toastify';

import api from '~/services/api';

export default function Services() {
  const [name, setName] = useState();
  const [description, setDescription] = useState();
  const [price, setPrice] = useState();
  const [duration, setDuration] = useState();
  const [active, setActive] = useState();

  async function handleSubmit() {
    if (
      name == null ||
      undefined ||
      (price == null || undefined) ||
      (duration == null || undefined)
    ) {
      toast.error(
        'Falha ao realizar o cadastro, prencha os campos obrigatórios! ( * )'
      );

      return;
    }

    let data = { name, price, duration };

    if (!(description == null || undefined)) {
      data = { ...data, description };
    }
    if (!(active == null || undefined)) {
      data = { ...data, active };
    }

    await api.post('configuration/services', data);
    toast.success('Cadastro realizado com sucesso');
  }

  return (
    <Container>
      <aside>
        <strong>Cadastrar Serviço</strong>
        <ButtonBack>
          <Link to="/services">Voltar</Link>
        </ButtonBack>
      </aside>
      <DivForm>
        <input
          name="name"
          placeholder="* Título"
          onChange={e => setName(e.target.value)}
        />
        <input
          name="description"
          placeholder="Descrição"
          onChange={e => setDescription(e.target.value)}
        />
        <input
          name="price"
          placeholder="* Preço"
          onChange={e => setPrice(e.target.value)}
        />
        <MaskedInput
          mask={[/[0-9]/, /\d/]}
          name="duration"
          placeholder="* Duração em minutos"
          onChange={e => setDuration(e.target.value)}
        />
      </DivForm>
      <Slide>
        <aside>
          <span>Ativo? </span>
          <div>
            <input
              type="checkbox"
              name="active"
              placeholder="Checkbox"
              onChange={e => setActive(e.target.checked)}
            />
          </div>
        </aside>
      </Slide>
      <hr />
      <ButtonSave type="button" onClick={handleSubmit}>
        Salvar
      </ButtonSave>
    </Container>
  );
}
