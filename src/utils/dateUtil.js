export const getMonth = (idx) => {
  const months = ['Январь', 'Февраль', 'Март', 'Апрель', 'Май', 'Июнь', 'Июль', 'Август', 'Сентябрь', 'Октябрь', 'Ноябрь', 'Декабрь'];
  return months[idx];
};

export const formatDateToYYYYMMDD = (date) => {
  let d = new Date(date),
    month = '' + (d.getMonth() + 1),
    day = '' + d.getDate(),
    year = d.getFullYear();

  if (month.length < 2)
    month = '0' + month;
  if (day.length < 2)
    day = '0' + day;
  return [year, month, day].join('-');
};
export const formatDateToDDMMYYYY = (date, sep) => {
  if (sep === undefined) {
    sep = '-';
  }
  let d = new Date(date),
    month = '' + (d.getMonth() + 1),
    day = '' + d.getDate(),
    year = d.getFullYear();

  if (month.length < 2)
    month = '0' + month;
  if (day.length < 2)
    day = '0' + day;
  return [day, month, year].join(sep);
};
export const monthToDate = (month) => {
  return new Date(`${month.M}-01-${month.YYYY}`);

};
export const formatDateToMMDDYYYY = (date) => {
  let d = new Date(date),
    month = '' + (d.getMonth() + 1),
    day = '' + d.getDate(),
    year = d.getFullYear();

  if (month.length < 2)
    month = '0' + month;
  if (day.length < 2)
    day = '0' + day;
  return [month, day, year].join('-');
};

export const firstMonthOfQuarter = (quarter) => {
  let M = undefined;
  switch (quarter) {
    case 1:
      M = 1;
      break;
    case 2:
      M = 4;
      break;
    case 3:
      M = 7;
      break;
    case 4:
      M = 10;
      break;
    default:
      break;
  }
  return M;
};
export const getQuarterOfMonth = (month) => {
  let Q = undefined;
  if (month <= 3) {
    Q = 1;
  } else if (month <= 6) {
    Q = 2;
  } else if (month <= 9) {
    Q = 3;
  } else if (month <= 12) {
    Q = 4;
  }
  return Q;
};

export const getQuarterName = (Q) => {
  return Q === 1 ? 'I квартал' : Q === 2 ? 'II квартал' : Q === 3 ? 'III квартал' : 'IV квартал';
};

