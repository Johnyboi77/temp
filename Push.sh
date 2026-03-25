#!/bin/bash
# ─────────────────────────────────────────────
#  Push.sh — Bulletproof Git Push Script
#  Usage:
#    ./Push.sh                        → push to main
#    ./Push.sh dev                    → push to dev branch
# ─────────────────────────────────────────────

# ── CONFIG (only change these) ───────────────
REMOTE_URL="https://github.com/Johnyboi77/temp.git"
GIT_USER="Johnyboi77"
GIT_EMAIL="jonasfrey0177@gmail.com"

COMMIT_MSG="Test erfolgreich"  
# ─────────────────────────────────────────────

REPO_PATH="$(cd "$(dirname "$0")" && pwd)"
BRANCH="${1:-main}"

# Fallback to timestamp if COMMIT_MSG is empty
if [ -z "$COMMIT_MSG" ]; then
  COMMIT_MSG="$(date '+%Y-%m-%d %H:%M:%S') - Auto-commit from Push.sh"
fi

# ── Colors ────────────────────────────────────
GREEN='\033[0;32m'; YELLOW='\033[1;33m'; RED='\033[0;31m'; NC='\033[0m'
info()    { echo -e "${GREEN}[✔]${NC} $1"; }
warning() { echo -e "${YELLOW}[!]${NC} $1"; }
error()   { echo -e "${RED}[✘]${NC} $1"; exit 1; }

echo ""
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
echo "  Push.sh — Branch: $BRANCH"
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"

# ── 1. Navigate to repo ───────────────────────
cd "$REPO_PATH" || error "Could not enter directory: $REPO_PATH"
info "Working in: $REPO_PATH"

# ── 2. Init git if not a repo yet ─────────────
if [ ! -d ".git" ]; then
  warning "Not a git repo — running git init..."
  git init || error "git init failed"
  info "Git repo initialized"
fi

# ── 3. Set git user config if missing ─────────
if [ -z "$(git config user.name)" ]; then
  git config user.name "$GIT_USER"
  info "Set git user.name to $GIT_USER"
fi
if [ -z "$(git config user.email)" ]; then
  git config user.email "$GIT_EMAIL"
  info "Set git user.email to $GIT_EMAIL"
fi
info "Git user: $(git config user.name) <$(git config user.email)>"

# ── 4. Set remote if missing or wrong ─────────
CURRENT_REMOTE=$(git remote get-url origin 2>/dev/null)
if [ -z "$CURRENT_REMOTE" ]; then
  git remote add origin "$REMOTE_URL"
  info "Remote 'origin' added: $REMOTE_URL"
elif [ "$CURRENT_REMOTE" != "$REMOTE_URL" ]; then
  warning "Remote URL mismatch — updating..."
  git remote set-url origin "$REMOTE_URL"
  info "Remote updated to: $REMOTE_URL"
else
  info "Remote OK: $CURRENT_REMOTE"
fi

# ── 5. Ensure branch exists locally ───────────
git checkout "$BRANCH" 2>/dev/null || {
  warning "Branch '$BRANCH' not found — creating it..."
  git checkout -b "$BRANCH" || error "Could not create branch '$BRANCH'"
}
info "On branch: $BRANCH"

# ── 6. Stash, Pull, Unstash ───────────────────
if git ls-remote --exit-code origin "$BRANCH" &>/dev/null; then
  info "Stashing local changes before pull..."
  git stash -q

  info "Pulling latest from origin/$BRANCH..."
  git pull origin "$BRANCH" --rebase || {
    warning "Pull failed — there may be conflicts. Resolve them, then re-run."
    git stash pop -q
    exit 1
  }

  info "Restoring stashed changes..."
  git stash pop -q
else
  warning "No upstream branch yet — skipping pull (first push)"
fi

# ── 7. Stage & commit ─────────────────────────
info "Staging changes..."

while IFS= read -r line; do
  status="${line:0:2}"
  file="${line:3}"
  case "$status" in
    " M"|"M "|"MM") echo -e "${YELLOW}  modified:  $file${NC}" ;;
    " D"|"D ")      echo -e "${RED}  deleted:   $file${NC}" ;;
    "??")           echo -e "${GREEN}  new file:  $file${NC}" ;;
    "A ")           echo -e "${GREEN}  added:     $file${NC}" ;;
    "R ")           echo -e "${YELLOW}  renamed:   $file${NC}" ;;
    *)              echo -e "  $line" ;;
  esac
done < <(git status --porcelain)

git add -A

if git diff --cached --quiet; then
  warning "Nothing to commit — working tree clean"
else
  git commit -m "$COMMIT_MSG" || error "Commit failed"
  info "Committed: $COMMIT_MSG"
fi

# ── 8. Push ───────────────────────────────────
info "Pushing to origin/$BRANCH..."
git push origin "$BRANCH" || error "Push failed. Check your credentials or remote URL."

echo ""
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
echo -e "  ${YELLOW}Message:${NC} $COMMIT_MSG"
info "All done! Pushed to origin/$BRANCH"
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
echo ""