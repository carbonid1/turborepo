interface ButtonProps {
  colour?: string
}

const Button: React.FC<ButtonProps> = ({ children, colour }) => {
  return <button style={{ background: colour }}>{children}</button>
}

export default Button
