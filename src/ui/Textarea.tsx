const Textarea = ({ register, placeholder }) => {
  return (
    <textarea
      className='w-full bg-white rounded-2xl p-4 h-28 text-black text-sm'
      placeholder={placeholder}
      {...register}
    ></textarea>
  )
}

export default Textarea
