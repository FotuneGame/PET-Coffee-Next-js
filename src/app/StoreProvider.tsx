'use client'
import { useRef } from 'react'
import { Provider } from 'react-redux'
import { createStore, AppStore } from '@/store';

interface IProps{
    children: React.ReactNode
}


export default function StoreProvider({children}: IProps) {
    
  const storeRef = useRef<AppStore>();
  if (!storeRef.current) 
    storeRef.current = createStore();

  return (
    <Provider store={storeRef.current}>{children}</Provider>
  );
}