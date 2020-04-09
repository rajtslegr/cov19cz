const helpers = {
  formatDate(inputDate) {
    const date = new Date(inputDate);
    const year = date.getFullYear(inputDate);
    const month = String(date.getMonth(inputDate) + 1).padStart(1, '0');
    const day = String(date.getDate(inputDate)).padStart(1, '0');

    return `${day}.${month}.${year}`;
  },
};

export default helpers;
