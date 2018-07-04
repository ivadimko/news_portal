import moment from 'moment';

export const sortDatesDesc = (a, b) => moment(b.createAt).diff(a.createAt);

export const hasErrors = fieldsError => Object.keys(fieldsError).some(field => fieldsError[field]);
