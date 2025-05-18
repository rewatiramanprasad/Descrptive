import React, { useState } from 'react'
import { FaSearch } from 'react-icons/fa'
import UserInput from './UserInput'
import UrlStatus from './UrlStatus'
// import {dummyData} from './assets/data'
import { useEffect } from 'react'

function Dashboard() {
  const [input, setInput] = useState('')
  const [data, setData] = useState([])
  const [error, setError] = useState([])
  const [openModal, setOpenModal] = useState(false)
  const dataFetching = async () => {
    try {
      const response = await fetch('http://localhost:5000/analyzed', {
        method: 'Get',
      })
      const result = await response.json()
      console.log(result)
      if (result.success) {
        setData(result.data)
      } else {
        throw new Error(result.message)
      }
    } catch (error) {
      console.log(error)
      setError(error.message)
    }
  }
  useEffect(() => {
    dataFetching()
  }, [])

  const submitHandler = async () => {
    await fetch('http://localhost:5000/submit-threat', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ url: input }),
    })
    dataFetching()
    setOpenModal(false)
    setInput('')
  }

  if (data.length < 0) {
    return <h1 className="text-4xl text-bold">There is no data </h1>
  }
  return (
    <div className="relative">
      {error && <h1 className="text-2xl text-red-600">{error}</h1>}
      <section className="h-[90lvh] flex justify-center p-4">
        <UrlStatus data={data} />
      </section>
      <button
        className=" absolute bottom-20 right-20 bg-blue-800 rounded-4xl p-4"
        onClick={() => {
          setOpenModal(true)
        }}
      >
        <FaSearch size={'30px'} />
      </button>
      <UserInput
        input={input}
        setInput={setInput}
        openModal={openModal}
        setOpenModal={setOpenModal}
        submitHandler={submitHandler}
      />
    </div>
  )
}

export default Dashboard
