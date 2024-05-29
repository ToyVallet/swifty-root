type LineUpInfoResponse = {
  subId: string;
  title: string;
  description: string;
  performanceDate: string;
  lineUpImagePath: string;
  isOpened: "BEFORE" | "PENDING" | "CLOSED";
}
