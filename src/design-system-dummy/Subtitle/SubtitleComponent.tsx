import styles from './subtitle.module.css';

interface SubtitleComponentProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg' | 'xl';
  type?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p' | 'span' | 'div';
  title: string;
  font?: 'bold' | 'normal' | 'light';
  typeLetter?: 'uppercase' | 'lowercase' | 'capitalize';
  fontFamily?: 'sans-serif' | 'serif' | 'monospace' | 'cursive' | 'fantasy' | 'system-ui';
}

export const SubtitleComponent = ({
className,
size,
title,
type,
font,
typeLetter,
fontFamily

}:SubtitleComponentProps) => {
  return (
    <div
      className={
        `${className || ''} 
        ${font === 'bold' ? 'font-bold' : font === 'normal' ? 'font-normal' : font === 'light' ? 'font-light' : 'font-normal'}
        ${typeLetter === 'uppercase' ? 'uppercase' : typeLetter === 'lowercase' ? 'lowercase' : typeLetter === 'capitalize' ? 'capitalize' : 'capitalize'}
        ${fontFamily === 'sans-serif' ? 'font-sans' : fontFamily === 'serif' ? 'font-serif' : fontFamily === 'monospace' ? 'font-mono' : fontFamily === 'cursive' ? 'font-cursive' : fontFamily === 'fantasy' ? 'font-fantasy' : fontFamily === 'system-ui' ? 'font-system' : 'font-sans'}
        ${
          type === 'h1' ? 'text-4xl' : 
          type === 'h2' ? 'text-3xl' : 
          type === 'h3' ? 'text-2xl' : 
          type === 'h4' ? 'text-xl' : 
          type === 'h5' ? 'text-lg' : 
          type === 'h6' ? 'text-base' : 
          type === 'p' ? 'text-base' :
          type === 'span' ? 'text-base' :
          type === 'div' ? 'text-base' :
          'text-base'
        }    
        ${size === 'sm' ? 'text-sm' : size === 'md' ? 'text-md' : size === 'lg' ? 'text-lg' : size === 'xl' ? 'text-xl' : size === '2xl' ? 'text-2xl' : size === '3xl' ? 'text-3xl' : size === '4xl' ? 'text-4xl' : 'text-base'}
        `}  
      style={
        {fontSize: size === 'sm' ? '1rem' : size === 'md' ? '1.5rem' : size === 'lg' ? '2rem' : size === 'xl' ? '3rem' : '1.5rem'}}
      >
      {title}
    </div>
  )
}

