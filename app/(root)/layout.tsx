import { ReactNode } from 'react'

const Rootlayout = ({children}: {children: ReactNode}) => {
  return (
    <div className="auth-layout">
        {children}

    </div>
  )
}

export default Rootlayout
