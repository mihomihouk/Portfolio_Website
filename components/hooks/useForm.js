import { useState } from 'react'

export const useForm = initialValue => {
  const [value, setValue] = useState(initialValue)

  const handleChange = event => {
    setValue(event.target.value)
  }

  return { value, onChange: handleChange }
}
