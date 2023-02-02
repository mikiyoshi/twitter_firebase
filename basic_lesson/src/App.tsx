import React, { useState, useEffect } from 'react';
import { Counter } from './features/counter/Counter';
import './App.css';
import CleanUp from './CleanUp';

const App: React.FC = () => {
  const [status, setStatus] = useState<string | number>('text');
  // const [status, setStatus] = useState<string>('text');
  const [input, setInput] = useState('');
  const [counter, setCounter] = useState(0);
  const [display, setDisplay] = useState(true);

  const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    // React.ChangeEvent<HTMLInputElement> は下の input タグの onChange にカーソルを合わせると表示されるので、それをコピー
    // React.ChangeEventHandler<HTMLInputElement> で表示される時は、onChange={onChangeHandler} を onChange={(e) => onChangeHandler} に変えて、e にカーソルを合わせれば確認できる
    setInput(e.target.value);
  };

  useEffect(() => {
    console.log('useEffect in App invoked !');
    document.title = `current value is ${counter}`;
    // document.title はヘッダー内の <title> が更新されてしまう
  }, [counter]);
  // 第二引数を指定しないと、useEffect がいつも更新されてしまう
  // [counter] を指定することで、counter の更新の時だけ実行される
  // [] を指定すると、初回のみ更新される
  return (
    <div className="App">
      <header className="App-header">
        <h4>{status}</h4>
        {/* <button onClick={() => setStatus('new text')}>Button</button> */}
        <button onClick={() => setStatus('1')}>Button</button>

        <h4>{input}</h4>
        <input type="text" value={input} onChange={onChangeHandler} />
        {/* <input type="text" value={input} onChange={(e) => onChangeHandler} /> */}

        <h4>{counter}</h4>
        <button onClick={() => setCounter((preCounter) => preCounter + 1)}>
          Increment
        </button>

        {display && <CleanUp />}
        <button onClick={() => setDisplay(!display)}>Toggle display</button>
        <Counter />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <span>
          <span>Learn </span>
          <a
            className="App-link"
            href="https://reactjs.org/"
            target="_blank"
            rel="noopener noreferrer"
          >
            React
          </a>
          <span>, </span>
          <a
            className="App-link"
            href="https://redux.js.org/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Redux
          </a>
          <span>, </span>
          <a
            className="App-link"
            href="https://redux-toolkit.js.org/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Redux Toolkit
          </a>
          ,<span> and </span>
          <a
            className="App-link"
            href="https://react-redux.js.org/"
            target="_blank"
            rel="noopener noreferrer"
          >
            React Redux
          </a>
        </span>
      </header>
    </div>
  );
};

export default App;
