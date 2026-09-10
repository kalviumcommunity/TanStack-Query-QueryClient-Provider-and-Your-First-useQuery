export default function SortDropdown({ value, onChange }) {
  return (
    <select value={value} onChange={(e) => onChange(e.target.value)}>
      <option value="newest">Newest</option>
      <option value="oldest">Oldest</option>
    </select>
  );
}