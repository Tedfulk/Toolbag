# Git Commands

| Category                    | Command                                            | Description                                                                                                     |
| --------------------------- | -------------------------------------------------- | --------------------------------------------------------------------------------------------------------------- |
| **Staging Changes**         |                                                    |                                                                                                                 |
|                             | `git add <file>`                                   | Stage specific files.                                                                                           |
|                             | `git add .`                                        | Stage all new and modified files.                                                                               |
|                             | `git add -u`                                       | Stage changes only in tracked files.                                                                            |
|                             | `git add -A`                                       | Stage all changes.                                                                                              |
|                             | `git add -p`                                       | Interactively stage parts of files.                                                                             |
| **Committing Changes**      |                                                    |                                                                                                                 |
|                             | `git commit -m "<message>"`                        | Commit staged changes with a message.                                                                           |
|                             | `git commit -a -m "<message>"`                     | Stage and commit modified and deleted files.                                                                    |
|                             | `git commit --amend`                               | Modify the last commit.                                                                                         |
|                             | `git commit --amend --no-edit`                     | Reuse previous commit message.                                                                                  |
| **Viewing Changes**         |                                                    |                                                                                                                 |
|                             | `git status`                                       | Show working tree status.                                                                                       |
|                             | `git diff`                                         | Show changes between working tree and index.                                                                    |
|                             | `git diff --staged`                                | Show differences between index and latest commit.                                                               |
|                             | `git log`                                          | Show commit logs.                                                                                               |
|                             | `git log --oneline`                                | Show logs in a shorter format.                                                                                  |
| **Undoing Changes**         |                                                    |                                                                                                                 |
|                             | `git reset <file>`                                 | Unstage specific files but keep the changes.                                                                    |
|                             | `git reset`                                        | Unstage all changes.                                                                                            |
|                             | `git reset --soft HEAD~1`                          | Undo last commit but keep changes staged.                                                                       |
|                             | `git reset --hard HEAD~1`                          | Undo last commit and discard changes.                                                                           |
|                             | `git revert <commit>`                              | Create a new commit that undoes a previous one.                                                                 |
| **Branching and Merging**   |                                                    |                                                                                                                 |
|                             | `git branch`                                       | List local branches.                                                                                            |
|                             | `git branch <name>`                                | Create a new branch.                                                                                            |
|                             | `git checkout <branch>`                            | Switch to a specific branch.                                                                                    |
|                             | `git checkout -b <new-branch>`                     | Create and switch to a new branch.                                                                              |
|                             | `git merge <branch>`                               | Merge another branch.                                                                                           |
|                             | `git rebase <base>`                                | Reapply commits on top of another base.                                                                         |
| **Remote Operations**       |                                                    |                                                                                                                 |
|                             | `git clone <repo>`                                 | Clone a remote repository.                                                                                      |
|                             | `git fetch <remote>`                               | Download changes from remote.                                                                                   |
|                             | `git pull <remote> <branch>`                       | Fetch and merge changes from remote.                                                                            |
|                             | `git push <remote> <branch>`                       | Upload local changes to remote.                                                                                 |
|                             | `git remote add <name> <url>`                      | Add a remote repository.                                                                                        |
| **Cleanup and Maintenance** |                                                    |                                                                                                                 |
|                             | `git clean -f`                                     | Remove untracked files.                                                                                         |
|                             | `git clean -fd`                                    | Remove untracked directories.                                                                                   |
|                             | `git clean -n`                                     | Dry run to show deletions.                                                                                      |
|                             | `git gc`                                           | Cleanup and compress.                                                                                           |
| **Configure Toolinge**      |                                                    |                                                                                                                 |
|                             | `git config --global user.name "[name]"`           | Sets the name you want attached to your commit transactions.                                                    |
|                             | `git config --global user.email "[email address]"` | Sets the email you want attached to your commit transactions.                                                   |
|                             | `git config --global color.ui auto`                | Enables helpful colorization of command line output.                                                            |
| **Create Repositories**     |                                                    |                                                                                                                 |
|                             | `git init`                                         | Turns an existing directory into a new Git repository.                                                          |
|                             | `git remote add origin [url]`                      | Specifies the remote repository for your local repository. The URL points to a repository on GitHub.            |
|                             | `git clone [url]`                                  | Clone (download) a repository that already exists on GitHub, including all of the files, branches, and commits. |
