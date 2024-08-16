import List from './components/List';
import './App.css';

const v_tasks =[
    {des: 'Learn React', comp:true},
    {des: 'Learn JSX use Map', comp: false},
    {des: 'Build a React App', comp: false}
];

function App() {
    return (
        <div className='page'>     
            <List heading='My Tasks' tasks={v_tasks}/>
        </div>
    );
}

export default App;
