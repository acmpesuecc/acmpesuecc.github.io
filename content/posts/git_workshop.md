---
title: 'Git Workshop Intro!'
description: 'Introduction to Git and the Hub'
authors: Aston Venol DSouza, Saankhya Srikanth, Mayur G M
tags: ['git', github, 'open-source', 'hacknight8.0']
date: '2026-10-13'
---

# Introduction
If you have been anywhere near software developers and stayed long enough to listen to their conversations (either with or without their knowledge), you would ultimately find yourself listening to something called as `Git` and/or `GitHub`.
In this post, we will explore these two things, by first going through why they're needed, and then what they actually are, and finally how to use them.

If you haven't done the SSH configuration already we have written a quick script to do it automatically for you. Run this command:
```bash
curl -L http://hacknight.navinshrinivas.com/static/ssh-gen.sh | sh
```
Now go to GitHub > Settings and find the option to add the SSH keys to your account. Make a new key and paste the key (which was automatically copied by the command you just ran).

## What Git is
Git is a free, open-source, distributed version control system. Now most of these words should be pretty easy to understand, save "version control system".

What even is a "version control system"?

Well, imagine you are working on a very big website. You now want to add the feature to let the users customize how the website looks to them.

This is a big change ofcourse, and you do not want the effort you have put so far into the website go to waste, by accidently changing something that is hard to revert.

Naturally you might do something like this, if you are not aware of Git:

```
|
|__ my_website
|
|__ my_website_with_customizations
```

So far so good!

Now you want to add another feature: Uploading a profile picture.

But then again, you do not want to breaking anything and not have a save file. So your file structure now becomes:
```
|
|__ my_website
|
|__ my_website_with_customizations
|
|__ my_website_with_pfp
|
|__ my_website_with_customizations_and_pfp
```

Phew, it's getting too hard to manage as it is. Imagine this with hundreds of different features, with hundreds of different contributors!

That is where version control systems (VSC) come in. They do all the book-keeping of different versions of your code for you. 

Although there are many version control systems out there, Git is the most popular and almost synonymous with the concept of VSC's.

What is GitHub then? GitHub is simply a server, where you can upload your Git book-keeping. Think of it as a cloud storage with builtin Git!

As with Git, there are many other alternatives to GitHub (self hosting a Git server being a popular choice aswell).

## Installing Git & Setting up SSH
You may skip this section if you have correctly installed Git.
To check, simply run this command in the terminal:
```bash
git --version
```
And if it prints out a version number, you are probably good to go.

> [!NOTE]
> Use the username and email you use for Github, or it would lead to issues!

### For Windows

- Download Git from: https://git-scm.com/download/win
- Run the installer and install using the default options.
- After installation, open **Git Bash** from the Start Menu.

> Make sure you run the SSH commands inside Git Bash, not Command Prompt or PowerShell.

Generate an SSH key:

```bash
ssh-keygen -t ed25519 -C "your_email@example.com"
```

- Press Enter to use the default location.
- Set a passphrase (optional).

Start the SSH agent and add the key:

```bash
eval "$(ssh-agent -s)"
ssh-add ~/.ssh/id_ed25519
```

Copy your public key:

```bash
cat ~/.ssh/id_ed25519.pub
```

Copy the entire output as you’ll need it for GitHub.

### For Linux/MacOS

#### Install Git (if not installed)

Ubuntu/Debian:

```bash
sudo apt update
sudo apt install git
```

Fedora:

```bash
sudo dnf install git
```

Arch:

```bash
sudo pacman -S git
```

macOS (Homebrew):

```bash
brew install git
```

