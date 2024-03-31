const { db } = require('./utils/firebase');
const { collection, doc, setDoc } = require('firebase/firestore');

const parkingSlotsData = {
    "A" : {
        "1" : {
            "State": true,
            "Name": "Rushikesh",
            "ContactNo" : "7620451904",
            "CarNo" : "MH12BT8989",
            "EntryTime": "2024-09-25 17:45:30.005"
        },
        "2" : {
            "State": true,
            "Name": "Rushikesh",
            "ContactNo" : "7620451904",
            "CarNo" : "MH12BT8989",
            "EntryTime": "2024-09-25 17:45:30.005"
        },
        "3" : {
            "State": true,
            "Name": "Rushikesh",
            "ContactNo" : "7620451904",
            "CarNo" : "MH12BT8989",
            "EntryTime": "2024-09-25 17:45:30.005"
        },
        "4" : {
            "State": true,
            "Name": "Rushikesh",
            "ContactNo" : "7620451904",
            "CarNo" : "MH12BT8989",
            "EntryTime": "2024-09-25 17:45:30.005"
        },
        "5" : {
            "State": true,
            "Name": "Rushikesh",
            "ContactNo" : "7620451904",
            "CarNo" : "MH12BT8989",
            "EntryTime": "2024-09-25 17:45:30.005"
        },
        "6" : {
            "State": true,
            "Name": "Rushikesh",
            "ContactNo" : "7620451904",
            "CarNo" : "MH12BT8989",
            "EntryTime": "2024-09-25 17:45:30.005"
        },
        "7" : {
            "State": true,
            "Name": "Rushikesh",
            "ContactNo" : "7620451904",
            "CarNo" : "MH12BT8989",
            "EntryTime": "2024-09-25 17:45:30.005"
        },
        "8" : {
            "State": true,
            "Name": "Rushikesh",
            "ContactNo" : "7620451904",
            "CarNo" : "MH12BT8989",
            "EntryTime": "2024-09-25 17:45:30.005"
        },
        "9" : {
            "State": true,
            "Name": "Rushikesh",
            "ContactNo" : "7620451904",
            "CarNo" : "MH12BT8989",
            "EntryTime": "2024-09-25 17:45:30.005"
        },
        "10" : {
            "State": true,
            "Name": "Rushikesh",
            "ContactNo" : "7620451904",
            "CarNo" : "MH12BT8989",
            "EntryTime": "2024-09-25 17:45:30.005"
        },
        "11" : {
            "State": true,
            "Name": "Rushikesh",
            "ContactNo" : "7620451904",
            "CarNo" : "MH12BT8989",
            "EntryTime": "2024-09-25 17:45:30.005"
        },
        "12" : {
            "State": true,
            "Name": "Rushikesh",
            "ContactNo" : "7620451904",
            "CarNo" : "MH12BT8989",
            "EntryTime": "2024-09-25 17:45:30.005"
        },
        "13" : {
            "State": true,
            "Name": "Rushikesh",
            "ContactNo" : "7620451904",
            "CarNo" : "MH12BT8989",
            "EntryTime": "2024-09-25 17:45:30.005"
        },
        "14" : {
            "State": true,
            "Name": "Rushikesh",
            "ContactNo" : "7620451904",
            "CarNo" : "MH12BT8989",
            "EntryTime": "2024-09-25 17:45:30.005"
        },
        "15" : {
            "State": true,
            "Name": "Rushikesh",
            "ContactNo" : "7620451904",
            "CarNo" : "MH12BT8989",
            "EntryTime": "2024-09-25 17:45:30.005"
        }
    },
    "B" : {
        "1" : {
            "State": true,
            "Name": "Rushikesh",
            "ContactNo" : "7620451904",
            "CarNo" : "MH12BT8989",
            "EntryTime": "2024-09-25 17:45:30.005"
        },
        "2" : {
            "State": true,
            "Name": "Rushikesh",
            "ContactNo" : "7620451904",
            "CarNo" : "MH12BT8989",
            "EntryTime": "2024-09-25 17:45:30.005"
        },
        "3" : {
            "State": true,
            "Name": "Rushikesh",
            "ContactNo" : "7620451904",
            "CarNo" : "MH12BT8989",
            "EntryTime": "2024-09-25 17:45:30.005"
        },
        "4" : {
            "State": true,
            "Name": "Rushikesh",
            "ContactNo" : "7620451904",
            "CarNo" : "MH12BT8989",
            "EntryTime": "2024-09-25 17:45:30.005"
        },
        "5" : {
            "State": true,
            "Name": "Rushikesh",
            "ContactNo" : "7620451904",
            "CarNo" : "MH12BT8989",
            "EntryTime": "2024-09-25 17:45:30.005"
        },
        "6" : {
            "State": true,
            "Name": "Rushikesh",
            "ContactNo" : "7620451904",
            "CarNo" : "MH12BT8989",
            "EntryTime": "2024-09-25 17:45:30.005"
        },
        "7" : {
            "State": true,
            "Name": "Rushikesh",
            "ContactNo" : "7620451904",
            "CarNo" : "MH12BT8989",
            "EntryTime": "2024-09-25 17:45:30.005"
        },
        "8" : {
            "State": true,
            "Name": "Rushikesh",
            "ContactNo" : "7620451904",
            "CarNo" : "MH12BT8989",
            "EntryTime": "2024-09-25 17:45:30.005"
        },
        "9" : {
            "State": true,
            "Name": "Rushikesh",
            "ContactNo" : "7620451904",
            "CarNo" : "MH12BT8989",
            "EntryTime": "2024-09-25 17:45:30.005"
        },
        "10" : {
            "State": true,
            "Name": "Rushikesh",
            "ContactNo" : "7620451904",
            "CarNo" : "MH12BT8989",
            "EntryTime": "2024-09-25 17:45:30.005"
        },
        "11" : {
            "State": true,
            "Name": "Rushikesh",
            "ContactNo" : "7620451904",
            "CarNo" : "MH12BT8989",
            "EntryTime": "2024-09-25 17:45:30.005"
        },
        "12" : {
            "State": true,
            "Name": "Rushikesh",
            "ContactNo" : "7620451904",
            "CarNo" : "MH12BT8989",
            "EntryTime": "2024-09-25 17:45:30.005"
        },
        "13" : {
            "State": true,
            "Name": "Rushikesh",
            "ContactNo" : "7620451904",
            "CarNo" : "MH12BT8989",
            "EntryTime": "2024-09-25 17:45:30.005"
        },
        "14" : {
            "State": true,
            "Name": "Rushikesh",
            "ContactNo" : "7620451904",
            "CarNo" : "MH12BT8989",
            "EntryTime": "2024-09-25 17:45:30.005"
        },
        "15" : {
            "State": true,
            "Name": "Rushikesh",
            "ContactNo" : "7620451904",
            "CarNo" : "MH12BT8989",
            "EntryTime": "2024-09-25 17:45:30.005"
        }
    }
};

const fillDataToFirestore = async () => {
  try {
    for (const floorKey in parkingSlotsData) {
      const floorRef = doc(db, 'parkingSlots', floorKey);
      await setDoc(floorRef, parkingSlotsData[floorKey]);
    }
    console.log('Data filled into Firestore successfully!');
  } catch (error) {
    console.error('Error filling data into Firestore:', error);
  }
};

fillDataToFirestore();
