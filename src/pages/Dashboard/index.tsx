import React from 'react';
import { FiChevronRight } from 'react-icons/fi';

import logoImg from '../../assets/logo.svg';

import { Title, Form, Repositories } from './styles';

const Dashboard: React.FC = () => {
  return (
    <>
      <img src={logoImg} alt="Github Explorer" />
      <Title>Explore repositórios no Github</Title>

      <Form>
        <input placeholder="Digite o nome do repoditório" />
        <button type="submit">Pesquisar</button>
      </Form>

      <Repositories>
        <a href="teste">
          <img
            src="https://avatars.githubusercontent.com/u/47856024?s=400&u=a82527cbb19e8ae5a35614de33a2deb5843d290d&v=4"
            alt="Italo Gomes"
          />
          <div>
            <strong>italoog/gostack-gobarber-backend</strong>
            <p>
              Aplicação desenvolvida durante o bootcamp GoStack da Rocketseat
            </p>
          </div>

          <FiChevronRight size={20} />
        </a>
        <a href="teste">
          <img
            src="https://avatars.githubusercontent.com/u/47856024?s=400&u=a82527cbb19e8ae5a35614de33a2deb5843d290d&v=4"
            alt="Italo Gomes"
          />
          <div>
            <strong>italoog/gostack-gobarber-backend</strong>
            <p>
              Aplicação desenvolvida durante o bootcamp GoStack da Rocketseat
            </p>
          </div>

          <FiChevronRight size={20} />
        </a>
        <a href="teste">
          <img
            src="https://avatars.githubusercontent.com/u/47856024?s=400&u=a82527cbb19e8ae5a35614de33a2deb5843d290d&v=4"
            alt="Italo Gomes"
          />
          <div>
            <strong>italoog/gostack-gobarber-backend</strong>
            <p>
              Aplicação desenvolvida durante o bootcamp GoStack da Rocketseat
            </p>
          </div>

          <FiChevronRight size={20} />
        </a>
      </Repositories>
    </>
  );
};

export default Dashboard;
