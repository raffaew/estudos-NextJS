// services/task.ts
import { addDoc, collection } from "firebase/firestore";
import { db } from "@/services/firebaseConnection";

type TaskData = {
  tarefa: string;
  created: Date;
  user: string;
  public: boolean;
};

export async function createTask(data: TaskData) {
  return addDoc(collection(db, "tarefas"), data);
}