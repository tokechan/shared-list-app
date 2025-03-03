export interface Task {
  id: string;
  content: string;
  completed: boolean;
  createdAt: Date;
  completedAt?: Date;
}

export interface Memo {
  id: string;
  content: string;
  createdAt: Date;
}
