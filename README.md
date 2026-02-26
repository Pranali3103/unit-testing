# Unit Testing in Node.js

This repo is for learning unit testing in Node.js.

**What is unit testing?** Testing small, isolated pieces of code (one function or module) in a controlled way, usually with a test runner (e.g. Jest, Mocha). You often use mocks/stubs so only that unit is tested. It catches bugs early and lets you refactor with confidence.

---

## Git setup (this repo only)

I use my personal GitHub account here, but I don't want to change my global Git username and email (which are set for work). So I use **local** config so it applies only to this repo:

```bash
git config user.name "YourGitHubUsername"
git config user.email "your-personal-email@example.com"
```

These settings stay for this repo only; your global (company) setup is unchanged.

**Where to find GitHub username:** Your profile URL is `https://github.com/YourUsername` — the part after `github.com/` is your username.

---

## Push this folder to a new GitHub repo

### 1. Initialize Git (if not done)

```bash
git init
```

### 2. Create the repo on GitHub

- Go to **https://github.com/new**
- Sign in with your personal account
- **Repository name:** e.g. `unit-testing`
- **Public**
- **Add .gitignore:** select **Node** (so Git ignores `node_modules/`, logs, `.env`, etc.)
- Do **not** check "Add a README" if you already have one locally
- Click **Create repository**

### 3. Add, commit, and push from your PC

```bash
git add .
git commit -m "Initial commit: unit testing learning repo"
git branch -M main
git remote add origin https://github.com/YourUsername/your-repo-name.git
git push -u origin main
```

Use the exact repo URL from GitHub (replace `YourUsername` and `your-repo-name`).

---

## If push says: "Can't push refs to remote. Try running 'Pull' first"

**Why it happens:** The remote has commits your local repo doesn't have (e.g. GitHub added a commit when you chose "Add .gitignore: Node"). Your local repo has its own first commit (e.g. your README). So you have **two different starting points** — no common ancestor. Git calls this **unrelated histories** and refuses to push until you integrate them.

**Fix:** Pull first (and allow unrelated histories), then push:

```bash
git pull origin main --allow-unrelated-histories
```

Resolve any merge conflicts if Git reports them, then:

```bash
git push -u origin main
```

### What `git pull origin main --allow-unrelated-histories` does

- **`git pull origin main`** — Fetch the latest commits from the remote's `main` branch and merge them into your current branch.
- **`--allow-unrelated-histories`** — Normally Git only merges when both sides share a common ancestor. Here, the remote's first commit (e.g. add `.gitignore`) and your first commit (e.g. add README) don't share a parent. This flag tells Git: "Merge anyway." Git creates a merge commit that combines both histories. After that, your local `main` has everything from both sides.

### Why Git has a "problem" with different starting points

Git wants **one shared history**. If it allowed a normal push when histories are unrelated, it would have to **replace** the remote's history with yours (or the other way around), so one set of commits would be lost. Git refuses to do that by default. So you have to **merge** (pull with `--allow-unrelated-histories`) to join both starting points into one history; then no commits are dropped and you can push safely.
