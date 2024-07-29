📝 LiveDocs: Your Collaborative Document Editor
LiveDocs is a real-time collaborative document editor, bringing the power of Google Docs to your fingertips! 🚀

🌟 Introduction
Built with cutting-edge technologies, LiveDocs showcases the developer's skills in creating a real-time environment that leaves a lasting impact. It's not just a document editor; it's a collaborative space where ideas come to life! ✨

🔗 Live Demo | GitHub Repo

⚙️ Tech Stack
🔷 Next.js
🔷 TypeScript
🔷 Liveblocks
🔷 Lexical Editor
🔷 ShadCN
🔷 Tailwind CSS
🔋 Features
👉 Authentication: Secure user authentication using GitHub through NextAuth.
👉 Collaborative Text Editor: Edit documents simultaneously with real-time updates.
👉 Documents Management:
📄 Create and automatically save new documents
🗑️ Delete owned documents
🔗 Share documents with customizable permissions
📚 List and search documents with ease
👉 Comments: Add inline and general comments with threaded discussions.
👉 Active Collaborators: See who's working on the document in real-time.
👉 Notifications: Stay updated on document activities.
👉 Responsive Design: Seamless experience across all devices.
...and many more, including robust code architecture and reusability!

🚀 Quick Start
Prerequisites
Git
Node.js
npm (Node Package Manager)
Cloning the Repository
bash
Copy code
git clone https://github.com/Mohammed-Zain-ul-Hassan/Live-Docs.git
cd Live-Docs
Installation
Install the project dependencies using npm:

bash
Copy code
npm install
Set Up Environment Variables
Create a .env file in the root directory:

env
Copy code
# Clerk
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=
CLERK_SECRET_KEY=
NEXT_PUBLIC_CLERK_SIGN_IN_URL=/sign-in
NEXT_PUBLIC_CLERK_SIGN_UP_URL=/sign-up

# Liveblocks
NEXT_PUBLIC_LIVEBLOCKS_PUBLIC_KEY=
LIVEBLOCKS_SECRET_KEY=
Replace the placeholder values with your Clerk & Liveblocks credentials.

Running the Project
Start the development server:

bash
Copy code
npm run dev
Visit http://localhost:3000 in your browser to start collaborating!