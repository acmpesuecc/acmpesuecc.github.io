---
title: 'ACM Recruitment Challenge 2025'
description: 'Crack the code!'
authors: ACMPESUECC
tags: [ACM, challenge]
date: '2025-09-07'
---

# Storyline 

A distributed system of three servers quietly handled the day’s traffic, with a range-based load balancer ensuring each request reached its proper destination. For the most part, things ran smoothly.

But hidden deep inside the source code was a subtle flaw, an overlooked detail from using an unsafe language. The developers had known this could cause trouble eventually; they just didn’t expect it to surface today.

An attacker discovered the weakness and slipped through. With a carefully crafted request, they triggered a silent privilege escalation. In an instant, they went from an ordinary user to an administrator.

The compromised server struggles for a while before succumbing to the attack and going offline. In response, the load balancer reroutes all traffic to one of the remaining two servers. 

Undeterred, the attacker makes their move. For the first time, they access a restricted endpoint that was never meant for them!

Your task is to trace their path through the logs and identify two cruicial moments:

#### The Attack
*Find the exact request where the attack occurred on the compromised server.
Extract and return:*

•⁠  ⁠Server Number

•⁠  ⁠Timestamp (as recorded by the attacked server)

•⁠  ⁠IP address

•⁠  ⁠Endpoint

•⁠  ⁠Method

•⁠  ⁠CPU utilization

•⁠  ⁠Memory utilization

•⁠  ⁠CPU temperature


#### Post-Attack 
*After attack, the attacker accesses a privileged endpoint for the first time. Identify this request.
Extract and return:*

•⁠  Fallback ⁠Server Number

•⁠  ⁠Timestamp (as recorded by the fallback server)

•⁠  ⁠Endpoint

•⁠  ⁠Method

•⁠  ⁠CPU utilization

•⁠  ⁠Memory utilization

•⁠  ⁠CPU temperature


##### Additional Info:

•⁠  ⁠Admin users originate from a few known subnets. Servers are configured to recognize requests from these ranges.

•⁠  ⁠List of endpoints:
```
⁠     public_endpoints = ['/', '/login', '/register', '/logout', '/profile', '/search', '/images', '/videos', '/help', '/terms', '/faq', '/support']

    privileged_endpoints = ['/admin', '/settings', '/users', '/logs', '/reports', '/metrics', '/backup', '/restore', '/deleteUser', '/updateUser', '/banUser', '/unbanUser', '/escalateUser', '/news', '/about', '/contact']
```

Now, it is up to you to navigate the logs, and uncover the trail of the attacker across the servers. Have fun!

# Answer Submission 

To get your log files go to [this google drive](https://drive.google.com/drive/folders/1LYRRiNzX-hRrBSQNgua2svC0calvhATb?usp=sharing) and download the log file which has your email as the filename.

Submit your answers on the [ACM Challenge Portal](https://acm.d31ta.duckdns.org).

You will need to use the email ID you used to fill out the club application Google Form.

If you don't have an SRN, you can use your PRN to log in.
SRN/PRN should be in all caps.

