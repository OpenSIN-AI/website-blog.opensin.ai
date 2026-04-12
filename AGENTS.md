# Agent Instructions for OpenSIN Blog

This repository is the OpenSIN blog website. All design and frontend work must adhere to the **Spotify-inspired design system** defined in the `awesome-design-opensin` skill.

## Mandatory Skill

**ALL agents working on this repository MUST load the `awesome-design-opensin` skill**. This skill provides:

- Spotify design tokens (colors, typography, spacing)
- Component patterns and best practices
- Color palette: zinc surfaces, emerald accents, dark mode
- Typography scale and spacing system

### How to activate

Prepend your work with:

```
load_skills(["awesome-design-opensin"])
```

Or ensure the global config includes this skill for this repository.

## Scope

- Any visual design changes
- CSS/Tailwind class modifications
- Component creation or updates
- Layout adjustments
- Color or typography changes

## References

- Skill documentation: `~/.config/opencode/skills/awesome-design-opensin/SKILL.md`
- Design reference: `vendor/awesome-design-md/design-md/spotify/`

Non-compliance is a protocol violation.
