import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from './QuotesCategoriesView.module.css';

// const heightImage = () => {
//   const size = Math.floor(Math.random() * 2);
//   let res;
//   if (size === 1) {
//     res = styles.small;
//   } else {
//     res = styles.big;
//   }
//   return res;
// };

const QuotesCategoriesView = ({ categories }) => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Fine Simpsons Quotes</h1>
      <p className={styles.subtitle}>
        The best quotes from our cartoon characters
      </p>
      <ul className={styles.list}>
        {categories &&
          categories.map(el => (
            <li className={styles.item} key={el.quote}>
              <NavLink to={`/qoutes/${el.whom.toLowerCase()}`}>
                <img src={el.imgSrc} alt="categoryImg" className={styles.img} />
                <p className={styles.character}>{el.whom}</p>
              </NavLink>
            </li>
          ))}
      </ul>
    </div>
  );
};

export default QuotesCategoriesView;
// .filter(
//   (currentValue, index, array) =>
//     array.indexOf(currentValue.whome) !== -1,
// )
