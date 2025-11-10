const Students = ({ name }) => {
  return (
    <div
      style={{
        border: "1px solid #000",
        borderRadius: "2rem",
        padding: "2rem",
        margin: "1rem",
      }}
    >
      {name}
    </div>
  );
};

export default Students;
