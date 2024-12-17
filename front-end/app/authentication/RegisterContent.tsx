import React from 'react'
import SocialButton from './SocialButton'
import { TextField } from '@mui/material'

const RegisterContent = () => {
  return (
    <main className = "main-container">
        <section className = "content-wrapper">
            <div className = "title-wrapper">
                <h1 className="title">Create an account</h1>
            </div>

            <div className = "login-container">
                <div className = "input-wrapper">
                    <TextField id="outlined-basic" label="Email address*" variant="outlined" style = {{width: "320px"}}
      sx={{
        // Change the border color
        '& .MuiOutlinedInput-root': {
          '& fieldset': {
            borderColor: '#c2c8d0', // Default border color
            height: '57px',
          },
          '&:hover fieldset': {
            borderColor: 'darkgreen', // Border color on hover
          },
          '&.Mui-focused fieldset': {
            borderColor: '#10a37f', // Border color when focused
          },
        },
        // Change the input text color
        '& .MuiInputBase-input': {
          color: '#10a37f', // Input text color
        },
        // Change the label color and transform only when NOT focused
        '& .MuiInputLabel-root': {
          color: '#7D7D7D', // Default label color
          transform: 'translateX(22px) translateY(14px)', // Move label
        },
        '& .MuiInputLabel-root.Mui-focused': {
          color: '#10a37f', // Focused label color
          transform: 'translate(14px, -6px) scale(0.75)', // Default MUI focused state
        },
        '& .MuiInputLabel-shrink': {
          transform: 'translate(14px, -6px) scale(0.75)', // Ensure proper focus shrink behavior
        },
      }}/>

                    <div className="invalid-email-error-message "><img className="error-icon" src="https://auth.openai.com/assets/error-icon-BaFi8GTB.svg" />Email is not valid.</div>
                    <div className="invalid-email-error-message "><img className="error-icon" src="https://auth.openai.com/assets/error-icon-BaFi8GTB.svg" />Your organization requires SSO, click Continue to log in with SSO instead.</div>
                </div>
                
                <div style = {{transform: 'translateY(-4px)'}}>
                <button className="continue-btn">Continue</button>

                <p className="other-page">
                    Already have an account?
                    <a className="other-page-link" href="/authentication/login">Login</a>
                </p>

                <div className="divider-wrapper"><span className="divider">Or</span></div>
                
                <div className = "social-section">
                    <SocialButton 
                    src="https://auth.openai.com/assets/google-logo-NePEveMl.svg"
                    alt="Google logo"
                    text="Continue with Google"/>

                    <SocialButton 
                    src="https://auth.openai.com/assets/microsoft-logo-BUXxQnXH.svg"
                    alt="Microsoft logo"
                    text="Continue with Microsoft Account"/>

                    <SocialButton 
                    src="https://auth.openai.com/assets/apple-logo-vertical-full-bleed-tAoxPOUx.svg"
                    alt="Apple logo"
                    text="Continue with Apple"/>

                </div>
            </div>
            </div>
        </section>
    </main>
  )
}

export default RegisterContent