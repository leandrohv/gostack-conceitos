import React from 'react';


/**
 * também é possível passar as propriedades assim, Header(props) sem ser desestruturado
 * também temos uma propriedade padrão do React chamada children
 */

export default function Header({ title, children }) {
  return (
  <div>
    <h1>{title}</h1>

    {children}
  </div>
  );
}