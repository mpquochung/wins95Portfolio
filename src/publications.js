// Add your publications here.
// Only entries with a non-empty `title` will appear.
// `pdfFile` should match a file name in `src/assets/papers/`.
// Links are optional. PDF icon always appears.
// Optional fields: `publication`, `authors`, `abstract`, `image`.
// `authors` should be an array like:
// [
//   { name: 'Alice Nguyen', url: 'https://alice.com', bold: true },
//   { name: 'Bob Tran', url: '', bold: false },
// ]
export default [
  {
    id: 'paper-6',
    title: 'MEAT: Mixture of Experts in Action Transformer for Robotic Arm Control',
    authors: [
      { name: 'Martin (Hung) Mai', url: '', bold: true },
      { name: 'Naeem Ul Islam', url: 'https://scholar.google.com/citations?user=aNR4SV0AAAAJ&hl=en', bold: false },
      { name: 'Ying-Jen Chen', url: 'https://scholar.google.com/citations?user=9dFSLl0AAAAJ&hl=en', bold: false }
      ],
    publication: 'International Conference on Cognitive Machine Intelligence 2025',
    abstract: 'This work integrates a MoE mechanism into the Action Chunking Transformer (ACT) framework, exploring the impact of expert balancing and regularization on performance. Evaluations in simulated and real-world settings show accuracy improvements of 5–30% over standard ACT baselines, indicating that MoE-enhanced Transformers are a promising solution for high-precision robot control from demonstrations.',
    image: 'src/assets/papers/meat_fig.png', // optional, uses default thumbnail if empty
    pdfFile: 'MEAT (36).pdf',
    url: 'https://www.sis.pitt.edu/lersais/conference/cogmi/2025/',
    github: '',
    project: '',
  },
  {
    id: 'paper-5',
    title: 'FinStat2SQL: A Text2SQL Pipeline for Financial Statement Analysis',
    authors: [
      { name: 'Quang Hung Nguyen', url: 'https://scholar.google.com/citations?user=wnv-AeMAAAAJ&hl=en', bold: false },
      { name: 'Phuong Anh Trinh', url: '', bold: false },
      { name: 'Martin (Hung) Mai', url: '', bold: true },
      { name: 'Tuan Phong Trinh', url: 'https://scholar.google.com.vn/citations?user=HECeg9cAAAAJ&hl=en', bold: false }
      ],
    publication: 'International Natural Language Generation Conference 2025',
    abstract: 'We introduce FinStat2SQL, a lightweight pipeline enabling natural language queries over financial statements, tailored to local standards like VAS. Our multi-agent setup combines large and small language models for entity extraction, SQL generation, and self-correction, and includes a fully automatic pipeline for synthetic data generation.',
    image: 'src/assets/papers/inlg.png', // optional, uses default thumbnail if empty
    pdfFile: '2025.inlg-main.27 (1).pdf',
    url: 'https://aclanthology.org/2025.inlg-main.27/',
    github: 'https://github.com/hung20gg/chatbot_financial_statement',
    project: '',
  },
  {
    id: 'paper-4',
    title: 'Efficient Vietnamese Name Retrieval using Highly Discriminative N-Grams',
    authors: [
      { name: 'Toan Luu', url: 'https://scholar.google.com/citations?user=KB9_4rgAAAAJ&hl=en', bold: false },
      { name: 'Martin (Hung) Mai', url: '', bold: true },
      { name: 'Xuan Lam Pham', url: 'https://scholar.google.com/citations?user=KhEo3bsAAAAJ&hl=en', bold: false },
      ],
    publication: 'Journal of Data Science and Artificial Intelligence, Vol 4, May 2025',
    abstract: 'This paper introduces Highly Discriminative N-grams (HDNs), a novel query method designed to efficiently retrieve Vietnamese names from diverse datasets. Experimental results show that HDNs significantly outperform traditional unigram queries, achieving superior precision, recall, and cost-effectiveness.',
    image: 'src/assets/papers/vietname.png', // optional, uses default thumbnail if empty
    pdfFile: '53-Article Text-161-2-10-20250531 (2).pdf',
    url: 'https://www.isods.org/publications/index.php/jdsai/article/view/53',
    github: 'https://github.com/toanluu/vietname?tab=readme-ov-file',
    project: 'https://toanluu.github.io/vietname/',
  },
  {
    id: 'paper-3',
    title: 'Efficient Vietnamese Name Detection Using Highly Discriminative N-Grams',
    authors: [
      { name: 'Toan Luu', url: 'https://scholar.google.com/citations?user=KB9_4rgAAAAJ&hl=en', bold: false },
      { name: 'Martin (Hung) Mai', url: '', bold: true },
      { name: 'Thi Thu Phuong Dao', url: '', bold: false },
      { name: 'Quang Hung Nguyen', url: 'https://scholar.google.com/citations?user=wnv-AeMAAAAJ&hl=en', bold: false },
      { name: 'Xuan Lam Pham', url: 'https://scholar.google.com/citations?user=KhEo3bsAAAAJ&hl=en', bold: false },
      ],
    publication: 'Asian Conference on Intelligent Information and Database Systems 2025',
    abstract: 'In this study, we proposed our novel approach, Highly Discriminative N-grams (HDN), which utilizes statistics from n-gramsfrom human names for the classification task. ',
    image: 'src/assets/papers/HDN.png', // optional, uses default thumbnail if empty
    pdfFile: '',
    url: 'https://link.springer.com/chapter/10.1007/978-981-96-6005-6_24',
    github: 'https://github.com/toanluu/vietname?tab=readme-ov-file',
    project: '' ,
  },
  {
    id: 'paper-2',
    title: 'NEU-ESC: A Comprehensive Vietnamese Dataset for Educational Sentiment Analysis and Topic Classification',
    authors: [
      { name: 'Quang Hung Nguyen', url: 'https://scholar.google.com/citations?user=wnv-AeMAAAAJ&hl=en', bold: false },
      { name: 'Martin (Hung) Mai', url: '', bold: true },
      { name: 'Giang P. Duong', url: '', bold: false },
      { name: 'Helen (Hanh) Nguyen', url: '', bold: false },
      { name: 'Vu Huan', url: 'https://dblp.org/pid/220/7328.html', bold: false },
      { name: 'Tien Cuong Nguyen', url: '', bold: false },
      { name: 'Luong Van Thien', url: 'https://scholar.google.com/citations?user=Gi4858sAAAAJ&hl=en', bold: false }
      ],
    publication: 'Nonlinear Theory and Its Applications 2024',
    abstract: 'This paper addresses introducing a new Vietnamese dataset for Educational Sentiment Analysis and Topic Classification called NEU-ESC, specifically curated from university forums.',
    image: 'src/assets/papers/Picture1.png', // optional, uses default thumbnail if empty
    pdfFile: 'A4L-B5 (1).pdf',
    url: 'doi.org/10.34385/proc.92.A4L-B5',
    github: '',
    project: 'https://cheesenlp.vercel.app/',
  },
  {
    id: 'paper-1',
    title: 'Enhancing educational evaluation through predictive student assessment modeling',
    authors: [
      { name: 'Xuan Lam Pham', url: 'https://scholar.google.com/citations?user=KhEo3bsAAAAJ&hl=en', bold: false },
      { name: 'Martin (Hung) Mai', url: '', bold: true },
      { name: 'Quang Hung Nguyen', url: 'https://scholar.google.com/citations?user=wnv-AeMAAAAJ&hl=en', bold: false },
      { name: 'Thao Pham', url: 'https://scholar.google.com/citations?user=dy5Ui50AAAAJ&hl=en', bold: false },
      { name: 'Helen (Hanh) Nguyen', url: '', bold: false },
      { name: 'Huyen Nguyen', url: 'https://scholar.google.com/citations?user=d2uM1acAAAAJ&hl=en', bold: false },
      ],
    publication: 'Computers and Education: Artificial Intelligence, Vol 6, June 2024',
    abstract: 'This study evaluates several machine learning models used in predicting student performance. The data utilized in this study was collected from 253 undergraduate students participating in five classes within one of three courses offered by VnCodelab, an interactive learning management system, to provide insights into student performance. ',
    image: 'src/assets/papers/paper1.jpg', // optional, uses default thumbnail if empty
    pdfFile: 'enhancing.pdf',
    url: 'https://www.sciencedirect.com/science/article/pii/S2666920X2400047X',
    github: '',
    project: '',
  },
];
