export type ReplayType = {
  name: string;
  text: string;
};

export type TrType = {
  id: number;
  name: string;
  email: string;
  role?: number;
  text?: string;
  rating?: number;
  date?: string;
  reply?: ReplayType;
};
