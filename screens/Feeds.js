import React, { useState, useEffect } from 'react';
import AdoptCardList from '../components/AdoptCardList';
import Header from '../components/shared/Header';
import postAPI from '../api/post';

const Feeds = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    (async () => {
      try {
        const response = await postAPI.requestGetPosts(currentPage);
        setPosts(response.posts);
      } catch (err) {
        console.log("err", err);
      }
    })();
  }, []);

  return (
    <>
      <Header title="집을 찾아요" />
      <AdoptCardList
        posts={posts}
      />
    </>
  );
};

export default Feeds;
