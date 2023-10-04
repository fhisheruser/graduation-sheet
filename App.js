import React from "react";
import "./App.css";

const developerData = [
  {
    id: 1,
    fullName: "English",
    address: "4.0",
    
  },
  {
    id: 2,
    fullName: "Maths",
    address: "3.0",
   
  },
  {
    id: 3,
    fullName: "Science",
    address: "3.0",
   
  },
  {
    id: 4,
    fullName: "Social Studies",
    address: "3.0",
   
  },
  {
    id: 5,
    fullName: "Visual and Performing Arts",
    address: "2.0",
   
  },
  {
    id: 6,
    fullName: "Technology and Life Skills",
    address: "1.0",
   
  }, {
    id: 7,
    fullName: "Fitness and Health",
    address: "2.0",
   
  },
  {
    id: 8,
    fullName: "Foreign Language",
    address: "2.0",
   
  },
  {
    id: 8,
    fullName: "Electives/Advisory",
    address: "4.5",
   
  },
];
const totalSubjects = developerData.length;
const totalCredits = developerData.reduce((total, subject) => total + parseFloat(subject.address), 0);
const App = () => {
  return (
    <div className="app-container">
      <table>
        <thead>
          <tr>
            <th>SUBJECT</th>
            <th>CREDITS REQUIRED</th>
           
          </tr>
        </thead>
        <tbody>
          {developerData.map((developer) => (
            <tr key={developer.id}>
              <td>{developer.fullName}</td>
              <td>{developer.address}</td>
              
            </tr>
          ))}
          <tr className="total-row">
            <td>Total Subjects={totalSubjects}</td>
            <td>Total Credits={totalCredits}</td>
          </tr>
          
         
        </tbody>
      </table>
    </div>
  );
};

export default App;


