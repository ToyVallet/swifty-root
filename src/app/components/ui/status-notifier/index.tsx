import clsx from "clsx";
import styles from "./status-notifier.module.css";

export default function StatusNotifier({
  status,
}: { status: 'before' | 'pending' | 'end' }) {
  return (
    <div className={clsx(styles.notifier,
      {
        [styles.before]: status === 'before',
        [styles.pending]: status === 'pending',
        [styles.end]: status === 'end',
      })}>
      {status}
    </div>
  )
}
