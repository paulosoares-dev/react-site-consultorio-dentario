import React from 'react';

import Rodape from '../Rodape';
import Topo from '../Topo';

const EstruturaPagina = ( props ) => {
  return (
    <section>
      <Topo />

      { props.children }

      <Rodape />
    </section>
  );
};

export default EstruturaPagina;