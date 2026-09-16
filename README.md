# Jatin Sharma — AI Engineer Portfolio

A production-oriented AI Engineer portfolio for Jatin Sharma, positioned around applied machine learning, deep learning, Generative AI, Retrieval-Augmented Generation (RAG), and scalable backend AI systems.

Live deployment: [https://jatin-sharma-ai-portfolio.vercel.app/](https://jatin-sharma-ai-portfolio.vercel.app/)

## Primary Stack

- React 19 and Vite 8
- React Router (client-side routing for `/`, `/about`, `/projects`, `/projects/:slug`, `/contact`)
- Tailwind CSS 4 with custom dark graphite, chartreuse/lime, and restrained violet design tokens
- Framer Motion with lazy-loaded motion features and reduced-motion support
- React Icons (Font Awesome 6)
- Self-hosted Manrope variable font

## Four Primary AI Projects

1. **Synapse — Enterprise AI Intelligence OS** (`/projects/synapse`)
   - GitHub: [https://github.com/JatinSharmab/synapse-ai](https://github.com/JatinSharmab/synapse-ai)
   - Category: Multimodal RAG / Agentic AI / Enterprise AI
   - Highlights: Typed LangGraph Sentinel loop (bounded to 1 rewrite), hybrid retrieval (ChromaDB + BM25 + RRF + local CPU reranker), PyMuPDF page citations, video timestamp seek evidence, deterministic CSV ops, Pydantic/Zod Gen-UI.

2. **CineRank AI — Deep Learning Recommendation & Vector-Ranking Platform** (`/projects/cinerank-ai`)
   - GitHub: [https://github.com/JatinSharmab/CineRank-AI](https://github.com/JatinSharmab/CineRank-AI)
   - Category: Deep Learning / Recommendation Systems / MLOps
   - Highlights: PyTorch Two-Tower architecture (User & Item encoders), 128-d L2-normalized embeddings, hard negative sampling, Qdrant HNSW vector retrieval, cold-start fallback, standalone empirical ranking benchmarks (`NDCG@10: 0.6698 vs 0.1764 (+279.7%)`, `Recall@10: 0.6000 vs 0.1667 (+260.0%)`), Redis caching, MLflow, Docker Compose.

3. **NexusAI — RAG Knowledge Assistant** (`/projects/nexus-ai`)
   - GitHub: [https://github.com/JatinSharmab/nexus-ai](https://github.com/JatinSharmab/nexus-ai)
   - Category: RAG / LLM Applications
   - Highlights: Privacy-friendly local RAG, SentenceTransformers (`all-MiniLM-L6-v2`), FAISS cosine similarity index, local Ollama (`llama3.2`) generation, FastAPI, JWT authentication, MongoDB chat history, page-level citations.

4. **FinSight AI — Financial Market Intelligence Platform** (`/projects/finsight-ai`)
   - GitHub: [https://github.com/JatinSharmab/finsight-at](https://github.com/JatinSharmab/finsight-at)
   - Category: Financial AI / ML Platform
   - Highlights: Decoupled multi-tier architecture (React/TypeScript client, Express Node gateway, Python FastAPI ML service, MongoDB, Redis, Socket.IO, Docker Compose).

## Requirements

- Node.js `^20.19.0` or `>=22.12.0`
- npm

## Local Development

```bash
npm install
npm run dev
```

## Validation and Production Build

```bash
npm run validate
```

Runs the 87 automated integrity checks in `scripts/validate-portfolio.mjs` (verifying assets, projects, routes, social links, resume PDF, and encoding), then runs `vite build`.

The production bundle can also be built and previewed directly:

```bash
npm run build
npm run preview
```

## Routing & Vercel Deployment

Configured with `vercel.json` SPA rewrites to ensure direct URL navigation and page refreshes work seamlessly on all routes:
- `/` (Home)
- `/about` (AI Engineer Profile, Skills, Experience, Education)
- `/projects` (Project Index)
- `/projects/synapse` (Synapse Case Study)
- `/projects/cinerank-ai` (CineRank AI Case Study)
- `/projects/nexus-ai` (NexusAI Case Study)
- `/projects/finsight-ai` (FinSight AI Case Study)
- `/contact` (Contact & Communication)
