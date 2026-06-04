const formatDateHour = (date: Date = new Date()): string => {
  return new Intl.DateTimeFormat("pt-br", {
    day: "2-digit",
    month: "2-digit",
    year: "2-digit",
    hour: "2-digit",
    minute: "2-digit",
    hour12: false,
  })
    .format(date)
    .replace(",", "");
};

export default formatDateHour;
