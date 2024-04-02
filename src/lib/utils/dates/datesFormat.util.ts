export const getFormattedDate = (date: Date) =>
  new Date(date).toLocaleDateString("en-US", {
    month: "short",
    year: "numeric",
  });
