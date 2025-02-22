import { formatDistance } from 'date-fns';

export const formatData = date => {
  return formatDistance(new Date(date), new Date(), { addSuffix: true });
};
