"use client";
import { db } from "@/services/firebaseConnection";
import {
  collection,
  query,
  orderBy,
  where,
  onSnapshot,
} from "firebase/firestore";

import { useEffect, useState } from "react";
import styles from "./styles.module.css";
import { FiShare2 } from "react-icons/fi";
import { FaTrash } from "react-icons/fa";

interface TaskProps {
  id: string;
  created: Date;
  public: boolean;
  tarefa: string;
  user: string;
}

interface TaskListProps {
  userEmail: string;
  initialTasks: TaskProps[];
}

export function TaskList({ userEmail, initialTasks }: TaskListProps) {
 const [tasks, setTasks] = useState<TaskProps[]>(initialTasks);

  useEffect(() => {
    const tarefasRef = collection(db, "tarefas");
    const q = query(
      tarefasRef,
      orderBy("created", "desc"),
      where("user", "==", userEmail),
    );

    const unsubscribe = onSnapshot(q, (snapshot) => {
      const lista = snapshot.docs.map((doc) => ({
        id: doc.id,
        tarefa: doc.data().tarefa,
        created: doc.data().created,
        user: doc.data().user,
        public: doc.data().public,
      }));
      setTasks(lista);
    });

    return () => unsubscribe(); // ← fecha a conexão ao desmontar o componente
  }, [userEmail]);

  return (
    <>
      <section className={styles.taskContainer}>
        <h1>Minhas tarefas</h1>

        {tasks.map((item) => (
          <article key={item.id} className={styles.task}>
            {item.public && (
              <div className={styles.tagContainer}>
                <label className={styles.tag}>PUBLICO</label>
                <button className={styles.shareButton}>
                  <FiShare2 size={22} color="#3183ff" />
                </button>
              </div>
            )}

            <div className={styles.taskContent}>
              <p>{item.tarefa}</p>
              <button className={styles.trashButton}>
                <FaTrash size={24} color="#ea3140" />
              </button>
            </div>
          </article>
        ))}
      </section>
    </>
  );
}
