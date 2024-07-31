import { useState, useEffect, useRef } from 'react'
import AdjustSmartBanner from "@adjustcom/smart-banner-sdk"

function App() {
  const [count, setCount] = useState(0)
  const initRef = useRef(null);

    useEffect(
      () => {
        if (initRef.current) {
          return;
        }
        AdjustSmartBanner.init(
        {
                appToken: 'fsdfsdfsdf',
            }
        );
        AdjustSmartBanner.show();
        initRef.current = true;
      },
      []
    );

  return (
      <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
      </button>
  )
}

export default App
