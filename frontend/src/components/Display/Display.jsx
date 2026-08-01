import { useEffect, useState } from "react";

function Display(props){
    const {count} = props;

    const [text, setText] = useState("Loading...");

    useEffect(() => {
        setTimeout(() => {
setText('count : ', count);
        }, 2000);
        
    }, []);

    return (
        <div>
            {text}
        </div>
    )
}

export default Display;