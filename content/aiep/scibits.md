---
title: 'SciBits: A hardware implementation of a Scientific Calculator'
description: 'A hardware implementation of a Scientific Calculator'
collections: [aiep-2026]
leads: ['Keval Pattani', 'Pranav M']
members: ['Pranav K']
date: '2026-01-01'
layout: aiep-project
---

A hardware-centric project aiming to design a Scientific Calculator using Verilog (RTL). The calculator will support basic arithmetic operations alongside advanced features like statistical calculations and polynomial equation solving.

The design follows a behavioral approach for all computational operations, with a Display module developed in parallel to visualize calculations. An Instruction Set Architecture (ISA) will be integrated into the core CPU to load sprites into the Display Module and handle computation tasks.

Upon completing the calculator and display functionalities, the design will be processed through the open-source ASIC implementation tool OpenLane, transforming it into an ASIC-ready chip.
