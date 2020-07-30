import React from 'react';
import Menu from '../../components/Menu';
import dadosIniciais from '../../data/dados_iniciais.json';
import BannerMain from '../../components/BannerMain';
import Caroussel from '../../components/Caroussel';
import Footer from '../../components/Footer';

function Home() {
  return (
    <>
      <Menu />
      <BannerMain
        videoTitle={dadosIniciais.categorias[0].videos[0].titulo}
        url={dadosIniciais.categorias[0].videos[0].url}
        videoDescription={'Corinthians é Raça'}
      />

      <Caroussel
        ignoreFirstVideo
        category={dadosIniciais.categorias[0]}
      />

      <Caroussel
        category={dadosIniciais.categorias[1]}
      />

      <Caroussel
        category={dadosIniciais.categorias[2]}
      />

      <Caroussel
        category={dadosIniciais.categorias[3]}
      />

      <Caroussel
        category={dadosIniciais.categorias[4]}
      />

      <Caroussel
        category={dadosIniciais.categorias[5]}
      />

      <Footer />
    </>
  );
}

export default Home;
