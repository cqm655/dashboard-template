const ConvertInt64Timestamp = (timestamp: string) => {
  const offsetInMs = Number.parseInt(timestamp) / 10_000;
  const baseDate = Date.parse("1601-01-01T00:00:00Z");
  if (timestamp === "0") return "null";
  else return new Date(baseDate + offsetInMs).toUTCString();
};

export default ConvertInt64Timestamp;
