## 🗄️ Databases (DB)

| Concept | Description |
|----------|-------------|
| **Purpose** | Databases are used in software applications to store, manage, and retrieve data. |
| **Persistence** | Storage is persistent — data is preserved between user visits and across the application. |
| **Structure** | Databases offer a structured way to store data, often within tables. |
| **Data Types** | Different data types can be stored and enforced in a database. |
| **Schema** | Every database has a schema that defines the shape and structure of the data within it. |

## 📌 SQL vs NoSQL Databases

📌 SQL (Relational Databases)

   * Follows tables, rows, and columns

   * Uses structured schema (fixed design)

   * Good for relationships (JOINs)

   * Uses SQL language for queries

   * Best for structured data

Examples: MySQL, PostgreSQL, Oracle, SQL Server

📌 NoSQL (Non-Relational Databases)

   * Data stored as documents, key-value, graphs, or wide-column

   * Flexible schema (no fixed structure)

   * Scales horizontally (very fast and distributed)

   * Best for unstructured or semi-structured data

   * Examples: MongoDB, Firebase, Cassandra, Redis

| Feature | SQL (Relational) | NoSQL (Non-Relational) |
|--------|------------------|------------------------|
| **Data Structure** | Table-based (rows & columns) | Document, Key-Value, Graph, Wide-Column |
| **Schema** | Fixed schema (strict) | Flexible schema (dynamic) |
| **Scalability** | Vertical scaling (bigger server) | Horizontal scaling (more servers) |
| **Best For** | Structured data & complex queries | Unstructured / semi-structured data |
| **Query Language** | SQL | Varies (JSON queries, APIs, etc.) |
| **Joins** | Supports JOIN operations | Usually does NOT support JOINs |
| **Performance** | Strong consistency | High speed & availability |
| **Examples** | MySQL, PostgreSQL, Oracle | MongoDB, Firebase, Cassandra, Redis |

## 🟦 SQL Database Types

SQL databases (Relational Databases) are structured systems that store data in **tables**, using **rows and columns**. They follow a fixed **schema** and support powerful **ACID transactions**.

---

### 🔹 1. Relational Databases (RDBMS)

These databases store data in structured tables and use SQL for querying.

**Common RDBMS systems:**
- **MySQL**
- **PostgreSQL**
- **SQLite**
- **Oracle Database**
- **Microsoft SQL Server**
- **MariaDB**

---

### 🔹 2. Cloud SQL Databases

Managed SQL database services provided by cloud platforms.

**Examples:**
- **Amazon RDS**
- **Azure SQL Database**
- **Google Cloud SQL**

---

### 🔹 3. In-Memory SQL Databases

These databases store data primarily in RAM for extremely fast read/write operations.

**Examples:**
- **H2**
- **SAP HANA**

---

### 📌 Summary

| Category | Description | Examples |
|----------|-------------|----------|
| **Relational Databases (RDBMS)** | Table-based, schema-driven, ACID compliant | MySQL, PostgreSQL, SQLite |
| **Cloud SQL Databases** | Fully managed SQL databases on the cloud | Amazon RDS, Azure SQL, Cloud SQL |
| **In-Memory SQL Databases** | High-performance, RAM-based databases | H2, SAP HANA |


## 🟦 Types of NoSQL Databases

| Type | Description | Examples | Best For |
|------|-------------|----------|----------|
| **Document** | Stores data as JSON-like documents | MongoDB, Firestore | User profiles, products, CMS |
| **Key-Value** | Key → value pairs, extremely fast | Redis, DynamoDB | Caching, sessions, leaderboards |
| **Column-Family** | Data stored in columns (big data) | Cassandra, HBase | Analytics, logs, time-series |
| **Graph** | Nodes + relationships | Neo4j, ArangoDB | Social networks, recommendations |

## Database Hosting: Managed vs Self-Hosted

| Feature                   | Managed Database           | Self-Hosted Database             |
|---------------------------|----------------------------|----------------------------------|
| Setup Complexity          | Very Low                   | High                             |
| Maintenance               | Done by provider           | You handle everything            |
| Scaling                   | Automatic                  | Manual                           |
| Cost                      | Higher                     | Lower (but requires expertise)   |
| Control                   | Limited                    | Full control                     |
| Reliability               | Very high (SLA backed)     | Depends on your setup            |
| Security                  | Provider-managed           | You configure and maintain       |
