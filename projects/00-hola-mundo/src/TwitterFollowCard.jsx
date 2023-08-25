import { useState } from 'react' 
export function TwitterFollowCard({ children, userName, initialIsFollowing }) {
const [isFollowing, setIsFollowing] = useState(initialIsFollowing)
//tengo un estado con dos estaciones que son el valor y la forma de 
//actualizar el state, isfollowing y setIsFollowing.

  const text = isFollowing ? 'Siguiendo' : 'Seguir'
  //que cuando estoy siguiendo me gustaira ver siguiendo, sino, seguir.
  const buttonClassName = isFollowing
  ? 'tw-followCard-button is-following' //Que si esta siguiendo tendre el css followcard button y ademas la clase is-following 
  : 'tw-followCard-button'              //si no, el button normal. 
  
  //Que cuando haga clic en el boton haga esto, le dara la vuelta.
  const handleClick = () => {
    setIsFollowing(!isFollowing)
  }

    return (
      <article className="tw-followCard">
        
        <header className="tw-followCard-header">
         
          <img className="tw-followCard-avatar"
          alt="avatar de alan" 
          src={`https://unavatar.io/${userName}`} />
         
          <div className='tw-followCard-info'>
            <strong>{children}</strong>
            <span 
              className='tw-followCard-infoUserName'>
              @{userName}
            </span>
          </div>
        </header>
        {/* comentarios dentro de jsx */}
        <aside>
          <button className={buttonClassName} onClick={handleClick }>
            <span className='tw-followCard-text'>{text}</span> 
            <span className='tw-followCard-stopFollow'>Dejar de seguir</span>   
          </button>
        </aside>
  
      </article>
    )
}