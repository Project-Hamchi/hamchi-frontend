const requestCreatePost = async (postInput) => {
  const url = 'http://localhost:3000/posts/new';
  const response = await fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(postInput)
  });
  const a = await response.json();
  console.log(a);
  return await response.json();
};

const postAPI = {
  requestCreatePost
};

export default postAPI;
