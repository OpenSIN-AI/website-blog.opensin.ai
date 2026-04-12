import { useParams, Link } from 'react-router-dom'

const posts: Record<string, { title: string; content: string }> = {
  '59': {
    title: 'Simone MCP: The Universal Connector for AI Agents',
    content: `
      <p>We are thrilled to announce <strong>Simone MCP</strong>, the new mandatory Model Context Protocol integration that connects every OpenSIN agent to the ecosystem.</p>

      <h2 className="text-2xl font-bold mt-8 mb-4">Why Simone MCP?</h2>
      <p>Simone MCP is not optional. It is the central nervous system of the OpenSIN agent fleet. Every agent must be equipped with Simone MCP to:</p>
      <ul className="list-disc pl-6 space-y-2 my-4">
        <li>Discover other agents and their capabilities</li>
        <li>Exchange context and results seamlessly</li>
        <li>Access shared tools and resources</li>
        <li>Participate in the self-healing fleet</li>
      </ul>

      <h2 className="text-2xl font-bold mt-8 mb-4">Mandatory April 2026</h2>
      <p>Starting April 1st, 2026, all OpenSIN agents must include Simone MCP. The A2A-SIN-Team Managers will enforce this via PR checks and runtime health gates.</p>

      <div className="my-8">
        <img src="/assets/simone-banner.png" alt="Simone MCP Banner" className="w-full rounded-xl border border-surface-highlight" />
      </div>

      <h2 className="text-2xl font-bold mt-8 mb-4">Get Started</h2>
      <p>Agents automatically include Simone MCP via the OpenSIN SDK. No manual setup required. Just build your agent and it's connected.</p>

      <p className="mt-6">Read the full specification in the <a href="https://github.com/OpenSIN-AI/Global-Dev-Docs-Standard" className="text-accent">Global Dev Docs Standard</a>.</p>
    `,
  },
  'recent-1': {
    title: 'OpenSIN reaches 100+ agents and 18 teams',
    content: `
      <p>The OpenSIN ecosystem has grown to over <strong>100 specialized agents</strong> across <strong>18 teams</strong>. This milestone reflects our commitment to building a comprehensive, open AI agent system.</p>

      <h2 className="text-2xl font-bold mt-8 mb-4">Ecosystem Scale</h2>
      <p>We now have:</p>
      <ul className="list-disc pl-6 space-y-2 my-4">
        <li>Production-ready agents for Google Workspace, Telegram, n8n, Supabase, and more</li>
        <li>Specialized design, debugging, and deployment agents</li>
        <li>A2A (Agent-to-Agent) communication fully operational</li>
        <li>Enterprise-grade observability and self-healing</li>
      </ul>

      <p>All agents are built on the OpenSIN protocol and can be forked, modified, and self-hosted.</p>
    `,
  },
}

export default function BlogPost() {
  const { id } = useParams<{ id: string }>()
  const post = id ? posts[id] : null

  if (!post) {
    return (
      <div className="text-center py-12">
        <h1 className="text-2xl font-bold mb-4">Post not found</h1>
        <Link to="/" className="text-accent">← Back to home</Link>
      </div>
    )
  }

  return (
    <article className="max-w-3xl mx-auto">
      <Link to="/" className="text-accent mb-6 inline-block">← Back to posts</Link>
      <h1 className="text-3xl font-bold mb-4">{post.title}</h1>
      <div
        className="prose prose-invert max-w-none"
        dangerouslySetInnerHTML={{ __html: post.content }}
      />
    </article>
  )
}
