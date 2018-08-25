import { months } from './constants.js';

const getMonth = (index) => months[index];

export const format = (isoString) => {
    const dateObj = new Date(isoString);
    const dateStr = `${dateObj.getDate()}-${getMonth(dateObj.getMonth())}-${dateObj.getFullYear()}`;
    return dateStr;
}