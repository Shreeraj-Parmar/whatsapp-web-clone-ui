export const formateDate = (date) => {
  const hours = new Date(date).getHours();
  const min = new Date(date).getMinutes();
  return `${hours} : ${min}`;
};
