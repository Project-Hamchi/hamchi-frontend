import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import postAPI from '../api/post';

const Submissions = ({ route, navigator }) => {
  const { postId } = route.params;
  const [submissions, setSubmissions] = useState([]);

  useEffect(() => {

  }, []);

  async function getSubmissions() {
    try {
      const response = await postAPI.requestGetPostSubmissions();

      setSubmissions(response.data.submissions);
    } catch (err) {

    }
  }

  return (
    <Text>{postId}</Text>
  );
};

export default Submissions;
