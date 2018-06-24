import moment from 'moment';

// eslint-disable-next-line import/prefer-default-export
export const sortDatesDesc = (a, b) => moment(b.date).diff(a.date);
