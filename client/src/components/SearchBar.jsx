export default function SearchBar({ value, onChange }) {
  return (
    <input
      type="text"
      value={value}
      onChange={(e) => onChange(e.target.value)}
      placeholder="Search threads..."
      style={{ padding: "8px", marginRight: "8px" }}
    />
  );
}