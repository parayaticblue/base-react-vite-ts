import { Divider, List } from '@mui/material';
import { TitleComponent } from '../../../design-system-dummy';

export const Sidebar = () => {
  return (
    <aside className="pt-12">
      <List
        sx={{ width: '100%', maxWidth: 180 }}
        component="nav"
        aria-labelledby=""
      >
       <TitleComponent 
          title={'Menu de navegación'}
          size='sm'
          font='normal'
          typeLetter='capitalize'
          fontFamily='sans-serif'
          className='text-left text-gray-700 '
       />
        <Divider />
      </List>
    </aside>
  )
}

