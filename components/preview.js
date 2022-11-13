import utilStyles from '../styles/utils.module.css';
import Link from 'next/link';
import Date from './date';

export default function Preview({ id, date, title, theme, text }) {
    return(
        <li className={utilStyles.listItem} key={id}>
            <Link href={`/posts/${id}`}>{title}</Link>
            <br/>
            <small className={utilStyles.lightText}>
            <Date dateString={date} />
            </small>
            <br/>
            <small>{theme}</small>
            <br/>
            <div>{text}</div>
        </li>
    );
}