"use server";

type ResponseType = {
  subId: string;
  name: string;
  addr: string;
  startDate: string;
  endDate: string;
  description: string;
};

export async function getAllFestivals() {
  const res = await fetch('https://dpi.swifty.kr/admin/festival', {
    method: 'GET',
    credentials: 'include',
    headers: {
      'Content-type': 'application/json',
    },
  });
  const datas: ResponseType[] = await res.json();
  console.log(`datas: ${JSON.stringify(datas)}`);
  return datas;
}

export async function getMockAllFestivals(): Promise<FestivalInfoResponse[]> {
  return (
    [
      {
        "subId": "3fa85f64-5717-4562-b3fc-2c963f66afa6",
        "name": "단국대 축제",
        "addr": "단국대학교",
        "startDate": "2024-05-23T13:57:23.132Z",
        "endDate": "2024-05-23T13:57:23.132Z",
        "description": "2024년 단국대학교 축제 `Orbit`"
      },
      {
        "subId": "2fa85f64-5717-4562-b3fc-2c963f66afa6",
        "name": "서울대 축제",
        "addr": "서울대학교",
        "startDate": "2024-05-28T13:57:23.132Z",
        "endDate": "2024-06-01T13:57:23.132Z",
        "description": "2024년 서울대학교 축제 `Sorbit`"
      },
      {
        "subId": "1fa85f64-5717-4562-b3fc-2c963f66afa6",
        "name": "부산대 축제",
        "addr": "부산대학교",
        "startDate": "2024-06-30T16:00:00.001Z",
        "endDate": "2024-07-03T22:00:00.000Z",
        "description": "2024년 서울대학교 축제 `Sorbit`"
      },
    ]
  );
}
