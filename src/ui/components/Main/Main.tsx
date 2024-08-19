import { Navbar } from '..';
import { MainProps } from '../../interfaces';
import styles from './main.module.css';


export const Main = ({
children,
history,
location,
match,
}:MainProps) => {
  return (
    <div className="flex min-h-screen flex-col ">
      <Navbar className={styles.header} />
      <main className={styles.content}>
        {children}
      </main>
    </div>
  )
}

