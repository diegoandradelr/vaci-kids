export interface Vaccine {
  id: number;
  childId: number;
  name: string;
  dueDate: string;
  applicationDate?: string;
  applied: boolean;
}
