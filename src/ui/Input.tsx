interface Props {
  type: string
  placeholder: string
  register: any
}

const Input = ({ type, placeholder, register }: Props) => {
  return (
    <input
      type={type}
      className='w-full bg-white rounded-2xl px-4 h-14 text-black text-sm'
      placeholder={placeholder}
      {...register}
    />
  )
}

export default Input
