import React from "react";
import Link from "next/link";
import styles from '../../styles/Shop.module.scss'

const Learn: React.FC = () => {
  return (
      <main className={styles.shop}>
          <Link href={`/`}>
            <a>{'<'} Home</a>
          </Link>
          <h1>Shop page</h1>
      </main>
  );
};

export default Learn;