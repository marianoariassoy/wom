const Button = ({ children, color }) => {
  return (
    <button
      className={`w-full text-white uppercase rounded-2xl px-6 h-14 font-medium text-sm hover:bg-black transition-colors tracking-widest ${color}`}
    >
      {children}
    </button>
  )
}

export default Button
