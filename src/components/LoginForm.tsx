import { useState } from 'react'

export default function LoginForm() {
  const [first, setFirst] = useState('')
  const [last, setLast] = useState('')
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('')
  const [password, setPassword] = useState('')
  const [showPassword, setShowPassword] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [loading, setLoading] = useState(false)
  const [success, setSuccess] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError(null)

    if (!first || !last || !email || !phone || !password) {
      setError('Please fill in all fields')
      return
    }

    setLoading(true)
    try {
      await new Promise((res) => setTimeout(res, 800))
      console.log('Signup:', { first, last, email, phone })
      setSuccess(true)
    } catch (err) {
      setError('Submission error')
    } finally {
      setLoading(false)
    }
  }

  if (success) {
    return (
      <div className="text-center py-4">
        <div className="text-2xl font-bold text-[#2b6b2b]">Welcome aboard!</div>
        <div className="mt-2 text-sm text-[#4b5b3f]">Your account has been created successfully.</div>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        <label className="block text-xs text-[#445]">
          First Name
          <input
            className="mt-2 block w-full rounded-md border border-[#e6ecd6] bg-white px-3 py-2 text-[#172017] placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-[#ffd7b0]"
            value={first}
            onChange={(e) => setFirst(e.target.value)}
            placeholder="Enter your first name"
            required
          />
        </label>

        <label className="block text-xs text-[#445]">
          Last Name
          <input
            className="mt-2 block w-full rounded-md border border-[#e6ecd6] bg-white px-3 py-2 text-[#172017] placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-[#ffd7b0]"
            value={last}
            onChange={(e) => setLast(e.target.value)}
            placeholder="Input Username"
            required
          />
        </label>
      </div>

      <label className="block text-xs text-[#445]">
        Email
        <input
          className="mt-2 block w-full rounded-md border border-[#e6ecd6] bg-white px-3 py-2 text-[#172017] placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-[#ffd7b0]"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Input your email"
          required
        />
      </label>

      <label className="block text-xs text-[#445]">
        Phone Number
        <input
          className="mt-2 block w-full rounded-md border border-[#e6ecd6] bg-white px-3 py-2 text-[#172017] placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-[#ffd7b0]"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          placeholder="Enter your phone number"
          required
        />
      </label>

      <label className="block text-xs text-[#445]">
        Password
        <div className="mt-2 relative">
          <input
            className="block w-full rounded-md border border-[#e6ecd6] bg-white px-3 py-2 text-[#172017] placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-[#ffd7b0]"
            type={showPassword ? 'text' : 'password'}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Input your password"
            required
          />
          <button
            type="button"
            onClick={() => setShowPassword((s) => !s)}
            className="absolute right-2 top-1/2 -translate-y-1/2 text-gray-500"
          >
            {showPassword ? 'Hide' : 'Show'}
          </button>
        </div>
      </label>

      {error && <div className="text-sm text-[#b94a4a] font-semibold">{error}</div>}

      <div>
        <button
          type="submit"
          disabled={loading}
          className="w-full py-3 rounded-md bg-gradient-to-r from-[#ff7a3c] to-[#ffb86b] font-bold text-white shadow-sm hover:brightness-95 disabled:opacity-60"
        >
          {loading ? 'Creating...' : 'Create Account'}
        </button>
      </div>

      <p className="text-xs text-[#687a4a]">By continuing with Google, Apple, or Email, you agree to monkey <a href="#" className="underline">Terms of Service</a> and <a href="#" className="underline">Privacy Policy</a>.</p>

      <div className="flex items-center gap-3">
        <div className="flex-1 h-px bg-[#dfe7cf]" />
        <div className="text-xs text-[#6b7a56]">or continue with</div>
        <div className="flex-1 h-px bg-[#dfe7cf]" />
      </div>

      <div className="flex gap-3 mt-2">
        <button type="button" className="flex-1 py-2 rounded-md bg-white border border-[#e6ecd6] flex items-center justify-center gap-2 text-sm">
          <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 48 48" className="inline-block">
            <path fill="#4285F4" d="M24 9.5c3.9 0 6.4 1.7 7.9 3.1l5.8-5.7C34.6 3 29.8 1 24 1 14 1 5.6 6.7 2 15.6l6.9 5.3C10.6 13.5 16.8 9.5 24 9.5z"/>
            <path fill="#34A853" d="M46.5 24.5c0-1.5-.1-2.5-.4-3.7H24v7.1h12.8c-.5 2.9-2 5.3-4.3 6.9l6.8 5.3c4-3.7 6.2-9.1 6.2-15.6z"/>
            <path fill="#FBBC05" d="M9.4 29.4c-.7-2.1-1.1-4.3-1.1-6.6 0-2.3.4-4.5 1.1-6.6L2.5 10.9C.9 14.1 0 17.9 0 21.9c0 4 0.9 7.8 2.5 11z"/>
            <path fill="#EA4335" d="M24 46c6.2 0 11.4-2 15.2-5.4l-7.2-5.6c-2 1.4-4.6 2.3-8 2.3-7.2 0-13.4-4-16.6-9.9l-6.9 5.3C5.6 41.3 14 46 24 46z"/>
          </svg>
          Google
        </button>

        <button type="button" className="flex-1 py-2 rounded-md bg-white border border-[#e6ecd6] flex items-center justify-center gap-2 text-sm">
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="20" viewBox="0 0 384 512" className="inline-block">
            <path fill="#111" d="M318.7 268.7c-.2-36 15.8-63.3 50.2-83.5-18.7-26.9-46.6-43-82.9-47.4-34.9-4.2-74.8 20.5-92.7 20.5-19.3 0-55.5-19.9-84.8-19.4C86.6 160.6 48 194.4 31.8 226c-60.9 104.6 3.7 259.9 65.7 343.2 43.7 58.3 95.3 123.5 163 121.8 66.1-1.6 91.2-42.7 161.5-42.7 35.2 0 56.3 19.6 94.7 19.1 34.1-.5 70.9-16.1 93.1-43.9-1.7-2.7-42.4-30.7-43.6-98.4-1.1-58.5 51.9-94.8 51.9-147.7 0-36.5-15.5-68.6-31.1-90.7-26.3-36.8-70.5-62.3-125.3-56.5-55.6 5.9-85.1 44.7-97.7 44.7-14.4 0-45.3-36.6-97.6-36.6-53.4 0-90.4 36.4-121.6 36.4-38.8 0-77.2-37.7-129.1-37.7-34.4 0-66.5 16.8-91 48.6C19.8 241.2 39.2 297.7 91 330.1c27.4 17 55 24.2 74.4 24.2 28.8 0 61.6-13.6 98.1-39.6 30.8-20.6 52.8-32.9 76.2-32.9z"/>
          </svg>
          Apple
        </button>
      </div>
    </form>
  )
}
