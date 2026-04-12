import { Routes, Route, Link } from 'react-router-dom'
import Home from './pages/Home'
import BlogPost from './pages/BlogPost'

export default function App() {
  return (
    <div className="min-h-screen bg-background">
      <header className="border-b border-surface-highlight">
        <div className="max-w-4xl mx-auto px-6 py-4 flex items-center justify-between">
          <Link to="/" className="text-xl font-bold text-accent">OpenSIN Blog</Link>
          <nav className="flex gap-6 text-sm text-text-muted">
            <Link to="/" className="hover:text-accent">Home</Link>
            <a href="https://opensin.ai" className="hover:text-accent">Main Site</a>
            <a href="https://my.opensin.ai" className="hover:text-accent">MyOpenSIN</a>
          </nav>
        </div>
      </header>
      <main className="max-w-4xl mx-auto px-6 py-12">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/post/:id" element={<BlogPost />} />
        </Routes>
      </main>
      <footer className="border-t border-surface-highlight mt-16">
        <div className="max-w-4xl mx-auto px-6 py-8 text-sm text-text-muted text-center">
          © 2026 OpenSIN AI. <a href="https://github.com/OpenSIN-AI" className="text-accent">GitHub</a>
        </div>
      </footer>
    </div>
  )
}
