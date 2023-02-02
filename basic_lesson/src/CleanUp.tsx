// rafce でテンプレートが作成できる ES7 React/Redux/GraphQL/React-Native snippets

import React, { useState, useEffect } from 'react';

const CleanUp: React.FC = () => {
  const [currentNum, setCurrentNum] = useState(0);
  const incrementNum = () => {
    console.log('Mouse event invoked !');
    setCurrentNum((preNumber) => preNumber + 1);
  };

  useEffect(() => {
    console.log('useEffect in CleanUP invoked !');
    window.addEventListener('mousedown', incrementNum);
    // 下記の設定がなければ、ブラウザをクリックするだけで、
    return () => {
      console.log('CleanUp invoked !');
      window.removeEventListener('mousedown', incrementNum);
    };
  }, []);
  return <div>{currentNum}</div>;
};

export default CleanUp;
