export const convertDate = (date) => {
  const datetime = new Date(date)
  const day = datetime.getDate();
  const monthNames = [
    'January', 'February', 'March',
    'April', 'May', 'June',
    'July', 'August', 'September',
    'October', 'November', 'December'
  ];
  const month = monthNames[datetime.getMonth()];
  const year = datetime.getFullYear();
  return `${day} ${month} ${year}`;
}