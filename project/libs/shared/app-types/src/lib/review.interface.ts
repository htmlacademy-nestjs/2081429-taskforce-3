export interface Review {
  id?: number;
  review: string;
  taskId: number;
  rating: number;
  userId: string;
  contractorId: string;
  createdAt: Date;
}