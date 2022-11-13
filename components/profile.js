const name = "enderman Zhang"
const github = "https://github.com/zty111/"
const email = "zty_michael@stu.pku.edu.cn"

export default function Profile() {
    return(
        <div>
            <h1>about me</h1>
            <h3>name: {name}</h3>
            <h3>github: {github}</h3>
            <h3>email: {email}</h3>
        </div>
    );
}