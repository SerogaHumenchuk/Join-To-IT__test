import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from './Quote.module.css';

const QuoteView = ({ qouteByCategory, randomQouteBtn, randomQoute }) => {
  return (
    <>
      <NavLink to="/" className={styles.btnComeBack} title="Back to categories">
        &#8249;
      </NavLink>
      <div className={styles.container}>
        {randomQoute ? (
          <div>
            <img
              className={styles.image}
              src={randomQoute.imgSrc}
              alt="author img"
            />
            <h3 className={styles.qoute}>{randomQoute.quote}</h3>
            <p className={styles.author}>{randomQoute.whom}</p>
          </div>
        ) : (
          qouteByCategory && (
            <div>
              <img
                className={styles.image}
                src={qouteByCategory.imgSrc}
                alt="author img"
              />
              <h3 className={styles.qoute}>{qouteByCategory.quote}</h3>
              <p className={styles.author}>{qouteByCategory.whom}</p>
            </div>
          )
        )}

        <div className={styles.btnContainer}>
          <button className={styles.btn} type="button" onClick={randomQouteBtn}>
            Random Qoute
          </button>
          {/* <button
            className={styles.btn}
            type="button"
            onClick={() => randomAuthorQoute(`${qouteByCategory.whom}`)}
          >
            Random Author Qoute
          </button> */}
        </div>
      </div>
    </>
  );
};

export default QuoteView;
