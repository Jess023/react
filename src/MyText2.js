import { useState } from "react";

export function MyText2() {
    const [text, settext] = useState('Hello');

    return(
        <div>
            <input
                type="text"
                value={text}
                onChange={(event) => settext(event.target.value)}
            />
            <h4>
                {text}
            </h4>
        </div>
    )
}

export default MyText2;