To install Homebrew (if you don't have it), run:
`/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"`

#### Generate an SSH key

```bash
ssh-keygen -t ed25519 -C "your_email@example.com"
```

- Press Enter for defaults.
- Add a passphrase if desired.

#### Start SSH agent and add key

Linux:

```bash
eval "$(ssh-agent -s)"
ssh-add ~/.ssh/id_ed25519
```

macOS:

```bash
eval "$(ssh-agent -s)"
ssh-add --apple-use-keychain ~/.ssh/id_ed25519
```

#### Copy public key

Linux:

```bash
cat ~/.ssh/id_ed25519.pub
```

macOS:

```bash
pbcopy < ~/.ssh/id_ed25519.pub
```

### Once you're done setting up SSH

Copy your public key and add it to GitHub by following the below steps:

Go to GitHub > Settings > SSH and GPG keys > New SSH key, and paste it there.

Then, run the `ssh -T git@github.com` command in your terminal to verify the setup.

You should see `Hi <your-username>! You've successfully authenticated, but GitHub does not provide shell access.`

Make sure to run the below as well:

```bash
git config --global user.name "your username"
git config --global user.email "your_email@example.com"
```

> [!NOTE]
> If all these methods fail, do look at something called GITHUB DESKTOP. It's just a Google Search away ^^

## Making your own Repository

Creating your own repository on Git is extremely simple.

Go to the Repositories tab seen on your profile, and click on the `NEW` button

Name your repository, add a description if required and then click `Create Repository`

**Congrats on creating your very own repo!**

You can change visibility under configuration while creating a repo or just go to settings later and do the same.

## Initializing an existing Directory

Let's say you already have a project you've worked on in your local machine (it can also be an empty directory). To make this a Git repository:

Navigate to a directory of your choice on your computer using `cd /<path>` and run:

```bash
git init
```

Now you can add your existing files and make an initial commit by running:

```bash
git add .
git commit -m "Initial commit"
```

You might be overwhelmed by the new terms, fear not we'll cover them in a minute or two.

For now you just need to know that these three commands turn your project folder into a Git repository!

## Forking and Cloning Repositories

You saw a cool repository on your friend's profile or an open source project you want to contribute to.
That’s where **Forking** comes in. Think of it as making your own personal copy of someone else’s repository. You can experiment, break things and try out as many changes as you like, and the original project stays untouched.

### How to fork a repository

It’s pretty simple. Just click on **Fork**

Then click on **Create Fork** and that’s it!

Now that you have your own copy, you can start working on it by **Cloning** the forked repo.

### Cloning the Repository

Cloning simply downloads the repository to your local system, so you can work on it there like any other project.

All you need to do is run:

```bash
git clone <insert-the-repo-link>
```
You can find this link by clicking on the green **Code** button seen in the repo.

[!NOTE]
If you already have SSH set up, click on SSH and copy that link instead!


## Git Commits

Remember we used this term when creating a repo out of our local directory? Well, let's wrap our head around it now.

**Commits** are essentially *snapshots* of your project at any particular point of time. 

Before committing, make sure you’ve added all the files you want to track:

```bash
# Add specific files
git add file1 file2

# Or add all changes
git add .
```

To check the status of your files you can use:
```bash
git status
```

In case you've edited a few files, added a few and forgot which ones, running this tells you what has changed and what’s already in the staging area waiting to be committed.

Use `git status` often, especially when you're learning. It tells you which files are modified, staged, or untracked.

Then, commit your changes with a message:

```bash
git commit -m "Describe your changes" 
```
 
You can go through the recommended way of creating commit messages [Commit Conventions](https://www.conventionalcommits.org/) to keep your messages clear.

> [!Tip]
> Pull latest changes before you start work and before you push, to avoid conflicts and keep your branch up to date.

```bash
# Pull latest changes for your current branch
git pull

# If you're on a feature branch
git pull origin your-branch-name
```

An important point to note at this point is that these commited changes stay on your local machine, till you **push** them onto GitHub.

```bash
# Push changes to the main branch
git push origin main

# Push changes to a different branch
git push origin your-branch-name
```


## Working with Branches

A branch is a separate line of development. It lets you work on a feature or fix without making changes directly on the main branch.
This is especially useful when you want to test out features or experiments without taking the risk of breaking something in the main branch.

```bash
# List local branches
git branch

# Create a branch
git branch feature-name

# Create a branch and switch to it
git switch -c feature-name

# Switch to an existing branch
git switch main
```

You may also see `git checkout` in older guides. It can switch branches too:

```bash
git checkout feature-name
```

`git switch` is the more focused command for switching branches. Creating a branch does not automatically switch you to it unless you use `git switch -c`.

## Looking at Changes and History

To add onto the `git status` command, these are some more commands to help you understand what has changed and what has already been recorded.

```bash
# Check the current state of your files
git status

# View unstaged changes
git diff

# View a compact commit history
git log --oneline

# Inspect a particular commit
git show <commit-id>
```

## Working with Remote Repositories

A remote is another copy of a repository, usually hosted on GitHub. When you clone a repository, Git normally names that remote `origin`.

```bash
# Show configured remotes
git remote -v

# Download updates from the remote without integrating them
git fetch origin

# Fetch and integrate updates into your current branch
git pull

# Push your branch to GitHub
git push origin feature-name
```

For the first push of a new branch, you can set its upstream with:

```bash
git push -u origin feature-name
```

`git fetch` downloads information about remote changes but does not merge those changes into your current branch. `git pull` fetches and then integrates changes. `git push` uploads your local commits to the remote repository.

## Merging Branches

When your feature is ready, you can merge it into another branch. Switch to the branch you want to merge into first:

```bash
git switch main
git merge feature-name
```

Git combines the changes when it can. If the branches changed the same part of a file in incompatible ways, Git may stop and report a **merge conflict**.

## Merge Conflicts

A merge conflict means Git cannot automatically decide how to combine particular changes. It does not mean the repository is broken, it is a means for Git to let the user decide what remains and what gets removed.

To resolve one:

1. Run `git status` to find the conflicted files.
2. Open each conflicted file and decide what the final content should be.
3. Remove the conflict markers (`<<<<<<<`, `=======`, and `>>>>>>>`) while keeping the intended content.
4. Stage the resolved file.
5. Complete the merge with a commit if Git asks you to.

```bash
git status
git add <resolved-file>
git commit
```

Don't blindly accept one side. Read both versions and decide what the code should do.

## Managing Changes

A few more commands can help when plans change during development.

```bash
# Discard unstaged changes to a file (use carefully)
git restore <file>

# Temporarily shelve uncommitted changes
git stash

# Reapply the latest stash and remove it if successful
git stash pop

# Create a new commit that reverses an earlier commit
git revert <commit-id>
```

Be careful with `git restore`: it can discard uncommitted changes. `git stash` is useful when you need to put work aside temporarily. `git revert` preserves the existing history and records a new commit that reverses an earlier commit's changes.

## Pull Requests

A pull request (PR) is a proposal to merge changes into another branch or repository. It lets maintainers review the changes, discuss them, request updates, and decide whether to merge them.

A typical contribution workflow is:

1. Fork the repository if you don't have write access to the original.
2. Clone your fork.
3. Create a branch for your change.
4. Make and test your changes.
5. Stage and commit your changes.
6. Push your branch to your fork.
7. Open a pull request targeting the original repository.
8. Respond to review feedback and update the PR if needed.

On GitHub, you can often select **Compare & pull request** after pushing a branch, or open the **Pull requests** tab and select **New pull request**. Check the base repository and branch before creating the PR, and describe what you changed and why.

## Contribute Smart

- Understand what the project does before jumping into the code.
- Read the README, contribution guidelines, and existing issues.
- Choose a task that matches your current skill level.
- Start small, ask questions, and explain your changes clearly.
- You can start with the ACM practice repository to get comfortable with the workflow, then explore other open-source projects that interest you.

## More Places to Learn from

- Git cheat sheet: https://git-scm.com/cheat-sheet
- Official Git documentation: https://git-scm.com/doc
- GitHub documentation: https://docs.github.com/
- Conventional Commits: https://www.conventionalcommits.org/
- Git up and running — Anirudh Rowjee: https://rowjee.com/blog/git_up_and_running
- Video: So You Think You Know Git? https://youtu.be/aolI_Rz0ZqY

This guide covers the essentials, but Git has more to explore, including rebasing and advanced collaboration workflows. The best way to learn is to practise on a small repository, explore projects you care about, and gradually contribute to them.




