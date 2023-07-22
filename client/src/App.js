
import './App.css';
import Todo from './components/todo/Todo';
import{useState} from 'react'

function App() {

  const [todoItems, setTodoItems]=useState([
    {"name":"Learning HTML","description":"Learning new skills","done":true},
    {"name":"CSS","description":"Learning new lectures","done":true},
    {"name":"Responsive design","description":"Learning new skills","done":true},
    {"name":"Git","description":"Learning new skills","done":true},
    {"name":"JavaScript I","description":"Learning new skills","done":true},
    {"name":"JavaScript II","description":"Learning new skills","done":false}
    ])
  return (
    <div className="App">
 <main>
<Todo/>
</main>
<aside>
this is aside
</aside>
    </div>
  );
}

export default App;
