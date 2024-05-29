import { Table } from "antd";
import { Button } from "antd/es/radio";
import LineupCreateForm from "@/app/components/ui/form/lineup-create-form";
import LineupUpdateForm from "@/app/components/ui/form/lineup-update-form";
import { DrawerButton, Tabs } from "@/app/components";
import { getMockFestivalDetail } from "./data";
import styles from './page.module.css';

export default async function Page({ params: { id } }: {
  params: { id: string }
}) {
  const concertInfo = await getMockFestivalDetail(id);
  const dataSource = concertInfo.adminConcertInfoResponses.map(concert => ({
    key: concert.subId,
    subId: concert.subId,
    name: concert.name,
    date: new Date(concert.startDate).toLocaleDateString('ko-KR', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      timeZone: 'Asia/Seoul'
    }),
    update: <DrawerButton variant="lineup-update"><LineupUpdateForm /></DrawerButton>,
    delete: <Button>삭제</Button>
  }));

  const columns = [
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
    },
    {
      title: 'Date',
      dataIndex: 'date',
      key: 'date',
    },
    {
      dataIndex: 'update',
      key: 'update',
    },
    {
      dataIndex: 'delete',
      key: 'delete',
    },
  ];

  return (
    <>
      <h2 className={styles.heading}>ooo 대학교</h2>
      <Tabs concertInfo={concertInfo} />
      <div className={styles.wrapper}>
        <DrawerButton
          className={styles.lineupCreateButton}
          variant='lineup-create'
        >
          <LineupCreateForm />
        </DrawerButton>
        <Table dataSource={dataSource} columns={columns} />
      </div>
    </>
  );
}
