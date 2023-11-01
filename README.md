# My Daily Dev Toolkit

Hello there! 👋 This README is all about the tools, shortcuts, and snippets that make my life easier as a developer. Feel free to explore and maybe you'll find something useful!

## Table of Contents

- [My Daily Dev Toolkit 🛠️](#my-daily-dev-toolkit)
  - [Table of Contents 📚](#table-of-contents)
  - [Command Line Tools 🖥️](#command-line-tools)
  - [Keyboard Shortcuts ⌨️](#keyboard-shortcuts)
  - [Prompt Templates 📝](#prompt-templates)
  - [Reusable Code Snippets 💾](#reusable-code-snippets)
  - [Git Commands 📖](#git-commands)
  - [Pre-Commit Hooks 🎣](#pre-commit-hooks)
    - [Installing Pre-Commit 🛠️](#installing-pre-commit)
    - [Creating Custom Git Hooks](#creating-custom-git-hooks)

---

## Command Line Tools

- **curl**: For transferring data
- **jq**: For JSON parsing
- **htop**: For monitoring system resources

## Keyboard Shortcuts

- **Ctrl + C**: Copy
- **Ctrl + V**: Paste
- **Ctrl + Z**: Undo
- **Alt + Tab**: Switch between open applications

## Prompt Templates

- **Git Commit Message**: `[JIRA-ID] - Brief description`
- **Pull Request**: `Feature: Brief description`

## Reusable Code Snippets

## Git Commands

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

## Pre-Commit Hooks

### Installing Pre-Commit

1. **Install pre-commit**: You can install `pre-commit` using pip. Run the following command in your terminal:

    ```bash
    pip install pre-commit
    ```

2. **Set up pre-commit for your project**: Navigate to the root directory of your Git project in the terminal. If you don't have a `.pre-commit-config.yaml` file, create one with the following content:

    ```yaml
    repos:
    - repo: <https://github.com/pre-commit/pre-commit-hooks>
        rev: v4.3.0
        hooks:
      - id: end-of-file-fixer
      - id: trailing-whitespace
      - id: check-json
    - repo: <https://github.com/psf/black>
        rev: 22.10.0
        hooks:
      - id: black
            args: ["."]
    - repo: <https://github.com/PyCQA/isort>
        rev: 5.12.0
        hooks:
      - id: isort
            args: [--profile, black, "."]
    ```

3. **Install the Git Hook Scripts**: Still in the root directory of your Git project, run the following command:

    ```bash
    pre-commit install
    ```

    This will install the pre-commit script in your `.git/` directory.

4. **Test pre-commit**: Make a change to a file in your repository and attempt to commit it. `pre-commit` should run and check your files.

Remember, `pre-commit` will only run on the staged files each time you commit. If you want to run it on all files in your repository, you can use `pre-commit run --all-files`.

### Creating Custom Git Hooks

1. **Navigate to the hooks directory**: Git hooks are stored in the `.git/hooks` directory of your Git repository. Navigate to this directory using the terminal:

    ```bash
    cd path_to_your_repo/.git/hooks
    ```

2. **Create a new file for your hook**: Git hooks are named as `pre-{action}` or `post-{action}`. For example, a `pre-commit` hook will run before each commit. Create a new file with the name of the hook you want to create. For example:

    ```bash
    touch pre-commit
    ```

3. **Open the file in a text editor**: Open the newly created file in your preferred text editor. For example, if you're using Visual Studio Code, you can use:

    ```bash
    code pre-commit
    ```

4. **Write your script**: Write the script you want to run when the hook is triggered. This can be in any scripting language, but it's commonly done in Bash or Python. For example, a simple Bash script that prints a message before each commit could look like this:

    ```bash
    #!/bin/sh
    echo "Preparing to commit changes..."
    ```

    The `#!/bin/sh` at the top of the script tells the system that this script should be run with `sh`, the Bourne shell.

5. **Make the script executable**: For the script to be run, it needs to be executable. You can make it executable with the following command:

    ```bash
    chmod +x pre-commit
    ```

6. **Test your hook**: Make a commit to test your new hook. You should see the message "Preparing to commit changes..." before the commit is made.

Remember, the script you write should be relevant to the hook you're creating. For example, a `pre-push` hook might run tests, while a `post-commit` hook might send a notification of some kind.
