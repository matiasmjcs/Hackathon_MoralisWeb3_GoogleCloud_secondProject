import './welcome.css'
import Button from '../../components/button1/button'
import { NavLink } from 'react-router-dom'
const Welcome = () => {



  return (
    <div className="welcome">
      <section className='welcome__section1'>

        <article className='welcome_article1'>
          <div className='welcome_div1'>
            <h1 className="welcome__h1">Focus</h1>
            <p className='welcome__p'>a dApps that watches over the <br /> registration of your vehicle</p>
          </div>

          <div>
            <NavLink to='/userPanel' style={{ textDecoration: 'none' }}>
              <Button text='Start' clase='card__button1' />
            </NavLink>
          </div>
        
        </article>

        <article className='welcome_article1--imagen'>
            
        </article>

      </section>

      <section className='welcome__section2'>
        <article className='welcome__article2'>

        </article>

        <article className='welcome__article2'>

        </article>

        <article className='welcome__article2'>
          
        </article>

      </section> 
    </div>

)
}

export default Welcome
