# Secure Access & Visitor Approval Backend

A **backend-driven visitor management solution** designed for institutions and organizations to manage secure authentication, role-based permissions, real-time visitor approvals, and email notifications efficiently.

---

## 💡 Project Background

This visitor management system was developed specifically for my college to manage **parents as visitors** securely and efficiently. After building the solution, I formally proposed it to the college administration (Dean’s office) for adoption, demonstrating its potential to enhance institutional safety and streamline visitor approvals.

---

## 💼 About the Project

This backend service facilitates secure and scalable visitor management, focusing on **handling parents as visitors** by enabling staff and wardens to create and approve visitor requests in real-time. It incorporates strong security practices, email notifications, and performance optimizations to ensure robustness and responsiveness.

---

## 🚀 Core Features

- **Role-Based Access Control (RBAC)**
  - Staff (guards) can create visitor requests.
  - Wardens can approve or reject visitor requests.

- **Security-First Approach**
  - JWT authentication with refresh tokens for secure sessions.
  - Rate limiting to protect against brute-force attacks.
  - Safeguards against SQL Injection, Cross-Site Scripting (XSS), and Cross-Site Request Forgery (CSRF).

- **Real-Time Updates**
  - Instant visitor approval/rejection notifications using Socket.IO.

- **Email Notifications**
  - Automatic email alerts for visitor approvals/rejections using **Nodemailer**.

- **Performance Optimization**
  - Redis caching for frequently accessed data to reduce database load and improve response times.

- **REST API Architecture**
  - Modular, scalable endpoints designed for easy integration and maintenance.

---

## 🛠 Tech Stack

| Category       | Technologies                       |
| -------------- | -------------------------------- |
| Backend        | Node.js, Express.js               |
| Database       | MySQL, Redis (for caching)        |
| Authentication | JWT (JSON Web Tokens)             |
| Security       | Helmet.js, Rate Limiter Middleware |
| Real-Time      | Socket.IO                        |
| Email          | Nodemailer                      |

---
<img width="2555" height="1397" alt="image" src="https://github.com/user-attachments/assets/5dc91832-9ef9-4ec7-9816-8c691b098ae7" />
<img width="2553" height="1497" alt="image" src="https://github.com/user-attachments/assets/1ca64e17-aada-4b1c-aba6-44f4acc2297f" />



## ⚙️ Installation & Setup

1. **Clone the repository**

   ```bash
   git clone https://github.com/deepak30012004/Visman.git
   cd Visman
