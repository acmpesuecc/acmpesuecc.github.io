---
title: 'aWASMe: A WASM interpreter'
description: 'A WASM interpreter'
collections: [aiep-2026]
leads: ['Nirupama Jayaraman', 'Sarah Kazi', 'Selvaganesh Arunmozhi']
members: ["Aston Venol D'Souza", 'Chitra Likith Kumar', 'Samyuktha Ramesh Babu', 'Shashidharan VS']
date: '2026-01-05'
layout: aiep-project
---

A WASM interpreter with dual modes — one as a browser-based VM and one as a simulator for WASM. It uses a structured parsing and execution pipeline in C++ & emscripten, to load binary modules, validate and decode instructions, and simulate a full virtual machine directly in the browser. It is a very useful tool when it comes to experimenting on systems safely and also helps out to build/test/debug any program in a sandboxed environment without requiring external runtimes.
