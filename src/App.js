import './App.css';
import Login from './login';
import Todo from './todo';

function App() {

  const token = localStorage.getItem('token');

  if (!token){
    return (<Login></Login>);
  }

    return (
      <Todo></Todo>
    );
}

export default App;
