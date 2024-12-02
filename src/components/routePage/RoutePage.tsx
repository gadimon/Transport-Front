import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import styles from './routePage.module.css'

const RoutePage = () => {
  const navigate = useNavigate();
  return (
    <>
      <button onClick={() => navigate("/users")} className={styles.button}>Users</button>
      <button onClick={() => navigate("/buses")} className={styles.button}>Buses</button>
      <button onClick={() => navigate("/lines")} className={styles.button}>Lines</button>
    </>
  )
}

export default RoutePage
