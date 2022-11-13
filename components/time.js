import utilStyles from '../styles/utils.module.css';

export function TimeList({t, c}) {
    return(
        <li className={utilStyles.listItem} key={t}>
            <dev>{t} **{c}**</dev>
        </li>
    );
}

export default function Time({time}) {
    var array_time_cnt = [];
    for(let t in time) {
        var c = time[t].length + 1
        var e = {t, c};
        array_time_cnt.push(e);
    }
    return(
        <div>
            <h1>主题分类</h1>
            <ul className={utilStyles.list}>
                {array_time_cnt.map(TimeList)}
            </ul>
        </div>
    );
}