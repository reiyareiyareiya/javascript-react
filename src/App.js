import logo from './logo.svg';
import './App.css';


import {Hello, Counter} from './components/index';


function App() {
  const username = 'hayashimaru';

  return (
    <>
      <Hello username={username}/>
      <Counter/>
      <br/>
      { username }を全部に書くのはめんどくさないか？
    </>

  );
}

export default App;
