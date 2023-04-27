// this is from Ivana, I have no idea what API to use with it yet
import {useState, useEffect} from 'react';

const url = "" // your api url here
export default function ImportAPISample() {
  const [data, setData] = useState([]); 

  useEffect(() => {
    fetch(url).then((response) => response.json()).then((data) => setData(data));
  }, [])

}