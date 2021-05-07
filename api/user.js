const requestSignin = (signinInput) => {
  const url = 'http://localhost:3000/user/signin';
  const response = await fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(signinInput)
  });

  return response;
};

const requestSignup = (signupInput) => {
  const url = 'http://localhost:3000/user/signup';
  const response = await fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(signinInput)
  });

  return response;
};
