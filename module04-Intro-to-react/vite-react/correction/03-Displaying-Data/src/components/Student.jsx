import Grade from "./Grade";
const Student = ({student}) => {
    return (
      <div className='student-card'>
        <img src={student.picture} alt={`${student.firstName} ${student.lastName}`} className='student-picture' />
        <h2>
          {student.firstName} {student.lastName}
        </h2>
        <p>Age: {student.age}</p>
        <p>Course: {student.course}</p>
        <p>City: {student.city}</p>
        <p>Grade: <Grade gpa={student.gpa} /></p>
        <p><strong>Status:</strong> {student.graduate ? "Graduate" : "Student"}</p>
      </div>
    );
}
export default Student;