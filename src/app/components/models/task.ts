export interface TaskModel {
  id: number;
  name: string;
  done: boolean;
}

export type FilterType = 'all' | 'done' | 'pending';
