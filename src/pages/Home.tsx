import { Link } from 'react-router-dom'

const posts = [
  {
    id: 'fleet-architecture',
    title: 'The OpenSIN Fleet Architecture: 100+ Autonomous Agents',
    excerpt: 'How we built the first open-source AI agent fleet with 100+ specialized agents working 24/7.',
    date: '2026-03-15',
  },
  {
    id: 'a2a-protocol',
    title: 'A2A Protocol: The Open Standard for Agent-to-Agent Communication',
    excerpt: 'Deep dive into the Agent-to-Agent protocol that lets AI agents delegate work without human mediation.',
    date: '2026-03-12',
  },
  {
    id: 'security-architecture',
    title: 'Security Architecture: Zero Secrets in Code',
    excerpt: 'How OpenSIN ensures no API keys, tokens, or secrets ever touch the codebase.',
    date: '2026-03-08',
  },
  {
    id: 'oci-deployment',
    title: 'Deploying OpenSIN on Oracle Cloud Infrastructure (OCI)',
    excerpt: 'Step-by-step guide to deploying OpenSIN agents on OCI Always Free VMs for 24/7 operation.',
    date: '2026-03-05',
  },
  {
    id: 'cost-optimization',
    title: 'Cost Optimization: Running AI Agents for $0/month',
    excerpt: 'How we keep infrastructure costs at zero while running 100+ AI agents across multiple platforms.',
    date: '2026-03-01',
  },
  {
    id: 'team-orchestration',
    title: 'Team Orchestration: How 18 AI Teams Work Together',
    excerpt: 'The organizational structure behind OpenSIN — from coding to social media, all autonomous.',
    date: '2026-02-28',
  },
  {
    id: 'monitoring',
    title: 'Monitoring 100+ Agents: Observability at Fleet Scale',
    excerpt: 'Prometheus, Grafana, and structured logging — how we keep 100 agents healthy 24/7.',
    date: '2026-02-25',
  },
  {
    id: 'vs-competitors',
    title: 'OpenSIN vs OpenClaw vs Claude Code: Honest Comparison',
    excerpt: 'A feature-by-feature comparison of the top AI agent frameworks — no hype, just facts.',
    date: '2026-02-20',
  },
  {
    id: 'model-routing',
    title: 'Intelligent Model Routing: Using the Right LLM for Each Task',
    excerpt: 'How OpenSIN agents automatically select the best LLM model based on task type and cost.',
    date: '2026-02-15',
  },
  {
    id: 'apple-ecosystem',
    title: 'OpenSIN in the Apple Ecosystem: macOS, iOS, and Beyond',
    excerpt: 'How OpenSIN agents integrate with macOS, iOS, Calendar, Messages, and the entire Apple ecosystem.',
    date: '2026-02-10',
  },
  {
    id: 'ci-cd',
    title: 'CI/CD for AI Agents: Automated Testing and Deployment',
    excerpt: 'How we automated the entire build-test-deploy pipeline for 100+ AI agents.',
    date: '2026-02-05',
  },
  {
    id: 'agent-forge',
    title: 'Agent Forge: Creating New AI Agents in Minutes',
    excerpt: 'The OpenSIN Agent Forge skill that lets you scaffold, configure, and deploy a new agent in under 10 minutes.',
    date: '2026-02-01',
  },
  {
    id: 'self-healing',
    title: 'Self-Healing Fleet: How OpenSIN Recovers from Failures Automatically',
    excerpt: 'The self-healing architecture that keeps 100+ agents running 24/7 without human intervention.',
    date: '2026-01-28',
  },
  {
    id: 'n8n-integration',
    title: 'n8n Integration: The Router Behind the OpenSIN Fleet',
    excerpt: 'How we use n8n as the indestructible "dumb" router for all inbound work and webhook processing.',
    date: '2026-01-25',
  },
  {
    id: 'supabase',
    title: 'Supabase: The Central Database for the Agent Fleet',
    excerpt: 'How we use Supabase as the single source of truth for agent state, tokens, and fleet management.',
    date: '2026-01-20',
  },
  {
    id: 'future-vision',
    title: 'The Future of OpenSIN: Where We Are Going in 2026',
    excerpt: 'Our vision for the next 12 months: enterprise features, marketplace, and true AI autonomy.',
    date: '2026-01-15',
  },
]

export default function Home() {
  return (
    <div className="space-y-12">
      <section className="text-center py-12">
        <h1 className="text-4xl font-black mb-4 text-accent">OpenSIN Engineering Blog</h1>
        <p className="text-text-muted text-lg max-w-2xl mx-auto">
          Deep dives into AI agent architecture, multi-agent orchestration, security, and infrastructure.
          Building the future of autonomous AI — open source.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-bold mb-6">All Posts</h2>
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
