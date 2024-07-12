const Select = ({ options, register, name }) => {
  return (
    <select
      className='select w-full bg-white rounded-2xl px-6 h-14 text-black text-sm appearance-none'
      {...register}
    >
      <option
        disabled
        selected
        value=''
      >
        {name}
      </option>
      {options.map((item, index) => {
        return <option key={index}>{item}</option>
      })}
    </select>
  )
}

export default Select
