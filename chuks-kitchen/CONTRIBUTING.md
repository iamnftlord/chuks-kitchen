# Contributing to Chuks Kitchen 🤝

Thank you for your interest in contributing! We follow a set of standards to ensure high-quality code and a consistent user experience.

## 🛠️ Development Standards

### ⚛️ React Guidelines

- Use **Functional Components** with Hooks.
- Prefer **React 19** features and patterns.
- Keep components focused; extract complex logic into hooks or utility functions.

### 🎨 Styling (Tailwind CSS)

- Follow the **Mobile-First** approach.
- Use established color tokens from the design system.
- Avoid "magic numbers" in spacing; use Tailwind's `p-*` and `m-*` scales.

### 📝 Logic & State

- Use the **Context API** for global state only.
- Local state (`useState`) is preferred for component-specific UI logic.
- Ensure all business logic (price calculations, etc.) is unit-testable.

## 🌿 Git Workflow

1. **Branching**: Use descriptive branch names.
   - `feature/feature-name`
   - `fix/issue-name`
   - `docs/doc-update`
2. **Commits**: Follow [Conventional Commits](https://www.conventionalcommits.org/en/v1.0.0/).
   - `feat: add new search filter to explore page`
   - `fix: resolve responsive issues on navbar`
   - `docs: update component documentation`

## 🚀 Pull Request Process

1. Ensure the code builds locally (`npm run build`).
2. Run linting (`npm run lint`).
3. Provide a clear description of changes and test results in the PR.
4. Include screenshots or videos for UI-related changes.

---

Happy Coding! 🍹
