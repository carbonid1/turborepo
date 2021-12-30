export interface ButtonProps {
  colour?: string
}

export const Button: React.FC<ButtonProps> = ({ children, colour }) => {
  return <button style={{ background: colour }}>{children}</button>
}
