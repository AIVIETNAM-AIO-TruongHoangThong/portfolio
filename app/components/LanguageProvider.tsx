'use client';

import { createContext, useContext, useEffect, useState, ReactNode } from 'react';

type Language = 'en' | 'ja';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};

interface LanguageProviderProps {
  children: ReactNode;
}

export const LanguageProvider = ({ children }: LanguageProviderProps) => {
  const [language, setLanguageState] = useState<Language>('en');

  useEffect(() => {
    if (typeof window === 'undefined') return;

    const stored = window.localStorage.getItem('language');
    if (stored === 'en' || stored === 'ja') {
      setLanguageState(stored);
      return;
    }

    const browserLang = navigator.language || (Array.isArray(navigator.languages) && navigator.languages[0]);
    if (browserLang && browserLang.toLowerCase().startsWith('ja')) {
      setLanguageState('ja');
    }
  }, []);

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
    if (typeof window !== 'undefined') {
      window.localStorage.setItem('language', lang);
    }
  };

  const translations = {
    // Navigation
    home: { en: './home', ja: './ホーム' },
    projects: { en: './projects', ja: './プロジェクト' },
    learning: { en: './learning', ja: './学習' },
    cv: { en: './cv', ja: './履歴書' },
    contact: { en: './contact', ja: './連絡先' },

    // Hero Section (data-focused)
    founderEngineer: { en: 'Software Engineer | AI & Data Focus', ja: 'ソフトウェアエンジニア | AI & データフォーカス' },
    building: { en: 'Uncovering', ja: '発見する' },
    dataDriven: { en: 'Insights through', ja: 'インサイトを' },
    solutionsAt: { en: 'Data Science', ja: 'データサイエンス' },
    scale: { en: '& AI', ja: '& AI' },
    heroBio: {
      en: "Software Engineer focused on AI & Data, with hands-on experience analyzing datasets, building predictive models, and applying machine learning and deep learning algorithms to uncover actionable insights.",
      ja: 'AIとデータ分野に焦点を当てたソフトウェアエンジニア。データセットの分析、予測モデルの構築、機械学習およびディープラーニングアルゴリズムの適用により、実用的なインサイトを発見する実務経験を持つ。'
    },
    viewProjects: { en: 'View_Projects', ja: 'プロジェクトを見る' },
    downloadCV: { en: 'Download CV', ja: '履歴書ダウンロード' },
    dataEngineering: { en: 'Machine Learning', ja: '機械学習' },
    aiMlIntegration: { en: 'Data Ingestion & Scraping', ja: 'データ収集 & スクレイピング' },
    fullStack: { en: 'Data Analysis & Visualization', ja: 'データ分析と可視化' },

    // About Page
    beforeDownloadCV: { en: 'Before You Download My CV', ja: '履歴書をダウンロードする前に' },
    importantNotice: { en: 'Important Notice', ja: '重要なお知らせ' },
    cvNotice: {
      en: 'I believe that a CV is just a summary of achievements and skills. To truly understand who I am and what drives me, I want you to read my personal story first. This journey has shaped me into what I am today.',
      ja: '履歴書は単なる成果とスキルの要約に過ぎないと私は信じています。本当に私が何者で何が私を駆り立てているかを理解するためには、まず私の個人的な物語を読んでほしいと思います。この旅が現在の私を形作りました。'
    },
    readMyStory: { en: 'Read My Story', ja: '私の物語を読む' },
    proceedToDownload: { en: 'Proceed to Download CV', ja: '履歴書のダウンロードへ進む' },
    myJourney: { en: 'My Journey', ja: 'これまでの歩み' },
    journeySubtitle: { en: 'From Japanese Studies to Information Technology, from self-taught to dual degrees', ja: '日本語学科から情報技術へ。独学から二つの学位へ。' },

    // About Page Story Sections
    earlyDaysTitle: { en: 'The Beginning: From Pascal to Japanese Studies', ja: '始まり：パスカルから日本語学科へ' },
    earlyDaysContent1: {
      en: 'My tech journey began with a false start in high school Pascal. Rather than pursuing CS immediately, I followed my passion for Japanese culture, earning a B.A. in Japanese Studies from USSH in 2020.',
      ja: '高校でのプログラミング体験はうまくいかず、一度はITから離れました。代わりに日本文化への情熱を追求し、2020年にUSSHで日本語学の学士号を取得しました。'
    },
    earlyDaysContent2: {
      en: 'This humanities background gave me a unique perspective on cross-cultural communication. I am now completing my second B.S. in Information Technology at UIT (graduating June 2026), combining technical expertise with cultural bridging.',
      ja: 'この人文学の背景は、異文化コミュニケーションにおいて独自の視点を与えてくれました。現在はUITで情報技術の第二学士課程にあり（2026年6月卒業予定）、技術と文化の架け橋となることを目指しています。'
    },
    earlyDaysContent3: {
      en: '',
      ja: ''
    },

    // Self-Taught Journey Section
    selfTaughtTitle: { en: 'Rediscovering Programming: From Games to Code', ja: 'プログラミングの再発見：ゲームからコードへ' },
    selfTaughtContent1: {
      en: 'During university, my love for gaming led me back to programming. I created my first games on itch.io, realizing that coding was simply a tool to build what I love.',
      ja: '大学在学中、ゲーム好きが高じて再びプログラミングの世界へ。itch.ioで自作ゲームを公開し、コーディングが「好きなものを作るためのツール」であることに気づきました。'
    },
    tryMyGames: { en: '🎮 Try my games:', ja: '🎮 自作ゲームはこちら：' },
    gameTimeKiller: { en: 'They might help you kill some time during breaks!', ja: '休憩中の暇つぶしにどうぞ！' },
    pSLiamNote: { en: 'P.S. Liam Vessalius is an anime reference - a nod to my Japanese cultural immersion.', ja: 'P.S. Liam Vessaliusはアニメのキャラクター名です。日本文化への没頭へのオマージュです。' },
    selfTaughtContent2: {
      en: 'After graduation, breaking into the tech industry with a humanities degree was tough. I taught languages to make ends meet while relentlessly upskilling in web development.',
      ja: '卒業後、文系出身でIT業界へ参入するのは困難でした。語学講師として生計を立てながら、Web開発のスキルを必死に磨きました。'
    },
    selfTaughtContent3: {
      en: 'While I haven\'t actively used my Japanese studies professionally, my language skills and cultural understanding remain strong assets for international projects.',
      ja: '語学力を仕事で直接活かす機会は少なかったものの、言語スキルと文化的な理解は、今でも国際的なプロジェクトにおいて強みとなっています。'
    },

    // About Page - Japanese Ability Note (final section)
    japaneseAbilityNote: {
      en: "I retain strong reading/listening comprehension in Japanese. With daily immersion (roughly six months), I can regain business-level spoken fluency and serve as an effective bridge for technical teams.",
      ja: '日本語の読解と聴解は維持しています。実務環境で約半年ほど日常的に使用すれば、ビジネスレベルの会話力も取り戻し、技術チームと日本側の効果的な架け橋になれると確信しています。'
    },
    selfTaughtContent4: {
      en: 'During the COVID lockdowns, I dedicated myself entirely to self-taught web development, focusing on SEO and WordPress. Through trial and error, I found my footing.',
      ja: 'コロナ禍のロックダウン中、SEOとWordPressを中心にWeb開発の独学に専念しました。試行錯誤を繰り返す中で、技術的な基盤を固めました。'
    },
    selfTaughtContent5: {
      en: 'These skills landed me my first freelance gigs, paving the way for my transition to professional backend and systems engineering. By 2022, I secured my first full-time role as a WordPress developer.',
      ja: 'これらのスキルで初のフリーランス案件を獲得し、バックエンドやシステムエンジニアリングへの道を切り拓きました。そして2022年、WordPress開発者として初のフルタイム職に就きました。'
    },

    // Professional Growth Section
    professionalGrowthTitle: { en: 'From Freelance to AI Engineering Leadership', ja: 'フリーランスからAIエンジニアリングリーダーへ' },
    professionalGrowthContent1: {
      en: 'Freelancing quickly scaled into full backend and systems engineering. I shifted from building simple web interfaces to designing scalable database structures, web scrapers, and background task architectures.',
      ja: 'フリーランスでの活動は、すぐに本格的なバックエンドやシステム開発へと発展しました。単純なWeb制作から、スケーラブルなDB設計、高効率なスクレイパー、バックグラウンド処理のアーキテクチャ設計へとシフトしました。'
    },
    professionalGrowthContent2: {
      en: "At Nexus Tech Global, I led the AI and backend engineering. Key accomplishments include: building our pgvector/LlamaIndex RAG pipeline, migrating to Crawl4AI to fix container OOM issues, refactoring Dramatiq workers to use a persistent AsyncIO event loop, and upgrading to React 19 / Vercel AI SDK v7.",
      ja: "Nexus Tech Globalでは、AIおよびバックエンドエンジニアリングを主導しました。主な実績：pgvector/LlamaIndexによるRAG構築、Crawl4AIへの移行によるOOM問題の解決、DramatiqワーカーのAsyncIO化によるスレッドセーフ向上、React 19 / Vercel AI SDK v7へのアップグレード。"
    },
    professionalGrowthContent3: {
      en: 'My hands-on experience at Nexus Tech Global and structured training in the AIO 2026 AI Program solidified my transition into AI/ML engineering. I specialize in bridging the gap between machine learning models and reliable backend systems.',
      ja: 'Nexus Tech Globalでの実務経験とAIO 2026 AIプログラムでの専門学習を通じて、AI/MLエンジニアリングへの移行を確固たるものにしました。機械学習モデルと堅牢なバックエンドシステムを繋ぐ開発を得意としています。'
    },

    // Future Goals Section
    futureGoalsTitle: { en: 'Looking Ahead: Completing the Circle', ja: 'これから：旅の締めくくりへ' },
    futureGoalsContent1: {
      en: 'I have completed all my coursework for my second Bachelor\'s degree in Information Technology at UIT, achieving a "Very Good" classification. I am graduating in June 2026.',
      ja: 'UITにおける情報技術の第二学士号課程の全科目を修了し、「Very Good（優）」の成績を収めました。2026年6月に卒業を迎えます。'
    },
    futureGoalsContent2: {
      en: 'My academic computer science background complements my practical engineering skills. Combined with my Japanese Studies degree, it enables me to serve as a bilingual engineer bridging technical teams and international partners.',
      ja: 'コンピュータサイエンスの学術的背景は、実践的な開発スキルを補完します。日本語学の学位と組み合わせることで、技術チームと国際的なパートナーを繋ぐバイリンガルエンジニアとして貢献できます。'
    },
    futureGoalsContent3: {
      en: 'I am seeking a full-time role as a Software Engineer (AI & Data Focus) or Machine Learning Practitioner, where I can utilize Python, Pandas, scikit-learn, deep learning frameworks, and advanced AI models to drive data-centric decisions.',
      ja: 'Python、Pandas、scikit-learn、ディープラーニングフレームワーク、高度なAIモデルを活用し、データ中心の意思決定を推進するソフトウェアエンジニア（AI・データフォーカス）としてのフルタイムの機会を探しています。'
    },

    // Call to Action
    storyCTA: { en: 'Now that you\'ve read my story, feel free to download my CV or get in touch.', ja: 'ここまで読んでいただきありがとうございます。履歴書のダウンロードや、ご相談のご連絡もぜひお待ちしています。' },
    getInTouch: { en: 'Get In Touch', ja: '連絡する' },

    // Footer
    initializeCollaboration: { en: "Ready to Collaborate?", ja: 'コラボレーションの準備はできていますか？' },
    availableForFreelance: { en: 'Specializing in machine learning, deep learning, and scalable backend systems. Actively seeking full-time opportunities.', ja: '機械学習、ディープラーニング、スケーラブルなバックエンドシステムに特化。フルタイムの機会を積極的に募集しています。' },
    sitemap: { en: 'Sitemap', ja: 'サイトマップ' },
    contactInfo: { en: 'Contact_Info', ja: '連絡先情報' },
    location: { en: 'Ho Chi Minh City, VN', ja: 'ホーチミン市、ベトナム' },
    systemRightsReserved: { en: 'System_All_Rights_Reserved.', ja: 'システム_全著作権所有。' },
    executedWith: { en: 'Executed with Logic & Caffeine', ja: '論理とカフェインで実行' },
 
    // Home - Selected Works
    selectedWorksHeading: { en: 'Selected Works', ja: '選抜プロジェクト' },
    productLeadershipHeading: { en: 'Production AI Platforms', ja: '本番運用AIプラットフォーム' },
    handsOnTechnicalHeading: { en: 'AI & Data Engineering', ja: 'AI & データエンジニアリング' },
    viewAllProjects: { en: 'view_all_projects()', ja: 'view_all_projects()' },
    productionBadge: { en: 'Production', ja: '本番環境' },
    nexusSelectedDescription: {
      en: 'Lead AI Engineer - Applied NLP and RAG methodologies to extract actionable intelligence from unstructured enterprise data.',
      ja: 'リードAIエンジニア - NLPとRAG手法を適用し、構造化されていないエンタープライズデータから実用的なインテリジェンスを抽出。'
    },
    siteboticSelectedDescription: {
      en: 'Lead AI Engineer — Designed data extraction pipelines and evaluated large language models for domain-specific chatbot generation.',
      ja: 'リードAIエンジニア — データ抽出パイプラインを設計し、ドメイン特化型チャットボット生成のための大規模言語モデルを評価。'
    },
    tagAiPlatforms: { en: 'AI Platforms', ja: 'AIプラットフォーム' },
    tagEtlPipelines: { en: 'ETL Pipelines', ja: 'ETLパイプライン' },
    tagDataProduct: { en: 'Data Product', ja: 'データプロダクト' },
    tagSaas: { en: 'SaaS', ja: 'SaaS' },
    tagAiPlatform: { en: 'AI Platform', ja: 'AIプラットフォーム' },
    visitLiveSite: { en: 'Visit live site', ja: '本番サイトを見る' },

    // Projects Page
    projectsHeroTitleLine1: { en: 'From Machine Learning Models to', ja: '機械学習モデルから' },
    projectsHeroTitleLine2: { en: 'AI & Data Products.', ja: 'AI & データプロダクトまで。' },
    projectsHeroDescription: {
      en: 'Applied machine learning, RAG pipelines, and data-centric software solutions. From data analysis and model training to intelligent feature integration, I build robust, data-focused software.',
      ja: '応用機械学習、RAGパイプライン、データ中心のソフトウェアソリューション。データ分析やモデル学習からインテリジェントな機能の統合まで、データに焦点を当てた堅牢なソフトウェアを構築します。'
    },
    statsCompanyFounded: { en: 'Company Founded', ja: '設立した会社' },
    statsProjectsBuilt: { en: 'Projects Built', ja: '構築したプロジェクト' },
    statsSaaSPlatform: { en: 'SaaS Platform', ja: 'SaaSプラットフォーム' },
    projectsCTAHeading: { en: 'Looking for a Software Engineer focused on AI & Data?', ja: 'AIとデータに特化したソフトウェアエンジニアをお探しですか？' },
    projectsCTADescription: {
      en: 'I develop machine learning models, analyze complex datasets, and build intelligent data-driven software solutions.',
      ja: '機械学習モデルの開発、複雑なデータセットの分析、インテリジェントなデータ駆動型ソフトウェアソリューションの構築を担当します。'
    },
    projectsCTAButton: { en: "Let's_Talk()", ja: '話しましょう()' },
    visitLiveApp: { en: 'Visit live app', ja: '本番アプリを見る' },
    visitWebsite: { en: 'Visit website', ja: 'ウェブサイトを見る' },
    viewOnGithub: { en: 'View on GitHub', ja: 'GitHubで見る' },
    viewDetails: { en: 'View details', ja: '詳細を見る' },

    // Projects Page - Project Descriptions
    projectNexusDescription: {
      en: 'Enterprise-grade AI chatbot platform and custom RAG solutions.',
      ja: 'エンタープライズ向けのAIチャットボットプラットフォームおよびカスタムRAGソリューション。'
    },
    projectNexusLongDescription: {
      en: 'Co-Founder and Lead AI Engineer at Nexus Tech Global, building enterprise-grade chatbot systems, custom RAG solutions, and distributed scraping pipelines. Leading AI development and backend architectures for all products.',
      ja: 'Nexus Tech Globalの共同創業者兼リードAIエンジニアとして、エンタープライズ向けのチャットボットシステム、カスタムRAGソリューション、分散スクレイピングパイプラインの構築を担当。全製品のAI開発とバックエンド設計をリード。'
    },
    projectSiteboticDescription: {
      en: 'AI-Powered Chatbot Platform - No-code SaaS enabling websites to deploy intelligent chatbots trained on their content.',
      ja: 'AI搭載チャットボットプラットフォーム。ノーコードSaaSとして、ウェブサイトコンテンツで学習したインテリジェントチャットボットを簡単に導入可能。'
    },
    projectSiteboticLongDescription: {
      en: 'Lead AI Engineer for SiteBotic at Nexus Tech Global. Analyzed web structures to build an automated data extraction pipeline replacing Playwright with Crawl4AI. Designed and evaluated a pgvector-based RAG architecture, utilizing GPT-5-mini with a 400k context window to synthesize insights from scraped website content. Focused heavily on data preprocessing, embedding generation, and prompt optimization for accurate AI responses.',
      ja: 'Nexus Tech GlobalにてSiteBoticのリードAIエンジニアを担当。ウェブ構造を分析し、PlaywrightをCrawl4AIに置き換える自動データ抽出パイプラインを構築。収集したウェブサイトコンテンツからインサイトを合成するため、400kコンテキストウィンドウを持つGPT-5-miniを活用し、pgvectorベースのRAGアーキテクチャを設計・評価。正確なAI応答のためのデータ前処理、埋め込み生成、プロンプト最適化に注力。'
    },
    projectPALTechDescription: {
      en: 'Software Engineer specializing in data-intensive systems, bridging frontend and data platform teams for high-traffic applications.',
      ja: '大規模データシステムを専門とするソフトウェアエンジニア。フロントエンドとデータプラットフォームチームの橋渡しを担当し、高トラフィックアプリケーションの開発を支援。'
    },
    projectPALTechLongDescription: {
      en: 'Software Engineer at PALTech focusing on data-intensive systems. Optimized real-time data delivery for high-concurrency systems by bridging platform engineers and business logic. Contributed to sprint efficiency by proactively identifying technical dependencies and infrastructure constraints early in planning phases.',
      ja: 'PALTechにて大規模データシステムを担当するソフトウェアエンジニア。高トラフィック・高リアルタイム性が求められるシステムにおいて、プラットフォームエンジニアとビジネスロジックの橋渡しを担当。スプリントプランニングにて技術的依存関係やインフラ制約を事前に特定し、開発遅延リスクを最小化。'
    },
    projectBeSmarteeDescription: {
      en: 'Web Engineer translating complex FinTech requirements into technical specifications for international development teams.',
      ja: '複雑なFinTech要件を技術仕様に翻訳し、国際開発チーム向けに明確化するウェブエンジニア。'
    },
    projectBeSmarteeLongDescription: {
      en: 'Web Engineer at BeSmartee specializing in FinTech solutions. Translated complex Digital Mortgage logic into clean, manageable technical requirements for international delivery teams. Focused on requirement elicitation and clear communication between business stakeholders and engineering teams.',
      ja: 'BeSmarteeにてFinTechソリューションを専門とするウェブエンジニア。複雑な住宅ローン業務を理解し、国際的な開発チームに向けて仕様の明確化を実施。ビジネスステークホルダーとエンジニアリングチーム間の要件定義と明確なコミュニケーションに注力。'
    },
    projectCustomer360Description: {
      en: 'End-to-end data engineering solution building Customer 360 views and risk analytics with ETL pipelines.',
      ja: 'ETLパイプラインによりCustomer 360ビューとリスク分析を実現するエンドツーエンドのデータエンジニアリングソリューション。'
    },
    projectCustomer360LongDescription: {
      en: 'Data engineering platform with ETL pipelines for data extraction & transformation, Apache Spark for distributed analytics, Airflow for workflow orchestration, and Metabase BI dashboards.',
      ja: 'データ抽出・変換のためのETLパイプライン、分散分析のためのApache Spark、ワークフロー管理のAirflow、BIダッシュボードのMetabaseを組み合わせたデータエンジニアリングプラットフォーム。'
    },
    projectBookRecDescription: {
      en: 'Full-stack ML platform implementing collaborative filtering, content-based filtering, and hybrid algorithms.',
      ja: '協調フィルタリング、コンテンツベースフィルタリング、ハイブリッドアルゴリズムを実装したフルスタック機械学習プラットフォーム。'
    },
    projectBookRecLongDescription: {
      en: 'Machine learning recommendation system with collaborative filtering (SVD), content-based filtering (TF-IDF), hybrid engine combining algorithms, and FastAPI REST API with React frontend.',
      ja: '協調フィルタリング（SVD）、コンテンツベースフィルタリング（TF-IDF）、それらを組み合わせたハイブリッドエンジンを備えた機械学習レコメンドシステム。FastAPIによるREST APIとReactフロントエンドで構成。'
    },
    projectPetClinicDescription: {
      en: 'Java desktop application with complete CRUD operations for veterinary clinic management using DAO pattern.',
      ja: 'DAOパターンを用いて動物病院の管理機能を実装した、完全なCRUD操作対応のJavaデスクトップアプリケーション。'
    },
    projectPetClinicLongDescription: {
      en: 'Desktop application implementing DAO pattern for clean architecture, event-driven GUI with Java Swing, CRUD operations for clinic management, and MySQL database integration.',
      ja: 'クリーンアーキテクチャ実現のためDAOパターンを採用し、Java Swingによるイベント駆動GUI、クリニック管理用CRUD機能、MySQLデータベース連携を備えたデスクトップアプリケーション。'
    },
    projectPriceTrackerDescription: {
      en: 'Real-time data ingestion platform tracking Bitcoin, gold, and USD-VND rates with automated ETL pipeline.',
      ja: 'ビットコイン、金、USD-VNDレートを追跡する自動ETLパイプライン付きリアルタイムデータ収集プラットフォーム。'
    },
    projectPriceTrackerLongDescription: {
      en: 'Data pipeline with async API calls using httpx for concurrent data fetching, SQLite with SQLModel ORM for time-series data, React + Chart.js for visualizations, and integration with multiple external APIs.',
      ja: 'httpxによる非同期API呼び出しで同時データ取得を行い、SQLite + SQLModel ORMで時系列データを管理、React + Chart.jsで可視化し、複数の外部APIと連携するデータパイプライン。'
    },

    // Projects Page - Tag translations (conceptual tags translated, tech tools left as-is)
    tag_AISolutions: { en: 'AI Solutions', ja: 'AIソリューション' },
    tag_SoftwareDevelopment: { en: 'Software Development', ja: 'ソフトウェア開発' },
    tag_Enterprise: { en: 'Enterprise', ja: 'エンタープライズ' },
    tag_Leadership: { en: 'Leadership', ja: 'リーダーシップ' },
    tag_RAGPlatforms: { en: 'RAG Platforms', ja: 'RAGプラットフォーム' },
    tag_SystemArchitecture: { en: 'System Architecture', ja: 'システムアーキテクチャ' },
    tag_BackendEngineering: { en: 'Backend Engineering', ja: 'バックエンドエンジニアリング' },
    tag_ApacheSpark: { en: 'Apache Spark', ja: 'Apache Spark' },
    tag_NumPy: { en: 'NumPy', ja: 'NumPy' },
    tag_ResNet50: { en: 'ResNet50', ja: 'ResNet50' },
    tag_Matplotlib: { en: 'Matplotlib', ja: 'Matplotlib' },

    tag_CLIP: { en: 'CLIP', ja: 'CLIP' },
    tag_PyTorch: { en: 'PyTorch', ja: 'PyTorch' },
    tag_ComputerVision: { en: 'Computer Vision', ja: 'コンピュータビジョン' },
    tag_NLP: { en: 'NLP', ja: '自然言語処理' },
    
    // Project Similarity Matching
    projectSimilarityDescription: {
      en: 'Research project benchmarking image-text similarity models, including ResNet50, Least-Squares projection, and CLIP.',
      ja: 'ResNet50、最小二乗投影モデル、CLIPなどを用いた画像・テキスト類似度マッチング手法のベンチマーク研究プロジェクト。'
    },
    projectSimilarityLongDescription: {
      en: 'Led a five-member research team (Trang Giay Trang Team) to implement and benchmark multiple image–text similarity matching approaches, including a baseline (ResNet50 + TF-IDF), a Least-Squares-based linear projection model (W), and OpenAI\'s CLIP contrastive embedding framework.',
      ja: '5人の研究チーム（Trang Giay Trangチーム）のリーダーとして、ResNet50 + TF-IDFを用いたベースライン、最小二乗法に基づく線形投影モデル（W）、およびOpenAIのCLIP対照学習埋め込みフレームワークを含む、複数の画像・テキスト類似度マッチング手法の実装とベンチマークを主導しました。'
    },
    
    // Project ML Foundations
    projectMLFoundationsDescription: {
      en: 'Implementation of fundamental clustering and regression algorithms including KMeans and KNN.',
      ja: 'KMeansおよびKNNを含む、基礎的なクラスタリングと回帰アルゴリズムの実装。'
    },
    projectMLFoundationsLongDescription: {
      en: 'Developed predictive models using K-Nearest Neighbors (KNN) for diabetes progression and implemented KMeans clustering for customer segmentation (Mall Customers dataset) utilizing the Elbow Method and Silhouette Scores. Built algorithms from scratch and using scikit-learn.',
      ja: '糖尿病進行度の予測にK最近傍法（KNN）を使用し、エルボー法とシルエットスコアを活用して顧客セグメンテーション（Mall Customersデータセット）にKMeansクラスタリングを実装。スクラッチおよびscikit-learnの両方でアルゴリズムを構築。'
    },
    tag_PySpark: { en: 'PySpark', ja: 'PySpark' },
    tag_ApacheAirflow: { en: 'Apache Airflow', ja: 'Apache Airflow' },
    tag_PostgreSQL: { en: 'PostgreSQL', ja: 'PostgreSQL' },
    tag_Metabase: { en: 'Metabase', ja: 'Metabase' },
    tag_Scikitlearn: { en: 'Scikit-learn', ja: 'Scikit-learn' },
    tag_FastAPI: { en: 'FastAPI', ja: 'FastAPI' },
    tag_React: { en: 'React', ja: 'React' },
    tag_TypeScript: { en: 'TypeScript', ja: 'TypeScript' },
    tag_Vite: { en: 'Vite', ja: 'Vite' },
    tag_Java: { en: 'Java', ja: 'Java' },
    tag_JavaSwing: { en: 'Java Swing', ja: 'Java Swing' },
    tag_MySQL: { en: 'MySQL', ja: 'MySQL' },
    tag_JDBC: { en: 'JDBC', ja: 'JDBC' },
    tag_DAOPattern: { en: 'DAO Pattern', ja: 'DAOパターン' },
    tag_Python: { en: 'Python', ja: 'Python' },
    tag_httpx: { en: 'httpx', ja: 'httpx' },
    tag_SQLite: { en: 'SQLite', ja: 'SQLite' },
    tag_SQLModel: { en: 'SQLModel', ja: 'SQLModel' },
    tag_Chartjs: { en: 'Chart.js', ja: 'Chart.js' },
    tag_pgvector: { en: 'pgvector', ja: 'pgvector' },
    tag_Dramatiq: { en: 'Dramatiq', ja: 'Dramatiq' },
    tag_Redis: { en: 'Redis', ja: 'Redis' },
    tag_Docker: { en: 'Docker', ja: 'Docker' },
    tag_DataPipelines: { en: 'Data Pipelines', ja: 'データパイプライン' },
    tag_Realtimesystems: { en: 'Real-time Systems', ja: 'リアルタイムシステム' },
    tag_Kafka: { en: 'Kafka', ja: 'Kafka' },
    tag_HighScaleArchitecture: { en: 'High-Scale Architecture', ja: '高スケールアーキテクチャ' },
    tag_FinTech: { en: 'FinTech', ja: 'フィンテック' },
    tag_DigitalMortgage: { en: 'Digital Mortgage', ja: 'デジタル住宅ローン' },
    tag_WebDevelopment: { en: 'Web Development', ja: 'ウェブ開発' },
    tag_RequirementsEngineering: { en: 'Requirements Engineering', ja: '要件工学' },

    // Home - Core Competencies
    capabilitiesLabel: { en: 'Capabilities', ja: '得意分野' },
    coreCompetenciesHeading: { en: 'Core Competencies', ja: '主な専門領域' },
    statusActive: { en: 'Active', ja: '稼働中' },
    
    // Testimonials Section
    testimonialsLabel: { en: 'Testimonials', ja: '推薦の声' },
    testimonialsHeading: { en: 'What People Say', ja: '推薦の声' },
    testimonialContent: {
      en: 'Thong is a talented AI Engineer and technical leader with strong execution and system architecture skills. While our company is moving in a different strategic and cultural direction, I genuinely believe his strengths will be an excellent fit in the right environment. He brings technical clarity, database performance, and robust system designs to teams, and any organization looking for a capable AI Engineer would benefit from his contributions.',
      ja: 'Thongは、強力な実行力とシステム設計スキルを備えた才能あるAIエンジニア兼テクニカルリーダーです。弊社は異なる戦略的および文化的方向に進んでいますが、彼の強みは適切な環境で素晴らしいフィット感になると心から信じています。彼はチームに技術的な明確さ、データベースのパフォーマンス、および堅牢なシステム設計をもたらし、有能なAIエンジニアを探している組織は彼の貢献から大きな恩恵を受けるでしょう。'
    },
    testimonialAuthorName: { en: 'Bryan Hoang', ja: 'Bryan Hoang' },
    testimonialAuthorTitle: { en: 'Founder & CEO, Nexus Tech Global', ja: 'Founder & CEO, Nexus Tech Global' },

    // PM-focused short cards for homepage -> Refocused to AI Engineering
    certificationsHeading: { en: 'Certifications & Degrees', ja: '資格と学位' },
    certificationsLabel: { en: 'Education', ja: '教育' },
    verifyCredential: { en: 'Verify Credential', ja: '資格証明書を確認' },
    academicDegree: { en: 'Academic Degree', ja: '学士号' },

    cert1Issuer: { en: 'Google Cloud | Coursera', ja: 'Google Cloud | Coursera' },
    cert1Title: { en: 'Google Cloud Data Engineer Specialization', ja: 'Google Cloud データエンジニア 専門講座' },
    cert1Desc: { en: 'Comprehensive specialization covering Google Cloud infrastructure, deployment, and highly scalable architectures.', ja: 'Google Cloudのインフラ、デプロイ、スケーラブルなアーキテクチャを網羅した専門講座。' },

    cert2Issuer: { en: 'Duke University | Coursera', ja: 'Duke University | Coursera' },
    cert2Title: { en: 'Java Programming Fundamentals Specialization', ja: 'Java プログラミング基礎 専門講座' },
    cert2Desc: { en: 'Foundational training in core programming concepts, software engineering, and object-oriented design using Java.', ja: 'Javaを用いたコアプログラミング、ソフトウェアエンジニアリング、オブジェクト指向設計の基礎。' },

    cert3Issuer: { en: 'AIO | AI VIET NAM', ja: 'AIO | AI VIET NAM' },
    cert3Title: { en: 'AI VIET NAM - AIO 2026 (Module 01)', ja: 'AI VIET NAM - AIO 2026（モジュール01）' },
    cert3Desc: { en: 'Intensive academic program focusing on machine learning, deep learning, computer vision, and NLP.', ja: '機械学習、ディープラーニング、コンピュータビジョン、自然言語処理に特化した集中プログラム。' },

    cert4Issuer: { en: 'UIT - VNUHCM', ja: 'UIT - VNUHCM' },
    cert4Title: { en: 'B.S. Information Technology', ja: '情報技術 学士号' },
    cert4Desc: { en: 'Rigorous computer science curriculum covering data structures, algorithms, databases, and software engineering. Graduated with a "Very Good" classification.', ja: 'データ構造、アルゴリズム、データベース、ソフトウェアエンジニアリングを網羅する厳格なコンピュータサイエンスのカリキュラム。「Very Good（優）」の成績で卒業。' },

    cert5Issuer: { en: 'USSH - VNUHCM', ja: 'USSH - VNUHCM' },
    cert5Title: { en: 'B.A. Japanese Studies', ja: '日本語学 学士号' },
    cert5Desc: { en: 'In-depth study of Japanese language, culture, society, and cross-cultural communication.', ja: '日本語、日本文化、社会、および異文化コミュニケーションの深い理解。' },

    // Contact Page
    contactInitialize: { en: 'Initialize Contact', ja: 'コンタクトを開始' },
    contactHeroTitleLine1: { en: "Let's build something", ja: '一緒に何かを' },
    contactHeroTitleHighlight: { en: 'future-proof.', ja: '将来に強いものに。' },
    contactHeroDescription: {
      en: "Software Engineer (AI & Data Focus) experienced in building machine learning models, deep learning systems, and intelligent data pipelines. Let's discuss how I can help you extract insights and optimize your data solutions.",
      ja: '機械学習モデル、ディープラーニングシステム、インテリジェントなデータパイプラインの構築経験を持つソフトウェアエンジニア（AI・データフォーカス）。インサイトの抽出やデータソリューションの最適化について、ぜひお話しましょう。'
    },
    contactDirectLine: { en: 'Direct Line', ja: 'ダイレクトライン' },
    contactSyncUp: { en: 'Sync Up', ja: '打ち合わせ' },
    contactBookSlot: { en: 'Book a 30m slot', ja: '30分の枠を予約' },
    comingSoon: { en: 'Coming Soon', ja: '近日公開' },
    contactFormTitle: { en: 'Send a Message', ja: 'メッセージを送信' },
    labelName: { en: 'Name_', ja: '名前_' },
    labelEmail: { en: 'Email_', ja: 'メール_' },
    labelSector: { en: 'Sector_', ja: '分野_' },
    labelMessage: { en: 'Message_', ja: 'メッセージ_' },
    placeholderName: { en: 'Enter your name', ja: 'お名前を入力してください' },
    placeholderEmail: { en: 'name@domain.com', ja: 'name@domain.com' },
    placeholderMessage: { en: 'Describe your project requirements...', ja: 'プロジェクトの要件をご記入ください…' },
    sectorOptionEtl: { en: 'AI/ML & Data Engineering', ja: 'AI/ML & データエンジニアリング' },
    sectorOptionBackend: { en: 'Backend Development', ja: 'バックエンド開発' },
    sectorOptionDataPlatform: { en: 'Bilingual Technical Integration', ja: 'バイリンガル技術統合' },
    sectorOptionConsulting: { en: 'Full-Stack Web App', ja: 'フルスタックWebアプリ' },
    sectorOptionOther: { en: 'Other', ja: 'その他' },
    buttonSending: { en: 'Sending...', ja: '送信中…' },
    buttonSendTransmission: { en: 'Send Transmission', ja: '送信する' },
    successTitle: { en: 'Message Sent Successfully!', ja: 'メッセージが送信されました！' },
    successBody: {
      en: "Thank you for reaching out. I'll get back to you within 24 hours.",
      ja: 'ご連絡ありがとうございます。24時間以内に返信いたします。'
    },
    successSendAnother: { en: 'Send Another Message', ja: '別のメッセージを送る' },

    // CV Page
    cvBadge: { en: 'Download CV', ja: '履歴書をダウンロード' },
    cvHeroTitleLine1: { en: 'Access My', ja: '私の' },
    cvHeroTitleHighlight: { en: 'Professional CV', ja: '職務経歴書にアクセス' },
    cvHeroParagraph1: {
      en: "Let's connect first - I'd love to know who you are before sharing my CV.",
      ja: 'まずは簡単に自己紹介を交わしてから、履歴書をお渡しできればと思っています。'
    },
    cvHeroParagraph2: {
      en: "Fill out the form below and I'll send you my latest CV. I'm always interested in connecting with other developers, engineering teams, and AI/ML researchers.",
      ja: '下のフォームにご入力いただければ、最新の履歴書をお送りします。開発者仲間、エンジニアリングチーム、AI/ML研究者の皆さまとつながれるのを楽しみにしています。'
    },
    cvFormTitle: { en: 'Get My CV', ja: '履歴書を受け取る' },
    labelCompanyOptional: { en: 'Company_ (Optional)', ja: '会社名_（任意）' },
    labelMessageOptional: { en: 'Message_ (Optional)', ja: 'メッセージ_（任意）' },
    placeholderCompany: { en: 'Your company or organization', ja: '会社名または組織名' },
    cvPlaceholderMessage: {
      en: 'Any specific questions or context about my CV?',
      ja: '履歴書についてのご質問や背景があればご記入ください。'
    },
    cvButtonProcessing: { en: 'Processing...', ja: '処理中…' },
    cvButtonGet: { en: 'Get My CV', ja: '履歴書を受け取る' },

    // CV Thank You Page
    cvThanksTitle: { en: 'Thanks for your interest!', ja: 'ご関心をお寄せいただきありがとうございます！' },
    cvThanksBody: {
      en: "I've received your request and sent you my CV. You can also download it directly below.",
      ja: 'ご依頼を受け取り、履歴書をお送りしました。以下から直接ダウンロードすることもできます。'
    },
    backToHome: { en: 'Back to Home', ja: 'ホームに戻る' },

    // Learning Page
    learningHeroTitle: { en: 'Live Learning Log', ja: 'ライブ学習ログ' },
    learningHeroDesc: { en: 'A chronological terminal of my journey through the AIO 2026 Intensive AI/ML Program.', ja: 'AIO 2026 AI/ML集中プログラムの学習プロセスを記録したクロノロジカル・ターミナル。' },
    learningStatusCurrent: { en: 'Current Module: 02 (Shot Zone Clustering)', ja: '現在のモジュール: 02 (ショットゾーンのクラスタリング)' },
    module02Title: { en: '[MODULE_02] Shot Zone & Quality Clustering (Research Stream)', ja: '[MODULE_02] ショットゾーンと品質クラスタリング (リサーチストリーム)' },
    module02Desc: { en: 'Analyzing feature scaling effects on K-Means clustering using a World Cup soccer dataset. Validating clusters against actual goal rates and xG.', ja: 'ワールドカップサッカーデータセットを使用し、K-Meansクラスタリングに対する特徴量スケーリングの影響を分析。実際のゴール率とxGに対してクラスターを検証。' },
    module01Title: { en: '[MODULE_01] Multimodal Similarity Matching (Research Stream)', ja: '[MODULE_01] マルチモーダル類似度マッチング (リサーチストリーム)' },
    module01Desc: { en: 'Implementing and benchmarking multiple image-text similarity matching approaches using ResNet50, TF-IDF, and CLIP contrastive embeddings.', ja: 'ResNet50、TF-IDF、CLIP対照学習埋め込みを用いた複数の画像-テキスト類似度マッチング手法の実装とベンチマーク。' },
  };

  const t = (key: string): string => {
    const translation = translations[key as keyof typeof translations];
    return translation ? translation[language] : key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};