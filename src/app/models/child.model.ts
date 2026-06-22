export interface Child {
  id: number;
  name: string;
  birthDate: string;
  status: 'up-to-date' | 'pending' | 'overdue';
}
