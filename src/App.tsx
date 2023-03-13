import { useState, useEffect } from 'react';
import reactLogo from './assets/react.svg';
import './App.css';
import { db } from './database/firebase';
import { collection, query, where, getDocs } from 'firebase/firestore';

function App() {
  const [count, setCount] = useState(0);
  const [data, setData] = useState<{}>([]);

  const getProjects = async () => {
    try {
      console.log('coucou');
      const snapshot = await getDocs(collection(db, 'projects'));
      console.log(snapshot);
      const projects = snapshot.docs.map((doc) => doc.data());
      console.log(projects);
      setData(projects);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getProjects();
  }, []);

  console.log('DATA >>>>', data);
  console.log(typeof data);

  return (
    <div className='App'>
      <h1 className='text-3xl bg-red-400 font-bold underline'>Hello world!</h1>
    </div>
  );
}

export default App;
