import React, { useState, useEffect } from 'react'

interface PopupComponentProps {
  errorMessage: any
}

const PopupComponent: React.FC<PopupComponentProps> = ({ errorMessage }) => {
  const [status, setStatus] = useState('idle')

  useEffect(() => {
    if (status === 'idle') {
      const timer = setTimeout(() => {
        if (errorMessage) {
          setStatus('failure')
        } else {
          setStatus('success')
        }
      }, 2000)

      const clearStatusTimer = setTimeout(() => {
        setStatus('idle')
      }, 2000)

      return () => {
        clearTimeout(timer)
        clearTimeout(clearStatusTimer)
      }
    }
  }, [status, errorMessage])

  return (
    <div className="fixed p-4 transform -translate-x-1/2 border border-gray-500 bottom-20 left-1/2">
      {/* Display the status message based on the action result */}
      {status === 'success' && <p className="text-green-500">Action successful!</p>}
      {status === 'failure' && <p className="text-red-500">Action failed!</p>}
    </div>
  )
}

export default PopupComponent
