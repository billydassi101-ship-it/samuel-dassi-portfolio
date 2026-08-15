import type { Service } from "@/types";

export const services: Service[] = [
  {
    id: "rag-assistants",
    title: "Assistants IA et RAG",
    description:
      "Conception d'assistants capables d'interroger des documents, bases de connaissances et données métier grâce aux LLM et aux architectures RAG.",
    technologies: ["LLM", "RAG", "pgvector", "Supabase", "LangChain", "LightRAG"],
    iconName: "Bot",
  },
  {
    id: "llm-integration",
    title: "Intégration de LLM",
    description:
      "Intégration de modèles de langage dans des applications existantes via API ou modèles locaux.",
    technologies: ["Groq", "Ollama", "FastAPI"],
    iconName: "Zap",
  },
  {
    id: "machine-learning",
    title: "Machine Learning",
    description:
      "Développement de modèles de classification, prédiction, détection d'anomalies et aide à la décision.",
    technologies: ["Scikit-learn", "XGBoost", "PyTorch", "TensorFlow"],
    iconName: "BrainCircuit",
  },
  {
    id: "computer-vision",
    title: "Computer Vision",
    description:
      "Classification d'images, détection d'objets et segmentation.",
    technologies: ["YOLO", "ViT", "U-Net", "PyTorch"],
    iconName: "Eye",
  },
  {
    id: "data-automation",
    title: "Automatisation Data et IA",
    description:
      "Automatisation de pipelines de traitement de données et de workflows utilisant des modèles IA.",
    technologies: ["Python", "FastAPI", "ETL", "Supabase", "Docker"],
    iconName: "Workflow",
  },
];
