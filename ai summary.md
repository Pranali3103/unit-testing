# AI Summary: Unit Testing in Node.js

A concise summary of concepts and implementation from this learning repo.

---

## 1. Why Unit Testing?

- **Manual testing** gets slower as features grow; every release needs full regression.
- **Automated tests** run via one command; pipelines (CI) can run tests before deploy and block release if tests fail.
- **Unit testing** = developers own quality; tests are code that run with the codebase.

---

## 2. What Is Unit Testing?

- Testing **one small unit** (function/module) in **isolation**.
- No real DB, APIs, or side effects — use mocks/stubs so only that unit is tested.
- Fast, repeatable, catches bugs early and makes refactoring safe.
- Tools: **Jest**, **Mocha**, or Node’s built-in **`node:test`**.

---

## 3. Types of Testing (and Ratio)

| Type            | What it does                    | Speed   | Suggested share |
|-----------------|----------------------------------|---------|------------------|
| **Unit**        | One function/module in isolation| Fast    | ~70%             |
| **Integration** | Multiple units together         | Slower  | ~20–30%          |
| **End-to-end**  | Full flow, real browser/API      | Slowest | ~10%             |

More E2E = more resources; balance with unit and integration.

---

## 4. AAA Pattern

- **Arrange** — Set up inputs, expected values, mocks.
- **Act** — Call the function under test.
- **Assert** — Check result (e.g. with `assert` or `expect`).

Node: `assert` from `node:assert`; Jest: `expect()`.

---

## 5. Suites / Grouping

- **Suite** (e.g. `describe` / `suite`) = group related tests.
- Clearer output and structure (e.g. “Greetings”, “OrderFeature”).
- `it` is an alias for `test`.

---

## 6. Mocking

- **Why:** A function may call another that has side effects (API, DB). For **isolation** we don’t run the real dependency.
- **Mock** = fake implementation that:
  - Returns controlled data (no real API/DB).
  - Can be **spied on**: how many times it was called, with which arguments.
- **Stub** = dumb fake that only returns fixed data; no call-count or argument checks.
- **Difference:** Mock = “was it called, how many times, with what?”; Stub = “when called, return this.”

---

## 7. Dependency Injection (DI)

- **Problem:** If `procesOrder` calls `processPayment` directly, we can’t replace it with a mock → no isolation.
- **Solution:** Pass the dependency **in** (inject it) instead of using it from inside.
  - Example: `procesOrder(data, { processPayment })` — caller passes real or mock `processPayment`.
- **Production:** pass real `processPayment`; **test:** pass a mock. Same function, different dependency.
- Enables unit testing without real APIs/side effects.

---

## 8. Node `node:test` Mock API

- `mock.fn(implementation)` — create a mock function.
- `mockedFn.mock.callCount()` — number of calls.
- `mockedFn.mock.calls[i]` — i-th call record: **object** with `arguments`, `error`, `result`.
  - To assert “called with 100”: use **`call.arguments`**, not `call` (e.g. `assert.deepStrictEqual(call.arguments, [100])`).

---

## 9. Assertions

- **Primitives:** `assert.strictEqual(actual, expected)`.
- **Objects:** `assert.deepStrictEqual(actual, expected)` so every field is compared.

---

## 10. Snapshot Testing

- Used when **output is large or complex** and writing many asserts is tedious.
- First run saves the result to a **snapshot file** (e.g. `*.test.js.snapshot`).
- Later runs **compare** current result to the snapshot; test fails if output changed.
- **Node:** `node --test` runs tests; `node --test --test-update-snapshots` creates/updates snapshots.
- Snapshots are committed so the team sees when output changes.

---

## 11. Git (This Repo)

- **Local config only:** `git config user.name "..."` and `git config user.email "..."` (no `--global`) so only this repo uses this identity.
- **New repo:** `git init` → create repo on GitHub (e.g. Add .gitignore: Node) → `git add .` → `git commit` → `git remote add origin <url>` → `git push -u origin main`.
- **Push rejected (unrelated histories):** Remote had its own first commit (e.g. .gitignore). Fix: `git pull origin main --allow-unrelated-histories` then `git push -u origin main`.

---

## 12. Implementation in This Repo

| File / area        | Purpose |
|--------------------|--------|
| **app.js**         | `fetchData(userId)` for snapshot demo; order/processOrder code commented out. |
| **test/user.test.js** | Snapshot test: calls `fetchData(123)`, compares to snapshot via `t.assert.snapshot(result)`. |
| **test/user.test.js.snapshot** | Stored snapshot of `fetchData(123)` output (id, name, email). |
| **test/order.test.js** | (Commented) Order test with mock `processPayment`, dependency injection, and assertions on `callCount()` and `call.arguments`. |
| **test/app.test.js**   | (Commented) Simple greet / greetInGujarati tests and suite example. |
| **package.json**   | `jest` in devDependencies; test script can be set to `jest` or `node --test` depending on which tests you run. |

---

## 13. TDD (Test-Driven Development)

- Write tests **first**, then write code to make them pass.
- Helps design and keeps coverage high.

---

## 14. Quick Reference

- **Run Node tests:** `node --test` (or `node --test test/*.js`).
- **Update snapshots:** `node --test --test-update-snapshots`.
- **Run Jest:** `npm test` (if script is `"test": "jest"`).
- **Isolation** = unit test + **mocking** + **dependency injection**.
