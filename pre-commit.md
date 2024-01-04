# Table of Contents

- [Table of Contents](#table-of-contents)
  - [Pre-Commit Hooks](#pre-commit-hooks)
    - [Installing Pre-Commit](#installing-pre-commit)
    - [Creating Custom Git Hooks](#creating-custom-git-hooks)

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
