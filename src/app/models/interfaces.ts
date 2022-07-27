import { DocumentData } from 'firebase/firestore';

export interface IGame extends DocumentData {
  blaBla: string;
}

export interface IPlayer extends DocumentData {
  id: string;
  name: string;
}

export interface Events {
  id: string;
  date: number; // in EPOCH stamp (Unix Epoch TimeStamp => UETS)
}
