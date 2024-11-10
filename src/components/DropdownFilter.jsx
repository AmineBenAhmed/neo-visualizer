const DropdownFilter = ({ options, selected, onChange }) => (
  <select className="p-2 border-4 bg-gray-300 self-end" value={selected} onChange={e => onChange(e.target.value)} >
    <option value="" >Select Orbital Body</option>
    {
      options.map((body, index) => (
        <option key={index}>{body}</option>
      ))
    }
  </select>
)

export default DropdownFilter;