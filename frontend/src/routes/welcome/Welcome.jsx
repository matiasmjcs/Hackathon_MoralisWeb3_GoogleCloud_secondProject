import './welcome.css'
import Button from '../../components/button1/button'
import { NavLink } from 'react-router-dom'
const Welcome = () => {



  return (
    <div className="welcome">
      <section className='welcome__section1'>

        <article className='welcome_article1'>
          <div className='welcome_div1'>
            <h1 className="welcome__h1">vehicle registration</h1>
            <p className='welcome__p'>register your vehicle to keep your records <br/> safe with blockchain technology</p>
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
            <span>
            you can register your vehicle and then you can <br /> transfer it to its new owner if you sell it
            </span>
            <div className='img2'>

            </div>
        </article>

        <article className='welcome__article2'>
          <span>
            you can also register your maintenance in our dapps
          </span>
          <div className='img3'>

          </div>
        </article>

      </section> 
    </div>

)
}

export default Welcome
