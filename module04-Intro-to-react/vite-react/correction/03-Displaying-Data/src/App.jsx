import './App.css';
import { students } from './data/students.js';
import Student from './components/Student';

function App() {
  const studentData = {
    firstName: 'Testy',
    lastName: 'McTest',
    age: 42,
    course: 'Web Development',
    city: 'Berlin',
    picture: 'https://randomuser.me/api/portraits/men/1.jpg',
    gpa: 90,
    graduate: true,
  };
  console.log(students)
  return (
    <>
      <h1>Displaying Data</h1>
      {/* Displayin one student */}
      <Student student={studentData} />

      {/* Display a list of students */}
      {students.map((student) => (
        <Student student={student} />
      ))}
    </>
  );
}

export default App;
