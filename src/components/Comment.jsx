import { ThumbsUp, Trash } from '@phosphor-icons/react';
import style from './Comment.module.css';
import Avatar from './Avatar';

export default function Comment() {
    return (
        <div className={style.comment}>
            <Avatar hasBorder={false} src='https://github.com/MichelleCordeiro.png'/>

            <div className={style.commentBox}>
                <div className={style.commentContent}>
                    <header>
                        <div className={style.authorAndTime}>
                            <strong>Luiza Bento</strong>
                            <time title='07 de maio às 11:13' dateTime='2024-05-07 08:13:30'>Cerca de 1h atrás </time>
                        </div>
                        <button title='Deletar comentário'>
                            <Trash size={24} />
                        </button>
                    </header>

                    <p>Muito bom Devon, parabéns!! 👏👏</p>
                </div>

                <footer>
                    <button>
                    <ThumbsUp />
                    Aplaudir <span>20</span>
                    </button>
                </footer>
            </div>
        </div>
    )
}