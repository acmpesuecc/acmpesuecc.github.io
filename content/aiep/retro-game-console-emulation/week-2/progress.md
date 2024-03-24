---
title: Display CHIP-8 screen on a window
lead: Sriprad Potukuchi
date: 24 March 2024
summary: The linker has been conquered, raylib flawlessly integrated with the project and made some good use of!
---

## Mentees vs. The Linker
Majority of the time was spent trying to learn the C build process. Countless hours dedicated to defeating the Mighty Linker _finally_ yielded fruit!

It was especially not easy to build a consistent dev environment across Windows, Mac _and_ Linux! All three of which are being used by the mentees.

We ended up creating multiple Makefiles. One for each platform, each with its own platform specific quirks. Each with its own set of linker flags.

## The display

A clean project structure was decided upon. No more source files in the project root!

The linker knowledge was put to good use by linking the project against raylib. GUI, here we come!

![An early implementation of the CHIP-8 interpreter](https://i.imgur.com/IF3YKHW.png)
*A proof of concept display featuring a 64x32 grid of pixels and a dump of a few registers*

The mentees have very quickly learnt the usage of raylib (thanks in part to its super simple API) and have learnt what goes into building a GUI application like the one shown above. It is now up to them to make it aesthetically pleasing and more functional. Will they succeed? Stay tuned to find out!

**Week 2 verdict**: The mentees have showcased ingenuity and a commendable amount of patience as we debugged our way through.
