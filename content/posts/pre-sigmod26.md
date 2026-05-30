---
title: 'Pre-SIGMOD 2026 Talks @ BMSCE'
description: 'Notes from a day of talks conducted at BMSCE!'
authors: Anshul Paruchuri
tags: ['databases', 'genai', 'research']
date: '2026-05-30'
---

_Editors Note:\
We were invited to attend the Pre-Conference Workshop at BMSCE for the ACM SIGMOD 2026 Conference, happening in Bangalore. There were quite a few amazing talks that were given, and a lot of insightful discussion took place. We had a blast, and would love to see more events like this in the future!\
This article first appeared on Anshul's blog! [(link)](https://anshulparuchuri.netlify.app/til/acm-sigmod)_

---

# Test Automation for Low-Code ETL Workflows

> Speaker: Meenakshi D'Souza (IIT Madras)

## Introduction

ETL is a data integration process that combines data from various sources according to the desired requirements, and then loads it into a target (typically a data warehouse).

No-code/low-code ETL platforms provide features for business users to develop ETL pipelines without writing much code.

Low-code open source ETL tools: Apache Airflow, Apache Ni-Fi, CDAP.

## Objective

Can we design a set of functional testing plugins for ETL workflows, mainly for data pipelines using ETL tools?

## Structure of the ETL Process

Data from multiple sources are transformed using a well defined set of syntactic rules that are applied step by step, and loaded into a sink.

Typically, this is represented as a DAG. Each node in the DAG is a transformation step, and edges connect one transformation step into another.

## Proposed Framework (EasyTest ETL)

Consists of 3 plugins: Assertion, Fixture and Mutation.

- Assertion: Evaluates a validation rule. Uses Java EXL library to specify rule expressions.
- Fixture: This transform implements a singleton class.
- Mutation: Simple fuzzing based modification of data to verify asserts.

This project presents a general framework for plugins to facilitate functional testing of low-code ETL workflows.

# Fueling Enterprise AI through Robust Data Ingestion

> Speaker: Prasad M Deshpande (Databricks)

## Introduction

Typical enterprise data is spread over multiple sources. The first step is to get all this data into a single platform. 3 steps in the process:

- Ingest
- Transform
- Orchestrate (Make it run regularly and reliably while balancing cost and latency)

## Why is Ingestion Hard?

There are hundreds of source types, each with different APIs, protocols and quirks. Enterprises also have these requirements:

- Scalability
- Efficiency and cost
- Handle updates and deletes
- Low latency
- Failure recovery
- Governance

Ingestion has two phases: Snapshot (initial copy) and Incremental (keeping the data fresh).

Sources can be of 2 types: SaaS Systems and Database Systems

Another challenge is rate limits while using APIs for SaaS sources: Use smart backoff strategies.

## Overall Flow

Source > Reader > Buffer > Merger > Destination

- Reader: Extract data from source
- Buffer: Design choice. It decouples reading from merging, and enables independent scaling
- Merger: Merges multiple data sources.

Incremental vs Batch Ingestion

## Cursor

Challenge: How do we fetch only new data? This can be done using the Cursor logic.

Steps:

1. Find a col that changes whenever a record is updated
2. Keep track of maximum value seen so far.

The ideal cursor field changes whenever the record is updated, always increases and is strictly ordered by update time.

## Chunking Large Datasets

### Naive Approach

- Chunking using offset + limit
- Go to an offset and then fetch n records.
- Problem: Sort order is unstable when cursor fields change. Standard offsets miss records during updates.

### Robust Chunking

- Do not rely on offset. Use last updated cursor value.
- This works, but it cannot handle bulk updates.
- LIMIT cuts in the middle of a group.
- Can use `>=` but it causes duplicates.
- Cursor does not progress if the whole chunk has the same value.

### Keyset Pagination Solution

- Idea: Sort on cursor + primary key.
- Use composite as chunking mechanism

## Unstructured Data for AI

Challenges:

- Parsing complexity
- Content representation
- Incremental syncing

## ACLs and Permission Problem

### Approach 1: Data Storage

- Store ACLs as data
- Easy implementation
- Reies on trusting application layer

### Approach 2: Platform Security

- Map to destination row-level security.

## Database Sources

These sources have CDCs that can read the transaction log. The two phases here are CDC (read change stream) and Snapshot (capture current state by querying tables).

CDC needs to start before snapshot.

