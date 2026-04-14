# Agent Instructions for OpenSIN Blog

This repository is the OpenSIN blog website. All design and frontend work must adhere to the **Shopify-inspired design system** defined in the `awesome-opensin-design` skill.

## Mandatory Skill

**ALL agents working on this repository MUST load the `awesome-opensin-design` skill**. This skill provides:

- Shopify design tokens (colors, typography, spacing)
- Component patterns and best practices
- Color palette: black (`#0a0a0a`), white (`#ffffff`), green accent (`#008060`), neon glow (`#00ff9e`)
- Dark mode foundation with semantic color variables
- Typography scale and spacing system

### How to activate

Prepend your work with:

```
load_skills(["awesome-opensin-design"])
```

Or ensure the global config includes this skill for this repository.

## Scope

- Any visual design changes
- CSS/Tailwind class modifications
- Component creation or updates
- Layout adjustments
- Color or typography changes

## References

- Skill documentation: `~/.config/opencode/skills/awesome-opensin-design/SKILL.md`
- Design reference: `vendor/awesome-design-md/design-md/spotify/`

Non-compliance is a protocol violation.
