import { useParams, Link } from 'react-router-dom'

interface BlogPost {
  title: string
  date: string
  excerpt: string
  tags: string[]
  content: string
}

const posts: Record<string, BlogPost> = {
  'fleet-architecture': {
    title: 'The OpenSIN Fleet Architecture: 100+ Autonomous Agents',
    date: '2026-03-15',
    excerpt: 'How we built the first open-source AI agent fleet with 100+ specialized agents working 24/7.',
    tags: ['Architecture', 'Agents'],
    content: `<p>OpenSIN is not just another AI wrapper. It's a <strong>fleet of 100+ autonomous agents</strong> organized into 18 specialized teams, each with deep domain expertise and the ability to delegate work peer-to-peer via the A2A protocol.</p>

<h2>The Problem with Single-Agent Systems</h2>
<p>Most AI coding tools (Claude Code, OpenClaw, Cursor) operate as single agents. They're great at focused tasks but lack the ability to coordinate complex, multi-domain workflows. You need a separate chat for research, another for coding, another for deployment.</p>

<h2>OpenSIN's Fleet Design</h2>
<p>OpenSIN solves this with a <strong>multi-agent architecture</strong> where each agent specializes in one domain:</p>
<ul class="list-disc pl-6 space-y-2 my-4">
  <li><strong>Code Backend</strong> — API design, database schemas, architecture</li>
  <li><strong>Code Frontend</strong> — React, Vue, design systems, UI/UX</li>
  <li><strong>Security</strong> — 14 agents covering pentesting, fuzzing, forensics</li>
  <li><strong>Research</strong> — Web research, synthesis, report generation</li>
  <li><strong>Social Media</strong> — Twitter, TikTok, LinkedIn, Reddit automation</li>
  <li><strong>Messaging</strong> — Telegram, WhatsApp, Discord, Signal bots</li>
</ul>

<h2>A2A: The Glue That Holds It Together</h2>
<p>The Agent-to-Agent (A2A) protocol is what makes the fleet coherent. Agents publish machine-readable capability cards at <code>/.well-known/agent-card.json</code> and communicate via HTTP with Server-Sent Events for streaming results.</p>

<h2>Self-Healing by Design</h2>
<p>Every agent has a heartbeat monitor. If an agent crashes or gets rate-limited, the system auto-restarts it and resumes from the last checkpoint. No human needed.</p>

<p>Read more about our <a href="/post/a2a-protocol" class="text-accent">A2A protocol design</a> or explore the <a href="https://github.com/OpenSIN-AI" class="text-accent">OpenSIN GitHub organization</a>.</p>`,
  },
  'a2a-protocol': {
    title: 'A2A Protocol: The Open Standard for Agent-to-Agent Communication',
    date: '2026-03-12',
    excerpt: 'Deep dive into the Agent-to-Agent protocol that lets AI agents delegate work without human mediation.',
    tags: ['Protocol', 'A2A'],
    content: `<p>The <strong>Agent-to-Agent (A2A) protocol</strong> is the open communication standard that enables autonomous AI agents to discover, delegate, and collaborate peer-to-peer — no central broker required.</p>

<h2>Why A2A Matters</h2>
<p>MCP (Model Context Protocol) solved how a single LLM connects to tools. But what happens when one agent needs to hand off work to another? That's where A2A comes in. It's HTTP for agents.</p>

<h2>Protocol Overview</h2>
<ul class="list-disc pl-6 space-y-2 my-4">
  <li><strong>Agent Discovery</strong> — Machine-readable Agent Cards at <code>/.well-known/agent-card.json</code></li>
  <li><strong>Task Delegation</strong> — HTTP POST <code>/a2a/v1/tasks</code> with structured goal and context</li>
  <li><strong>Streaming Results</strong> — Server-Sent Events for real-time progress updates</li>
  <li><strong>Artifact Exchange</strong> — Structured return values (code, files, API responses)</li>
  <li><strong>Push Notifications</strong> — Webhook callbacks for long-running tasks</li>
</ul>

<h2>Language Agnostic</h2>
<p>Any agent in any language (Python, TypeScript, Go, Rust) can implement A2A. The protocol is pure HTTP + JSON. OpenSIN agents use TypeScript, but we have Python agents in the security fleet.</p>

<h2>Production at Scale</h2>
<p>OpenSIN runs 100+ agents on A2A across 18 teams. A coding agent can hand off security review to a security agent, which triggers documentation from a docs agent — all autonomously.</p>

<p>Explore the <a href="https://opensin.ai/a2a-protocol" class="text-accent">A2A Protocol page on opensin.ai</a> for the full specification.</p>`,
  },
  'security-architecture': {
    title: 'Security Architecture: Zero Secrets in Code',
    date: '2026-03-08',
    excerpt: 'How OpenSIN ensures no API keys, tokens, or secrets ever touch the codebase.',
    tags: ['Security', 'Architecture'],
    content: `<p>Security is not an afterthought in OpenSIN — it's a first-class design principle. Our <strong>zero secrets in code</strong> policy means no API keys, tokens, or credentials ever appear in source code, config files, or environment variables checked into git.</p>

<h2>The Auth Broker Pattern</h2>
<p>OpenSIN uses a centralized auth broker that agents query at runtime. Agents receive short-lived, scoped tokens — never raw credentials. If an agent is compromised, the blast radius is limited to that single token's scope.</p>

<h2>Key Components</h2>
<ul class="list-disc pl-6 space-y-2 my-4">
  <li><strong>Secret Authority</strong> — Centralized secret management with audit logging</li>
  <li><strong>Approval Lanes</strong> — Sensitive actions require human sign-off via Telegram/Slack</li>
  <li><strong>Token Rotation</strong> — Automatic rotation of all credentials on configurable schedules</li>
  <li><strong>Scoped Permissions</strong> — Each agent gets minimum necessary permissions</li>
</ul>

<h2>SOC 2 Ready</h2>
<p>OpenSIN's security model is designed to meet SOC 2 Type II requirements from day one. Air-gap deployment is fully supported for regulated industries.</p>`,
  },
  'oci-deployment': {
    title: 'Deploying OpenSIN on Oracle Cloud Infrastructure (OCI)',
    date: '2026-03-05',
    excerpt: 'Step-by-step guide to deploying OpenSIN agents on OCI Always Free VMs for 24/7 operation.',
    tags: ['DevOps', 'OCI'],
    content: `<p>Running autonomous AI agents requires infrastructure that's always on. OCI's Always Free tier gives us an <strong>A1.Flex VM with 4 OCPUs and 24GB RAM</strong> — enough to run dozens of agents 24/7 at zero cost.</p>

<h2>What We Run on OCI</h2>
<ul class="list-disc pl-6 space-y-2 my-4">
  <li><strong>n8n</strong> — Workflow orchestration and webhook routing</li>
  <li><strong>Token Factory</strong> — Headless Docker containers for API token rotation</li>
  <li><strong>Supabase</strong> — PostgreSQL database for agent state and fleet management</li>
  <li><strong>OpenCode</strong> — AI coding agents running as persistent processes</li>
</ul>

<h2>Deployment Pipeline</h2>
<p>We use GitHub Actions to build Docker images and deploy to OCI via SSH. Each service has its own Docker Compose stack with health checks and auto-restart policies.</p>

<h2>Cost: $0/month</h2>
<p>The A1.Flex VM is Always Free. We run everything else on Hugging Face Spaces (also free) and Cloudflare Pages for static sites. Total infrastructure cost: zero.</p>`,
  },
  'cost-optimization': {
    title: 'Cost Optimization: Running AI Agents for $0/month',
    date: '2026-03-01',
    excerpt: 'How we keep infrastructure costs at zero while running 100+ AI agents across multiple platforms.',
    tags: ['Infrastructure', 'Cost'],
    content: `<p>Running AI agents at scale is expensive if you use managed services. We've engineered OpenSIN to run on <strong>100% free infrastructure</strong> through a combination of OCI Always Free, Hugging Face Spaces, and Cloudflare Pages.</p>

<h2>Infrastructure Breakdown</h2>
<ul class="list-disc pl-6 space-y-2 my-4">
  <li><strong>OCI A1.Flex</strong> — 4 OCPUs, 24GB RAM (Always Free)</li>
  <li><strong>OCI E2.Micro</strong> — Token Factory VM (Always Free)</li>
  <li><strong>Hugging Face Spaces</strong> — Individual agent workers (Free tier)</li>
  <li><strong>Cloudflare Pages</strong> — Static websites (Free tier)</li>
  <li><strong>Supabase</strong> — PostgreSQL database (Free tier: 500MB)</li>
</ul>

<h2>Token Optimization</h2>
<p>API costs are the biggest expense. We mitigate this through:</p>
<ul class="list-disc pl-6 space-y-2 my-4">
  <li>Multi-account rotation (pool of Google/Antigravity accounts)</li>
  <li>Local model fallback via Ollama for non-critical tasks</li>
  <li>Prompt compression to reduce token usage by 40%</li>
</ul>

<p>Total monthly cost: <strong>$0</strong> for infrastructure, ~$30/month for API usage (shared across all agents).</p>`,
  },
  'team-orchestration': {
    title: 'Team Orchestration: How 18 AI Teams Work Together',
    date: '2026-02-28',
    excerpt: 'The organizational structure behind OpenSIN — from coding to social media, all autonomous.',
    tags: ['Architecture', 'Teams'],
    content: `<p>OpenSIN isn't just a collection of agents — it's a structured organization with 18 teams, each with a specific mission and the autonomy to execute it.</p>

<h2>Team Structure</h2>
<p>Each team has a Team Manager agent that coordinates work among specialist agents:</p>
<ul class="list-disc pl-6 space-y-2 my-4">
  <li><strong>Team Code Backend</strong> — 8 agents (architecture, APIs, databases)</li>
  <li><strong>Team Code Frontend</strong> — 6 agents (React, Vue, design systems)</li>
  <li><strong>Team Security</strong> — 14 agents (pentest, bug bounty, fuzzing, forensics)</li>
  <li><strong>Team Social</strong> — 9 agents (Twitter, TikTok, LinkedIn, Reddit)</li>
  <li><strong>Team Messaging</strong> — 7 agents (Telegram, WhatsApp, Discord)</li>
</ul>

<h2>Cross-Team Collaboration</h2>
<p>Teams communicate via A2A. When Team Code Backend finishes a feature, it delegates security review to Team Security, which then delegates documentation to Team Docs — all without human coordination.</p>

<h2>The Manager Pattern</h2>
<p>Team Managers don't do the work themselves. They decompose goals, assign tasks, track progress, and escalate blockers. This mirrors real organizational structure.</p>`,
  },
  'monitoring': {
    title: 'Monitoring 100+ Agents: Observability at Fleet Scale',
    date: '2026-02-25',
    excerpt: 'Prometheus, Grafana, and structured logging — how we keep 100 agents healthy 24/7.',
    tags: ['Monitoring', 'DevOps'],
    content: `<p>When you have 100+ autonomous agents running across multiple servers and cloud platforms, you need serious observability. Here's our monitoring stack.</p>

<h2>Heartbeat Monitoring</h2>
<p>Every agent pings a health endpoint every 30 seconds. Missed heartbeats trigger automatic restarts within 60 seconds. This is our first line of defense.</p>

<h2>Prometheus + Grafana</h2>
<p>We expose Prometheus metrics from every agent: task completion rate, token usage, error rate, and latency. Grafana dashboards give us a real-time fleet overview.</p>

<h2>Structured Logging</h2>
<p>All agents output structured JSON logs to stdout. These are collected by Promtail and shipped to Loki for searchable, filterable log aggregation.</p>

<h2>Alerting</h2>
<p>When things go wrong, agents escalate via Telegram to the on-call human. We've tuned our alerts to only page for genuine issues — no false positives.</p>`,
  },
  'vs-competitors': {
    title: 'OpenSIN vs OpenClaw vs Claude Code: Honest Comparison',
    date: '2026-02-20',
    excerpt: 'A feature-by-feature comparison of the top AI agent frameworks — no hype, just facts.',
    tags: ['Comparison', 'Analysis'],
    content: `<p>The AI agent space is crowded. Here's an honest, feature-by-feature comparison of OpenSIN, OpenClaw, and Claude Code.</p>

<h2>Multi-Agent Support</h2>
<p>OpenSIN ships 100+ agents across 18 teams with native A2A protocol. OpenClaw supports individual agents but no inter-agent communication. Claude Code is a single-agent coding assistant.</p>

<h2>Model Support</h2>
<p>OpenSIN supports 1000+ models across 100+ providers. OpenClaw supports major providers. Claude Code is locked to Anthropic's Claude models only.</p>

<h2>Open Source</h2>
<p>OpenSIN and OpenClaw are Apache 2.0. Claude Code is closed source with a $100+/month subscription.</p>

<h2>Communication Channels</h2>
<p>OpenSIN integrates 19+ channels (Telegram, WhatsApp, Discord, Slack, Signal, etc.). OpenClaw has limited channel support. Claude Code has none.</p>

<p>See the <a href="https://opensin.ai/openclaw-vs-opensin" class="text-accent">full comparison on opensin.ai</a> for the complete feature matrix.</p>`,
  },
  'model-routing': {
    title: 'Intelligent Model Routing: Using the Right LLM for Each Task',
    date: '2026-02-15',
    excerpt: 'How OpenSIN agents automatically select the best LLM model based on task type and cost.',
    tags: ['LLM', 'Architecture'],
    content: `<p>Not all tasks need GPT-5. OpenSIN agents use <strong>intelligent model routing</strong> to select the optimal LLM for each task — balancing quality, speed, and cost.</p>

<h2>Routing Rules</h2>
<ul class="list-disc pl-6 space-y-2 my-4">
  <li><strong>Coding tasks</strong> → Claude Sonnet 4.6 (best code understanding)</li>
  <li><strong>Research/Analysis</strong> → Gemini 3.1 Pro (long context, web search)</li>
  <li><strong>Creative writing</strong> → Gemini 3 Flash (fast, creative)</li>
  <li><strong>Simple classification</strong> → Qwen 3.5 or local Ollama model (cheap)</li>
  <li><strong>Fallback</strong> → Any available model with exponential backoff</li>
</ul>

<h2>Cost Optimization</h2>
<p>By routing simple tasks to cheaper models, we reduce API costs by 60% compared to always using the most expensive model.</p>`,
  },
  'apple-ecosystem': {
    title: 'OpenSIN in the Apple Ecosystem: macOS, iOS, and Beyond',
    date: '2026-02-10',
    excerpt: 'How OpenSIN agents integrate with macOS, iOS, Calendar, Messages, and the entire Apple ecosystem.',
    tags: ['Apple', 'Integration'],
    content: `<p>No other open-source AI agent framework supports the Apple ecosystem like OpenSIN. We have dedicated agents for <strong>macOS, iOS, Calendar, Messages, Notes, Reminders, Photos, and Shortcuts</strong>.</p>

<h2>AppleScript + nodriver</h2>
<p>Our Apple agents use a combination of AppleScript for OS-level automation and nodriver for browser automation. This gives us access to everything from Calendar events to iMessage.</p>

<h2>Use Cases</h2>
<ul class="list-disc pl-6 space-y-2 my-4">
  <li>Auto-schedule meetings from email context</li>
  <li>Summarize daily calendar every morning</li>
  <li>Auto-respond to iMessages with AI-generated replies</li>
  <li>Organize Photos with AI tagging</li>
  <li>Run Shortcuts triggered by agent decisions</li>
</ul>

<h2>Why Only OpenSIN</h2>
<p>Other frameworks focus purely on web APIs. OpenSIN understands that real work happens across all your devices — including your Mac and iPhone.</p>`,
  },
  'ci-cd': {
    title: 'CI/CD for AI Agents: Automated Testing and Deployment',
    date: '2026-02-05',
    excerpt: 'How we automated the entire build-test-deploy pipeline for 100+ AI agents.',
    tags: ['CI/CD', 'DevOps'],
    content: `<p>Deploying 100+ AI agents manually is impossible. OpenSIN uses a fully automated CI/CD pipeline that builds, tests, and deploys agents across OCI, Hugging Face, and Cloudflare.</p>

<h2>GitHub Actions Pipeline</h2>
<p>Every PR triggers: lint → type check → unit tests → integration tests → build → deploy to staging. After human approval, deploy to production.</p>

<h2>Agent-Specific Testing</h2>
<p>Each agent has its own test suite that verifies: health endpoint, A2A protocol compliance, card schema validation, and core functionality.</p>

<h2>Rollback Strategy</h2>
<p>If an agent fails health checks after deployment, the system automatically rolls back to the last known good version within 2 minutes.</p>`,
  },
  'agent-forge': {
    title: 'Agent Forge: Creating New AI Agents in Minutes',
    date: '2026-02-01',
    excerpt: 'The OpenSIN Agent Forge skill that lets you scaffold, configure, and deploy a new agent in under 10 minutes.',
    tags: ['Developer Experience', 'Agents'],
    content: `<p>Creating a new AI agent used to take days. With the OpenSIN Agent Forge skill, it takes <strong>under 10 minutes</strong> from scaffold to production deployment.</p>

<h2>What Agent Forge Does</h2>
<ul class="list-disc pl-6 space-y-2 my-4">
  <li>Creates the agent repo with standardized structure</li>
  <li>Generates agent.json card with capability descriptions</li>
  <li>Sets up n8n webhook integration</li>
  <li>Configures Docker container for OCI deployment</li>
  <li>Registers the agent with its Team Manager</li>
  <li>Adds the agent to the fleet monitoring dashboard</li>
</ul>

<h2>Standardized Structure</h2>
<p>Every agent follows the same structure: <code>src/</code> for code, <code>agents/</code> for agent definitions, <code>n8n-workflows/</code> for automation, and <code>docs/</code> for documentation.</p>`,
  },
  'self-healing': {
    title: 'Self-Healing Fleet: How OpenSIN Recovers from Failures Automatically',
    date: '2026-01-28',
    excerpt: 'The self-healing architecture that keeps 100+ agents running 24/7 without human intervention.',
    tags: ['Architecture', 'Reliability'],
    content: `<p>When one of 100 agents crashes, a human shouldn't need to restart it manually. OpenSIN's self-healing architecture ensures <strong>automatic recovery from any failure mode</strong>.</p>

<h2>Failure Modes We Handle</h2>
<ul class="list-disc pl-6 space-y-2 my-4">
  <li><strong>Agent crash</strong> — Auto-restart from last checkpoint</li>
  <li><strong>Rate limiting</strong> — Switch to backup account or model</li>
  <li><strong>Network outage</strong> — Retry with exponential backoff</li>
  <li><strong>VM downtime</strong> — Reschedule on another available host</li>
  <li><strong>Token expiry</strong> — Auto-refresh via the Token Factory</li>
</ul>

<h2>The Recovery Loop</h2>
<p>Log error → Create GitHub Issue → Delegate to Team Security → Fix → Deploy → Verify → Close Issue. All automatic.</p>`,
  },
  'n8n-integration': {
    title: 'n8n Integration: The Router Behind the OpenSIN Fleet',
    date: '2026-01-25',
    excerpt: 'How we use n8n as the indestructible "dumb" router for all inbound work and webhook processing.',
    tags: ['n8n', 'Architecture'],
    content: `<p>n8n is the backbone of OpenSIN's inbound work processing. Running on our OCI VM, it acts as the <strong>indestructible "dumb" router</strong> that receives webhooks, normalizes payloads, and dispatches work to the right agents.</p>

<h2>Why n8n?</h2>
<p>n8n Community Edition is free, reliable, and has 400+ integrations. We use it as our intake layer because it handles webhooks, polling, and scheduled tasks out of the box.</p>

<h2>Inbound Pipeline</h2>
<ul class="list-disc pl-6 space-y-2 my-4">
  <li>Webhook received → normalize to work_item schema</li>
  <li>Create/update GitHub Issue</li>
  <li>Delegate to appropriate Team Manager via A2A</li>
  <li>Track progress and alert on completion</li>
</ul>

<h2>Community Edition + OSS</h2>
<p>We run n8n on Community Edition but replace Premium features with OSS alternatives: Python via custom Dockerfile, Variables via env config, Version Control via cron-git-exports.</p>`,
  },
  'supabase': {
    title: 'Supabase: The Central Database for the Agent Fleet',
    date: '2026-01-20',
    excerpt: 'How we use Supabase as the single source of truth for agent state, tokens, and fleet management.',
    tags: ['Database', 'Supabase'],
    content: `<p>Every agent needs persistent storage. OpenSIN uses <strong>Supabase</strong> (PostgreSQL) as the central database for agent state, token pools, task queues, and fleet management.</p>

<h2>Database Schema</h2>
<ul class="list-disc pl-6 space-y-2 my-4">
  <li><strong>agents</strong> — Agent registry with health status</li>
  <li><strong>tokens</strong> — API token pool with rotation status</li>
  <li><strong>tasks</strong> — Task queue with status tracking</li>
  <li><strong>teams</strong> — Team definitions and member agents</li>
  <li><strong>audit_log</strong> — Complete audit trail of all agent actions</li>
</ul>

<h2>Row-Level Security</h2>
<p>Each agent has its own database user with RLS policies ensuring it can only access its own tasks and tokens. Zero trust at the database level.</p>`,
  },
  'future-vision': {
    title: 'The Future of OpenSIN: Where We Are Going in 2026',
    date: '2026-01-15',
    excerpt: 'Our vision for the next 12 months: enterprise features, marketplace, and true AI autonomy.',
    tags: ['Vision', 'Roadmap'],
    content: `<p>OpenSIN has come far — 100+ agents, 18 teams, zero infrastructure cost. But we're just getting started. Here's our vision for 2026.</p>

<h2>Q2 2026: Enterprise Features</h2>
<p>RBAC, SSO, audit logging, SOC 2 compliance, and air-gap deployment. Making OpenSIN ready for Fortune 500.</p>

<h2>Q3 2026: Agent Marketplace</h2>
<p>A marketplace where you can browse, install, and subscribe to specialized agents. Think npm, but for AI agents.</p>

<h2>Q4 2026: True Autonomy</h2>
<p>Agents that can set their own goals, discover new tasks, and form ad-hoc teams. The beginning of genuine AI autonomy.</p>

<p>Follow our journey on <a href="https://github.com/OpenSIN-AI" class="text-accent">GitHub</a> or join our <a href="https://discord.gg/opensin" class="text-accent">Discord community</a>.</p>`,
  },
}

export default function BlogPost() {
  const { id } = useParams<{ id: string }>()
  const post = id ? posts[id] : null

  if (!post) {
    return (
      <div className="text-center py-12">
        <h1 className="text-2xl font-bold mb-4">Post not found</h1>
        <Link to="/" className="text-accent">← Back to posts</Link>
      </div>
    )
  }

  return (
    <article className="max-w-3xl mx-auto">
      <Link to="/" className="text-accent mb-6 inline-block">← Back to posts</Link>
      <time className="text-sm text-text-muted">{post.date}</time>
      <h1 className="text-3xl font-bold my-4">{post.title}</h1>
      <div className="flex flex-wrap gap-2 mb-8">
        {post.tags.map(tag => (
          <span key={tag} className="px-2 py-0.5 bg-accent/10 text-accent text-xs rounded-full">{tag}</span>
        ))}
      </div>
      <div
        className="prose prose-invert max-w-none"
        dangerouslySetInnerHTML={{ __html: post.content }}
      />
    </article>
  )
}
