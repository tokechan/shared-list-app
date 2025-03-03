import { Theme } from '@radix-ui/themes';
import '@radix-ui/themes/styles.css';
import TaskList from './components/TaskList';
import MemoList from './components/MemoList';
import AddTaskForm from './components/AddTaskForm';
import AddMemoForm from './components/AddMemoForm';

function App() {
  return (
    <Theme appearance="light" accentColor="mint" radius="medium">
      <div style={{ padding: '2rem', maxWidth: '800px', margin: '0 auto' }}>
        <h1>夫婦のTODO共有アプリ</h1>
        
        <div style={{ display: 'grid', gap: '2rem', gridTemplateColumns: '1fr 1fr' }}>
          <div>
            <h2>タスク</h2>
            <AddTaskForm />
            <TaskList />
          </div>
          
          <div>
            <h2>メモ</h2>
            <AddMemoForm />
            <MemoList />
          </div>
        </div>
      </div>
    </Theme>
  );
}

export default App;
