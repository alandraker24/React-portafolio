import { useState } from 'react' 
export function TwitterFollowCard({ children, userName }) {
const [isFollowing, setIsFollowing] = useState(false)
//tengo un estado con dos paradas isfollowing y setisfollowing

  const text = isFollowing ? 'Siguiendo' : 'Seguir'
  //que cuando estoy siguiendo me gustaira ver siguiendo sino seguir
  const buttonClassName = isFollowing
  ? 'tw-followCard-button is-following' //si esta siguiendo tendre el css followcard button y ademas la clase is-following 
  : 'tw-followCard-button'              //si no, el button normal. 
  
  //Cuando haga clic en el boton haz esto
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
  
        <aside>
          <button className={buttonClassName} onClick={handleClick }>
            {text}    
          </button>
        </aside>
  
      </article>
    )
}