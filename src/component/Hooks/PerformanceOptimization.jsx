import React, { useCallback, useMemo, useState } from "react";
import ChildComponent, {sleep} from "./Helper/ChildComponent";

// const user = { name: 'Ayid'};
const PerformanceOptimization = () => {
  const [user, setUser] = useState({name: 'Ayid'});
  console.log('Parent Component Rendered');
  const [count, setCount] = useState(0);
  const likeAction = () => setCount(count => count + 1);
  // useCallback: React.memo for function return function or callback
  const memoizedLikeAction = useCallback(likeAction, []);
  
  //useMemo: React.memo for function return value props
  //Mari pindahkan heavy process ke parent dan gunakan useMemo.

  const heavyProcess = (value) => {
    sleep(2000);
    return value
  }

  const userProps = useMemo(()=> heavyProcess(user), [user])



    return ( 
        <>
          <b>--Parent Component--</b><br />
          <button onClick={likeAction}>Like: {count}</button>
          <br /><br />
          <MemoizedChildComponent 
            title={'Halo'} 
            user={userProps}
            action={memoizedLikeAction}
            />
        </>
     );
}

// function compareProps(prevProps, nextProps) {
//   return JSON.stringify(prevProps) === JSON.stringify(nextProps)
// }

const MemoizedChildComponent = React.memo(ChildComponent); //React.memo(ChildComponent, compareProps)

// React.memo fo obj & arr
// {} === {} // false
// [] === [] // false
// 1. Pindahkan variabel ke luar fungsi
// 2. Buat fungsi komparasi
// 3. Simpan di dalam state


export default PerformanceOptimization;