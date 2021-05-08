import React from 'react';
import Form from './shared/Form';

const PostForm = () => {
  return (
    <Form
      fields={{
        name: {
          label: '이름',
          inputProps: {
            placeholder: '햄스터 이름을 입력하세요'
          }
        },
        age: {
          label: '나이',
          inputProps: {
            placeholder: '햄스터 나이를 입력하세요'
          }
        },
        location: {
          label: '지역',
          inputProps: {
            placeholder: '지역을 입력하세요'
          }
        },
        details: {
          label: '세부사항',
          inputProps: {
            placeholder: '그 외 세부사항을 입력하세요'
          }
        }
      }}
    />
  );
};

export default PostForm;
