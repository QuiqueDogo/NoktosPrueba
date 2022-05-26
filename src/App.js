import './App.css';
import React, {
  useState,
  createContext,
  useMemo
} from 'react';
import TodoApp from './pages/TodoApp';
import Login from './pages/Login';

export const LoginContext = createContext({
  info: '',
  setinfo: () => {},
});



function App() {
  const [info, setinfo] = useState(false);
  const value = useMemo(
    () => ({ info, setinfo }), 
    [info]
  );
  return (
    <div className="App">
      <LoginContext.Provider value={value}>
        {info ? <TodoApp /> : <Login /> }
      </LoginContext.Provider>
    
    </div>
  );
}

export default App;
