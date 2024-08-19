
interface CardProps {
  children: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
}

export const CardComponent = (
  {
    children,
    className,
    style,
    ...props

  
  }: CardProps) => {
  return (
      <div 
        className={`${className ? className : ''}`} 
        style={style}
        {...props}
      >
        {children}
      </div>
  )
}
