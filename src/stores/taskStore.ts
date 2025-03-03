import { create } from 'zustand';
import { Task, Memo } from '../types/task';

interface TaskStore {
  tasks: Task[];
  memos: Memo[];
  addTask: (content: string) => void;
  toggleTask: (taskId: string) => void;
  addMemo: (content: string) => void;
  deleteMemo: (memoId: string) => void;
}

export const useTaskStore = create<TaskStore>((set) => ({
  tasks: [],
  memos: [],
  
  addTask: (content: string) => set((state) => ({
    tasks: [
      ...state.tasks,
      {
        id: crypto.randomUUID(),
        content,
        completed: false,
        createdAt: new Date(),
      },
    ],
  })),

  toggleTask: (taskId: string) => set((state) => ({
    tasks: state.tasks.map((task) =>
      task.id === taskId
        ? { ...task, completed: !task.completed, completedAt: !task.completed ? new Date() : undefined }
        : task
    ),
  })),

  addMemo: (content: string) => set((state) => ({
    memos: [
      ...state.memos,
      {
        id: crypto.randomUUID(),
        content,
        createdAt: new Date(),
      },
    ],
  })),

  deleteMemo: (memoId: string) => set((state) => ({
    memos: state.memos.filter((memo) => memo.id !== memoId),
  })),
}));
