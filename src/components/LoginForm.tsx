import React, { useState } from 'react'

export default function LoginForm() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState<string | null>(null)
  const [loading, setLoading] = useState(false)
  const [success, setSuccess] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError(null)

    if (!email || !password) {
      setError('Пожалуйста, заполните все поля')
      return
    }

    setLoading(true)
    try {
      // Симуляция запроса на сервер
      await new Promise((res) => setTimeout(res, 700))
      console.log('Login:', { email, password })
      setSuccess(true)
    } catch (err) {
      setError('Ошибка входа')
    } finally {
      setLoading(false)
    }
  }

  if (success) {
    return (
      <div className="text-center text-[#7ef9ff] font-semibold py-4 neon-text">
        Вы успешно вошли!
      </div>
    )
  }

  return (
    <form
      className="relative max-w-md mx-auto p-6 rounded-lg bg-[linear-gradient(135deg,#02040a,rgba(8,6,20,0.6))] neon-panel space-y-5"
      onSubmit={handleSubmit}
    >
      <div className="absolute -inset-1">
        <div className="scanline pointer-events-none" aria-hidden />
      </div>

      <div>
        <label className="block text-xs tracking-widest text-[#7ef9ff]">
          Email
          <input
            className="mt-2 block w-full rounded-md border border-[#223044] bg-transparent text-[#e6f7ff] placeholder:text-[#6fb6c6] px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#00e0ff]"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="you@example.com"
            required
          />
        </label>
      </div>

      <div>
        <label className="block text-xs tracking-widest text-[#ff7bff]">
          Пароль
          <input
            className="mt-2 block w-full rounded-md border border-[#223044] bg-transparent text-[#e6f7ff] placeholder:text-[#6fb6c6] px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#ff00de]"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="••••••••"
            required
          />
        </label>
      </div>

      {error && <div className="text-[#ff6b6b] text-sm font-semibold">{error}</div>}

      <div className="flex items-center justify-between">
        <button
          type="submit"
          disabled={loading}
          className="inline-flex items-center justify-center px-5 py-2 bg-gradient-to-r from-[#ff00de] to-[#00e0ff] text-black font-extrabold rounded-md shadow-neon hover:brightness-105 disabled:opacity-60"
        >
          {loading ? 'Вход...' : 'Войти'}
        </button>

        <a className="text-sm text-[#00e0ff] hover:underline" href="#">
          Забыли пароль?
        </a>
      </div>
    </form>
  )
}
