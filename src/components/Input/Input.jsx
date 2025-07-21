function Input({ onChange, value, position }) {
  return (
    <input
      type="number"
      value={value[position]}
      onChange={(e) => onChange(Number(e.target.value), position)}
    />
  )
}

export default Input
