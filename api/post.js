import { SERVER_URL } from '@env';
import { readCredentials } from './secureStore';

const requestCreatePost = async (postInput) => {
  const url = `${SERVER_URL}/posts/new`;
  const credentials = await readCredentials();

  const response = await fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': credentials.token
    },
    body: JSON.stringify(postInput)
  });

  return await response.json();
};

const requestGetPosts = async (page, type) => {
  const filterType = type.reduce((acc, type) => (acc + '&type=' + type), '').substring(1);
  const url = `${SERVER_URL}/posts/?${encodeURI(filterType)}`;
  const credentials = await readCredentials();

  const response = await fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': credentials.token
    },
    body: JSON.stringify({ page })
  });

  return await response.json();
};

const requestGetMyPosts = async (userId) => {
  const url = `${SERVER_URL}/posts/${userId}`;
  const credentials = await readCredentials();

  const response = await fetch(url, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': credentials.token
    }
  });

  return await response.json();
};

const postAPI = {
  requestCreatePost,
  requestGetPosts,
  requestGetMyPosts
};

export default postAPI;
