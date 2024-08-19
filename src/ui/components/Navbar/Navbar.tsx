
import { useContext } from 'react';

import { AuthContext } from '../../../auth';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import { RUTAS } from '../../../config';

import { NavbarProps } from '../../interfaces';
import { Hidden } from '@mui/material';



export const Navbar = ({
    className,
}: NavbarProps) => {

    const { user, logout } = useContext(AuthContext);


    const navigate = useNavigate();

    const handleLogout = () => {
        // Todo este proceso en sincrono
        logout();
        navigate('/login', { replace: true });
    }

    return (
        <header className={className ? className : ''}>
            <Hidden mdDown>
                <div className="flex my-4 mr-10">
                    <Link
                        className="m-6"
                        to={RUTAS.HOME}
                    >
                        (logo)
                    </Link>

                    <ul id="items" className="m-6 ">
                        <NavLink
                            className={({ isActive }) => ` 
                                ${isActive ? ' ' : ''}`}
                            to={RUTAS.FORM1}
                        >
                            Formulario de prueba
                        </NavLink>
                    </ul>

                </div>
                <div className="flex my-4 mr-10">
                    {/* <div className={`${styles['header-circle-user']}`}>
                        <h5 className={`${styles['header-circle']}`}>
                        {userInfo.firstName?.substring(0, 1) || 'N'}
                        {userInfo.lastName?.substring(0, 1) || '/N'}
                        </h5>
                    </div> */}
                    <ul className="">

                        <span className="">
                            {user?.name}
                        </span>

                        <button
                            className="flex gap-2 font-normal text-sm text-error leading-6 p-2 rounded"
                            onClick={handleLogout}
                        >
                            Cerrar sesión
                        </button>

                    </ul>
                </div>
            </Hidden>
            <Hidden mdUp>
                <div className="grid grid-cols-12 gap-4 items-center justify-center sm:justify-end">
                    <Hidden smUp >

                        <div className="col-span-12 p-4">
                            <div className="grid grid-cols-12 items-center">
                                <div className="col-span-3 text-left">
                                    <Link
                                        className=""
                                        to={RUTAS.HOME}
                                    >
                                        (logo)
                                    </Link>
                                </div>
                                <div className="col-span-12 text-right">
                                    <ul id="items" className="col-span-12 flex">
                                        <NavLink
                                            className={({ isActive }) => ` 
                                            ${isActive ? ' ' : ''}`}
                                            to={RUTAS.FORM1}
                                        >
                                            Formulario de prueba
                                        </NavLink>

                                    </ul>

                                </div>
                            </div>
                        </div>
                    </Hidden>

                    <Hidden smDown mdUp>
                        <div className="col-span-12">
                            <div className="grid grid-cols-12 items-center">
                                <div className="col-span-3 text-left">
                                    <Link
                                        className=""
                                        to={RUTAS.HOME}
                                    >
                                        (logo)
                                    </Link>
                                </div>
                                <div className="col-span-9 text-right">
                                    <ul id="items" className="">
                                        <NavLink
                                            className={({ isActive }) => ` 
                                            ${isActive ? ' ' : ''}`}
                                            to={RUTAS.FORM1}
                                        >
                                            Formulario de prueba
                                        </NavLink>
                                    </ul>

                                </div>
                            </div>
                        </div>
                    </Hidden>
                </div>
            </Hidden>

        </header>
    )
}

