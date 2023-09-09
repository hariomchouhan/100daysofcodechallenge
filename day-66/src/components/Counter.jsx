import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { decrement, increment } from '../redux/Slices/CounterSlice'
import { toast } from 'react-hot-toast'

const Counter = () => {
    const dispatch = useDispatch()
    const count = useSelector((state) => state.counter.value)
  return (
    <div className='flex flex-col justify-center bg-slate-100 items-center gap-11 h-[100vh]'>
      <div className='text-3xl bg-slate-300 rounded-md py-2 shadow-xl p-4 hover:shadow-lg transition-all duration-200 text-slate-800'>{count}</div>
      <button className='text-3xl bg-slate-300 rounded-md py-2 shadow-xl p-4 hover:shadow-lg transition-all duration-200 text-slate-700' onClick={() => {dispatch(increment()); toast.success("Plus One Value!")}}>Increment</button>
      <button className='text-3xl bg-slate-300 rounded-md py-2 shadow-xl p-4 hover:shadow-lg transition-all duration-200 text-slate-700' onClick={() => {dispatch(decrement()); toast.error("Minus One Value!")}}>Decrement</button>
    </div>
  )
}

export default Counter
