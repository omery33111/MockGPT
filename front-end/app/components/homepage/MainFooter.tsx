import React from 'react'

const MainFooter = () => {
  return (
    <div className="relative w-full px-2 py-2 text-center text-xs text-token-text-secondary empty:hidden md:px-[60px] lg:absolute lg:left-0 lg:mt-0 lg:bottom-2" style={{opacity: "1", willChange: "auto", transform: "none"}}><div className="min-h-4"><span className="text-sm leading-none">By messaging ChatGPT, you agree to our <a href="https://openai.com/terms" target="_blank" className="text-token-text-primary underline decoration-token-text-primary" rel="noreferrer">Terms</a> and have read our <a href="https://openai.com/privacy" target="_blank" className="text-token-text-primary underline decoration-token-text-primary" rel="noreferrer">Privacy Policy</a>.</span></div></div>
  )
}

export default MainFooter