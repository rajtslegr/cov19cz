const helpers = {
  formatDate(inputDate) {
    const date = new Date(inputDate);
    const year = date.getFullYear(inputDate);
    const month = String(date.getMonth(inputDate) + 1).padStart(1, '0');
    const day = String(date.getDate(inputDate)).padStart(1, '0');

    return `${day}.${month}.${year}`;
  },

  formatDateTime(inputDateTime) {
    const date = new Date(inputDateTime);
    const year = date.getFullYear(inputDateTime);
    const month = String(date.getMonth(inputDateTime) + 1).padStart(1, '0');
    const day = String(date.getDate(inputDateTime)).padStart(1, '0');
    const hour = String(date.getHours(inputDateTime) - 1).padStart(2, '0');
    const minute = String(date.getMinutes(inputDateTime)).padStart(2, '0');

    return `${day}.${month}.${year} ${hour}:${minute}`;
  },
};

export default helpers;
