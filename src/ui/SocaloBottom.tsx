interface Props {
  children: React.ReactNode
  color: string
}

const SocaloBottom = ({ children, color }: Props) => {
  return (
    <div className={`w-full h-16 rounded-tl-3xl relative ${color}`}>
      <div className='absolute text-light text-5xl w-full flex justify-center pt-6'>{children}</div>
    </div>
  )
}

export default SocaloBottom
