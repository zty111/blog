import Head from 'next/head';
import Image from 'next/image';
import styles from './layout.module.css';
import utilStyles from '../styles/utils.module.css';
import Link from 'next/link';
import Date from '../components/date';
import DDL from './ddl';
import Profile from './profile';
import Theme from './theme';
import Time from './time';
import Forest from './forest';
import ToDoList from './to_do';
import Rank from './rank'

const name = 'enderman';

function Top() {
  return(
    <div className={styles.header}>
      <Link href="/">
        <Image
          priority
          src="/images/profile.jpg"
          className={utilStyles.borderCircle}
          height={144}
          width={144}
          alt=""
        />
      </Link>

      <div> 
        <h1 className={utilStyles.heading2Xl}>{name}</h1>
        <h2 className={utilStyles.headingMd}>山重水复疑无路，柳暗花明又一村</h2>
      </div>

      <div>
        <small className={utilStyles.lightText}>
          <Date dateString="2022-11-13" />
        </small>
        <br/>
        <DDL></DDL>
      </div>
    </div>
  );
}

function Left({theme, time}) {
  return(
    <div>
      <Profile/>
      <Rank/>
      <Theme theme={theme}/>
      <Time time={time}/>
      <Forest/>
      <ToDoList/>
    </div>
  )
}

function Bottom() {
  return(
    <div className={styles.backToHome}>
      <Link href="/">← Back to home</Link>
    </div>
  );
}

export default function Layout({ children, home, theme, time }) {
  return (
    <div className={styles.container}>
      <header>
        <Top/>
      </header>
      <div className={styles.header}>
        <Left theme={theme} time={time}/>
        <main>{children}</main>
      </div>
      {!home && <Bottom/>}
    </div>
  );
}