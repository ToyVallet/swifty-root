export default function getFestivalStatus(startDateStr: string, endDateStr: string): 'before' | 'pending' | 'end' {
  const startDate = new Date(startDateStr);
  const endDate = new Date(endDateStr);
  const now = new Date();
  if (now < startDate)
    return "before";
  if (now >= startDate && now <= endDate)
    return "pending";
  return "end";
}
