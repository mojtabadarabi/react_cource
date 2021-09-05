import style from './app.module.css'
import ProductsList from './components/ProductsList';

function App() {
  return (
    <div className={style.container}>
      <div className={style.title}>
        <h1>Shopping App</h1>
      </div>
      
      <ProductsList />
      
    </div>
  )
}

export default App
