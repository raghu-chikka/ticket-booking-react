function ShowCase() {
  return (
    <ul className="ShowCase">
      <li>
        <span className="seat" p /> <small>Available</small>
      </li>
      <li>
        <span className="seat selected" /> <small>Selected</small>
      </li>
      <li>
        <span className="seat occupied" /> <small>Occupied</small>
      </li>
    </ul>
  );
}

export default ShowCase;
