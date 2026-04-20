import React, { useEffect, useState } from "react";
import axios from "axios";
import Profile from "./Profile";
import EditForm from "./EditForm";

function App() {
  const [student, setStudent] = useState({});
  const [edit, setEdit] = useState(false);

  useEffect(() => {
    axios.get("http://localhost:5000/student")
      .then(res => setStudent(res.data));
  }, []);

  const handleSave = (data) => {
    axios.post("http://localhost:5000/student", data)
      .then(() => {
        setStudent(data);
        setEdit(false);
      });
  };

  return (
    <div style={{ textAlign: "center" }}>
      <h1>Smart Student Profile</h1>

      {edit ? (
        <EditForm student={student} onSave={handleSave} />
      ) : (
        <Profile student={student} onEdit={() => setEdit(true)} />
      )}
    </div>
  );
}

export default App;
