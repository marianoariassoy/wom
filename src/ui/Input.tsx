interface Props {
  type: string
  style?: string
  placeholder: string
  register: any
}

const Input = ({ type, placeholder, register, style }: Props) => {
  return (
    <input
      type={type}
      defaultChecked
      className={`bg-white rounded-2xl px-4 h-14 text-black text-sm border border-gray ${style}`}
      placeholder={placeholder}
      {...register}
    />
  )
}

export default Input
