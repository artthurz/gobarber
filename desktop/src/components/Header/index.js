import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { isNull } from 'is-what';

import Notifications from '~/components/Notifications';

import logoBlue from '~/assets/logo-blue.svg';
import { Container, Content, Profile } from './styles';

export default function Header() {
  const profile = useSelector(state => state.user.profile);

  if (isNull(profile)) {
    return (
      <Container>
        <Content>
          <Link to="/dashboard">
            <nav>
              <img src={logoBlue} alt="GoBarber" />
              <span>DASHBOARD</span>
            </nav>
          </Link>

          <aside>
            <Notifications />

            <Profile>
              <div>
                <strong>Seu nome</strong>
                <Link to="/profile">Meu perfil</Link>
              </div>
              <img src="erro" alt="Profile" />
            </Profile>
          </aside>
        </Content>
      </Container>
    );
  }

  return (
    <Container>
      <Content>
        <Link to="/dashboard">
          <nav>
            <img src={logoBlue} alt="GoBarber" />
            <span>DASHBOARD</span>
          </nav>
        </Link>

        <aside>
          <Notifications />

          <Profile>
            <div>
              <strong>{profile.name}</strong>
              <Link to="/profile">Meu perfil</Link>
            </div>
            <img src={profile.avatar.url} alt="Profile" />
          </Profile>
        </aside>
      </Content>
    </Container>
  );
}
