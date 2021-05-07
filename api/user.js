const requestSignin = async (signinInput) => {
  const url = 'http://localhost:3000/user/signin';
  const response = await fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(signinInput)
  });

  return await response.json();
};

const requestSignup = async (signupInput) => {
  const url = 'http://localhost:3000/user/signup';
  const response = await fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(signupInput)
  });

  return await response.json();
};

const userAPI = {
  requestSignin,
  requestSignup
};

export default userAPI;
