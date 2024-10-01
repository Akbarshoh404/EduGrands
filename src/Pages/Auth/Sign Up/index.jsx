import React from 'react';
import styles from './style.module.scss';

const SignUp = () => {
  return (
    <div className={styles['login-container']}>
      <form className={styles['login-form']}>
        <h2 className={styles['login-header']}>Login</h2>
        
        <input
          type="text"
          placeholder="Email Address"
          className={styles['login-input']}
        />
        <input
          type="password"
          placeholder="Password"
          className={styles['login-input']}
        />
        
        <button type="submit" className={styles['login-button']}>
          Login
        </button>
        
        <div className={styles['oauth-login']}>
          <p>Or log in with</p>
          <a href="/oauth-login" className={styles['oauth-button']}>
            Log in with Facebook
          </a>
        </div>
      </form>
    </div>
  );
};

export default SignUp;
