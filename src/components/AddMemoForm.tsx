import { useState } from 'react';
import { Button, TextArea } from '@radix-ui/themes';
import { useTaskStore } from '../stores/taskStore';

const AddMemoForm = () => {
  const [content, setContent] = useState('');
  const addMemo = useTaskStore((state) => state.addMemo);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!content.trim()) return;
    
    addMemo(content.trim());
    setContent('');
  };

  return (
    <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
      <TextArea 
        placeholder="新しいメモを入力..."
        value={content}
        onChange={(e) => setContent(e.target.value)}
      />
      <Button type="submit">追加</Button>
    </form>
  );
};

export default AddMemoForm;
