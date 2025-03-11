import { createServer, Model } from "miragejs";

export function makeServer() {
createServer({
    models: {
      articles: Model, // Defines a simple data model for articles
    },

    seeds(server) {
        server.create("article", {
            id: "1",
            title: "Understanding React Fiber: The Modern Reconciliation Algorithm",
            summary: "React Fiber is the core reconciliation engine in React, replacing the older stack-based algorithm. It improves UI updates, allowing for smoother animations, better rendering priorities, and improved performance. This article breaks down how Fiber works and why it’s a game-changer for React developers.",
            content: "React Fiber is the core reconciliation algorithm in React, introduced to improve the rendering process by making it more efficient and interruptible. Unlike the previous stack-based reconciliation, Fiber enables React to break rendering work into smaller units and prioritize updates, making UI updates smoother. This allows React to handle animations, large component trees, and complex applications without blocking the main thread. One of the key benefits of Fiber is its ability to pause, resume, and discard rendering work, optimizing performance and improving responsiveness. With the introduction of concurrent mode, React can now work on multiple rendering tasks simultaneously, ensuring a seamless user experience. The Fiber architecture also enhances React’s ability to batch updates and minimize unnecessary renders, leading to better application efficiency. Overall, React Fiber is a significant upgrade that powers modern React applications, ensuring they remain fast and responsive even with complex UI interactions.",
            author: "John Doe",
            date: "March 8, 2025",
            type: "React"
        });

        server.create("article", {
            id: "2",
            title: "Mastering React Router 6: A Deep Dive into Modern Navigation",
            summary: "React Router 6 introduces a simplified API, better route handling, and improved nested layouts. This article explores key concepts like dynamic routing, loaders, actions, and data-fetching strategies, making navigation seamless in modern React applications.",
            content: "React Router is a powerful library for handling client-side routing in React applications. It enables developers to create single-page applications (SPAs) where users can navigate between different views without triggering full-page reloads. By leveraging the browser's history API, React Router ensures smooth transitions between pages while maintaining the application's state. It provides essential features like dynamic routing, nested routes, and route parameters, making it flexible for building complex navigation structures. With the latest version, React Router introduces data-fetching capabilities, loaders, and actions that simplify handling server-side data. Features like protected routes and lazy loading help optimize performance and enhance security. By integrating React Router, developers can build scalable and efficient web applications that deliver seamless navigation experiences to users.",
            author: "Jane Smith",
            date: "April 25, 2025",
            type: "React"
        });

        server.create("article", {
            id: "3",
            title: "Tailwind CSS: The Future of Utility-First Styling? Or not",
            summary: "Tailwind CSS has revolutionized the way developers approach styling by embracing utility-first design. This article dives into how Tailwind improves productivity, its benefits over traditional CSS frameworks, and common best practices for building scalable UI components.",
            content: "Tailwind CSS is a utility-first CSS framework that revolutionizes how developers build modern user interfaces. Unlike traditional CSS frameworks, Tailwind provides low-level utility classes that enable developers to style elements directly in their HTML, eliminating the need for custom CSS. This approach promotes consistency, speeds up development, and reduces the need for writing custom styles. Tailwind's configuration file allows deep customization, enabling developers to define their own design system with colors, spacing, typography, and more. Features like JIT (Just-In-Time) compilation ensure that only the necessary styles are included, optimizing performance. With extensive community support, plugins, and integrations, Tailwind CSS has become a popular choice for building responsive and maintainable web applications efficiently.",
            author: "Azlan Sheikh",
            date: "January 17, 2025",
            type: "React"
        });

        server.create("article", {
            id: "4",
            title: "DeepSeek Disrupts AI: A New Era of Search & Reasoning",
            summary: " DeepSeek is an emerging AI-powered search and reasoning engine that challenges conventional methods. It integrates advanced retrieval techniques with LLMs to provide contextual, precise, and human-like search results. This article examines how DeepSeek is redefining information retrieval.",
            content: "DeepSeek is emerging as a disruptive force in artificial intelligence, pushing the boundaries of machine learning and automation. By leveraging advanced deep learning architectures and large-scale datasets, DeepSeek aims to enhance AI’s ability to understand, generate, and optimize content across various industries. From natural language processing to computer vision and decision-making systems, DeepSeek’s innovations are redefining how businesses and individuals interact with AI-driven technology. Its models are designed for high efficiency and accuracy, enabling applications in fields such as healthcare, finance, and creative industries. As AI continues to evolve, DeepSeek’s contributions are expected to play a significant role in shaping the future of automation and intelligent systems.",
            author: "Mark Zukerberg",
            date: "February 7, 2025",
            type: "AI"
        });

        server.create("article", {
            id: "5",
            title: "Lynx Native: The Future of Cross-Platform App Development?",
            summary: " Lynx Native is a cutting-edge framework designed for building high-performance cross-platform applications. It combines the best aspects of native development with modern web technologies. This article explores its core features, advantages over React Native, and its potential impact.",
            content: "Lynx Native Framework is an emerging solution designed to streamline cross-platform application development with high performance and flexibility. Unlike traditional frameworks that rely on WebView-based rendering, Lynx Native takes a more native-first approach, optimizing UI and interactions for seamless user experiences across different devices. By providing a lightweight and efficient architecture, it enables developers to build mobile and web applications with near-native performance while maintaining the convenience of a single codebase. The framework is gaining popularity for its ability to bridge the gap between native and hybrid app development, offering enhanced rendering capabilities and improved resource management. As the demand for high-performance, cross-platform apps grows, Lynx Native is positioning itself as a powerful alternative to existing frameworks, making development faster and more efficient.",
            author: "Ado Lovelace",
            date: "December 20, 2024",
            type: "AI"
        });

        server.create("article", {
            id: "6",
            title: "The Rise of ARM-Based Processors in Windows: A New Era of Computing",
            summary: "ARM-based processors are transforming the Windows ecosystem, offering improved battery efficiency, better thermal management, and optimized performance for modern computing needs. With Microsoft's push for ARM-powered Windows devices, users can expect enhanced portability, seamless app compatibility, and energy-efficient performance. This shift marks a significant evolution in Windows computing, bridging the gap between power and efficiency.",
            content: "ARM-based processors are revolutionizing Windows computing by providing a balance of power efficiency and performance. Unlike traditional x86 processors, ARM chips consume less energy while delivering smooth multitasking, making them ideal for ultrabooks and tablets. Microsoft's push for ARM adoption has led to better app support, native Windows optimization, and improved battery life. With advancements like Snapdragon-powered Windows devices, users can experience high-performance computing with reduced heat and extended usage time. As software compatibility improves, ARM-based Windows laptops are set to compete directly with traditional x86 machines, offering a new era of lightweight, power-efficient, and always-connected computing solutions.",
            author: "Charles Babage",
            date: "December 20, 2024",
            type: "Computing"
        });

        server.create("article", {
            id: "7",
            title: "Microsoft's Majorana-Based Quantum Chip: A Breakthrough in Computing",
            summary: "Microsoft's new quantum computing chip, based on Majorana fermions, marks a significant leap in the quest for stable and scalable quantum systems. By leveraging topological qubits, this chip aims to enhance error resistance, improve computational efficiency, and bring practical quantum computing closer to reality. This breakthrough could revolutionize fields like cryptography, AI, and scientific research.",
            content: "Microsoft's Majorana-based quantum chip represents a major breakthrough in quantum computing, utilizing topological qubits for improved stability and reduced error rates. Unlike traditional quantum bits (qubits), which are prone to decoherence, Majorana fermions enable more reliable quantum operations. This innovation could accelerate quantum advancements in complex problem-solving, encryption, and artificial intelligence. With its potential to enhance processing power exponentially, Microsoft's quantum chip brings us one step closer to achieving practical, fault-tolerant quantum computing. If successful, this technology could redefine industries, solving problems beyond the reach of classical supercomputers while advancing the future of secure computing and advanced simulations.",
            author: "Ettore Majorana",
            date: "December 20, 2024",
            type: "Computing"
        });

        // server.create("user", { id: "123", email: "b@b.com", password: "p123", name: "Bob" })
    },

    routes() {
      this.namespace = "api"; // API base path

        this.get("/articles", (schema) => {
            return schema.articles.all(); // Return all articles
        });

        this.get("/articles/:id", (schema, request) => {
            let id = request.params.id;
            return schema.articles.find(id); // Find article by ID
        });

        this.post("/login", (schema, request) => {
            const { email, password } = JSON.parse(request.requestBody)
            // This is an extremely naive version of authentication. Please don't
            // do this in the real world, and never save raw text passwords
            // in your database 😇
            const foundUser = schema.users.findBy({ email, password })
            if (!foundUser) {
                return new Response(401, {}, { message: "No user with those credentials found!" })
            }

            // At the very least, don't send the password back to the client 😅
            foundUser.password = undefined
            return {
                user: foundUser,
                token: "Enjoy your pizza, here's your tokens."
            }
        });


        }
    });
}
