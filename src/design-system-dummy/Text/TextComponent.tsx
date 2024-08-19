import styles from './text.module.css';

interface TextComponentProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg' | 'xl';
  type?: 'p' | 'span' | 'div' | 'label';
  children: React.ReactNode;
  font?: 'bold' | 'normal' | 'light';
  typeLetter?: 'uppercase' | 'lowercase' | 'capitalize';
  fontFamily?: 'sans-serif' | 'serif' | 'monospace' | 'cursive' | 'fantasy' | 'system-ui';
  color:'error' | 'success' | 'warning' | 'info' | 'primary' | 'secondary' | 'default';
}

export const TextComponent = ({
className,
size,
children,
type,
font,
typeLetter,
fontFamily,
color


}:TextComponentProps) => {

  return (
    <div
      className={
        `${className || ''} 
          ${font === 'bold' ? 'font-bold' : font === 'normal' ? 'font-normal' : font === 'light' ? 'font-light' : 'font-normal'}
          ${typeLetter === 'uppercase' ? 'uppercase' : typeLetter === 'lowercase' ? 'lowercase' : typeLetter === 'capitalize' ? 'capitalize' : 'capitalize'}
          ${fontFamily === 'sans-serif' ? 'font-sans' : fontFamily === 'serif' ? 'font-serif' : fontFamily === 'monospace' ? 'font-mono' : fontFamily === 'cursive' ? 'font-cursive' : fontFamily === 'fantasy' ? 'font-fantasy' : fontFamily === 'system-ui' ? 'font-system' : 'font-sans'}
          ${type ? type === 'p' ? 'text-base' : type === 'span' ? 'text-base' : type === 'div' ? 'text-base' : type === 'label' ? 'text-base' : 'text-base' : 'text-base'}
          ${size === 'sm' ? 'text-sm' : size === 'md' ? 'text-md' : size === 'lg' ? 'text-lg' : size === 'xl' ? 'text-xl' : size === '2xl' ? 'text-2xl' : size === '3xl' ? 'text-3xl' : size === '4xl' ? 'text-4xl' : 'text-base'}
          ${
            color === 'error' ? 'text-error-dark' : 
            color === 'success' ? 'text-success-dark' : 
            color === 'warning' ? 'text-warning-dark' : 
            color === 'info' ? 'text-info-dark' : 
            color === 'primary' ? 'text-primary' : 
            color === 'secondary' ? 'text-secondary' : 
            color === 'default' ? 'text-gray' : 'text-gray'
          }
        `}  
      style={
        { 
          fontSize: size === 'sm' ? '1rem' : size === 'md' ? '1.5rem' : size === 'lg' ? '2rem' : size === 'xl' ? '3rem' : '1.5rem'
        }
      }

      >
      {children}
    </div>
  )
}
