import { Link } from 'react-router-dom'


const posts = [
  {
    id: '59',
    title: 'Simone MCP: The Universal Connector for AI Agents',
    excerpt: 'Introducing Simone MCP, the mandatory integration layer that connects every OpenSIN agent to the ecosystem.',
    date: '2026-04-12',
  },
  {
    id: 'recent-1',
    title: 'OpenSIN reaches 100+ agents and 18 teams',
    excerpt: 'Our open-source agent ecosystem has grown exponentially. See the latest milestones.',
    date: '2026-04-10',
  },
]

export default function Home() {
  return (
    <div className="space-y-12">
      <section className="relative rounded-2xl overflow-hidden border border-surface-highlight">
        <img src="/assets/simone-banner.png" alt="Simone MCP" className="w-full h-auto object-cover" />
        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-background to-transparent p-6">
          <h1 className="text-3xl font-bold mb-2">Simone MCP</h1>
          <p className="text-text-muted mb-4">The universal connector for OpenSIN agents</p>
          <Link to="/post/59" className="inline-flex items-center px-6 py-3 bg-accent text-background font-semibold rounded-full hover:bg-accent-hover">
            Read the announcement
          </Link>
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-bold mb-6">Latest Posts</h2>
        <div className="grid gap-6">
          {posts.map(post => (
            <article key={post.id} className="border border-surface-highlight rounded-xl p-6 hover:border-accent transition-colors">
              <time className="text-sm text-text-muted">{post.date}</time>
              <h3 className="text-xl font-bold mt-2 mb-3">
                <Link to={`/post/${post.id}`} className="hover:text-accent">{post.title}</Link>
              </h3>
              <p className="text-text-muted mb-4">{post.excerpt}</p>
              <Link to={`/post/${post.id}`} className="text-accent font-medium">Read more →</Link>
            </article>
          ))}
        </div>
      </section>
    </div>
  )
}
