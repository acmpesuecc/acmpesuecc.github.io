---
title: 'Git in Action!'
description: 'Unlock the Power of Version Control'
authors: Saijyoti Panda, Pranav V Bhat
tags: ['git', github, 'open-source', 'hacknight7.0']
date: '2025-10-17'
---

Have you ever broken something in your project and wished you could go back in time? Or wanted to share your code with the world but weren't able to? That’s where Git and Github come in. They make saving changes, sharing and collaborating easy :D

## Why Git? And What Is It Anyway?

If you ever made a project, you would be familiar with something like this:

![Multiple project folders showing version chaos](https://i.ibb.co/PZ56vGK4/folder-chaos.png)

Git lets you unify all this into a **_SINGLE_** folder!

_Now, what is Git exactly?_

Git is a _version control_ tool that keeps track of all the changes you make in your project. It lets you experiment with new features safely and collaborate with others without breaking anything.

Think of it as a time machine for your code where you can go back, explore past versions and undo mistakes. _Maybe even look at Linus Toravlds' past commits for Linux and fix some bugs!_

_Isn't it cool to have the power to jump back to any version of your project, whenever you want?_

And when you power Git with Github, it opens the door to a world of endless possibilities!

- You can share your projects online so anyone can see or use them.
- You can collaborate globally on projects with friends or contributors.
- You can contribute to open-source projects and learn from code written by others.

_You are no longer restricted to your just friends or your college. The world is your playground! It's like unlocking a whole new superpower_ ;)

## Installing Git & Setting up SSH

If you haven't installed Git yet, don't worry! We have some scripts for you that you could run to download Git and also set an SSH key for the same!

> [!NOTE]
> Use the username and email you use for Github, or it would lead to errors!

### For Windows

Run this in as Admin in Powershell:

```bash
Invoke-RestMethod -Uri "https://gist.githubusercontent.com/Prana-vvb/b2602c1aafb692691a88d167a1d9f645/raw/523f2fd69f58a0ecf0c43a251d0320d5fc21775b/setup_windows.ps1" | Out-File -FilePath "setup.ps1"; .\setup.ps1
```

### For Linux/MacOS

Run the below command:

```bash
bash <(curl -sS https://gist.githubusercontent.com/Prana-vvb/5f48ae8e1173f7b1db105d80c70c2542/raw/10241f14b24427834cebd24128a4fa801fdac148/setup_unix.sh)
```

Copy your public key and add it to GitHub by following the below steps:

Go to GitHub > Settings > SSH and GPG keys > New SSH key, and paste it there.

Then, run the `ssh -T git@github.com` command in your terminal to verify the setup.

You should see `Hi <your-username>! You've successfully authenticated, but GitHub does not provide shell access.`

> [!NOTE]
> If all these methods fail, do look at something called GITHUB DESKTOP. It's just a Google Search away ^^

## Creating a Repository

Creating a repo in Github is easy.

Go to your Profile, and click on the `NEW` button

![Image of new button](https://i.ibb.co/rGVSGtX6/new-button.png)

Then, type in the name of the repository and click on `Create Repository`

![Create Repository](https://i.ibb.co/b5V5cXpR/create-repo.png)

**_TADA! Now you have your very own repo!_**

Btw, you can change the visibility later on too. Just go to Settings.

## Forking and Cloning Repositories

Let's say you want to contribute to someone's repository or maybe, even an open source project! _But what's the best way to do that?_

Well, that’s where **_Forking_** comes in. 'Forking' a repository means _creating your own copy_ of the repository so you can experiment and make changes safely without affecting the original project.

And how is that done?

### How to fork a repository

Click on `Fork`

![Image of fork option](https://i.ibb.co/d4gc2C16/fork-button.png)

Then, click on `Create Fork`

Now that you have your own copy of the repository, you might be wondering how to work with it on your local system. This is where **_Cloning_** comes in!

### Cloning the Repository

This lets you _copy the repository_ to your _local system_ so you can work on it locally.

Run `git clone <insert-the-repo-link>`

_and where do you find this URL?_

![Image of Clone links](https://i.ibb.co/VcYhZQNK/clone-layout.png)

> [!NOTE]
> Click on SSH and copy link if you have the SSH Setup!

## Working with Branches

Hmm.... what if I want to experiment with a feature? Is there any way to do that **_without having to create multiple folders_**?

YES! **_Branches_** let you create multiple parallel versions that you can safely work. Once you are satisfied, you can **_merge_** them to the `main` branch.

_Interesting, isn't it? But how do you make a new branch?_

Run the following commands in your terminal:

```bash
# Check which branch you are on
git branch

# Create a new branch and switch to it
git checkout -b your-new-branch-name

# Switch to an existing branch
git checkout name-of-the-branch
```

## Git Commits

Remember we talked about exploring past versions? But how are these versions made?

**_Commits_** let you do all these cool stuff. They let you take a _snapshot_ of your project at a point in time.

Before committing, make sure you’ve added all the files you want to track:

```bash
# Add specific files
git add file1 file2

# Or add all changes
git add .
```

Then, commit your changes with a message:

```bash
git commit -m "Describe your changes"
```

We recommend using [Commit Conventions](https://www.conventionalcommits.org/) to keep your messages clear.

> [!Tip]
> Pull latest changes before you start work and before you push, to avoid conflicts and keep your branch up to date.

```bash
# If you're working directly on main
git pull origin main

# If you're on a feature branch
git pull origin your-branch-name
```

It's important to note that these _latest commits stay on your local system_ until you **_Push_** them:

```bash
# Push changes to the main branch
git push origin main

# Push changes to a different branch
git push origin your-branch-name
```

An example:

![Commit Image](https://i.ibb.co/9mcHk0kR/commits.png)

## Pull Requests

Once you’ve made changes on your branch and committed them, it’s time to **_share your work_** with the original project. That’s what a **_Pull Request (PR)_** does.

A PR is basically saying:

> “Hey, I made some changes! Can you review them and merge them into the main project?”

### How to create a PR

Click on `Compare & pull request`

![Compare and PR](https://i.ibb.co/rGD3zP3V/compare.png)

Then, write a description of the changes you made, double-check the branches at the top, and click `Create Pull Request`.

![Image of Pull Request](https://i.ibb.co/SwWy1FKD/PR-img.png)

### More places to learn from!

- [Git Cheatsheet](https://git-scm.com/cheat-sheet)
- [Official Git documentation](https://git-scm.com/doc)
- [Git up and running - Anirudh Rowjee](https://rowjee.com/blog/git_up_and_running)

That brings us to the end of the blog.

We’ve covered most of the basics of Git and GitHub here. There’s still a lot more to explore, for example, things like merge conflicts, rebasing and deeper Git workflows.

Maybe we’ll dive into those in our next Git blog! ^^
