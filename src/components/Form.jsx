export function Field({ label, hint, children }) {
  return (
    <label className="field">
      <span className="field-label">{label}</span>
      {children}
      {hint && <span className="field-hint">{hint}</span>}
    </label>
  )
}

export function TextInput(props) {
  return <input className="field-input" {...props} />
}

export function TextArea(props) {
  return <textarea className="field-textarea" rows={5} {...props} />
}

export function RadioRow({ name, options, value, onChange, label }) {
  return (
    <fieldset className="radio-row">
      <legend>{label}</legend>
      {options.map((opt) => (
        <label key={opt} className="radio-option">
          <input
            type="radio"
            name={name}
            value={opt}
            checked={value === opt}
            onChange={(e) => onChange(e.target.value)}
          />
          {opt}
        </label>
      ))}
    </fieldset>
  )
}

export function CheckboxRow({ checked, onChange, label }) {
  return (
    <label className="checkbox-row">
      <input type="checkbox" checked={checked} onChange={(e) => onChange(e.target.checked)} />
      {label}
    </label>
  )
}
