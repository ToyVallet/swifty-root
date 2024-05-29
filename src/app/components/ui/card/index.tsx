import { StatusNotifier } from "@/app/components";
import formatDate from "@/app/util/formatDate";
import getFestivalStatus from "@/app/util/getFestivalStatus";
import styles from './card.module.css';


export default function Card({ children }: { children: React.ReactNode }) {
  return (
    <li className={styles.item}>
      {children}
    </li>
  );
}

function Description({ name, addr, startDate, endDate }: { name: string, addr: string, startDate: string, endDate: string }) {
  return (
    <div className={styles.description}>
      <h3 className={styles.heading}>{name}</h3>
      <span className={styles.addr}>{addr}</span>
      <span className={styles.addr}>{`${formatDate(startDate)} - ${formatDate(endDate)}`}</span>
      <StatusNotifier status={getFestivalStatus(startDate, endDate) as 'before' | 'pending' | 'end'} />
    </div>
  )
}

Description.displayName = 'Description';
Card.Description = Description;
