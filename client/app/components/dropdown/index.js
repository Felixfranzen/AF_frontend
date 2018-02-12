import React from 'react'

const drop = ({ items, onSelect }) => {


  const onChange = (e) => {
    onSelect(e.currentTarget.value)
  }

  return (
    <select onChange={onChange}>
      {items.map((item) => {
        return <option value={item.value} key={item.value}>{item.name}</option>
      })}
    </select>
  )
}

export default drop