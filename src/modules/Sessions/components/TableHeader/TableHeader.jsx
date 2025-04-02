function TableHeader({daysOfWeek}) {
  return (
    <tr>
      {daysOfWeek.map((day) => (
        <th key={day}>
          {day.split(" ").at(0)}{" "}
          <span>
            {day.split(" ").at(1)} {day.split(" ").at(2)}
          </span>
        </th>
      ))}
    </tr>
  );
}
export default TableHeader;
