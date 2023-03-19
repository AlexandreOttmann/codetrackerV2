export const dateConverter = (dateInput: any) => {
  const date = new Date(dateInput);
  const formatDate = date.toISOString().slice(0, 10);
  return formatDate + ' ' + dateInput.slice(11, 19);
};
