export type DayOfWeek = 'mon' | 'tue' | 'wed' | 'thu' | 'fri' | 'sat' | 'sun';
export type LessonType = 'read' | 'watch' | 'build' | 'explore' | 'research' | 'optional';
export type StudyMode = 'review' | 'standard' | 'deep-study' | 'research-prep';

export interface Lesson {
  id: string;
  day: DayOfWeek;
  type: LessonType;
  title: string;
  description: string;
  estimatedHours: number;
  difficulty?: StudyMode;
  tasks?: readonly string[];
}

export interface WeekData {
  weekNumber: number;
  title: string;
  theme: string;
  category: string;
  objective: string;
  expectedOutput: string;
  startDate?: string;
  studyMode: StudyMode;
  lessons: Lesson[];
}

const START_DATE = "2026-08-17";

export const curriculumData: WeekData[] = [
  // ============================================================================
  // VOLUME I: FOUNDATIONS (Weeks 1 - 16)
  // ============================================================================

  // Part I: Foundations
  {
    weekNumber: 1,
    title: "ML Systems",
    theme: "Volume I: Foundations",
    category: "Part I",
    objective: "Understand the intersection of Machine Learning and Systems Engineering, defining what constitutes an ML System.",
    expectedOutput: "Mental model of ML vs. Traditional Systems, identifying key components of the ML lifecycle.",
    startDate: START_DATE,
    studyMode: "standard",
    lessons: [
      { id: "w1-d1", day: "mon", type: "read", title: "Chapter 1: ML Systems", description: "Read Chapter 1 from MLSysBook Volume I.", estimatedHours: 2, tasks: ["Read Chapter 1: ML Systems (Foundations)", "Identify differences between ML and traditional software systems"] },
      { id: "w1-d2", day: "tue", type: "watch", title: "ML Systems Overview", description: "Watch lecture on ML Systems principles.", estimatedHours: 1.5, tasks: ["Watch corresponding lecture on ML Systems", "Take notes on lifecycle phases"] },
      { id: "w1-d3", day: "wed", type: "build", title: "MLSys·im Setup", description: "Initialize the MLSys·im environment.", estimatedHours: 2.5, tasks: ["Setup MLSys·im environment", "Run the baseline simulation pipeline"] },
      { id: "w1-d4", day: "thu", type: "explore", title: "Systems Thinking", description: "Explore the taxonomy of ML Systems.", estimatedHours: 2, tasks: ["Analyze the D·A·M Taxonomy", "Review case studies of ML systems failures"] },
      { id: "w1-d5", day: "fri", type: "research", title: "Lifecycle Bottlenecks", description: "Identify potential bottlenecks in an end-to-end ML system.", estimatedHours: 2, tasks: ["Map out an ML lifecycle diagram", "Identify where systems engineering creates the most leverage"] },
    ]
  },
  {
    weekNumber: 2,
    title: "ML Workflow",
    theme: "Volume I: Foundations",
    category: "Part I",
    objective: "Master the iterative ML workflow from problem definition to deployment.",
    expectedOutput: "A structured ML workflow pipeline sketch.",
    startDate: "2026-08-24",
    studyMode: "standard",
    lessons: [
      { id: "w2-d1", day: "mon", type: "read", title: "Chapter 2: ML Workflow", description: "Read Chapter 2 from MLSysBook Volume I.", estimatedHours: 2, tasks: ["Read Chapter 2: ML Workflow", "Study the iterative loops of ML development"] },
      { id: "w2-d2", day: "tue", type: "watch", title: "Workflow Orchestration", description: "Watch lecture on ML workflow components.", estimatedHours: 1.5, tasks: ["Watch lecture on ML Workflow", "Understand experiment tracking and model registry concepts"] },
      { id: "w2-d3", day: "wed", type: "build", title: "Pipeline Simulation", description: "Build a mock ML workflow using MLSys·im.", estimatedHours: 2.5, tasks: ["Implement a mock ML workflow using MLSys·im", "Configure tracking and registry stages"] },
      { id: "w2-d4", day: "thu", type: "explore", title: "Workflow Anti-patterns", description: "Explore common anti-patterns in ML workflows.", estimatedHours: 2, tasks: ["Review 'Hidden Technical Debt in ML Systems' concepts", "Analyze workflow anti-patterns"] },
      { id: "w2-d5", day: "fri", type: "research", title: "Workflow Automation", description: "Research CI/CD for Machine Learning (CT/CD).", estimatedHours: 2, tasks: ["Define Continuous Training (CT)", "Design a hypothetical CT pipeline"] },
    ]
  },
  {
    weekNumber: 3,
    title: "Data Engineering",
    theme: "Volume I: Foundations",
    category: "Part I",
    objective: "Understand data pipelines, storage formats, and preprocessing at scale.",
    expectedOutput: "A functional data processing pipeline prototype.",
    startDate: "2026-08-31",
    studyMode: "standard",
    lessons: [
      { id: "w3-d1", day: "mon", type: "read", title: "Chapter 3: Data Engineering", description: "Read Chapter 3 from MLSysBook Volume I.", estimatedHours: 2, tasks: ["Read Chapter 3: Data Engineering", "Study data ingestion, validation, and transformation"] },
      { id: "w3-d2", day: "tue", type: "watch", title: "Data Pipelines for ML", description: "Watch lecture on Data Engineering for ML.", estimatedHours: 1.5, tasks: ["Watch lecture on Data Engineering", "Understand feature stores vs data lakes"] },
      { id: "w3-d3", day: "wed", type: "build", title: "Data Pipeline Setup", description: "Build a data ingestion pipeline.", estimatedHours: 2.5, tasks: ["Build a data ingestion pipeline using MLSys·im", "Implement data validation checks"] },
      { id: "w3-d4", day: "thu", type: "explore", title: "Feature Engineering", description: "Explore feature engineering at scale.", estimatedHours: 2, tasks: ["Analyze feature engineering tradeoffs", "Review streaming vs batch processing"] },
      { id: "w3-d5", day: "fri", type: "research", title: "Data Lineage", description: "Research data lineage and reproducibility.", estimatedHours: 2, tasks: ["Investigate data versioning tools", "Document the impact of data drift on model performance"] },
    ]
  },

  // Part II: Development
  {
    weekNumber: 4,
    title: "Neural Computation",
    theme: "Volume I: Development",
    category: "Part II",
    objective: "Deep dive into the computational primitives of neural networks.",
    expectedOutput: "Implementation of basic neural operations from scratch.",
    startDate: "2026-09-07",
    studyMode: "deep-study",
    lessons: [
      { id: "w4-d1", day: "mon", type: "read", title: "Chapter 4: Neural Computation", description: "Read Chapter 4 from MLSysBook Volume I.", estimatedHours: 2.5, tasks: ["Read Chapter 4: Neural Computation", "Study tensor operations and auto-differentiation mathematics"] },
      { id: "w4-d2", day: "tue", type: "watch", title: "Computational Graphs", description: "Watch lecture on computational graphs.", estimatedHours: 1.5, tasks: ["Watch lecture on Computational Graphs", "Understand forward and backward passes"] },
      { id: "w4-d3", day: "wed", type: "build", title: "TinyTorch Fundamentals", description: "Begin building TinyTorch internals.", estimatedHours: 3, tasks: ["Initialize TinyTorch project", "Implement basic tensor operations and gradients"] },
      { id: "w4-d4", day: "thu", type: "explore", title: "Execution Engines", description: "Explore eager vs graph execution.", estimatedHours: 2, tasks: ["Compare PyTorch eager mode with TensorFlow graph mode", "Analyze execution traces"] },
      { id: "w4-d5", day: "fri", type: "research", title: "Custom Ops", description: "Research custom operator implementation.", estimatedHours: 2, tasks: ["Investigate how custom C++ or CUDA ops are registered in Python", "Write a proposal for a custom op"] },
    ]
  },
  {
    weekNumber: 5,
    title: "Network Architectures",
    theme: "Volume I: Development",
    category: "Part II",
    objective: "Analyze systems implications of various network architectures (CNNs, Transformers).",
    expectedOutput: "Architecture profiling report.",
    startDate: "2026-09-14",
    studyMode: "deep-study",
    lessons: [
      { id: "w5-d1", day: "mon", type: "read", title: "Chapter 5: Network Architectures", description: "Read Chapter 5 from MLSysBook Volume I.", estimatedHours: 2.5, tasks: ["Read Chapter 5: Network Architectures", "Analyze FLOPs and memory footprint of different architectures"] },
      { id: "w5-d2", day: "tue", type: "watch", title: "Architecture Bottlenecks", description: "Watch lecture on systems bottlenecks in architectures.", estimatedHours: 1.5, tasks: ["Watch lecture on Network Architectures", "Understand memory vs compute bound models"] },
      { id: "w5-d3", day: "wed", type: "build", title: "TinyTorch Architectures", description: "Implement architectures in TinyTorch.", estimatedHours: 3, tasks: ["Implement a simple CNN in TinyTorch", "Implement a simple Self-Attention mechanism in TinyTorch"] },
      { id: "w5-d4", day: "thu", type: "explore", title: "Memory Profiling", description: "Explore memory consumption during training.", estimatedHours: 2, tasks: ["Profile memory usage of a Transformer block", "Calculate theoretical peak memory"] },
      { id: "w5-d5", day: "fri", type: "research", title: "Architecture Efficiency", description: "Research efficient architecture design.", estimatedHours: 2, tasks: ["Investigate parameter-efficient architectures", "Compare depth vs width systems implications"] },
    ]
  },
  {
    weekNumber: 6,
    title: "ML Frameworks",
    theme: "Volume I: Development",
    category: "Part II",
    objective: "Understand the design and compilation stack of ML frameworks.",
    expectedOutput: "A functional auto-differentiation engine in TinyTorch.",
    startDate: "2026-09-21",
    studyMode: "deep-study",
    lessons: [
      { id: "w6-d1", day: "mon", type: "read", title: "Chapter 6: ML Frameworks", description: "Read Chapter 6 from MLSysBook Volume I.", estimatedHours: 2, tasks: ["Read Chapter 6: ML Frameworks", "Study the compiler stack from Python down to hardware"] },
      { id: "w6-d2", day: "tue", type: "watch", title: "Framework Design", description: "Watch lecture on ML Frameworks.", estimatedHours: 1.5, tasks: ["Watch lecture on ML Frameworks", "Understand Intermediate Representations (IR)"] },
      { id: "w6-d3", day: "wed", type: "build", title: "TinyTorch Autograd", description: "Implement Autograd in TinyTorch.", estimatedHours: 3, tasks: ["Implement reverse-mode auto-differentiation in TinyTorch", "Test topological sort for backprop"] },
      { id: "w6-d4", day: "thu", type: "explore", title: "Graph Compilation", description: "Explore MLIR and XLA.", estimatedHours: 2, tasks: ["Review XLA compiler concepts", "Understand operator fusion"] },
      { id: "w6-d5", day: "fri", type: "research", title: "Next-Gen Compilers", description: "Research modern compiler stacks (e.g., PyTorch 2.0).", estimatedHours: 2, tasks: ["Investigate torch.compile and Triton", "Summarize how graph breaks affect performance"] },
    ]
  },
  {
    weekNumber: 7,
    title: "Model Training",
    theme: "Volume I: Development",
    category: "Part II",
    objective: "Master the systems aspects of model training loops, optimizers, and data loading.",
    expectedOutput: "End-to-end training loop in TinyTorch.",
    startDate: "2026-09-28",
    studyMode: "standard",
    lessons: [
      { id: "w7-d1", day: "mon", type: "read", title: "Chapter 7: Model Training", description: "Read Chapter 7 from MLSysBook Volume I.", estimatedHours: 2, tasks: ["Read Chapter 7: Model Training", "Study optimizer states and data loader bottlenecks"] },
      { id: "w7-d2", day: "tue", type: "watch", title: "Training Systems", description: "Watch lecture on Model Training.", estimatedHours: 1.5, tasks: ["Watch lecture on Model Training", "Understand I/O bottlenecks during training"] },
      { id: "w7-d3", day: "wed", type: "build", title: "TinyTorch Optimizers", description: "Implement SGD and Adam in TinyTorch.", estimatedHours: 2.5, tasks: ["Implement SGD and Adam optimizers in TinyTorch", "Build a generic training loop"] },
      { id: "w7-d4", day: "thu", type: "explore", title: "Data Loaders", description: "Explore efficient data loading.", estimatedHours: 2, tasks: ["Analyze multi-processing in data loaders", "Identify CPU-GPU transfer bottlenecks"] },
      { id: "w7-d5", day: "fri", type: "research", title: "Training Instability", description: "Research handling training failures.", estimatedHours: 2, tasks: ["Investigate checkpointing strategies", "Analyze impact of NaNs and mixed precision scaling"] },
    ]
  },

  // Part III: Optimization
  {
    weekNumber: 8,
    title: "Data Selection",
    theme: "Volume I: Optimization",
    category: "Part III",
    objective: "Optimize the data selection and curriculum learning process.",
    expectedOutput: "Implementation of a data selection strategy.",
    startDate: "2026-10-05",
    studyMode: "standard",
    lessons: [
      { id: "w8-d1", day: "mon", type: "read", title: "Chapter 8: Data Selection", description: "Read Chapter 8 from MLSysBook Volume I.", estimatedHours: 2, tasks: ["Read Chapter 8: Data Selection", "Study active learning and core-set selection"] },
      { id: "w8-d2", day: "tue", type: "watch", title: "Curriculum Learning", description: "Watch lecture on Data Selection.", estimatedHours: 1.5, tasks: ["Watch lecture on Data Selection", "Understand the impact of data quality vs quantity"] },
      { id: "w8-d3", day: "wed", type: "build", title: "Data Pruning", description: "Implement a data pruning script.", estimatedHours: 2.5, tasks: ["Write a script to rank data samples by loss", "Implement a simple core-set selection algorithm"] },
      { id: "w8-d4", day: "thu", type: "explore", title: "Data Deduplication", description: "Explore data deduplication techniques.", estimatedHours: 2, tasks: ["Analyze MinHash and LSH for deduplication", "Review data contamination issues"] },
      { id: "w8-d5", day: "fri", type: "research", title: "Data Scaling Laws", description: "Research scaling laws related to data.", estimatedHours: 2, tasks: ["Investigate Chinchilla scaling laws", "Determine optimal compute/data ratios"] },
    ]
  },
  {
    weekNumber: 9,
    title: "Model Compression",
    theme: "Volume I: Optimization",
    category: "Part III",
    objective: "Understand techniques to compress models for deployment (Quantization, Pruning).",
    expectedOutput: "A quantized model and compression report.",
    startDate: "2026-10-12",
    studyMode: "research-prep",
    lessons: [
      { id: "w9-d1", day: "mon", type: "read", title: "Chapter 9: Model Compression", description: "Read Chapter 9 from MLSysBook Volume I.", estimatedHours: 2.5, tasks: ["Read Chapter 9: Model Compression", "Study Quantization (PTQ/QAT), Pruning, and Knowledge Distillation"] },
      { id: "w9-d2", day: "tue", type: "watch", title: "Compression Techniques", description: "Watch lecture on Model Compression.", estimatedHours: 1.5, tasks: ["Watch lecture on Model Compression", "Understand tradeoffs between INT8/FP16 and FP32"] },
      { id: "w9-d3", day: "wed", type: "build", title: "Quantization Lab", description: "Apply Post-Training Quantization.", estimatedHours: 3, tasks: ["Quantize a trained model to INT8", "Measure inference speedup and accuracy drop"] },
      { id: "w9-d4", day: "thu", type: "explore", title: "Knowledge Distillation", description: "Explore KD setups.", estimatedHours: 2, tasks: ["Analyze teacher-student architectures", "Review loss functions for distillation"] },
      { id: "w9-d5", day: "fri", type: "research", title: "Advanced Quantization", description: "Research modern quantization schemes.", estimatedHours: 2, tasks: ["Investigate AWQ, GPTQ, or SmoothQuant", "Write a summary of weight-only vs activation quantization"] },
    ]
  },
  {
    weekNumber: 10,
    title: "Hardware Acceleration",
    theme: "Volume I: Optimization",
    category: "Part III",
    objective: "Explore how ML workloads map to underlying hardware (GPUs, TPUs).",
    expectedOutput: "Hardware utilization profiling report.",
    startDate: "2026-10-19",
    studyMode: "deep-study",
    lessons: [
      { id: "w10-d1", day: "mon", type: "read", title: "Chapter 10: Hardware Acceleration", description: "Read Chapter 10 from MLSysBook Volume I.", estimatedHours: 2.5, tasks: ["Read Chapter 10: Hardware Acceleration", "Study GPU architecture, SMs, and memory hierarchy"] },
      { id: "w10-d2", day: "tue", type: "watch", title: "GPU Architecture", description: "Watch lecture on Hardware Acceleration.", estimatedHours: 1.5, tasks: ["Watch lecture on Hardware Acceleration", "Understand Tensor Cores and warp scheduling"] },
      { id: "w10-d3", day: "wed", type: "build", title: "Hardware Kits", description: "Experiment with Hardware Kits.", estimatedHours: 3, tasks: ["Use Hardware Kits to simulate workloads", "Profile a kernel using Nsight Systems"] },
      { id: "w10-d4", day: "thu", type: "explore", title: "Memory Bandwidth", description: "Explore the roofline model.", estimatedHours: 2, tasks: ["Draw a roofline model for a specific GPU", "Determine if a layer is compute or memory bound"] },
      { id: "w10-d5", day: "fri", type: "research", title: "Domain Specific Architectures", description: "Research ASICs and TPUs.", estimatedHours: 2, tasks: ["Investigate TPU architecture vs GPU", "Analyze Systolic Arrays"] },
    ]
  },
  {
    weekNumber: 11,
    title: "Benchmarking",
    theme: "Volume I: Optimization",
    category: "Part III",
    objective: "Learn how to rigorously benchmark ML systems.",
    expectedOutput: "A comprehensive benchmarking suite for latency and throughput.",
    startDate: "2026-10-26",
    studyMode: "standard",
    lessons: [
      { id: "w11-d1", day: "mon", type: "read", title: "Chapter 11: Benchmarking", description: "Read Chapter 11 from MLSysBook Volume I.", estimatedHours: 2, tasks: ["Read Chapter 11: Benchmarking", "Study latency, throughput, and tail latency (p99)"] },
      { id: "w11-d2", day: "tue", type: "watch", title: "MLPerf", description: "Watch lecture on Benchmarking.", estimatedHours: 1.5, tasks: ["Watch lecture on Benchmarking", "Understand the MLPerf benchmarking methodology"] },
      { id: "w11-d3", day: "wed", type: "build", title: "Benchmarking Suite", description: "Build a rigorous benchmarking script.", estimatedHours: 2.5, tasks: ["Write a script to measure throughput and latency", "Include GPU warmup and synchronization"] },
      { id: "w11-d4", day: "thu", type: "explore", title: "Profiling Tools", description: "Explore systems profiling.", estimatedHours: 2, tasks: ["Use PyTorch Profiler to analyze a model", "Identify host-to-device bottlenecks"] },
      { id: "w11-d5", day: "fri", type: "research", title: "Micro-benchmarks", description: "Research isolating system components for testing.", estimatedHours: 2, tasks: ["Design a micro-benchmark for a specific op", "Analyze the impact of batch size on latency"] },
    ]
  },

  // Part IV: Deployment
  {
    weekNumber: 12,
    title: "Model Serving",
    theme: "Volume I: Deployment",
    category: "Part IV",
    objective: "Understand how to serve ML models in production environments.",
    expectedOutput: "A deployed model server handling REST/gRPC requests.",
    startDate: "2026-11-02",
    studyMode: "standard",
    lessons: [
      { id: "w12-d1", day: "mon", type: "read", title: "Chapter 12: Model Serving", description: "Read Chapter 12 from MLSysBook Volume I.", estimatedHours: 2, tasks: ["Read Chapter 12: Model Serving", "Study online vs offline serving, and batching"] },
      { id: "w12-d2", day: "tue", type: "watch", title: "Serving Systems", description: "Watch lecture on Model Serving.", estimatedHours: 1.5, tasks: ["Watch lecture on Model Serving", "Understand dynamic batching and concurrent requests"] },
      { id: "w12-d3", day: "wed", type: "build", title: "Serving Setup", description: "Deploy a model using FastAPI and TorchServe/Triton.", estimatedHours: 2.5, tasks: ["Wrap a model in a FastAPI endpoint", "Implement dynamic batching"] },
      { id: "w12-d4", day: "thu", type: "explore", title: "gRPC vs REST", description: "Explore communication protocols.", estimatedHours: 2, tasks: ["Compare gRPC and REST for model serving", "Analyze serialization overhead"] },
      { id: "w12-d5", day: "fri", type: "research", title: "Multi-Model Serving", description: "Research serving architectures for multiple models.", estimatedHours: 2, tasks: ["Investigate Triton Inference Server", "Analyze memory sharing across models"] },
    ]
  },
  {
    weekNumber: 13,
    title: "ML Operations",
    theme: "Volume I: Deployment",
    category: "Part IV",
    objective: "Master MLOps: monitoring, logging, and continuous evaluation.",
    expectedOutput: "A monitoring dashboard for a deployed model.",
    startDate: "2026-11-09",
    studyMode: "standard",
    lessons: [
      { id: "w13-d1", day: "mon", type: "read", title: "Chapter 13: ML Operations", description: "Read Chapter 13 from MLSysBook Volume I.", estimatedHours: 2, tasks: ["Read Chapter 13: ML Operations", "Study monitoring data drift, concept drift, and system health"] },
      { id: "w13-d2", day: "tue", type: "watch", title: "MLOps Lifecycle", description: "Watch lecture on MLOps.", estimatedHours: 1.5, tasks: ["Watch lecture on ML Operations", "Understand shadow deployment and A/B testing"] },
      { id: "w13-d3", day: "wed", type: "build", title: "Monitoring Setup", description: "Implement Prometheus/Grafana monitoring.", estimatedHours: 2.5, tasks: ["Expose metrics from the serving container", "Build a Grafana dashboard for inference metrics"] },
      { id: "w13-d4", day: "thu", type: "explore", title: "Drift Detection", description: "Explore statistical drift detection.", estimatedHours: 2, tasks: ["Review KS-test and population stability index", "Implement a drift detection alarm"] },
      { id: "w13-d5", day: "fri", type: "research", title: "Incident Response", description: "Research ML incident response.", estimatedHours: 2, tasks: ["Create a playbook for model degradation", "Analyze rollback strategies"] },
    ]
  },
  {
    weekNumber: 14,
    title: "Responsible Engineering",
    theme: "Volume I: Deployment",
    category: "Part IV",
    objective: "Integrate safety, fairness, and interpretability into ML Systems.",
    expectedOutput: "A fairness and safety evaluation report.",
    startDate: "2026-11-16",
    studyMode: "research-prep",
    lessons: [
      { id: "w14-d1", day: "mon", type: "read", title: "Chapter 14: Responsible Engineering", description: "Read Chapter 14 from MLSysBook Volume I.", estimatedHours: 2, tasks: ["Read Chapter 14: Responsible Engineering", "Study bias mitigation and interpretability tools"] },
      { id: "w14-d2", day: "tue", type: "watch", title: "AI Safety", description: "Watch lecture on Responsible Engineering.", estimatedHours: 1.5, tasks: ["Watch lecture on Responsible Engineering", "Understand system-level guardrails"] },
      { id: "w14-d3", day: "wed", type: "build", title: "Guardrails", description: "Implement input/output guardrails.", estimatedHours: 2.5, tasks: ["Add a moderation endpoint to the serving pipeline", "Implement confidence-based fallbacks"] },
      { id: "w14-d4", day: "thu", type: "explore", title: "Interpretability", description: "Explore SHAP/LIME integration.", estimatedHours: 2, tasks: ["Generate SHAP values for an inference request", "Analyze latency overhead of interpretability"] },
      { id: "w14-d5", day: "fri", type: "research", title: "Red Teaming", description: "Research red teaming ML systems.", estimatedHours: 2, tasks: ["Investigate adversarial attacks on serving systems", "Draft a red teaming strategy"] },
    ]
  },
  {
    weekNumber: 15,
    title: "Conclusion (Vol I)",
    theme: "Volume I: Foundations",
    category: "Wrap-up",
    objective: "Synthesize Volume I concepts into a unified systems view.",
    expectedOutput: "Comprehensive architectural diagram of an end-to-end ML System.",
    startDate: "2026-11-23",
    studyMode: "review",
    lessons: [
      { id: "w15-d1", day: "mon", type: "read", title: "Chapter 15: Conclusion", description: "Read Chapter 15 from MLSysBook Volume I.", estimatedHours: 2, tasks: ["Read Chapter 15: Conclusion", "Review core principles across Foundations, Build, Optimize, Deploy"] },
      { id: "w15-d2", day: "tue", type: "watch", title: "Vol I Retrospective", description: "Review Vol I key lectures.", estimatedHours: 1.5, tasks: ["Review notes from Vol I", "Synthesize the ML lifecycle"] },
      { id: "w15-d3", day: "wed", type: "build", title: "System Architecture", description: "Design a complete system architecture.", estimatedHours: 3, tasks: ["Draw an end-to-end architecture diagram", "Identify data, compute, and serving boundaries"] },
      { id: "w15-d4", day: "thu", type: "explore", title: "Case Studies", description: "Explore full-stack ML case studies.", estimatedHours: 2, tasks: ["Review a published architecture (e.g. Netflix, Uber)", "Map it to Vol I concepts"] },
      { id: "w15-d5", day: "fri", type: "research", title: "Vol II Prep", description: "Prepare for Distributed Systems in Volume II.", estimatedHours: 2, tasks: ["Identify limitations of single-node systems", "Outline goals for Volume II (At Scale)"] },
    ]
  },
  {
    weekNumber: 16,
    title: "Buffer & Review Week",
    theme: "Volume I: Foundations",
    category: "Buffer",
    objective: "Catch up on Volume I labs and finalize TinyTorch implementations.",
    expectedOutput: "All Volume I labs and notes completed and pushed.",
    startDate: "2026-11-30",
    studyMode: "review",
    lessons: [
      { id: "w16-d1", day: "mon", type: "read", title: "Review Period", description: "Review any missed readings from Vol I.", estimatedHours: 2, tasks: ["Review missed chapters", "Consolidate notes"] },
      { id: "w16-d3", day: "wed", type: "build", title: "Complete TinyTorch", description: "Finalize TinyTorch Autograd and Training loops.", estimatedHours: 4, tasks: ["Debug remaining TinyTorch issues", "Push code to GitHub"] },
      { id: "w16-d5", day: "fri", type: "research", title: "Gap Analysis", description: "Identify personal knowledge gaps before scaling.", estimatedHours: 2, tasks: ["Self-assess understanding of compilers, memory, and data loading", "Plan mitigation for weak areas"] },
    ]
  },

  // ============================================================================
  // VOLUME II: AT SCALE (Weeks 17 - 32)
  // ============================================================================

  // Part I: Fleet Operations
  {
    weekNumber: 17,
    title: "Compute Infrastructure",
    theme: "Volume II: Fleet",
    category: "Part I",
    objective: "Understand cluster-level compute infrastructure for ML.",
    expectedOutput: "Architecture of a multi-node compute cluster.",
    startDate: "2026-12-07",
    studyMode: "standard",
    lessons: [
      { id: "w17-d1", day: "mon", type: "read", title: "Chapter 1: Compute Infrastructure", description: "Read Vol II, Chapter 1.", estimatedHours: 2, tasks: ["Read Chapter 1: Compute Infrastructure", "Study racks, topologies, and cluster design"] },
      { id: "w17-d2", day: "tue", type: "watch", title: "Datacenter Architecture", description: "Watch lecture on Datacenters.", estimatedHours: 1.5, tasks: ["Watch lecture on Compute Infrastructure", "Understand power and cooling constraints"] },
      { id: "w17-d3", day: "wed", type: "build", title: "Cluster Simulation", description: "Use MLSys·im to model a cluster.", estimatedHours: 2.5, tasks: ["Simulate a multi-rack GPU cluster", "Calculate theoretical peak cluster FLOPS"] },
      { id: "w17-d4", day: "thu", type: "explore", title: "Heterogeneous Compute", description: "Explore mixed clusters.", estimatedHours: 2, tasks: ["Analyze CPU/GPU/TPU heterogeneous clusters", "Review resource allocation challenges"] },
      { id: "w17-d5", day: "fri", type: "research", title: "Cost Modeling", description: "Research the economics of ML infrastructure.", estimatedHours: 2, tasks: ["Model CapEx vs OpEx for an ML cluster", "Analyze cloud vs on-prem tradeoffs"] },
    ]
  },
  {
    weekNumber: 18,
    title: "Network Fabrics",
    theme: "Volume II: Fleet",
    category: "Part I",
    objective: "Deep dive into datacenter networking, InfiniBand, and RoCE.",
    expectedOutput: "Network topology mapping.",
    startDate: "2026-12-14",
    studyMode: "deep-study",
    lessons: [
      { id: "w18-d1", day: "mon", type: "read", title: "Chapter 2: Network Fabrics", description: "Read Vol II, Chapter 2.", estimatedHours: 2.5, tasks: ["Read Chapter 2: Network Fabrics", "Study InfiniBand, RoCE, and non-blocking topologies"] },
      { id: "w18-d2", day: "tue", type: "watch", title: "High-Performance Networking", description: "Watch lecture on Network Fabrics.", estimatedHours: 1.5, tasks: ["Watch lecture on Network Fabrics", "Understand Tor, Spine-Leaf, and NVLink/NVSwitch"] },
      { id: "w18-d3", day: "wed", type: "build", title: "Topology Simulation", description: "Simulate network congestion.", estimatedHours: 2.5, tasks: ["Simulate a Fat-Tree topology in MLSys·im", "Identify network bottlenecks during all-reduce"] },
      { id: "w18-d4", day: "thu", type: "explore", title: "NVLink vs PCIe", description: "Explore intra-node vs inter-node networking.", estimatedHours: 2, tasks: ["Compare PCIe Gen5 bandwidth with NVLink 4.0", "Analyze multi-rail networking"] },
      { id: "w18-d5", day: "fri", type: "research", title: "Network Contention", description: "Research network congestion control.", estimatedHours: 2, tasks: ["Investigate PFC and RDMA", "Write a summary on how congestion impacts ML training"] },
    ]
  },
  {
    weekNumber: 19,
    title: "Data Storage",
    theme: "Volume II: Fleet",
    category: "Part I",
    objective: "Understand distributed file systems and high-throughput storage for ML.",
    expectedOutput: "Storage tiering strategy.",
    startDate: "2026-12-21",
    studyMode: "standard",
    lessons: [
      { id: "w19-d1", day: "mon", type: "read", title: "Chapter 3: Data Storage", description: "Read Vol II, Chapter 3.", estimatedHours: 2, tasks: ["Read Chapter 3: Data Storage", "Study parallel file systems and object storage"] },
      { id: "w19-d2", day: "tue", type: "watch", title: "Storage at Scale", description: "Watch lecture on Data Storage.", estimatedHours: 1.5, tasks: ["Watch lecture on Data Storage", "Understand IOPS vs Throughput for ML workloads"] },
      { id: "w19-d3", day: "wed", type: "build", title: "Storage Simulation", description: "Simulate storage bottlenecks.", estimatedHours: 2.5, tasks: ["Model a distributed storage system reading to GPU memory", "Calculate required read bandwidth for large language models"] },
      { id: "w19-d4", day: "thu", type: "explore", title: "Caching Layers", description: "Explore distributed caching.", estimatedHours: 2, tasks: ["Analyze node-local caching vs global storage", "Review mechanisms to prevent I/O starvation"] },
      { id: "w19-d5", day: "fri", type: "research", title: "Checkpointing I/O", description: "Research synchronous vs asynchronous checkpointing.", estimatedHours: 2, tasks: ["Investigate the I/O cost of saving 100B parameter checkpoints", "Analyze asynchronous state saving"] },
    ]
  },

  // Part II: Distributed ML
  {
    weekNumber: 20,
    title: "Distributed Training",
    theme: "Volume II: Distributed ML",
    category: "Part II",
    objective: "Master Data Parallelism, Tensor Parallelism, and Pipeline Parallelism.",
    expectedOutput: "Implementation of a 3D parallel training setup.",
    startDate: "2026-12-28",
    studyMode: "deep-study",
    lessons: [
      { id: "w20-d1", day: "mon", type: "read", title: "Chapter 4: Distributed Training", description: "Read Vol II, Chapter 4.", estimatedHours: 2.5, tasks: ["Read Chapter 4: Distributed Training", "Study DP, TP, and PP methodologies"] },
      { id: "w20-d2", day: "tue", type: "watch", title: "3D Parallelism", description: "Watch lecture on Distributed Training.", estimatedHours: 1.5, tasks: ["Watch lecture on Distributed Training", "Understand how to combine parallel strategies (3D Parallelism)"] },
      { id: "w20-d3", day: "wed", type: "build", title: "Parallelism Setup", description: "Implement FSDP / DeepSpeed.", estimatedHours: 3, tasks: ["Set up a distributed training script using FSDP", "Configure a multi-GPU environment locally or in cloud"] },
      { id: "w20-d4", day: "thu", type: "explore", title: "Pipeline Bubbles", description: "Explore Pipeline Parallelism inefficiencies.", estimatedHours: 2, tasks: ["Analyze pipeline bubble overhead", "Review GPipe and Megatron-LM schedules"] },
      { id: "w20-d5", day: "fri", type: "research", title: "Memory Overheads", description: "Research activation memory in distributed training.", estimatedHours: 2, tasks: ["Calculate memory requirements for a 7B model using Adam", "Investigate activation recomputation/checkpointing"] },
    ]
  },
  {
    weekNumber: 21,
    title: "Collective Communication",
    theme: "Volume II: Distributed ML",
    category: "Part II",
    objective: "Understand NCCL, MPI, and collective operations (AllReduce, AllGather).",
    expectedOutput: "Communication profiling trace.",
    startDate: "2027-01-04",
    studyMode: "deep-study",
    lessons: [
      { id: "w21-d1", day: "mon", type: "read", title: "Chapter 5: Collective Communication", description: "Read Vol II, Chapter 5.", estimatedHours: 2.5, tasks: ["Read Chapter 5: Collective Communication", "Study AllReduce, Broadcast, Gather, Scatter, and AllGather"] },
      { id: "w21-d2", day: "tue", type: "watch", title: "NCCL & MPI", description: "Watch lecture on Collective Communication.", estimatedHours: 1.5, tasks: ["Watch lecture on Collective Communication", "Understand ring algorithms and tree algorithms"] },
      { id: "w21-d3", day: "wed", type: "build", title: "Communication Benchmarks", description: "Benchmark NCCL operations.", estimatedHours: 2.5, tasks: ["Run nccl-tests to measure AllReduce bandwidth", "Analyze the impact of message size on latency"] },
      { id: "w21-d4", day: "thu", type: "explore", title: "Overlap Compute/Comm", description: "Explore communication hiding.", estimatedHours: 2, tasks: ["Analyze how backward pass compute overlaps with gradient AllReduce", "Profile a PyTorch trace for overlap"] },
      { id: "w21-d5", day: "fri", type: "research", title: "Custom Collectives", description: "Research sparse or quantized communication.", estimatedHours: 2, tasks: ["Investigate 1-bit Adam and gradient compression", "Analyze the tradeoff between compute overhead and communication savings"] },
    ]
  },
  {
    weekNumber: 22,
    title: "Fault Tolerance",
    theme: "Volume II: Distributed ML",
    category: "Part II",
    objective: "Design systems that survive node failures during long-running training.",
    expectedOutput: "A fault-tolerant training script.",
    startDate: "2027-01-11",
    studyMode: "standard",
    lessons: [
      { id: "w22-d1", day: "mon", type: "read", title: "Chapter 6: Fault Tolerance", description: "Read Vol II, Chapter 6.", estimatedHours: 2, tasks: ["Read Chapter 6: Fault Tolerance", "Study failure rates at scale and recovery mechanisms"] },
      { id: "w22-d2", day: "tue", type: "watch", title: "Handling Failures", description: "Watch lecture on Fault Tolerance.", estimatedHours: 1.5, tasks: ["Watch lecture on Fault Tolerance", "Understand checkpointing, elasticity, and fast recovery"] },
      { id: "w22-d3", day: "wed", type: "build", title: "Torch Distributed Elastic", description: "Implement fault-tolerant training.", estimatedHours: 2.5, tasks: ["Modify a training script to use torchrun", "Simulate a node failure and observe recovery"] },
      { id: "w22-d4", day: "thu", type: "explore", title: "Straggler Mitigation", description: "Explore slow nodes.", estimatedHours: 2, tasks: ["Analyze the impact of one slow GPU on synchronous AllReduce", "Review straggler mitigation techniques"] },
      { id: "w22-d5", day: "fri", type: "research", title: "In-Memory Checkpointing", description: "Research advanced fault tolerance.", estimatedHours: 2, tasks: ["Investigate in-memory checkpoint replication", "Compare synchronous to asynchronous distributed checkpointing"] },
    ]
  },
  {
    weekNumber: 23,
    title: "Fleet Orchestration",
    theme: "Volume II: Distributed ML",
    category: "Part II",
    objective: "Understand cluster managers (Kubernetes, Slurm) and scheduling.",
    expectedOutput: "Kubernetes ML workflow deployment.",
    startDate: "2027-01-18",
    studyMode: "standard",
    lessons: [
      { id: "w23-d1", day: "mon", type: "read", title: "Chapter 7: Fleet Orchestration", description: "Read Vol II, Chapter 7.", estimatedHours: 2, tasks: ["Read Chapter 7: Fleet Orchestration", "Study job scheduling, gang scheduling, and bin packing"] },
      { id: "w23-d2", day: "tue", type: "watch", title: "Cluster Managers", description: "Watch lecture on Fleet Orchestration.", estimatedHours: 1.5, tasks: ["Watch lecture on Fleet Orchestration", "Understand Kubernetes (K8s) vs Slurm for ML workloads"] },
      { id: "w23-d3", day: "wed", type: "build", title: "K8s Deployment", description: "Deploy a distributed job using KubeFlow / Volcano.", estimatedHours: 3, tasks: ["Set up a local Minikube cluster with GPU simulation", "Deploy a simple PyTorchJob"] },
      { id: "w23-d4", day: "thu", type: "explore", title: "Gang Scheduling", description: "Explore the necessity of co-scheduling.", estimatedHours: 2, tasks: ["Analyze why ML needs all-or-nothing scheduling (gang scheduling)", "Review deadlocks in naive schedulers"] },
      { id: "w23-d5", day: "fri", type: "research", title: "Topology-Aware Scheduling", description: "Research advanced scheduling.", estimatedHours: 2, tasks: ["Investigate topology-aware pod placement in Kubernetes", "Analyze how scheduling impacts network locality"] },
    ]
  },

  // Part III: Deployment
  {
    weekNumber: 24,
    title: "Performance Engineering",
    theme: "Volume II: Deployment",
    category: "Part III",
    objective: "Master profiling and optimizing models for maximum deployment performance.",
    expectedOutput: "A highly optimized inference engine component.",
    startDate: "2027-01-25",
    studyMode: "research-prep",
    lessons: [
      { id: "w24-d1", day: "mon", type: "read", title: "Chapter 8: Performance Engineering", description: "Read Vol II, Chapter 8.", estimatedHours: 2.5, tasks: ["Read Chapter 8: Performance Engineering", "Study operator fusion, memory layouts, and kernel optimization"] },
      { id: "w24-d2", day: "tue", type: "watch", title: "Deep Profiling", description: "Watch lecture on Performance Engineering.", estimatedHours: 1.5, tasks: ["Watch lecture on Performance Engineering", "Understand bottleneck analysis methodologies"] },
      { id: "w24-d3", day: "wed", type: "build", title: "Triton Kernels", description: "Write custom optimized kernels.", estimatedHours: 3, tasks: ["Write a custom FlashAttention or Matrix Multiplication kernel in OpenAI Triton", "Benchmark against cuBLAS"] },
      { id: "w24-d4", day: "thu", type: "explore", title: "Memory Layouts", description: "Explore NCHW vs NHWC.", estimatedHours: 2, tasks: ["Analyze how memory layout impacts Tensor Core utilization", "Review padding and memory alignment requirements"] },
      { id: "w24-d5", day: "fri", type: "research", title: "Auto-Tuning", description: "Research compiler auto-tuning.", estimatedHours: 2, tasks: ["Investigate TVM AutoTVM and Ansor", "Analyze search space for kernel optimization"] },
    ]
  },
  {
    weekNumber: 25,
    title: "Inference",
    theme: "Volume II: Deployment",
    category: "Part III",
    objective: "Scale inference to handle massive throughput and large models.",
    expectedOutput: "A high-throughput LLM serving setup.",
    startDate: "2027-02-01",
    studyMode: "deep-study",
    lessons: [
      { id: "w25-d1", day: "mon", type: "read", title: "Chapter 9: Inference", description: "Read Vol II, Chapter 9.", estimatedHours: 2, tasks: ["Read Chapter 9: Inference", "Study KV caching, continuous batching, and speculative decoding"] },
      { id: "w25-d2", day: "tue", type: "watch", title: "Inference at Scale", description: "Watch lecture on Inference.", estimatedHours: 1.5, tasks: ["Watch lecture on Inference", "Understand Time To First Token (TTFT) and Inter-Token Latency (ITL)"] },
      { id: "w25-d3", day: "wed", type: "build", title: "vLLM Setup", description: "Deploy a model using vLLM.", estimatedHours: 2.5, tasks: ["Set up vLLM for serving an LLM", "Benchmark throughput using PagedAttention"] },
      { id: "w25-d4", day: "thu", type: "explore", title: "Speculative Decoding", description: "Explore latency reduction.", estimatedHours: 2, tasks: ["Analyze how speculative decoding bypasses memory bandwidth limits", "Review draft vs target model tradeoffs"] },
      { id: "w25-d5", day: "fri", type: "research", title: "Distributed Inference", description: "Research multi-GPU serving.", estimatedHours: 2, tasks: ["Investigate Tensor Parallel inference", "Calculate the KV cache memory size for a 100k context window"] },
    ]
  },
  {
    weekNumber: 26,
    title: "Edge Intelligence",
    theme: "Volume II: Deployment",
    category: "Part III",
    objective: "Deploy ML models to resource-constrained edge devices.",
    expectedOutput: "A model running on a mobile or IoT simulator.",
    startDate: "2027-02-08",
    studyMode: "standard",
    lessons: [
      { id: "w26-d1", day: "mon", type: "read", title: "Chapter 10: Edge Intelligence", description: "Read Vol II, Chapter 10.", estimatedHours: 2, tasks: ["Read Chapter 10: Edge Intelligence", "Study power constraints, ONNX Runtime, and mobile NPUs"] },
      { id: "w26-d2", day: "tue", type: "watch", title: "ML on the Edge", description: "Watch lecture on Edge Intelligence.", estimatedHours: 1.5, tasks: ["Watch lecture on Edge Intelligence", "Understand thermal throttling and battery impact"] },
      { id: "w26-d3", day: "wed", type: "build", title: "ONNX Export", description: "Export and optimize a model for edge.", estimatedHours: 2.5, tasks: ["Export a PyTorch model to ONNX", "Run ONNX Runtime optimizations and profiling"] },
      { id: "w26-d4", day: "thu", type: "explore", title: "Federated Learning", description: "Explore decentralized training.", estimatedHours: 2, tasks: ["Review Federated Averaging (FedAvg)", "Analyze communication overhead in FL"] },
      { id: "w26-d5", day: "fri", type: "research", title: "Edge Hardware", description: "Research edge accelerators.", estimatedHours: 2, tasks: ["Investigate Apple Neural Engine or Google Edge TPU", "Write a summary on edge compilation toolchains"] },
    ]
  },
  {
    weekNumber: 27,
    title: "Ops Scale",
    theme: "Volume II: Deployment",
    category: "Part III",
    objective: "Manage models, deployments, and infrastructure at hyperscale.",
    expectedOutput: "A multi-region deployment strategy document.",
    startDate: "2027-02-15",
    studyMode: "standard",
    lessons: [
      { id: "w27-d1", day: "mon", type: "read", title: "Chapter 11: Ops Scale", description: "Read Vol II, Chapter 11.", estimatedHours: 2, tasks: ["Read Chapter 11: Ops Scale", "Study global load balancing, multi-region deployments, and auto-scaling"] },
      { id: "w27-d2", day: "tue", type: "watch", title: "Hyperscale ML", description: "Watch lecture on Ops Scale.", estimatedHours: 1.5, tasks: ["Watch lecture on Ops Scale", "Understand scaling laws applied to infrastructure operations"] },
      { id: "w27-d3", day: "wed", type: "build", title: "Auto-Scaling", description: "Implement auto-scaling policies.", estimatedHours: 2.5, tasks: ["Configure KEDA (Kubernetes Event-driven Autoscaling) based on GPU utilization", "Test scale-up and scale-down latency"] },
      { id: "w27-d4", day: "thu", type: "explore", title: "Cost Optimization", description: "Explore spot instances and serverless ML.", estimatedHours: 2, tasks: ["Analyze the economics of serverless inference", "Review handling preemption on spot instances"] },
      { id: "w27-d5", day: "fri", type: "research", title: "Observability at Scale", description: "Research hyperscale observability.", estimatedHours: 2, tasks: ["Investigate distributed tracing for ML pipelines", "Design a logging architecture for 100k RPS"] },
    ]
  },

  // Part IV: Responsible Fleet
  {
    weekNumber: 28,
    title: "Security & Privacy",
    theme: "Volume II: Responsible Fleet",
    category: "Part IV",
    objective: "Secure ML infrastructure and protect data privacy at scale.",
    expectedOutput: "A threat model for a distributed ML system.",
    startDate: "2027-02-22",
    studyMode: "research-prep",
    lessons: [
      { id: "w28-d1", day: "mon", type: "read", title: "Chapter 12: Security & Privacy", description: "Read Vol II, Chapter 12.", estimatedHours: 2, tasks: ["Read Chapter 12: Security & Privacy", "Study Data poisoning, Model extraction, and Differential Privacy"] },
      { id: "w28-d2", day: "tue", type: "watch", title: "ML Security", description: "Watch lecture on Security & Privacy.", estimatedHours: 1.5, tasks: ["Watch lecture on Security & Privacy", "Understand securing the ML supply chain"] },
      { id: "w28-d3", day: "wed", type: "build", title: "Differential Privacy", description: "Implement DP-SGD.", estimatedHours: 2.5, tasks: ["Implement Differentially Private SGD using Opacus", "Analyze the tradeoff between privacy epsilon and accuracy"] },
      { id: "w28-d4", day: "thu", type: "explore", title: "Confidential Computing", description: "Explore secure enclaves.", estimatedHours: 2, tasks: ["Review TEEs (Trusted Execution Environments) for ML", "Analyze performance overhead of encryption in memory"] },
      { id: "w28-d5", day: "fri", type: "research", title: "Threat Modeling", description: "Research ML vulnerabilities.", estimatedHours: 2, tasks: ["Create a threat model for a federated learning system", "Investigate prompt injection in LLM serving"] },
    ]
  },
  {
    weekNumber: 29,
    title: "Robust AI",
    theme: "Volume II: Responsible Fleet",
    category: "Part IV",
    objective: "Ensure fleet-wide ML systems are robust to edge cases and adversarial inputs.",
    expectedOutput: "Robustness evaluation framework.",
    startDate: "2027-03-01",
    studyMode: "standard",
    lessons: [
      { id: "w29-d1", day: "mon", type: "read", title: "Chapter 13: Robust AI", description: "Read Vol II, Chapter 13.", estimatedHours: 2, tasks: ["Read Chapter 13: Robust AI", "Study adversarial robustness and out-of-distribution generalization"] },
      { id: "w29-d2", day: "tue", type: "watch", title: "Adversarial Machine Learning", description: "Watch lecture on Robust AI.", estimatedHours: 1.5, tasks: ["Watch lecture on Robust AI", "Understand evasion and poisoning attacks"] },
      { id: "w29-d3", day: "wed", type: "build", title: "Adversarial Training", description: "Implement adversarial training.", estimatedHours: 2.5, tasks: ["Generate adversarial examples using FGSM", "Train a robust model using adversarial data augmentation"] },
      { id: "w29-d4", day: "thu", type: "explore", title: "Distribution Shift", description: "Explore system responses to drift.", estimatedHours: 2, tasks: ["Analyze how invariant risk minimization helps with OOD", "Review continuous adaptation strategies"] },
      { id: "w29-d5", day: "fri", type: "research", title: "Robustness Metrics", description: "Research certifying robustness.", estimatedHours: 2, tasks: ["Investigate randomized smoothing", "Write a summary on formal verification of neural networks"] },
    ]
  },
  {
    weekNumber: 30,
    title: "Sustainable AI",
    theme: "Volume II: Responsible Fleet",
    category: "Part IV",
    objective: "Measure and optimize the carbon footprint and energy usage of ML operations.",
    expectedOutput: "A carbon tracking and energy optimization report.",
    startDate: "2027-03-08",
    studyMode: "standard",
    lessons: [
      { id: "w30-d1", day: "mon", type: "read", title: "Chapter 14: Sustainable AI", description: "Read Vol II, Chapter 14.", estimatedHours: 2, tasks: ["Read Chapter 14: Sustainable AI", "Study power usage effectiveness (PUE) and carbon intensity"] },
      { id: "w30-d2", day: "tue", type: "watch", title: "Green AI", description: "Watch lecture on Sustainable AI.", estimatedHours: 1.5, tasks: ["Watch lecture on Sustainable AI", "Understand energy proportionality and dynamic power management"] },
      { id: "w30-d3", day: "wed", type: "build", title: "Carbon Tracking", description: "Implement emissions tracking.", estimatedHours: 2.5, tasks: ["Integrate CodeCarbon into a training pipeline", "Calculate the total carbon footprint of a mock training run"] },
      { id: "w30-d4", day: "thu", type: "explore", title: "Power Management", description: "Explore GPU power limits.", estimatedHours: 2, tasks: ["Analyze the impact of lowering GPU power caps (nvidia-smi -pl)", "Review the tradeoff between power and training time"] },
      { id: "w30-d5", day: "fri", type: "research", title: "Spatial-Temporal Shifting", description: "Research scheduling for carbon awareness.", estimatedHours: 2, tasks: ["Investigate shifting workloads to low-carbon regions/times", "Design a carbon-aware job scheduler"] },
    ]
  },
  {
    weekNumber: 31,
    title: "Responsible AI",
    theme: "Volume II: Responsible Fleet",
    category: "Part IV",
    objective: "Govern and audit ML systems at the organizational level.",
    expectedOutput: "A compliance and governance framework document.",
    startDate: "2027-03-15",
    studyMode: "standard",
    lessons: [
      { id: "w31-d1", day: "mon", type: "read", title: "Chapter 15: Responsible AI", description: "Read Vol II, Chapter 15.", estimatedHours: 2, tasks: ["Read Chapter 15: Responsible AI", "Study AI governance, auditing, and regulatory compliance (e.g., EU AI Act)"] },
      { id: "w31-d2", day: "tue", type: "watch", title: "AI Governance", description: "Watch lecture on Responsible AI.", estimatedHours: 1.5, tasks: ["Watch lecture on Responsible AI", "Understand the lifecycle of model risk management"] },
      { id: "w31-d3", day: "wed", type: "build", title: "Model Cards", description: "Automate model card generation.", estimatedHours: 2.5, tasks: ["Build a system to automatically generate Model Cards from MLflow metadata", "Include fairness and performance metrics"] },
      { id: "w31-d4", day: "thu", type: "explore", title: "Auditability", description: "Explore system audit trails.", estimatedHours: 2, tasks: ["Analyze requirements for full reproducibility", "Review cryptographic hashing for model versioning"] },
      { id: "w31-d5", day: "fri", type: "research", title: "Alignment Systems", description: "Research RLHF systems.", estimatedHours: 2, tasks: ["Investigate the systems architecture required for Reinforcement Learning from Human Feedback", "Outline the data collection and training infrastructure"] },
    ]
  },

  // Capstone
  {
    weekNumber: 32,
    title: "Capstone & Conclusion",
    theme: "Volume II: Conclusion",
    category: "Wrap-up",
    objective: "Propose a novel ML Systems research problem based on the past 31 weeks.",
    expectedOutput: "A structured research proposal document.",
    startDate: "2027-03-22",
    studyMode: "review",
    lessons: [
      { id: "w32-d1", day: "mon", type: "read", title: "Conclusion (Vol II)", description: "Read Vol II, Chapter 16 (Conclusion).", estimatedHours: 2, tasks: ["Read Chapter 16: Conclusion", "Reflect on the integration of Fleet Operations, Distributed ML, and Deployment"] },
      { id: "w32-d2", day: "tue", type: "watch", title: "Future of ML Systems", description: "Watch final synthesis lecture.", estimatedHours: 1.5, tasks: ["Synthesize open problems in the field", "Identify areas ripe for research"] },
      { id: "w32-d3", day: "wed", type: "build", title: "Draft Proposal", description: "Write the initial draft of the Capstone.", estimatedHours: 4, tasks: ["Define the problem statement", "Outline the proposed system architecture or optimization"] },
      { id: "w32-d4", day: "thu", type: "explore", title: "Literature Review", description: "Solidify related work.", estimatedHours: 3, tasks: ["Conduct a literature review for the proposal", "Ensure the hypothesis is novel"] },
      { id: "w32-d5", day: "fri", type: "research", title: "Final Polish", description: "Finalize and publish the research proposal.", estimatedHours: 3, tasks: ["Review and refine the Capstone", "Publish the proposal to the portfolio"] },
    ]
  }
];
