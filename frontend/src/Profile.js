import React from "react";

function Profile({ student, onEdit }) {
  return (
    <div>
      <h2>{student.name}</h2>
      <p>Branch: {student.branch}</p>
      <p>Year: {student.year}</p>
      <p>Skills: {student.skills}</p>

      <button onClick={onEdit}>Edit</button>
    </div>
  );
}

export default Profile;
