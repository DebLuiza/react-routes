import React from 'react'
import styles from "./Style/More.module.scss"
import { Outlet } from 'react-router-dom'
import stylesNav from "../../Generics/Nav/Style/Nav.module.scss"
import { Link } from 'react-router-dom'

const More = () => {
  return (
    <>
    <div className={styles['more']}>
      <div className={styles["sub-nav"]}>
      <div className={stylesNav["sub-nav"]}>
          <Link to='/more/Pag1' className={stylesNav['bolinha']}>1</Link>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" fill='orange' className={stylesNav["arrow"]}><path d="M438.6 278.6l-160 160C272.4 444.9 264.2 448 256 448s-16.38-3.125-22.62-9.375c-12.5-12.5-12.5-32.75 0-45.25L338.8 288H32C14.33 288 .0016 273.7 .0016 256S14.33 224 32 224h306.8l-105.4-105.4c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0l160 160C451.1 245.9 451.1 266.1 438.6 278.6z"/></svg>
          <Link to='/more/Pag2' className={stylesNav['bolinha']}>2</Link>
           <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" fill='orange' className={stylesNav["arrow"]}><path d="M438.6 278.6l-160 160C272.4 444.9 264.2 448 256 448s-16.38-3.125-22.62-9.375c-12.5-12.5-12.5-32.75 0-45.25L338.8 288H32C14.33 288 .0016 273.7 .0016 256S14.33 224 32 224h306.8l-105.4-105.4c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0l160 160C451.1 245.9 451.1 266.1 438.6 278.6z"/></svg>
          <Link to='/more/Pag1' className={stylesNav['bolinha']}>3</Link>
           <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" fill='orange' className={stylesNav["arrow"]}><path d="M438.6 278.6l-160 160C272.4 444.9 264.2 448 256 448s-16.38-3.125-22.62-9.375c-12.5-12.5-12.5-32.75 0-45.25L338.8 288H32C14.33 288 .0016 273.7 .0016 256S14.33 224 32 224h306.8l-105.4-105.4c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0l160 160C451.1 245.9 451.1 266.1 438.6 278.6z"/></svg>
          <Link to='/more/Pag2' className={stylesNav['bolinha']}>4</Link>
           <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" fill='orange' className={stylesNav["arrow"]}><path d="M438.6 278.6l-160 160C272.4 444.9 264.2 448 256 448s-16.38-3.125-22.62-9.375c-12.5-12.5-12.5-32.75 0-45.25L338.8 288H32C14.33 288 .0016 273.7 .0016 256S14.33 224 32 224h306.8l-105.4-105.4c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0l160 160C451.1 245.9 451.1 266.1 438.6 278.6z"/></svg>
          <Link to='/more/Pag1' className={stylesNav['bolinha']}>5</Link>
           <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" fill='orange' className={stylesNav["arrow"]}><path d="M438.6 278.6l-160 160C272.4 444.9 264.2 448 256 448s-16.38-3.125-22.62-9.375c-12.5-12.5-12.5-32.75 0-45.25L338.8 288H32C14.33 288 .0016 273.7 .0016 256S14.33 224 32 224h306.8l-105.4-105.4c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0l160 160C451.1 245.9 451.1 266.1 438.6 278.6z"/></svg>
          <Link to='/more/Pag2' className={stylesNav['bolinha']}>6</Link>
          </div>
          {/* <div className={styles["title"]}>
           <label>More</label>
          </div> */}
      </div>
      <div className={styles["outlet"]}>
      <Outlet/>
      </div>
    </div>
    </>
  )
}

export default More