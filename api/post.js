const requestCreatePost = async (postInput) => {
  const url = 'http://192.168.0.97:3000/posts/new';
  const response = await fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(postInput)
  });

  return await response.json();
};

const requestGetPosts = async (getInput) => {
  const url = 'http://192.168.0.97:3000/posts/';
  const response = await fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: getInput
  });

  return await response.json();
};

const postAPI = {
  requestCreatePost,
  requestGetPosts
};

export default postAPI;
