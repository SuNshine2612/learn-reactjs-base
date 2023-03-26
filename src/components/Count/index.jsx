import { useState } from 'react';

Count.propTypes = {

};

function Count(props) {

    const [count, setCount] = useState(0);

    return (
        <div>
            {count}

            <button onClick={() => setCount(x => x + 1)}>Count</button>
        </div>
    );
}

export default Count;