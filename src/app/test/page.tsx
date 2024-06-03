import { cookies } from "next/headers";

export default async function page() {
  const nextCookies = cookies();
  // 2. get next cookie
  return (
    <>{JSON.stringify(nextCookies.get('swifty-access'))}</>
  )
}

