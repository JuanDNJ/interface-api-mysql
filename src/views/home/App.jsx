import Header from '../includes/header'
import { Link } from 'react-router-dom'
import styles from './app.module.css'
import { apifetch } from '../../handlers/fetching'
import { useState, useRef} from 'react'
function App() {
  const ref = useRef()
  const privateEndPoints = [
    {
      id: "1",
      name: 'Usuarios',
      url: 'http://localhost:5174/api/users'
    },
    {
      id: "2",
      name: 'Config',
      url: 'http://localhost:5174/api/config'
    }
  ]
  const endPointsUrlsArr = [
    {
      id: "1",
      name: 'Artículos',
      url: 'http://localhost:5174/api/articles'
    },
    {
      id: "2",
      name: 'Mascotas',
      url: 'http://localhost:5174/api/pets'
    },
    {
      id: "3",
      name: 'Refugios',
      url: 'http://localhost:5174/api/refugios'
    },
    {
      id: "4",
      name: 'Páginas frontales',
      url: 'http://localhost:5174/api/front-pages'
    },
    {
      id: "5",
      name: 'Pancartas',
      url: 'http://localhost:5174/api/banners'
    },
    {
      id: "6",
      name: 'Equipos Futbol',
      url: 'http://localhost:5174/api/equipos-futbol'
    },
    {
      id: "7",
      name: 'Guía Telefónica',
      url: 'http://localhost:5174/api/guia-telefonica'
    }
  ]
  const [priVates, setPriVates] = useState()

  const handlerClick = async (eve) => {
    eve.preventDefault();
    const url = await apifetch.custom(eve.target.href)
    setPriVates(() => url)
   
  }
  const rederEndPoints = endPointsUrlsArr.map(point => (
    <div key={point.id} className={styles.itemPoint}>
      <strong>{point.name}</strong>
      <Link  to={point.url}>{point.url}</Link>
    </div>
  ))

  const rederPrivateEndPoints = privateEndPoints.map(point => (
    <div key={point.id} className={styles.itemPoint}>
      <strong>{point.name}</strong>
      <Link to={`${point.url}?token=${JSON.parse(globalThis.localStorage.getItem('token'))}`}>{point.url}</Link>
      
    </div>
  ))

  return (
    <>
      <Header />
      <section className={styles.home}>
        <article className={styles.endPoints}>
          <header className={styles.headerArticle}>
            <h2>End Points </h2>
          </header>
          <section className={styles.endPointsBody}>
            <article className={styles.itemBody}>
              <header className={styles.headerArticle}>
                <h3>Public </h3>
              </header>
              <div>
                {rederEndPoints}
              </div>
            </article>
            <article className={styles.itemBody}>
              <header className={styles.headerArticle}>
                <h3>Private</h3>
              </header>
              <div>
                {rederPrivateEndPoints}
                {priVates &&  <pre>{JSON.stringify(priVates, null, 2)}</pre>}
              </div>
            </article>
          </section>
        </article>

      </section>
    </>
  )
}

export default App
