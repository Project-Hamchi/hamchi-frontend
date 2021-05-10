import React, { useState, useEffect } from 'react';
import AdoptCardList from '../components/AdoptCardList';
import Header from '../components/shared/Header';

const Feeds = () => {
  return (
    <>
      <Header title="집을 찾아요" />
      <AdoptCardList
      />
    </>
  );
};

export default Feeds;
