import { defineConfig } from 'vitepress'

export default defineConfig({
  title: 'OpenSIN-AI Blog',
  description: 'Engineering insights from the OpenSIN-AI organization and agent platform.',
  lang: 'en-US',
  outDir: '../dist',
  markdown: {
    theme: 'dark',
  },
  themeConfig: {
    nav: [
      { text: 'Home', link: '/' },
      { text: 'OpenSIN-AI', link: 'https://opensin.ai' },
      { text: 'MyOpenSIN', link: 'https://my.opensin.ai' },
      { text: 'Docs', link: 'https://docs.opensin.ai' },
    ],
    sidebar: [
      {
        text: 'Posts',
        items: [
          { text: 'Fleet Architecture', link: '/post/fleet-architecture' },
          { text: 'A2A Protocol', link: '/post/a2a-protocol' },
          { text: 'Security Architecture', link: '/post/security-architecture' },
          { text: 'OCI Deployment', link: '/post/oci-deployment' },
          { text: 'Cost Optimization', link: '/post/cost-optimization' },
          { text: 'Team Orchestration', link: '/post/team-orchestration' },
          { text: 'Monitoring', link: '/post/monitoring' },
          { text: 'vs Competitors', link: '/post/vs-competitors' },
          { text: 'Model Routing', link: '/post/model-routing' },
          { text: 'Apple Ecosystem', link: '/post/apple-ecosystem' },
          { text: 'CI/CD', link: '/post/ci-cd' },
          { text: 'Agent Forge', link: '/post/agent-forge' },
          { text: 'Self-Healing', link: '/post/self-healing' },
          { text: 'n8n Integration', link: '/post/n8n-integration' },
          { text: 'Supabase', link: '/post/supabase' },
          { text: 'Future Vision', link: '/post/future-vision' },
        ],
      },
    ],
    socialLinks: [
      { icon: 'github', link: 'https://github.com/OpenSIN-AI' },
    ],
    editLink: {
      pattern: 'https://github.com/OpenSIN-AI/website-blog.opensin.ai/edit/main/:path',
    },
    footer: {
      message: '© 2026 OpenSIN-AI. Explore the ecosystem: [OpenSIN](https://opensin.ai) · [MyOpenSIN](https://my.opensin.ai) · [Docs](https://docs.opensin.ai) · [GitHub](https://github.com/OpenSIN-AI).',
    },
  },
})
