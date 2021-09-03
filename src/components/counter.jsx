import { useState, useEffect } from 'react';

export const Counter = () => {
    const [cnt, setCnt] = useState(0);
    const [flag, setFlag] = useState(false);

    useEffect(() => {
        console.log('Hello!');
        return () => {console.log('clean');setCnt(0)}
    }, [flag])

    return (
        <>
          <p>{cnt}回収されました</p>
          <button onClick={() => setCnt(prevState =>prevState + 1)}> up </button>
          <button onClick={() => setFlag(prev => !prev)}>down表示</button>
          {flag ?
            <button onClick={() => setCnt(prevState =>prevState - 1)}> down </button>
            :
            <></>
          }

        </>
    )
}