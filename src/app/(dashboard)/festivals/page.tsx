import Link from "next/link";
import { getMockAllFestivals } from "./data";
import Card from "@/app/components/ui/card";
import CardList from "@/app/components/ui/card-list";
import styles from "./page.module.css";

export default async function Page() {
  const datas = await getMockAllFestivals();
  return (
    <main className={styles.main}>
      <h2 className={styles.heading}>축제 관리</h2>
      <CardList className={styles.cardList}>
        {datas.map(({ subId, name, addr, startDate, endDate }) =>
          <Link href={`festivals/${subId}`} key={subId}>
            <Card>
              <Card.Description name={name} addr={addr} startDate={startDate} endDate={endDate} />
            </Card>
          </Link>
        )}
      </CardList>
    </main>
  );
}
