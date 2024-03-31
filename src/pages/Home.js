import { useState, useEffect } from 'react';
import { db } from '../utils/firebase';
import { collection, doc, getDocs, setDoc } from 'firebase/firestore';
import './Home.css';

function Home() {
  const [parkingSlots, setParkingSlots] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      try {
        const snapshot = await getDocs(collection(db, 'parkingSlots'));
        const slotsData = {};
        snapshot.forEach((doc) => {
          slotsData[doc.id] = doc.data();
        });
        setParkingSlots(slotsData);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  const handleSlotClick = (floor, slot) => {
    const updatedSlots = { ...parkingSlots };
    updatedSlots[floor][slot].State = false;

    if (!updatedSlots[floor][slot].State) {
      updatedSlots[floor][slot].Name = '';
      updatedSlots[floor][slot].ContactNo = '';
      updatedSlots[floor][slot].CarNo = '';
      updatedSlots[floor][slot].EntryTime = '';
    }

    setDoc(doc(db, 'parkingSlots', floor), updatedSlots[floor]);
    setParkingSlots(updatedSlots);
  };

  return (
    <div className='parking-spaces'>
      {Object.keys(parkingSlots).map((floor) => (
        <div key={floor} className='floor'>
          <h1>Floor {floor}</h1>
          <div className='singlefloor'>
            {Object.keys(parkingSlots[floor]).map((slot) => (
              <div
                key={slot}
                className={parkingSlots[floor][slot].State ? 'slot occupied' : 'slot unoccupied'}>
                  <p>Slot: {floor}{slot}</p>
                <p>Name: {parkingSlots[floor][slot].Name}</p>
                <p>Contact No: {parkingSlots[floor][slot].ContactNo}</p>
                <p>Car No: {parkingSlots[floor][slot].CarNo}</p>
                <p>Entry Time: {parkingSlots[floor][slot].EntryTime}</p>
                <button onClick={() => handleSlotClick(floor, slot)}>Free</button>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

export default Home;
