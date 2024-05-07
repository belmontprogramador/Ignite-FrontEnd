import Avatar from './Avatar'
import Comment from './Comment'
import style from './Post.module.css'

export default function Post() {
    return (
        <article className={style.post}>
        <header>
            <div className={style.author}>
               
            <Avatar src='https://github.com/belmontprogramador.png' /> 
                <div className={style.authorInfo}>
                    <strong>Felipe Belmont</strong>
                    <p>Front End Developer</p>
                </div>
            </div>
    
            <time title='07 de maio às 11:13' dateTime='2024-05-07 08:13:30'>Publicado há 1h </time>
        </header>
    
        <div className={style.content}>
            <p>Fala galeraa 👋</p>
            <p>Acabei de subir mais um projeto no meu portfólio. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀</p>
            <p>👉 <a href=''>lu.design/doctorcare</a></p>
            <p><a href=''>#novoprojeto </a>
            <a href=''>#nlw  </a> 
            <a href=''>  #rocketseat</a>
            </p>
        </div>

        <form className={style.commentForm}>
            <stron>Deixe seu comentário</stron>

            <textarea
            placeholder='Deixe seu comentário'
            />

            <button type='submit'>Comentar</button>
        </form>

        <div className={style.commentList}>
            <Comment/>
            <Comment/>
            <Comment/>
        </div>

    </article>  

    )
}