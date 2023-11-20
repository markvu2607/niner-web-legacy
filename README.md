## Niner

Niner is a social network platform for book reader.

## Technology

- [Nextjs](https://nextjs.org/)
- [Typescript](https://www.typescriptlang.org/)
- [shadcn/ui](https://ui.shadcn.com/)
- [Zustand](https://docs.pmnd.rs/zustand/getting-started/introduction)
- [React Spring](https://www.react-spring.dev/)
- [React Hook Form](https://react-hook-form.com/)

## System Requirement

- [Bun](https://bun.sh/) (>= v1.0.12)

## Getting Started

```bash
bun install && bun dev
```

## Contributing

- Go to Github Project to create task and reference to an issue.

- Issue name template: `<issue_type>: <name_of_issue>`:

  - `<issue_type>`: feat, docs, fix, refactor, chore, revert,...
  - Example: `feat: do somethings`

- Branch name template: `<issue_type>/<issue_id>-<name_of_issue>`:

  - `<issue_type>`: feat, docs, fix, refactor, chore, revert,...
  - Example: `feat/123-do-somethings`.

- Commit template: `<issue_type>: <name_of_issue>`:

  - Example: `feat: do somethings`.

- Pull request template:

  - Title: `<issue_type>: <name_of_issue>`. Example: `feat: do somethings`.
  - Description: Describe detail pr (if pr is so simple, do not need it), reference to issue_id.
  - Example for description:
    - `- Do somethings`
    - `- Fixes: #123`
  - Add more information in right side.

- Merging:

  - Only allow `Squash and Merge` option.
  - Add `<issue_type>` before default title. Example: `feat: do somethings (#123)`.
