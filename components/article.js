import utilStyles from '../styles/utils.module.css';
import Date from './date';

export default function Article({postData}) {
    return(
        <article>
          <h1 className={utilStyles.headingXl}>{postData.title}</h1>
          <div className={utilStyles.lightText}>
            <Date dateString={postData.date} />
          </div>
          <div dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
        </article>
    );
}