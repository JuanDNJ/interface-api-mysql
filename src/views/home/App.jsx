import styles from './app.module.css'
import Card from '@/components/Card'
import Header from '../includes/header'
import { Link } from 'react-router-dom'
function App() {

  const endPointsUrls = {
    articles: 'http://localhost:5174/api/articles',
    pets: 'http://localhost:5174/api/pets',
    refugios: 'http://localhost:5174/api/refugios',
    frontPages: 'http://localhost:5174/api/front-pages',
    banners: 'http://localhost:5174/api/banners'
  }
  return (
    <>
      <Header />
      <h1>Publics endPoints </h1>
      <article className={styles.endPoints}>
        <div className={styles.itemPoint}><strong>Articles</strong> <Link target="_blank" to={endPointsUrls.articles}>{endPointsUrls.articles}</Link></div>
        <div className={styles.itemPoint}><strong>Pets</strong> <Link target="_blank" to={endPointsUrls.pets}>{endPointsUrls.pets}</Link></div>
        <div className={styles.itemPoint}><strong>Refugios</strong> <Link target="_blank" to={endPointsUrls.refugios}>{endPointsUrls.refugios}</Link></div>
        <div className={styles.itemPoint}><strong>Front Pages</strong> <Link target="_blank" to={endPointsUrls.frontPages}>{endPointsUrls.frontPages}</Link></div>
        <div className={styles.itemPoint}><strong>Banners</strong> <Link target="_blank" to={endPointsUrls.banners}>{endPointsUrls.banners}</Link></div>
      </article>
    </>
  )
}

export default App
