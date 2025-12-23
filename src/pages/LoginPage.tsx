import React from 'react'
import LoginForm from '../components/LoginForm'
import { Link } from 'react-router-dom'

export default function LoginPage() {
  return (
    <div className="min-h-[70vh] flex flex-col items-center justify-center p-6 cyber-bg">
      <div className="w-full max-w-md">
        <h2 className="text-3xl font-extrabold mb-2 text-center neon-text neon-flicker bg-clip-text text-transparent bg-gradient-to-r from-[#ff00de] to-[#00e0ff]">Вход на сайт</h2>
        <p className="text-sm text-[#9be9ff] mb-4 text-center">Пожалуйста, введите данные для входа.</p>

        <LoginForm />

        <p className="mt-4 text-center text-sm text-[#a8f0ff]">
          Или вернуться на <Link to="/" className="text-[#00e0ff] hover:underline">главную</Link>
        </p>
      </div>
    </div>
  )
}
