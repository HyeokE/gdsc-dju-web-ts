import React from 'react';
import { dbService } from '../../../firebase/firebase';

const AdminContent: React.FC<{ selectedCategory: string }> = ({
  selectedCategory,
}) => {
  const uploadPost = async () => {
    try {
      await dbService.collection('adminUsers').add({
        name: 'Harry',
        email: '12423141@gmail.com',
      });
    } catch (e) {
      console.log(e);
    }
  };
  return <>{/*<button onClick={() => uploadPost()}>asdasdadasd</button>*/}</>;
};

export default AdminContent;
