import { useState } from "react";

export default function ToDoList() {
    const [list, setList] = useState(["完成博客", "加入数学公式"]);
    return(
        <div>
            <h1>to do list</h1>
            <ul>
                {list.map((content) => {return <li>{content}</li>;} )}
            </ul>
        </div>
    );
}