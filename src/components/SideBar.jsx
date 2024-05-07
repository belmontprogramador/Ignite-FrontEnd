import style from './SideBar.module.css'
import '../global.css'
import { PencilLine } from "@phosphor-icons/react";
import Avatar from './Avatar';


export function Sidebar() {

    return (

        <aside className={style.sidebar}>
            <img
                className={style.cover}
                src='https://images.unsplash.com/photo-1605379399642-870262d3d051?q=40&w=500&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
            />

            <div className={style.profile}>
                <Avatar src='https://github.com/belmontprogramador.png' />

                <strong>Felipe Belmont</strong>
                <span>Web Developer</span>
            </div>

            <footer className={style.footer}>
                <a href='#'>
                    <PencilLine size={20} />
                    Editar seu perfil
                </a>
            </footer>
        </aside>
    )
}
