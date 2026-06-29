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
    about: { en: './about', ja: './私について' },
    cv: { en: './cv', ja: './履歴書' },
    contact: { en: './contact', ja: './連絡先' },

    // Hero Section (project/product/bridge-focused)
    founderEngineer: { en: 'AI Engineer', ja: 'AIエンジニア' },
    building: { en: 'Building', ja: '構築' },
    dataDriven: { en: 'Production AI/ML', ja: '本番用AI/MLシステム' },
    solutionsAt: { en: 'and Scalable AI', ja: 'およびスケーラブルAI' },
    scale: { en: 'Solutions', ja: 'ソリューション' },
    heroBio: {
      en: "AI Engineer and Co-Founder with hands-on experience designing and scaling production-grade AI/ML applications, data pipelines, and LLM systems. Specializing in Python, FastAPI, PyTorch, LlamaIndex, pgvector, and distributed background processing. Active student in the All-In-One (AIO) AI program, building a strong foundation in machine learning, deep learning, computer vision, and NLP algorithms. Bilingual (Japanese/English) developer with dual degrees in IT and Japanese Studies.",
      ja: 'AIエンジニア兼共同創業者として、本番環境向けのAI/MLアプリケーション、データパイプライン、LLMシステムの設計・スケールに実務経験を持ちます。Python、FastAPI、PyTorch、LlamaIndex、pgvector、分散バックグラウンド処理のスペシャリスト。All-In-One (AIO) AIプログラムで学び、機械学習、ディープラーニング、コンピュータビジョン/自然言語処理アルゴリズムの強固な基礎を築いています。'
    },
    viewProjects: { en: 'View_Projects', ja: 'プロジェクトを見る' },
    downloadCV: { en: 'Download CV', ja: '履歴書ダウンロード' },
    dataEngineering: { en: 'AI/ML & Data Engineering', ja: 'AI/ML & データエンジニアリング' },
    aiMlIntegration: { en: 'Data Ingestion & Scraping', ja: 'データ収集 & スクレイピング' },
    fullStack: { en: 'Full-Stack Backend', ja: 'フルスタック・バックエンド' },

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
      en: 'My journey into technology wasn\'t straightforward. In high school for the gifted, I was exposed to programming with Pascal, but I wasn\'t particularly interested or good at it. It took me a while to even get familiar with basic concepts like for loops and programming terminology in general.',
      ja: 'テクノロジーへの道は一直線ではありませんでした。特別な高校でパスカルプログラミングに触れましたが、特に興味を持ったり、上手くできたりしませんでした。forループやプログラミング用語などの基本概念に慣れるのに時間がかかりました。'
    },
    earlyDaysContent2: {
      en: 'I graduated high school with a strong interest in Japanese cultures, which led me to pursue a Japanese Studies major at USSH-HCM VNU (University of Social Sciences and Humanities, Ho Chi Minh City, Vietnam National University). Looking back, this was one of my best decisions - it gave me a much-needed break from IT and allowed me to explore social subjects.',
      ja: '高校を卒業する頃、日本文化に強い興味を持ち、USSH-HCM VNU（ベトナム国家大学ホーチミン市人文社会科学大学）で日本語学科を専攻することになりました。振り返ってみると、これは私のベストな決断の一つでした。ITから必要な休憩を取らせ、社会的な科目を探求する機会を与えてくれました。'
    },
    earlyDaysContent3: {
      en: 'I earned my first bachelor\'s degree in Japanese Studies in 2020 during the height of the COVID-19 pandemic. Today, I hold two bachelor\'s degrees - one in Japanese Studies from USSH and another in Information Technology from UIT, both part of the Vietnam National University Ho Chi Minh City system, that I\'m completing in June 2026. This unique combination gives me both cultural understanding and technical expertise, particularly valuable for international collaborations.',
      ja: '2020年、COVID-19パンデミックの最中に日本語学科の最初の学士号を取得しました。現在、私は二つの学士号を持っています。一つはUSSHの日本語学科、もう一つはUITの情報技術で、どちらもベトナム国家大学ホーチミン市システムに属し、2026年6月に修了予定です。このユニークな組み合わせは、文化的な理解と技術的な専門知識の両方を提供し、特に国際的なコラボレーションにおいて価値があります。'
    },

    // Self-Taught Journey Section
    selfTaughtTitle: { en: 'Rediscovering Programming: From Games to Code', ja: 'プログラミングの再発見：ゲームからコードへ' },
    selfTaughtContent1: {
      en: 'During my second and third years of university, I started dabbling in programming again, driven by my love for playing games and game development in general. This passion led me to create my first games, which are still live and playable on itch.io.',
      ja: '大学の2年目と3年目に、ゲームをプレイすることとゲーム開発全般への愛情から、再びプログラミングに手を出し始めました。この情熱が、私の最初のゲームを作成するきっかけとなり、今でもitch.ioでライブプレイ可能です。'
    },
    tryMyGames: { en: '🎮 Try my games:', ja: '🎮 私のゲームを試してみてください：' },
    gameTimeKiller: { en: 'They might help you kill some time during breaks!', ja: '休憩中に時間を潰すのに役立つかもしれません！' },
    pSLiamNote: { en: 'P.S. Liam Vessalius is actually an anime character name - a nod to my deep dive into Japanese culture that eventually led me to study Japanese formally.', ja: 'P.S. Liam Vessaliusは実際のアニメキャラクターの名前です - 最終的に日本語を正式に勉強するきっかけとなった日本文化への深い没入へのオマージュです。' },
    selfTaughtContent2: {
      en: 'After graduation, the real world hit hard. With my Japanese Studies degree, I tried to find work in the gaming industry within Japanese environments, but despite my best efforts, I couldn\'t get noticed - my humanities background wasn\'t seen as relevant for technical gaming roles. I had to take whatever work I could find to put food on the table - teaching English and Japanese at private centers.',
      ja: '卒業後、現実世界が厳しく襲ってきました。日本語学科の学位を持って、日本語環境でのゲーム業界での仕事を求めましたが、懸命の努力にもかかわらず注目されることができませんでした - 私の人文科学の背景は技術的なゲームの役割には関連性がないと見なされました。食卓に食べ物を並べるために、プライベートセンターで英語と日本語を教える仕事を何でも引き受けなければなりませんでした。'
    },
    selfTaughtContent3: {
      en: "While I've transitioned fully into tech and haven't actively used my Japanese studies professionally, I maintain my language skills and cultural understanding. This background could be valuable for Japanese companies or international projects requiring cross-cultural communication and understanding of Japanese business practices.",
      ja: '完全にテクノロジーに移行し、日本語学習を積極的に職業的に使用していませんが、言語スキルと文化的理解を維持しています。この背景は、日本企業や異文化間コミュニケーションと日本のビジネス慣行の理解を必要とする国際プロジェクトにとって価値があるかもしれません。'
    },

    // About Page - Japanese Ability Note (final section)
    japaneseAbilityNote: {
      en: "I retain strong reading and listening comprehension in Japanese. My spoken Japanese is currently rusty and would benefit from regular use. I'm comfortable supporting written translation, documentation review, and stakeholder coordination between English and Japanese. With daily practice or immersion (roughly six months), I can regain business-level spoken fluency and serve effectively as a bridge between technical teams and Japanese stakeholders.",
      ja: '読む・聞く力は比較的保たれていますが、話す力は現在錆びついており、定期的な運用で回復が必要です。書面での翻訳、ドキュメント確認、関係者間の調整などの業務サポートには対応可能です。日常的に日本語を使う環境（概ね半年程度）をいただければ、ビジネスレベルの会話力を取り戻し、技術チームと日本側の橋渡しとして効果的に貢献できるようになります。'
    },
    selfTaughtContent4: {
      en: 'When COVID hit Vietnam severely, I was forced to stay home. During this time, I dedicated myself to learning SEO and WordPress. I tried my hand at affiliate marketing and Amazon dropshipping, though I quickly learned it wasn\'t as easy as it seemed.',
      ja: 'COVIDがベトナムを深刻に襲ったとき、私は家に閉じ込められました。この期間、私はSEOとWordPressの学習に専念しました。アフィリエイトマーケティングとAmazonドロップシッピングに手を出しましたが、思ったほど簡単ではないことをすぐに学びました。'
    },
    selfTaughtContent5: {
      en: 'With my basic WordPress and SEO skills, I applied for related jobs and landed my first unofficial freelance gig as a WordPress Developer. This marked the beginning of my professional journey in tech, and I continue to hold this title as a freelancer until 2022 when I got my first official full time job as WordPress developer.',
      ja: '基本的なWordPressとSEOのスキルで、関連する仕事に応募し、WordPress開発者としての最初の非公式フリーランスの仕事を獲得しました。これはテクノロジーでの私のプロフェッショナルな旅の始まりを示し、2022年に最初の公式フルタイムのWordPress開発者の仕事を得るまでフリーランサーとしてこのタイトルを維持し続けました。'
    },

    // Professional Growth Section
    professionalGrowthTitle: { en: 'From Freelance to AI Engineering Leadership', ja: 'フリーランスからAIエンジニアリングリーダーへ' },
    professionalGrowthContent1: {
      en: 'My freelance WordPress work opened doors into backend and systems engineering roles. Over time I transitioned from building simple web interfaces to architecting complex data processing systems, optimizing databases, and designing scalable API services. This hands-on progression gave me strong technical foundations and a practical understanding of backend architecture.',
      ja: 'フリーランスでのWordPress業務が、バックエンドおよびシステム開発の役割への扉を開きました。単純なウェブインターフェースの構築から、複雑なデータ処理システム、データベース最適化、スケーラブルなAPI設計へと役割がシフト。この実務を通じて、強固な技術基盤とバックエンド設計に関する実践的な理解を得ました。'
    },
    professionalGrowthContent2: {
      en: "At Nexus Tech Global, as Co-Founder and Lead AI Engineer, I designed and built SiteBotic's core technical architecture. I architected our vector search RAG pipeline using pgvector and LlamaIndex, and built the scraping service using Crawl4AI to replace Playwright, resolving Playwright container OOM crashes and adding support for SPAs. I integrated OpenAI's GPT-5-mini, managing 400k context validations and custom model routing. To eliminate thread-safety bottlenecks in Dramatiq background task workers, I refactored the task processing engine to use a single persistent AsyncIO event loop. I also migrated user cookie security to session-only storage to prevent cross-session chat retention, and upgraded the entire frontend to React 19.2.7 and Vercel AI SDK v7.0.0.",
      ja: "Nexus Tech Globalでは、共同創業者兼リードAIエンジニアとして、SiteBoticの主要な技術設計と開発を担当しました。pgvector and LlamaIndexを用いたベクトル検索RAGパイプラインの設計、およびPlaywrightからCrawl4AIスクレイピングシステムへの移行を主導し、コンテナのOOMクラッシュ回避とSPA対応を実現。400kコンテキストウィンドウを持つGPT-5-miniの統合（カスタムルーティング等の実装）に加え、Dramatiq非同期タスク処理時のスレッドセーフに関するボトルネックを解消するため単一持続的AsyncIOイベントループ化を実装しました。さらに、クロスセッションの会話漏洩を防ぐためセッション専用クッキー管理へ移行し、フロントエンド全体をReact 19.2.7およびVercel AI SDK v7.0.0へアップグレードしました。"
    },
    professionalGrowthContent3: {
      en: "My passion for AI/ML Engineering grew out of building SiteBotic and is further driven by my current academic focus in the AIO 2026 AI Program. Designing systems from scratch and studying advanced AI curricula have taught me how to tackle complex technical challenges—from optimizing vector retrieval speeds to training predictive ML/DL models. I realize that my strengths lie in translating complex mathematical and AI research concepts into reliable, production-ready backend systems and data pipelines. Moving forward, I want to deepen my expertise in deep learning, computer vision, NLP, and multi-agent systems.",
      ja: "AI/MLエンジニアリングへの私の情熱は、SiteBoticの構築を通じて育まれ、さらにAIO 2026 AIプログラムでの現在の学術的焦点によって後押しされています。システムをゼロから設計し、高度なAIカリキュラムを研究することで、ベクトル検索の高速化から予測ML/DLモデルのトレーニングまで、複雑な技術的課題を解決する面白さを知りました。私の強みは、複雑な数学やAIの概念を信頼性の高い本番用バックエンドシステムやデータパイプラインへと落とし込むことにあります。今後は、ディープラーニング、コンピュータビジョン、自然言語処理、マルチエージェントシステムの専門性をさらに深めたいと考えています。"
    },

    // Future Goals Section
    futureGoalsTitle: { en: 'Looking Ahead: Completing the Circle', ja: 'これから：旅の締めくくりへ' },
    futureGoalsContent1: {
      en: 'I\'m currently at the final stage of my second bachelor\'s degree in Information Technology at UIT (University of Information Technology), part of the same Vietnam National University Ho Chi Minh City system as USSH. I\'ve completed all coursework and achieved a "Very Good" degree classification, and I\'m now awaiting my official academic transcript and bachelor\'s degree certificate in June 2026.',
      ja: '現在、UIT（情報技術大学）で情報技術の第二学士号の最終段階にいます。これはUSSHと同じベトナム国家大学ホーチミン市システムの一部です。すべてのコースワークを完了し、「Very Good」の学位分類を達成し、現在2026年6月に公式の成績証明書と学士号証明書を待っています。'
    },
    futureGoalsContent2: {
      en: 'Completing my IT degree from UIT provides a rigorous computer science foundation that complements my hands-on software development experience. Combining a degree in Information Technology with Japanese Studies allows me to serve as a bilingual AI developer, communicating technical details clearly with both engineering teams and Japanese stakeholders.',
      ja: 'UITでの情報技術の学位取得は、コンピュータサイエンスの厳格な基礎を提供し、実践的なソフトウェア開発経験を補完します。情報技術と日本語学の二つの学位を組み合わせることで、バイリンガルなAI開発者として、開発チームと日本の関係者の双方に対して技術的な詳細を明確に伝えることができます。'
    },
    futureGoalsContent3: {
      en: 'I aim to secure a full-time role as an AI/ML Engineer or Full-Stack Backend Developer where I can design, build, and optimize machine learning models, computer vision/NLP pipelines, and high-performance backend platforms. I am highly interested in contributing to technical projects that require collaboration between bilingual engineering teams.',
      ja: 'AI/MLエンジニアまたはフルスタック・バックエンド開発者としてフルタイムの役割を獲得し、機械学習モデル、コンピュータビジョン/自然言語処理パイプライン、高性能バックエンドプラットフォームの設計・構築・最適化に貢献することを目指しています。バイリンガルな開発チーム間でのコラボレーションを必要とする技術プロジェクトへの貢献に強い意欲を持っています。'
    },

    // Call to Action
    storyCTA: { en: 'Now that you\'ve read my story, feel free to download my CV or get in touch.', ja: 'ここまで読んでいただきありがとうございます。履歴書のダウンロードや、ご相談のご連絡もぜひお待ちしています。' },
    getInTouch: { en: 'Get In Touch', ja: '連絡する' },

    // Footer
    initializeCollaboration: { en: 'Initialize collaboration?', ja: 'コラボレーションを開始しますか？' },
    availableForFreelance: { en: 'Available for AI engineering roles, RAG integration, backend development, and open to full-time opportunities.', ja: 'AIエンジニアリング、RAG統合、バックエンド開発に対応可能で、フルタイムの機会にもオープンです。' },
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
      en: 'Co-Founder & Lead AI Engineer - Leading AI system architecture, RAG pipelines development, and backend scaling for SaaS solutions.',
      ja: '共同創業者・リードAIエンジニアとして、SaaSソリューションのAIシステム設計、RAG開発、バックエンドのスケーリングを主導。'
    },
    siteboticSelectedDescription: {
      en: 'Lead AI Engineer — designed and implemented RAG pipelines, scraping architecture, and background task workers.',
      ja: 'リードAIエンジニア — RAGパイプライン、スクレイピングアーキテクチャ、バックグラウンド処理の実装を担当。'
    },
    tagAiPlatforms: { en: 'AI Platforms', ja: 'AIプラットフォーム' },
    tagEtlPipelines: { en: 'ETL Pipelines', ja: 'ETLパイプライン' },
    tagDataProduct: { en: 'Data Product', ja: 'データプロダクト' },
    tagSaas: { en: 'SaaS', ja: 'SaaS' },
    tagAiPlatform: { en: 'AI Platform', ja: 'AIプラットフォーム' },
    visitLiveSite: { en: 'Visit live site', ja: '本番サイトを見る' },

    // Projects Page
    projectsHeroTitleLine1: { en: 'From AI Platforms to', ja: 'AIプラットフォームから' },
    projectsHeroTitleLine2: { en: 'Data Pipelines.', ja: 'データパイプラインまで。' },
    projectsHeroDescription: {
      en: 'AI system design, RAG pipeline implementation, and backend architecture for production platforms. From parsing pipelines to model optimization, I help teams build robust, intelligent solutions.',
      ja: 'AIシステム設計、RAGパイプラインの実装、本番環境向けバックエンドアーキテクチャ。パース処理からモデル最適化まで、信頼性が高くインテリジェントなソリューションの構築をサポートします。'
    },
    statsCompanyFounded: { en: 'Company Founded', ja: '設立した会社' },
    statsProjectsBuilt: { en: 'Projects Built', ja: '構築したプロジェクト' },
    statsSaaSPlatform: { en: 'SaaS Platform', ja: 'SaaSプラットフォーム' },
    projectsCTAHeading: { en: 'Need an AI Engineer, RAG Specialist, or Backend Developer?', ja: 'AIエンジニア、RAGスペシャリスト、またはバックエンド開発者をお探しですか？' },
    projectsCTADescription: {
      en: 'I design RAG architectures, scale data pipelines, integrate advanced LLMs, and build reliable backend systems.',
      ja: 'RAGアーキテクチャの設計、データパイプラインの拡張、先進的なLLMの統合、および信頼性の高いバックエンドシステムの構築を担当します。'
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
      en: 'Dev Lead for SiteBotic at Nexus Tech Global. Built and scaled a production SaaS platform that crawls websites, trains AI chatbots on content, and deploys with a one-click embed. Features a pgvector RAG pipeline, single persistent AsyncIO event loop for Dramatiq background task workers to resolve database and lazy loading bottlenecks, and a Crawl4AI-based scraping system replacing Playwright to support SPAs and eliminate container crashes. Integrated GPT-5-mini with a 400k context window, upgraded the frontend to React 19.2.7 and Vercel AI SDK v7.0.0, and migrated cookies to session-only storage to prevent cross-session chat retention.',
      ja: 'Nexus Tech GlobalにてSiteBoticの開発リードを担当。ウェブサイトを自動クロールし、コンテンツでAIチャットボットを学習させ、ワンクリックで埋め込み配信できる本番運用SaaSプラットフォームを構築・スケール。pgvectorを用いたRAGパイプライン、DB接続や遅延ロードのボトルネックを解消するDramatiqワーカー用の単一持続的AsyncIOイベントループ、Playwrightから移行してSPA対応とコンテナクラッシュ回避を実現したCrawl4AIスクレイピングシステムを実装。400kコンテキストウィンドウのGPT-5-miniを統合し、フロントエンドをReact 19.2.7およびVercel AI SDK v7.0.0へアップグレード、クロスセッションの履歴保持を防ぐためセッション専用クッキー管理へ移行。'
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
    pmCardTitle1: { en: 'Machine Learning & Deep Learning', ja: '機械学習 & ディープラーニング' },
    pmCardDesc1: {
      en: 'Supervised & unsupervised learning, deep learning (MLPs, CNNs, Transformers), PyTorch, NumPy, data analysis (SQL/Pandas), MLOps, and model evaluation.',
      ja: '教師あり/なし学習、ディープラーニング (MLP, CNN, Transformer)、PyTorch、NumPy、データ分析 (SQL/Pandas)、MLOps、モデル評価。'
    },
    pmCardTitle2: { en: 'Generative AI & LLMs', ja: '生成AI & LLM統合' },
    pmCardDesc2: {
      en: 'LlamaIndex RAG pipelines, vector search (pgvector), custom retrievers, function calling, LLM APIs (OpenAI GPT-5-mini, Claude, Gemini), and agentic workflows.',
      ja: 'LlamaIndex RAGパイプライン、ベクトル検索 (pgvector)、カスタムリトリーバー、関数呼び出し、LLM API (OpenAI GPT-5-mini, Claude, Gemini)、エージェントワークフロー。'
    },
    pmCardTitle3: { en: 'Data Scraping & Pipelines', ja: 'データ収集 & パイプライン' },
    pmCardDesc3: {
      en: 'Crawl4AI, Playwright, SPA crawling, distributed data pipelines (Spark, Airflow), HTML parsing, and ETL processing.',
      ja: 'Crawl4AI、Playwright、SPAスクレイピング、分散データパイプライン (Spark, Airflow)、HTMLパース、ETL処理。'
    },
    pmCardTitle4: { en: 'SaaS Backend & Infrastructure', ja: 'SaaS バックエンド & インフラ' },
    pmCardDesc4: {
      en: 'Python, FastAPI, Dramatiq + Redis async workers, single persistent AsyncIO event loops, Docker, PostgreSQL database optimization.',
      ja: 'Python、FastAPI、Dramatiq + Redis非同期ワーカー、単一持続的AsyncIOイベントループ、Docker、PostgreSQLデータベース最適化。'
    },

    // Contact Page
    contactInitialize: { en: 'Initialize Contact', ja: 'コンタクトを開始' },
    contactHeroTitleLine1: { en: "Let's build something", ja: '一緒に何かを' },
    contactHeroTitleHighlight: { en: 'future-proof.', ja: '将来に強いものに。' },
    contactHeroDescription: {
      en: "AI/ML Engineer and Backend Developer experienced in building machine learning models, RAG pipelines, data ingestion architectures, and scalable SaaS platforms. Active in advanced AI/ML research and programs. Let's discuss how I can help you implement or optimize your intelligent solutions.",
      ja: '機械学習モデル、RAGパイプライン、データ収集アーキテクチャ、およびスケーラブルなSaaSプラットフォームの構築経験を持つAI/MLエンジニア兼バックエンド開発者。先進的なAI/ML研究およびプログラムに取り組んでいます。インテリジェントなソリューションの実装や最適化について、ぜひお話しましょう。'
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