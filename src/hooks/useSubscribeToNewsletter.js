import { useRef, useState } from 'react'

export default function useSubscribeToNewsletter() {
  const [form, setForm] = useState({ state: "initial" })
  const inputEl = useRef(null)


  async function subscribe(e) {
    e.preventDefault()
    setForm({ state: "loading" })

    const res = await fetch("/api/subscribe", {
      body: JSON.stringify({
        email: inputEl.current.value
      }),
      headers: {
        'Content-Type': 'application/json'
      },
      method: 'POST'
    })

    const { error } = await res.json()

    if (error) {
      setForm({ state: "error", message: error })

      return
    }

    inputEl.current.value = ''

    setForm({
      state: "success",
      message: 'Success! You\'ve been added to the list!'
    })
  }

  return { subscribe, inputEl, form }
}