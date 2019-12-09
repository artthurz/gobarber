import React from 'react';
import AgendamentosDaSemana from '~/components/Graficos/AgendamentosDaSemana';
import ValorArrecadadoNaSemana from '~/components/Graficos/ValorArrecadadoNaSemana';

import { Container, Grafico } from './styles';

export default function Grafics() {
  return (
    <Container>
      <Grafico>
        <AgendamentosDaSemana />
      </Grafico>
      <Grafico>
        <ValorArrecadadoNaSemana />
      </Grafico>
    </Container>
  );
}
