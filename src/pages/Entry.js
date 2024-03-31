import React, { useState, useEffect } from 'react';
import { db } from '../utils/firebase';
import { collection, doc, setDoc, getDocs, getDoc } from 'firebase/firestore';
import './Entry.css';

function Entry() {
  const [parkingSlots, setParkingSlots] = useState({});
  const [formData, setFormData] = useState({
    slot:'',
    name: '',
    contactNo: '',
    carNo: '',
    timestamp: '',
  });
  const [selectedFloor, setSelectedFloor] = useState('');
  const [selectedSlot, setSelectedSlot] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      try {
        const snapshot = await getDocs(collection(db, 'parkingSlots'));
        const slotsData = {};
        snapshot.forEach((doc) => {
          slotsData[doc.id] = doc.data();
        });
        setParkingSlots(slotsData);

        // Initialize selectedFloor and selectedSlot with the first available slot
        const firstAvailableSlot = Object.entries(slotsData).find(([floor, slots]) => {
          return Object.values(slots).some((slot) => !slot.State);
        });
        if (firstAvailableSlot) {
          const [floor, slot] = firstAvailableSlot;
          setSelectedFloor(floor);
          setSelectedSlot(slot);
        }
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  const updateSlotDataToFirestore = async (selectedFloor, selectedSlot, formData) => {
    try {
      const slotRef = doc(db, 'parkingSlots', selectedFloor);
      const docSnapshot = await getDoc(slotRef);
      const existingData = docSnapshot.exists() ? docSnapshot.data() : {};
      
      // Update the specific slot data
      existingData[selectedSlot] = {
        State: true,
        Name: formData.name,
        ContactNo: formData.contactNo,
        CarNo: formData.carNo,
        EntryTime: formData.timestamp,
      };
  
      // Update the document in Firestore
      await setDoc(slotRef, existingData);
  
      console.log('Slot data updated successfully:', existingData);
    } catch (error) {
      console.error('Error updating slot data in Firestore:', error);
    }
  };
  
  // Call the function with selectedFloor, selectedSlot, and formData
  

  const handleFormSubmit = async (e) => {
    e.preventDefault();

    try {
      // Ensure formData.slot is properly set with the selected slot
      if (!selectedFloor || !selectedSlot) {
        console.error('Please select a slot.');
        return;
      }

      // Update slot data in the database
      updateSlotDataToFirestore(selectedFloor, selectedSlot, formData);

      // Reset form data
      setFormData({
        slot:'',
        name: '',
        contactNo: '',
        carNo: '',
        timestamp: '',
      });

      // Log success message
      console.log('Form submitted successfully!');
    } catch (error) {
      console.error('Error submitting form:', error);
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSlotChange = (e) => {
    const [floor, slot] = e.target.value.split('-');
    setSelectedFloor(floor);
    setSelectedSlot(slot);
  };

  return (
    <div className='entryMain'>
      <h2>Entry Form</h2>
      <form onSubmit={handleFormSubmit}>
        <div>
          <label htmlFor="slot">Slot:</label>
          <select id="slot" name="slot" value={`${selectedFloor}-${selectedSlot}`} onChange={handleSlotChange}>
            <option value="">Select Slot</option>
            {Object.keys(parkingSlots).map((floor) =>
              Object.keys(parkingSlots[floor]).map((slot) => {
                const slotData = parkingSlots[floor][slot];
                // Check if the slot is available (State is false)
                if (!slotData.State) {
                  return <option key={slot} value={`${floor}-${slot}`}>{`${floor}-${slot}`}</option>;
                }
                return null; // Return null if the slot is occupied
              })
            )}
          </select>
        </div>
        <div>
          <label htmlFor="name">Name:</label>
          <input type="text" id="name" name="name" value={formData.name} onChange={handleInputChange} required />
        </div>
        <div>
          <label htmlFor="contactNo">Contact No:</label>
          <input type="text" id="contactNo" name="contactNo" value={formData.contactNo} onChange={handleInputChange} required />
        </div>
        <div>
          <label htmlFor="carNo">Car No:</label>
          <input type="text" id="carNo" name="carNo" value={formData.carNo} onChange={handleInputChange} required />
        </div>
        <div>
          <label htmlFor="timestamp">Timestamp:</label>
          <input type="datetime-local" id="timestamp" name="timestamp" value={formData.timestamp} onChange={handleInputChange} required />
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default Entry;
