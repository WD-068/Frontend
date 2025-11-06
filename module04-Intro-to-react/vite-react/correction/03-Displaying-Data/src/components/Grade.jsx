
function Grade({gpa}) {
     const scale = [
       { min: 97, grade: 'A+' },
       { min: 93, grade: 'A' },
       { min: 90, grade: 'A-' },
       { min: 87, grade: 'B+' },
       { min: 83, grade: 'B' },
       { min: 80, grade: 'B-' },
       { min: 77, grade: 'C+' },
       { min: 73, grade: 'C' },
       { min: 70, grade: 'C-' },
       { min: 67, grade: 'D+' },
       { min: 63, grade: 'D' },
       { min: 60, grade: 'D-' },
     ];
     const match = scale.find((scale) => gpa >= scale.min);
  return (
    <span>{match ? match.grade : "F"}</span>
  )
}

export default Grade;