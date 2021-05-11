import { SERVER_URL } from '@env';

const requestSignin = async (signinInput) => {
  const url = `${SERVER_URL}/user/signin`;
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
  const url = `${SERVER_URL}/user/signup`;
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
