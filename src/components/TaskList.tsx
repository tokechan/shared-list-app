import { Checkbox, Text, Card } from '@radix-ui/themes';
import { useTaskStore } from '../stores/taskStore';
import { format } from 'date-fns';
import { ja } from 'date-fns/locale';

const TaskList = () => {
  const { tasks, toggleTask } = useTaskStore();

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', marginTop: '1rem' }}>
      {tasks.map((task) => (
        <Card key={task.id} style={{ padding: '1rem' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
            <Checkbox 
              checked={task.completed}
              onCheckedChange={() => toggleTask(task.id)}
            />
            <div>
              <Text>{task.content}</Text>
              <Text size="1" style={{ color: 'var(--gray-11)' }}>
                {format(task.createdAt, 'M月d日 HH:mm', { locale: ja })}
              </Text>
            </div>
          </div>
        </Card>
      ))}
    </div>
  );
};

export default TaskList;
