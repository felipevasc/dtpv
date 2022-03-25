import React, { useEffect, useState } from 'react';
import io from 'socket.io-client';

export default function({ children }) {
  const [socket, setSocket] = useState(null)

  useEffect(() => {
    const newSocket = io("http://localhost:3000")
    setSocket(newSocket)
    return () => newSocket.close()
  }, [setSocket])

  return (
    <>
      {children}
    </>
  )
}