import { Provider } from 'react-redux';
import './App.css';
import AddTask from './components/AddTask';
import TaskList from './components/TaskList';
import store from './redux-store/store';

function App() {
  return (
    <Provider store={store}>
      <div className='App'>
        <h1 className='App-header'>Task Manager</h1>
        <div className='container'>
          <AddTask />
          <TaskList />
        </div>
      </div>
    </Provider>
  );
}

export default App;
