import utilStyles from '../styles/utils.module.css';

export function ThemeList({t, c}) {
    return(
        <li className={utilStyles.listItem} key={t}>
            <dev>{t} **{c}**</dev>
        </li>
    );
}

export default function Theme(props) {
    var array_theme_cnt = [];
    for(let t in props.theme) {
        var c = props.theme[t].length + 1
        var e = {t, c};
        array_theme_cnt.push(e);
    }
    return(
        <div>
            <h1>主题分类</h1>
            <ul className={utilStyles.list}>
                {array_theme_cnt.map(ThemeList)}
            </ul>
        </div>
    );
}