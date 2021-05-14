import { SERVER_URL } from '@env';

const requestCreateChat = async (ownerId, guestId, message) => {
  console.log(ownerId, guestId, message);

  const url = `${SERVER_URL}/chats/new`;
  const response = await fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ ownerId, guestId, message })
  });

  return await response.json();
};

const requestGetChats = async (userId) => {
  const url = `${SERVER_URL}/chats/${userId}`;
  const response = await fetch(url, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json'
    }
  });

  return await response.json();
};

const chatAPI = {
  requestCreateChat,
  requestGetChats
};

export default chatAPI;
