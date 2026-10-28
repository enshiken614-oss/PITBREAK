import { destinations } from "../data";
export function CountryList() {
  return (
    <ul className="countries">
      {destinations.map((c, i) => (
        <li key={c}>
          <span>0{i + 1}</span>
          {c}
          <small>PLANNED</small>
        </li>
      ))}
    </ul>
  );
}
