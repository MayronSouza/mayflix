import React, { useState } from 'react';
import PageDefault from '../../../components/PageDefault';
import { Link } from 'react-router-dom';

const CadastroCategoria = () => {
  const valoresIniciais = {
    nome: '',
    descricao: '',
    cor: '',
  }
  const [categorias, setCategorias] = useState(['Teste']);
  const [valores, setValores] = useState(valoresIniciais);

  function setValor(chave, valor) {
    setValores({
      ...valores,
      [chave]: valor,
    });
  }

  function handleSubmit(e) {
    e.preventDefault();
    setCategorias([
      ...categorias,
      valores
    ]);

    setValores(valoresIniciais)
  }

  function handleChange(info) {
    const { getAttribute, value } = info.target;

    setValor(
      getAttribute('name'),
      value
    );
  }

  return (
    <>
      <PageDefault>
        <h1>Cadastro de Categoria: {valores.nome}</h1>

        <form onSubmit={handleSubmit}>
          <div>
            <label>
              Nome da Categoria:
            </label>
            <input
              type='text'
              value={valores.nome}
              name='nome'
              onChange={handleChange}
            />
          </div>
          <div>
            <label>
              Descrição:
            </label>
            <textarea
              type='text'
              value={valores.descricao}
              name='descricao'
              onChange={handleChange}
            />
          </div>
          <div>
            <label>
              Cor:
            </label>
            <input
              type='color'
              value={valores.cor}
              name='cor'
              onChange={handleChange}
            />
          </div>
          <button>
            Cadastrar
          </button> 
        </form>

        <ul>
          {categorias.map((categoria, i) => {
            return (
              <li key={ `${categoria}${i}` }>
                { categoria.nome }
              </li>
            )
          })}
        </ul>

        <Link to='/'>
          Ir para a Home
        </Link>
      </PageDefault>
    </>
  )
}

export default CadastroCategoria;