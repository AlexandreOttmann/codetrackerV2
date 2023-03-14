import { useState, useEffect } from 'react';
import reactLogo from './assets/react.svg';
import './App.css';
import { db } from './database/firebase';
import { collection, query, where, getDocs } from 'firebase/firestore';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  // const [count, setCount] = useState(0);
  // const [data, setData] = useState<{}>([]);

  // const getProjects = async () => {
  //   try {
  //     console.log('coucou');
  //     const snapshot = await getDocs(collection(db, 'projects'));
  //     console.log(snapshot);
  //     const projects = snapshot.docs.map((doc) => doc.data());
  //     console.log(projects);
  //     setData(projects);
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };

  // useEffect(() => {
  //   getProjects();
  // }, []);

  return (
    <Router>
      <Routes>
        <Route path='/' element={<div>Home</div>} />
      </Routes>
    </Router>
  );
}

export default App;
