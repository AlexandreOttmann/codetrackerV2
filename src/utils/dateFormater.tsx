export const dateConverter = (dateInput: any, hour?: boolean) => {
  const date = new Date(dateInput);
  const formatDate = date.toLocaleString('fr-FR', { timeZone: 'UTC' }).slice(0, 10);
  if (!hour) {
    return formatDate + ' ' + dateInput.slice(11, 19);
  } else {
    return formatDate;
  }
};
