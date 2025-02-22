import { FaRegThumbsUp } from 'react-icons/fa';
import { MdPeople, MdOutlineProductionQuantityLimits } from 'react-icons/md';
import { GiTreeDoor } from 'react-icons/gi';
import StatisticsItem from '../StatisticsItem/StatisticsItem';
import style from './Statistics.module.css';

const Statistics = ({ stats }) => {
  const icon = [
    FaRegThumbsUp,
    MdPeople,
    MdOutlineProductionQuantityLimits,
    GiTreeDoor,
  ];

  return (
    <ul className={style.list}>
      {stats.map(({ id, title, total }, index) => (
        <li key={id} className={style.item}>
          <StatisticsItem title={title} total={total} icon={icon[index]} />
        </li>
      ))}
    </ul>
  );
};

export default Statistics;
