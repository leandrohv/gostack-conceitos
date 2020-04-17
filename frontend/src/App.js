import React, { useState, useEffect } from 'react';
import api from './services/api';

import './App.css'; 

import Header from './components/Header';

/**
 * Componente
 * Propriedade
 * Estado & Imutabilidade
 */

function App() {
  //const projects = ['Desenvolvimento de app', 'Front-end Web'];
  const [projects, setProjects] = useState([]);
  
  useEffect( () => {
    api.get('/projects').then(response => {
      setProjects(response.data);
    })
  }, []); // array de dependencias, serve para incluir as variaveis da funcao

  // useState retorna um array com 2 posições
  // 
  // 1. Variável com o seu valor inicial
  // 2. Função para atualizarmos esse valor

  async function handleAddProjects() {
    //projects.push(`Novo projeto ${Date.now()}`);
    // spread operator - percorre o array original e copia as informações para um novo array, 
    // incluindo as informações adicionais
    // setProjects([...projects, `Novo projeto ${Date.now()}`]);
    // console.log(projects);

    const response = await api.post('/projects', {
      title: `Novo projeto ${Date.now()}`,
      owner: "Leandro Venâncio"
    });

    const project =  response.data;

    setProjects([...projects, project]);
  }

  return (
  <>
    <Header title="Projects" />

    <ul>
      {projects.map(project => <li key={project.id}>{project.title}</li>)}
    </ul> 

    <button type="button" onClick={handleAddProjects}>Adicionar projeto</button>
  </>
  );
}

export default App;