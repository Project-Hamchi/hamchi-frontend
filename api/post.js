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

const postAPI = {
  requestCreatePost
};

export default postAPI;
