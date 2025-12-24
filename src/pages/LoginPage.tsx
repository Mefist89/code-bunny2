import LoginForm from '../components/LoginForm'
import { Link } from 'react-router-dom'

export default function LoginPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-green-50 to-green-100 p-6">
      <div className="w-full max-w-6xl rounded-xl overflow-hidden shadow-xl grid grid-cols-1 md:grid-cols-2">
        {/* Left illustration */}
        <div className="hidden md:block bg-cover bg-center" style={{ backgroundImage: `url('/assets/hero-left.svg')` }}>
          <div className="h-full w-full bg-[linear-gradient(90deg,rgba(0,0,0,0.15),rgba(0,0,0,0.1))]" />
        </div>

        {/* Right panel */}
        <div className="px-8 py-10 bg-gradient-to-br from-[#f2f9e9] to-[#e8f6d9]">
          <div className="max-w-md mx-auto">
            <h1 className="text-4xl font-extrabold text-[#2a2a2a] mb-2">Welcome Explorer!</h1>
            <p className="text-sm text-[#455a35] mb-6">Log in now to continue your exciting journey and unlock new adventures waiting for you!</p>

            <LoginForm />

            <p className="mt-6 text-center text-sm text-[#4b5b3f]">
              Do have an account? <Link to="/" className="font-semibold text-[#ff7a3c] hover:underline">Sign</Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
