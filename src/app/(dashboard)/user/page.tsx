export default async function Page() {
  const data = await (await fetch("https://dpi.swifty.kr/admin/host", {
    credentials: "include",
  })).json()
  console.log(data)
  return <div></div>;
}
