import Header from '../includes/header'
import { Link } from 'react-router-dom'
import styles from './app.module.css'
function App() {

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
  const rederEndPoints =  endPointsUrlsArr.map(point => (<div key={point.id} className={styles.itemPoint}><strong>{point.name}</strong> <Link target="_blank" to={point.url}>{point.url}</Link></div>))
  const endPointsUrls = {
    articles: 'http://localhost:5174/api/articles',
    pets: 'http://localhost:5174/api/pets',
    refugios: 'http://localhost:5174/api/refugios',
    frontPages: 'http://localhost:5174/api/front-pages',
    banners: 'http://localhost:5174/api/banners',
    equiposFutbol: 'http://localhost:5174/api/equipos-futbol',
    guiaTelefonica: 'http://localhost:5174/api/guia-telefonica'
  }
  return (
    <>
      <Header />
      <h1>Publics endPoints </h1>
      <article className={styles.endPoints}>
        {rederEndPoints}
      </article>
    </>
  )
}

export default App