CDC records have a sequence number; The correct sequence number S should be the LSN at CDC start.

## Snapshot Split Problem

A 1TB table at 100MB/s requires nearly 3 hours for a full scan. In such a situation, the solution is to read in parallel, checkpoint individually, and retry independently if issues occur. Splits should ideally be even.

Use composite key partitioning for even splits.

## Challenges

### Merging

- Duplicates
- Out of Order
- Partial Records

Merger must reconcile these technical hurdles to ensure data integrity.

# PostgreSQL Architecture

> Speaker: Pavan Deolasse (EDB)

## Architecture

Postgres uses processes, not threads. Helps with portability, debugging and fault isolation, but leads to high process overhead.

- Postmaster: Supervisor, listens for incoming connections and forks per-connection backends.
- Per-Connection Backend: Isolated env. Entire query lifecycle runs in a single dedicated OS process.
- Background Workers: System maintenance.

## Query Processing

Parser > Analyzer > Rewriter > Planner > Executor

Planner/Optimizer is the most active contribution area in core Postgres.

## Storage

- Heap Tables: Primary storage area. Default page size is 8kB, and is segmented at 1GB files on disk.
- Indexes: Similar structures to heap tables, but diff page format optimized for search.
- TOAST: Large values are transparently compressed or moved to side tables.
- Free Space/Visibility Maps: Per-page bitmaps that guide insert and vacuum ops for efficiency.
- Tablespaces: Allows pointing tables and indexes at diff filesystems for storage tiering.
- TAM: Pluggable columnar architecture.

## MVCC

Multiversion Concurrency Control. The mechanism is that tuples are never updated in-place. Always create a new version of the row that sits next to the old version of the row.

This ensures readers and writers do not block each other. It gives accurate snapshot isolation, and rollbacks are easy.

## WAL

WAL is used for durability and replication. Changes are logged before hitting the disk.

Replication is both physical and logical in Postgres.

## Pluggable Indexes

### Built-in Index Types

- B-tree
- Hash
- GiST and SP-GiST
- GIN
- BRIN

### Plugins

- pgvector for AI embeddings
- pg_trgm for trigram via GIN.

## Extensibility

Extensibility is a design principle in Postgres. It is built to be extended without forking.

The primary mode of contributions is through the pgsql-hackers mailing list.

# Rethinking Relational DBs in the Age of GenAI

> Speaker: Carsten Binnig (TU Darmstadt)

# Introduction

Almost every critical system depends on Relational DBs, and cloud helps it become more scalable. However, there is a high overhead to pay, to use these DBs. Not much changed even when everything moved to cloud.

Original Promises:

- Easy to use data model and queries
- DB optimizes the execution for you.

However, data tends to be unstructured, and does not come in tables.

Relational tax: Overheads are rooted in the design of the relational model.

Query tax: Query authoring is complex.
Tuning tax: DBs require massive tuning.

## Cutting these Relational Taxes with AI

### Query and Data Tax

- Natural language queries easier for user, but can be hard to interpret.
- A more efficient query type for the DB is sloppy SQL: a mix of natural language and SQL. This is an approach a lot of companies are considering.

#### Major Issues of using LLMs as DBs

A pure LLM/RAG-style approach for natural language queries leads to some issues.

1. Limited to simple NL queries
2. Limited data understanding if data is already structured.
3. Enterprise data is stored in structured form
4. Black-box processing
5. High cost.

#### A Solution

LLM-Augmented DBs: Extend DBs with LLMs as needed. LLMs and DBs can be used to complement each other.

Relational + LLM-based operators. Use LLM-driven Multimodal filters.

LLM can be used for query planning.

Carsten's project is called [CAESURA](https://arxiv.org/abs/2308.03424). [(Code)](https://github.com/DataManagementLab/caesura)

Working: Take NL query and logical operators, and ask the LLM to create a logical plan to possibly execute the query. This logical plan is then converted into a physical plan (actual execution strategy with the tech stack being used). LLM is used to reason over data and logical operations.

## Text to SQL in Enterprise Data

- Benchmarks: Spider and BIRD.
- SeRA: Semantic Restauration Agent. Uses ReACT + Reasoning over semantic meaning of schema elements.
- Bespoke DBs: A DBMS tailored for one specific workload. [Related Paper](https://arxiv.org/pdf/2603.02001) | [Code](https://github.com/DataManagementLab/BespokeOLAP)
