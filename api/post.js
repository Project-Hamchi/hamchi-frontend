import { SERVER_URL } from '@env';

const requestCreatePost = async (postInput) => {
  const url = `${SERVER_URL}/posts/new`;

  const response = await fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(postInput)
  });

  return await response.json();
};

const requestGetPosts = async (page) => {
  const url = `${SERVER_URL}/posts/`;
  const response = await fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ page })
  });

  return await response.json();
};

const postAPI = {
  requestCreatePost,
  requestGetPosts
};

export default postAPI;
