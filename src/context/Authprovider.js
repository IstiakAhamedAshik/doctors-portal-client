import React, { createContext } from 'react'
import {
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
  updateProfile,
} from 'firebase/auth'
import app from '../firebase/firebase'
import { useState } from 'react'
import { useEffect } from 'react'
export const AuthContext = createContext()
const auth = getAuth(app)

const Authprovider = ({ children }) => {
  const [user, setUser] = useState(null)
  const [loading, setLoading] = useState(true)

  const createUser = (email, password) => {
    setLoading(true)
    return createUserWithEmailAndPassword(auth, email, password)
  }
  const updateUser = (userInfo) => {
    setLoading(true)
    return updateProfile(auth.currentUser, userInfo)
  }
  const signIn = (email, password) => {
    setLoading(true)
    return signInWithEmailAndPassword(auth, email, password)
  }
  const logOut = () => {
    setLoading(true)
    return signOut(auth)
  }
  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
      console.log('subscribe')
      setUser(currentUser)
      setLoading(false)
    })
    return () => unSubscribe()
  }, [])
  const authInfo = { createUser, updateUser, signIn, logOut, loading, user }
  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  )
}

export default Authprovider
