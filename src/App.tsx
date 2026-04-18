import { Routes, Route, Link } from 'react-router-dom'
import Home from './pages/Home'
import BlogPost from './pages/BlogPost'

export default function App() {
  return (
    <div className="min-h-screen bg-background text-white">
      <header className="sticky top-0 z-50 border-b border-surface-highlight bg-black/80 backdrop-blur-xl">
        <div className="mx-auto flex max-w-5xl items-center justify-between px-6 py-4">
          <Link to="/" className="inline-flex items-center gap-3 text-xl font-light tracking-tight text-white">
            <span className="inline-flex h-8 w-8 items-center justify-center rounded-xl bg-[#008060] text-sm font-medium text-black">S</span>
            <span>OpenSIN-AI Blog</span>
          </Link>
          <nav className="flex gap-6 text-sm text-text-muted">
            <Link to="/" className="hover:text-accent">Home</Link>
            <a href="https://opensin.ai" className="hover:text-accent">OpenSIN-AI</a>
            <a href="https://my.opensin.ai" className="hover:text-accent">Marketplace</a>
            <a href="https://docs.opensin.ai" className="hover:text-accent">Docs</a>
          </nav>
        </div>
      </header>
      <main className="mx-auto max-w-5xl px-6 py-12">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/post/:id" element={<BlogPost />} />
        </Routes>
      </main>
      <footer className="border-t border-surface-highlight mt-16">
        <div className="mx-auto max-w-5xl px-6 py-8 text-center text-sm text-text-muted">
          © 2026 OpenSIN-AI. <a href="https://github.com/OpenSIN-AI" className="text-accent">GitHub</a>
        </div>
      </footer>
    </div>
  )
}
