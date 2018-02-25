import React from 'react'

const drop = ({ value, items, onSelect }) => {


  const onChange = (e) => {
    onSelect(e.currentTarget.value)
  }

  return (
    <select className="styled" onChange={onChange}>
      <option value="">Select company</option>
      {items.map((item) => {
        return <option value={item.value} key={item.value}>{item.name}</option>
      })}
    </select>
  )
}

export default drop