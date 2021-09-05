import React from "react";
import style from './product.module.css'

function Product({ product ,changeHandler,increment,decrement,remove}) {
  return(
    <div className={style.product} key={product.id}>
        <div className={style.infoContainer}>
          <h3 className={style.width}>course : {product.title}</h3>
          <h3 className={style.width}>price : {product.price} $</h3>
        </div>
        <div className={style.btnContainer}>
          <div className={`${style.button} ${style.lightBg} ${style.badge} ${style.quantity}`} >{product.quantity}</div>
          <input type="text" value={product.title} onChange={(e)=>changeHandler(e,product.id)} className={style.inputTxt}/>
          <button className={`${style.button} `} onClick={()=>decrement(product.id)}>-</button>
          <button className={`${style.button} ${style.lightBg}`} onClick={()=>increment(product.id)}>+</button>
          <button className={style.button} onClick={()=>remove(product.id)}>remove</button>
        </div>
    </div>
  )
}

export default Product;
