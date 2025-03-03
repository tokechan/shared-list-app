import { useState } from 'react';
import { Button } from '@radix-ui/themes';
import { useTaskStore } from '../stores/taskStore';

const AddTaskForm = () => {
  const [content, setContent] = useState('');
  const addTask = useTaskStore((state) => state.addTask);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!content.trim()) return;
    
    addTask(content.trim());
    setContent('');
  };

  return (
    <form onSubmit={handleSubmit} style={{ display: 'flex', gap: '0.5rem' }}>
      <input
        style={{
          flex: 1,
          padding: '0.5rem',
          borderRadius: '4px',
          border: '1px solid #ccc',
          fontSize: '1rem'
        }}
        type="text"
        placeholder="新しいタスクを入力..."
        value={content}
        onChange={(e) => setContent(e.target.value)}
      />
      <Button type="submit">追加</Button>
    </form>
  );
};

export default AddTaskForm;   