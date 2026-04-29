import { TextareaHTMLAttributes } from "react";
import styles from "./styles.module.css";

export function Textarea({
  ...rest
}: TextareaHTMLAttributes<HTMLTextAreaElement>) {
  return <textarea className={styles.textarea} {...rest} />;
}