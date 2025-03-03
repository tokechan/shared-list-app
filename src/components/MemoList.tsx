import { Card, Text, IconButton } from '@radix-ui/themes';
import { Cross2Icon } from '@radix-ui/react-icons';
import { useTaskStore } from '../stores/taskStore';
import { format } from 'date-fns';
import { ja } from 'date-fns/locale';

const MemoList = () => {
  const { memos, deleteMemo } = useTaskStore();

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', marginTop: '1rem' }}>
      {memos.map((memo) => (
        <Card key={memo.id} style={{ padding: '1rem' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
            <div>
              <Text>{memo.content}</Text>
              <Text size="1" style={{ color: 'var(--gray-11)' }}>
                {format(memo.createdAt, 'M月d日 HH:mm', { locale: ja })}
              </Text>
            </div>
            <IconButton 
              variant="ghost" 
              color="gray" 
              onClick={() => deleteMemo(memo.id)}
            >
              <Cross2Icon />
            </IconButton>
          </div>
        </Card>
      ))}
    </div>
  );
};

export default MemoList;
