import React from 'react';
import AdoptCardList from '../components/AdoptCardList';
import Menu from '../components/shared/Menu';
import Header from '../components/shared/Header';

const Main = () => {
  return (
    <>
      <Header title="집을 찾아요" />
      <AdoptCardList />
      <Menu />
    </>
  );
};

export default Main;
