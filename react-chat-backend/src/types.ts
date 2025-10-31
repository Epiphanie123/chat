export type User = {
  id: string;
  name: string;
  avatar: string;
  isOnline: boolean;
  role: 'Patient' | 'Doctor';
};

export type Message = {
  id: string;
  senderId: string;
  text: string;
  timestamp: number;
  read: boolean;
};

export type Chat = {
  id: string;
  participants: [User, User];
  messages: Message[];
};