import React, { useState } from "react";

function EditForm({ student, onSave }) {
  const [form, setForm] = useState(student);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  return (
    <div>
      <input
        name="name"
        value={form.name || ""}
        onChange={handleChange}
        placeholder="Name"
      />
      <br /><br />

      <input
        name="branch"
        value={form.branch || ""}
        onChange={handleChange}
        placeholder="Branch"
      />
      <br /><br />

      <input
        name="year"
        value={form.year || ""}
        onChange={handleChange}
        placeholder="Year"
      />
      <br /><br />

      <input
        name="skills"
        value={form.skills || ""}
        onChange={handleChange}
        placeholder="Skills"
      />
      <br /><br />

      <button onClick={() => onSave(form)}>Save</button>
    </div>
  );
}

export default EditForm;
