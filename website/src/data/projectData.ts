// Generated data bundle containing verified facts and sampled PCA coordinates
export interface PCAPoint {
  pc1: number;
  pc2: number;
  cluster: number;
}

export interface CentroidPoint {
  cluster: number;
  pc1: number;
  pc2: number;
  label: string;
}

export interface FeatureMeta {
  name: string;
  type: 'Numerical' | 'Categorical' | 'Engineered' | 'Target';
  dataType: string;
  min?: number;
  max?: number;
  mean?: number;
  mode?: string;
  description: string;
}

export interface ClusterProfile {
  id: number;
  name: string;
  tagline: string;
  count: number;
  percentage: number;
  color: string;
  metrics: {
    avgTransactionAmount: number;
    minTransactionAmount: number;
    maxTransactionAmount: number;
    avgCustomerAge: number;
    avgDuration: number;
    avgBalance: number;
    minBalance: number;
    maxBalance: number;
    loginAttempts: number;
  };
  categorical: {
    occupation: string;
    ageGroup: string;
    transactionType: string;
    location: string;
    channel: string;
  };
  analysis: string;
  recommendations: string[];
}

export interface ModelMetric {
  name: string;
  type: string;
  accuracy: number;
  macroPrecision: number;
  macroRecall: number;
  macroF1: number;
  weightedF1: number;
  fileSize: string;
  fileName: string;
  classMetrics: {
    cluster: number;
    precision: number;
    recall: number;
    f1Score: number;
    support: number;
  }[];
}

export const PROJECT_METADATA = {
  title: 'Financial Transaction Profiling & Behavioral Classification',
  repositoryName: 'financial-fraud-detection',
  repositoryUrl: 'https://github.com/G-than12/financial-fraud-detection',
  liveUrl: 'https://financial-fraud-detection-showcase.vercel.app/',
  author: {
    name: 'Gathan Hilabi',
    role: 'Informatics Student · Machine Learning & Data Science Track',
    university: 'UIN K.H. Abdurrahman Wahid Pekalongan',
    githubUrl: 'https://github.com/G-than12',
    profileUrl: 'https://github.com/G-than12/financial-fraud-detection'
  },
  summary: {
    rawRecords: 2537,
    cleanedRecords: 1945,
    initialFeatures: 16,
    cleanedFeatures: 10,
    encodedFeatures: 55,
    clustersCount: 3,
    silhouetteScore: 0.4963,
    bestAccuracy: 0.9897,
    bestCvScore: 0.9865,
    modelsCount: 5
  }
};

export const FEATURES_LIST: FeatureMeta[] = [
  {
    name: 'TransactionAmount',
    type: 'Numerical',
    dataType: 'float64',
    min: 0.26,
    max: 903.19,
    mean: 256.84,
    description: 'Besaran nilai uang yang ditransaksikan dalam satu sesi transaksi.'
  },
  {
    name: 'CustomerAge',
    type: 'Numerical',
    dataType: 'float64',
    min: 18.0,
    max: 80.0,
    mean: 44.69,
    description: 'Usia nasabah pemilik rekening (rentang: 18 hingga 80 tahun).'
  },
  {
    name: 'TransactionDuration',
    type: 'Numerical',
    dataType: 'float64',
    min: 10.0,
    max: 300.0,
    mean: 119.23,
    description: 'Durasi waktu sesi transaksi dari inisiasi hingga otorisasi selesai dalam detik.'
  },
  {
    name: 'LoginAttempts',
    type: 'Numerical',
    dataType: 'float64',
    min: 1.0,
    max: 1.0,
    mean: 1.0,
    description: 'Jumlah percobaan login sebelum transaksi diproses (stabil di angka 1.0).'
  },
  {
    name: 'AccountBalance',
    type: 'Numerical',
    dataType: 'float64',
    min: 102.2,
    max: 14977.99,
    mean: 5100.82,
    description: 'Total saldo likuid simpanan nasabah di dalam rekening bank.'
  },
  {
    name: 'TransactionType',
    type: 'Categorical',
    dataType: 'object',
    mode: 'Debit',
    description: 'Metode otorisasi transaksi yang digunakan oleh nasabah (Debit / Credit).'
  },
  {
    name: 'Location',
    type: 'Categorical',
    dataType: 'object',
    mode: 'Charlotte / Tucson / Fort Worth',
    description: 'Kota asal domisili atau titik lokasi pelaksanaan transaksi nasabah (45 kota unik).'
  },
  {
    name: 'Channel',
    type: 'Categorical',
    dataType: 'object',
    mode: 'Branch',
    description: 'Kanal perbankan yang dimanfaatkan nasabah (Branch fisik, ATM, atau Online banking).'
  },
  {
    name: 'CustomerOccupation',
    type: 'Categorical',
    dataType: 'object',
    mode: 'Student / Engineer',
    description: 'Profesi utama nasabah (Student, Doctor, Engineer, Retired).'
  },
  {
    name: 'AgeGroup',
    type: 'Engineered',
    dataType: 'object',
    mode: 'Rendah',
    description: 'Fitur rekayasa dari qcut 3-kuantil umur nasabah (Rendah, Sedang, Tinggi).'
  },
  {
    name: 'Target',
    type: 'Target',
    dataType: 'int64',
    mode: 'Cluster 0, 1, 2',
    description: 'Label klaster hasil Unsupervised K-Means yang diprediksi pada tahap Supervised Learning.'
  }
];

export const PREPROCESSING_STEPS = [
  {
    step: '01',
    title: 'Data Ingestion & Quality Audit',
    action: 'Memuat 2.537 baris transaksi dengan 16 fitur awal',
    detail: 'Mengecek integritas dataset mentah, mengidentifikasi missing values pada 15 fitur (18-30 nilai kosong per kolom) dan 21 baris terduplikasi.',
    impact: 'Dataset mentah diverifikasi sebelum tahap pembersihan.'
  },
  {
    step: '02',
    title: 'Data Cleansing & Sanitization',
    action: 'Pembersihan baris kosong dan data duplikat',
    detail: 'Menjalankan dropna(inplace=True) untuk mengatasi seluruh missing values dan drop_duplicates(inplace=True) untuk data kembar.',
    impact: 'Menghasilkan dataset bersih tanpa nilai kosong.'
  },
  {
    step: '03',
    title: 'Identifier Trimming',
    action: 'Menghapus kolom ber-kardinalitas tinggi dan identifier',
    detail: 'Mengeliminasi kolom TransactionID, AccountID, PreviousTransactionDate, DeviceID, IP Address, MerchantID, dan TransactionDate yang tidak generalizable.',
    impact: 'Menghindari curse of dimensionality dan bias memorisasi.'
  },
  {
    step: '04',
    title: 'Outlier Trimming (IQR)',
    action: 'Penapisan pencilan menggunakan metode Interquartile Range',
    detail: 'Menerapkan batas bawah (Q1 - 1.5*IQR) dan batas atas (Q3 + 1.5*IQR) pada seluruh fitur numerik untuk menyaring anomali ekstrem.',
    impact: 'Ukuran data akhir menjadi 1.945 baris data homogen berkualitas tinggi.'
  },
  {
    step: '05',
    title: 'Feature Scaling & Encoding',
    action: 'Standardisasi numerik & Label Encoding kategorikal',
    detail: 'Menggunakan StandardScaler() pada 5 fitur numerik dan LabelEncoder() pada 4 fitur kategorikal (kamus encoder disimpan untuk inverse transform).',
    impact: 'Fitur numerik berpusat pada mean=0 dan variance=1.'
  },
  {
    step: '06',
    title: 'Feature Engineering (Binning)',
    action: 'Quantile binning pada umur nasabah (CustomerAge)',
    detail: 'Membagi CustomerAge menjadi 3 segmen kuantil menggunakan pd.qcut dengan label [Rendah, Sedang, Tinggi] untuk menangkap relasi demografis non-linear.',
    impact: 'Terbentuk fitur baru AgeGroup yang memperkaya representasi data.'
  }
];

export const CLUSTER_PROFILES: ClusterProfile[] = [
  {
    id: 0,
    name: 'Cluster 0',
    tagline: 'Nasabah Mahasiswa/Pelajar dengan Transaksi Harian Standar',
    count: 555,
    percentage: 28.53,
    color: '#0284c7', // sky-600
    metrics: {
      avgTransactionAmount: 254.56,
      minTransactionAmount: 0.32,
      maxTransactionAmount: 903.19,
      avgCustomerAge: 44.84,
      avgDuration: 119.74,
      avgBalance: 5001.21,
      minBalance: 117.98,
      maxBalance: 14935.50,
      loginAttempts: 1.00
    },
    categorical: {
      occupation: 'Student (Pelajar/Mahasiswa)',
      ageGroup: 'Rendah',
      transactionType: 'Debit',
      location: 'Charlotte',
      channel: 'Branch (Kantor Cabang)'
    },
    analysis: 'Cluster 0 mencakup segmen dengan rata-rata saldo akun paling rendah (5.001,21) di antara ketiga klaster. Didominasi oleh profesi Student dengan kategori umur Rendah. Pola transaksi bersifat rutin menggunakan kartu debit dengan saluran dominan kantor cabang.',
    recommendations: [
      'Produk tabungan pemuda/mahasiswa bebas biaya administrasi bulanan.',
      'Program cashback transaksi merchant harian (F&B, buku, transportasi).',
      'Edukasi literasi perbankan digital untuk mengalihkan transaksi cabang ke aplikasi mobile banking.'
    ]
  },
  {
    id: 1,
    name: 'Cluster 1',
    tagline: 'Nasabah Muda Aktif dengan Transaksi Cepat & Frekuensi Tinggi',
    count: 690,
    percentage: 35.48,
    color: '#059669', // emerald-600
    metrics: {
      avgTransactionAmount: 258.21,
      minTransactionAmount: 0.26,
      maxTransactionAmount: 889.01,
      avgCustomerAge: 43.85,
      avgDuration: 117.31,
      avgBalance: 5109.80,
      minBalance: 102.20,
      maxBalance: 14977.99,
      loginAttempts: 1.00
    },
    categorical: {
      occupation: 'Student (Pelajar/Mahasiswa)',
      ageGroup: 'Rendah',
      transactionType: 'Debit',
      location: 'Tucson',
      channel: 'Branch (Kantor Cabang)'
    },
    analysis: 'Cluster 1 memiliki rata-rata umur termuda (43,85 tahun) dengan nominal transaksi rata-rata tertinggi (258,21) dan proses eksekusi transaksi paling cepat (117,31 detik). Menunjukkan efisiensi tinggi nasabah dalam bertransaksi belanja aktif.',
    recommendations: [
      'Integrasi sistem pembayaran instan (QRIS, contactless card, e-wallet auto-topup).',
      'Promo merchant gaya hidup, hiburan, dan belanja online.',
      'Fitur tabungan terencana otomatis (auto-save round-up) untuk membangun kebiasaan menabung sehat.'
    ]
  },
  {
    id: 2,
    name: 'Cluster 2',
    tagline: 'Nasabah Profesional Mapan dengan Saldo & Akumulasi Dana Tertinggi',
    count: 700,
    percentage: 35.99,
    color: '#6366f1', // indigo-500
    metrics: {
      avgTransactionAmount: 257.29,
      minTransactionAmount: 0.45,
      maxTransactionAmount: 890.24,
      avgCustomerAge: 45.41,
      avgDuration: 120.70,
      avgBalance: 5170.92,
      minBalance: 112.76,
      maxBalance: 14942.78,
      loginAttempts: 1.00
    },
    categorical: {
      occupation: 'Engineer (Insinyur/Profesional)',
      ageGroup: 'Sedang (Produktif Matang)',
      transactionType: 'Debit',
      location: 'Fort Worth',
      channel: 'Branch (Kantor Cabang)'
    },
    analysis: 'Cluster 2 merepresentasikan segmen nasabah paling mapan secara finansial dengan saldo rata-rata tertinggi (5.170,92) dan usia paling matang (45,41 tahun). Didominasi oleh profesi Engineer dengan kelompok usia kerja matang.',
    recommendations: [
      'Penawaran instrumen investasi berimbal hasil kompetitif (reksa dana, obligasi ritel, deposito suku bunga khusus).',
      'Fasilitas pembiayaan properti (KPR/KPA) dan pinjaman modal kerja profesional.',
      'Akses layanan nasabah prioritas (Priority Banking) dan asuransi proteksi jiwa/keluarga.'
    ]
  }
];

export const PCA_POINTS: PCAPoint[] = [{"pc1": -17.3, "pc2": 0.38, "cluster": 0}, {"pc1": -18.31, "pc2": -2.23, "cluster": 0}, {"pc1": -11.3, "pc2": -1.18, "cluster": 0}, {"pc1": -13.3, "pc2": 0.4, "cluster": 0}, {"pc1": -14.3, "pc2": -1.09, "cluster": 0}, {"pc1": -16.31, "pc2": -0.06, "cluster": 0}, {"pc1": -18.29, "pc2": 2.41, "cluster": 0}, {"pc1": -11.3, "pc2": -0.53, "cluster": 0}, {"pc1": -9.3, "pc2": -1.08, "cluster": 0}, {"pc1": -19.29, "pc2": -0.72, "cluster": 0}, {"pc1": -11.3, "pc2": -1.15, "cluster": 0}, {"pc1": -11.3, "pc2": -0.36, "cluster": 0}, {"pc1": -15.31, "pc2": -1.11, "cluster": 0}, {"pc1": -10.29, "pc2": 2.63, "cluster": 0}, {"pc1": -14.3, "pc2": -0.98, "cluster": 0}, {"pc1": -13.3, "pc2": 2.4, "cluster": 0}, {"pc1": -16.31, "pc2": -0.13, "cluster": 0}, {"pc1": -18.29, "pc2": 2.27, "cluster": 0}, {"pc1": -21.29, "pc2": 2.56, "cluster": 0}, {"pc1": -17.3, "pc2": 2.53, "cluster": 0}, {"pc1": -17.31, "pc2": -0.68, "cluster": 0}, {"pc1": -17.3, "pc2": -0.37, "cluster": 0}, {"pc1": -13.29, "pc2": 1.87, "cluster": 0}, {"pc1": -19.3, "pc2": -1.62, "cluster": 0}, {"pc1": -18.31, "pc2": -1.45, "cluster": 0}, {"pc1": -14.31, "pc2": -0.42, "cluster": 0}, {"pc1": -15.29, "pc2": 2.6, "cluster": 0}, {"pc1": -14.3, "pc2": -0.27, "cluster": 0}, {"pc1": -9.31, "pc2": -1.17, "cluster": 0}, {"pc1": -13.3, "pc2": -0.98, "cluster": 0}, {"pc1": -14.29, "pc2": 2.39, "cluster": 0}, {"pc1": -20.29, "pc2": 2.3, "cluster": 0}, {"pc1": -17.31, "pc2": -1.01, "cluster": 0}, {"pc1": -19.3, "pc2": -0.36, "cluster": 0}, {"pc1": -19.3, "pc2": -1.19, "cluster": 0}, {"pc1": -20.3, "pc2": 2.67, "cluster": 0}, {"pc1": -15.29, "pc2": 2.54, "cluster": 0}, {"pc1": -15.3, "pc2": -0.07, "cluster": 0}, {"pc1": -16.31, "pc2": -0.95, "cluster": 0}, {"pc1": -12.3, "pc2": -0.94, "cluster": 0}, {"pc1": -9.3, "pc2": 2.39, "cluster": 0}, {"pc1": -9.3, "pc2": -0.16, "cluster": 0}, {"pc1": -18.3, "pc2": -0.69, "cluster": 0}, {"pc1": -11.31, "pc2": -2.52, "cluster": 0}, {"pc1": -11.3, "pc2": 0.19, "cluster": 0}, {"pc1": -10.3, "pc2": -1.9, "cluster": 0}, {"pc1": -17.3, "pc2": -3.07, "cluster": 0}, {"pc1": -12.31, "pc2": -0.51, "cluster": 0}, {"pc1": -10.3, "pc2": -0.79, "cluster": 0}, {"pc1": -19.29, "pc2": 2.63, "cluster": 0}, {"pc1": -16.3, "pc2": -0.59, "cluster": 0}, {"pc1": -11.3, "pc2": -0.16, "cluster": 0}, {"pc1": -12.31, "pc2": -3.04, "cluster": 0}, {"pc1": -9.3, "pc2": -0.99, "cluster": 0}, {"pc1": -18.3, "pc2": -0.74, "cluster": 0}, {"pc1": -9.29, "pc2": 0.32, "cluster": 0}, {"pc1": -15.3, "pc2": -2.08, "cluster": 0}, {"pc1": -13.3, "pc2": -1.86, "cluster": 0}, {"pc1": -11.31, "pc2": -0.98, "cluster": 0}, {"pc1": -14.3, "pc2": -0.41, "cluster": 0}, {"pc1": -21.31, "pc2": -1.94, "cluster": 0}, {"pc1": -10.3, "pc2": -0.88, "cluster": 0}, {"pc1": -9.29, "pc2": 2.27, "cluster": 0}, {"pc1": -14.3, "pc2": -0.81, "cluster": 0}, {"pc1": -19.31, "pc2": -0.91, "cluster": 0}, {"pc1": -16.3, "pc2": 0.0, "cluster": 0}, {"pc1": -13.29, "pc2": 1.89, "cluster": 0}, {"pc1": -9.3, "pc2": 2.62, "cluster": 0}, {"pc1": -15.29, "pc2": 2.55, "cluster": 0}, {"pc1": -17.29, "pc2": 2.63, "cluster": 0}, {"pc1": -12.29, "pc2": 2.51, "cluster": 0}, {"pc1": -20.3, "pc2": -1.24, "cluster": 0}, {"pc1": -16.3, "pc2": -2.64, "cluster": 0}, {"pc1": -11.3, "pc2": -0.42, "cluster": 0}, {"pc1": -11.3, "pc2": -1.62, "cluster": 0}, {"pc1": -16.31, "pc2": -0.75, "cluster": 0}, {"pc1": -20.29, "pc2": 2.4, "cluster": 0}, {"pc1": -14.31, "pc2": -2.46, "cluster": 0}, {"pc1": -14.3, "pc2": -1.27, "cluster": 0}, {"pc1": -16.31, "pc2": -0.84, "cluster": 0}, {"pc1": -17.29, "pc2": 2.65, "cluster": 0}, {"pc1": -16.3, "pc2": -2.54, "cluster": 0}, {"pc1": -18.3, "pc2": -0.72, "cluster": 0}, {"pc1": -12.31, "pc2": -1.88, "cluster": 0}, {"pc1": -21.29, "pc2": 2.34, "cluster": 0}, {"pc1": -21.3, "pc2": -2.25, "cluster": 0}, {"pc1": -10.29, "pc2": 2.3, "cluster": 0}, {"pc1": -18.3, "pc2": -0.82, "cluster": 0}, {"pc1": -12.31, "pc2": -0.83, "cluster": 0}, {"pc1": -14.3, "pc2": -0.46, "cluster": 0}, {"pc1": -11.3, "pc2": -0.91, "cluster": 0}, {"pc1": -14.31, "pc2": -0.01, "cluster": 0}, {"pc1": -15.3, "pc2": 0.49, "cluster": 0}, {"pc1": -20.31, "pc2": -2.36, "cluster": 0}, {"pc1": -16.3, "pc2": -0.93, "cluster": 0}, {"pc1": -13.3, "pc2": -0.72, "cluster": 0}, {"pc1": -16.31, "pc2": -1.92, "cluster": 0}, {"pc1": -9.3, "pc2": 0.33, "cluster": 0}, {"pc1": -11.3, "pc2": -1.23, "cluster": 0}, {"pc1": -17.3, "pc2": -0.1, "cluster": 0}, {"pc1": 19.69, "pc2": -3.14, "cluster": 1}, {"pc1": 6.7, "pc2": 2.58, "cluster": 1}, {"pc1": 11.71, "pc2": 2.54, "cluster": 1}, {"pc1": 15.7, "pc2": -0.09, "cluster": 1}, {"pc1": 9.7, "pc2": -0.79, "cluster": 1}, {"pc1": 13.7, "pc2": -1.73, "cluster": 1}, {"pc1": 14.7, "pc2": 0.08, "cluster": 1}, {"pc1": 10.71, "pc2": 2.37, "cluster": 1}, {"pc1": 18.69, "pc2": -0.68, "cluster": 1}, {"pc1": 10.71, "pc2": 2.38, "cluster": 1}, {"pc1": 13.71, "pc2": 2.26, "cluster": 1}, {"pc1": 8.7, "pc2": -0.59, "cluster": 1}, {"pc1": 7.7, "pc2": 0.91, "cluster": 1}, {"pc1": 15.7, "pc2": 2.5, "cluster": 1}, {"pc1": 18.71, "pc2": 2.4, "cluster": 1}, {"pc1": 19.71, "pc2": 2.33, "cluster": 1}, {"pc1": 9.71, "pc2": 2.3, "cluster": 1}, {"pc1": 6.7, "pc2": -0.2, "cluster": 1}, {"pc1": 9.71, "pc2": 2.16, "cluster": 1}, {"pc1": 18.7, "pc2": 2.48, "cluster": 1}, {"pc1": 17.7, "pc2": -1.78, "cluster": 1}, {"pc1": 9.71, "pc2": 2.29, "cluster": 1}, {"pc1": 12.71, "pc2": 2.47, "cluster": 1}, {"pc1": 13.71, "pc2": 0.2, "cluster": 1}, {"pc1": 10.7, "pc2": 1.35, "cluster": 1}, {"pc1": 12.7, "pc2": 0.13, "cluster": 1}, {"pc1": 15.7, "pc2": 0.07, "cluster": 1}, {"pc1": 10.69, "pc2": -2.94, "cluster": 1}, {"pc1": 20.71, "pc2": 2.35, "cluster": 1}, {"pc1": 8.7, "pc2": -0.07, "cluster": 1}, {"pc1": 6.69, "pc2": -2.5, "cluster": 1}, {"pc1": 18.7, "pc2": -0.31, "cluster": 1}, {"pc1": 11.71, "pc2": 2.25, "cluster": 1}, {"pc1": 19.71, "pc2": 2.29, "cluster": 1}, {"pc1": 13.71, "pc2": 2.4, "cluster": 1}, {"pc1": 10.69, "pc2": -0.68, "cluster": 1}, {"pc1": 14.7, "pc2": -0.82, "cluster": 1}, {"pc1": 13.7, "pc2": -1.36, "cluster": 1}, {"pc1": 7.7, "pc2": -1.21, "cluster": 1}, {"pc1": 6.71, "pc2": 2.57, "cluster": 1}, {"pc1": 11.71, "pc2": 2.5, "cluster": 1}, {"pc1": 11.69, "pc2": -0.59, "cluster": 1}, {"pc1": 18.7, "pc2": -0.13, "cluster": 1}, {"pc1": 8.7, "pc2": -1.83, "cluster": 1}, {"pc1": 12.71, "pc2": 1.65, "cluster": 1}, {"pc1": 14.71, "pc2": 0.87, "cluster": 1}, {"pc1": 17.71, "pc2": 2.21, "cluster": 1}, {"pc1": 16.7, "pc2": 2.42, "cluster": 1}, {"pc1": 13.71, "pc2": 2.21, "cluster": 1}, {"pc1": 17.7, "pc2": -0.88, "cluster": 1}, {"pc1": 11.7, "pc2": -2.06, "cluster": 1}, {"pc1": 20.7, "pc2": -1.12, "cluster": 1}, {"pc1": 7.7, "pc2": -0.52, "cluster": 1}, {"pc1": 18.71, "pc2": 2.51, "cluster": 1}, {"pc1": 9.7, "pc2": -1.11, "cluster": 1}, {"pc1": 18.71, "pc2": 2.43, "cluster": 1}, {"pc1": 6.7, "pc2": -0.64, "cluster": 1}, {"pc1": 7.71, "pc2": 2.42, "cluster": 1}, {"pc1": 11.71, "pc2": 2.32, "cluster": 1}, {"pc1": 8.69, "pc2": -0.43, "cluster": 1}, {"pc1": 6.7, "pc2": -0.19, "cluster": 1}, {"pc1": 14.71, "pc2": 0.87, "cluster": 1}, {"pc1": 7.69, "pc2": -0.94, "cluster": 1}, {"pc1": 14.7, "pc2": -2.35, "cluster": 1}, {"pc1": 17.7, "pc2": -1.06, "cluster": 1}, {"pc1": 6.7, "pc2": -0.63, "cluster": 1}, {"pc1": 8.71, "pc2": 2.23, "cluster": 1}, {"pc1": 7.69, "pc2": -2.16, "cluster": 1}, {"pc1": 6.7, "pc2": -1.39, "cluster": 1}, {"pc1": 12.7, "pc2": -0.58, "cluster": 1}, {"pc1": 12.7, "pc2": -3.16, "cluster": 1}, {"pc1": 6.7, "pc2": 2.53, "cluster": 1}, {"pc1": 15.7, "pc2": 0.7, "cluster": 1}, {"pc1": 15.7, "pc2": -0.75, "cluster": 1}, {"pc1": 14.7, "pc2": -0.59, "cluster": 1}, {"pc1": 8.7, "pc2": -1.42, "cluster": 1}, {"pc1": 13.7, "pc2": -0.64, "cluster": 1}, {"pc1": 18.69, "pc2": -2.65, "cluster": 1}, {"pc1": 20.69, "pc2": -0.4, "cluster": 1}, {"pc1": 8.7, "pc2": 2.43, "cluster": 1}, {"pc1": 10.7, "pc2": -1.13, "cluster": 1}, {"pc1": 14.71, "pc2": 2.56, "cluster": 1}, {"pc1": 18.7, "pc2": -0.98, "cluster": 1}, {"pc1": 18.7, "pc2": -0.6, "cluster": 1}, {"pc1": 7.7, "pc2": -0.03, "cluster": 1}, {"pc1": 17.71, "pc2": 2.44, "cluster": 1}, {"pc1": 10.7, "pc2": 1.02, "cluster": 1}, {"pc1": 20.7, "pc2": -1.1, "cluster": 1}, {"pc1": 18.71, "pc2": 2.36, "cluster": 1}, {"pc1": 20.71, "pc2": 0.4, "cluster": 1}, {"pc1": 12.7, "pc2": -0.02, "cluster": 1}, {"pc1": 13.7, "pc2": -0.62, "cluster": 1}, {"pc1": 9.7, "pc2": -0.37, "cluster": 1}, {"pc1": 16.71, "pc2": 0.79, "cluster": 1}, {"pc1": 15.7, "pc2": -0.49, "cluster": 1}, {"pc1": 11.71, "pc2": 1.28, "cluster": 1}, {"pc1": 11.7, "pc2": -0.42, "cluster": 1}, {"pc1": 10.7, "pc2": -2.17, "cluster": 1}, {"pc1": 9.7, "pc2": -2.86, "cluster": 1}, {"pc1": 7.71, "pc2": 2.2, "cluster": 1}, {"pc1": -5.31, "pc2": -2.05, "cluster": 2}, {"pc1": -5.3, "pc2": -0.69, "cluster": 2}, {"pc1": -1.29, "pc2": 2.37, "cluster": 2}, {"pc1": 4.7, "pc2": -1.01, "cluster": 2}, {"pc1": -8.29, "pc2": 0.42, "cluster": 2}, {"pc1": -7.3, "pc2": -1.75, "cluster": 2}, {"pc1": 3.7, "pc2": 1.49, "cluster": 2}, {"pc1": 0.71, "pc2": 1.92, "cluster": 2}, {"pc1": 3.71, "pc2": 2.36, "cluster": 2}, {"pc1": -5.3, "pc2": 2.53, "cluster": 2}, {"pc1": 2.69, "pc2": -0.68, "cluster": 2}, {"pc1": -3.3, "pc2": -1.38, "cluster": 2}, {"pc1": 3.71, "pc2": 2.42, "cluster": 2}, {"pc1": -1.31, "pc2": -1.34, "cluster": 2}, {"pc1": 1.69, "pc2": -1.05, "cluster": 2}, {"pc1": -5.31, "pc2": -2.19, "cluster": 2}, {"pc1": -2.3, "pc2": 0.11, "cluster": 2}, {"pc1": 0.7, "pc2": 0.17, "cluster": 2}, {"pc1": 2.7, "pc2": -0.42, "cluster": 2}, {"pc1": 1.71, "pc2": 2.55, "cluster": 2}, {"pc1": 4.7, "pc2": -0.86, "cluster": 2}, {"pc1": 0.69, "pc2": -2.79, "cluster": 2}, {"pc1": -7.29, "pc2": 2.27, "cluster": 2}, {"pc1": -2.3, "pc2": -1.68, "cluster": 2}, {"pc1": -6.3, "pc2": 0.01, "cluster": 2}, {"pc1": -0.3, "pc2": 2.33, "cluster": 2}, {"pc1": 2.7, "pc2": -0.33, "cluster": 2}, {"pc1": -2.31, "pc2": -1.94, "cluster": 2}, {"pc1": -4.31, "pc2": -1.21, "cluster": 2}, {"pc1": -4.3, "pc2": -0.22, "cluster": 2}, {"pc1": 3.69, "pc2": -1.37, "cluster": 2}, {"pc1": -8.3, "pc2": -1.79, "cluster": 2}, {"pc1": 3.69, "pc2": -1.02, "cluster": 2}, {"pc1": 0.71, "pc2": 2.27, "cluster": 2}, {"pc1": 5.69, "pc2": -2.48, "cluster": 2}, {"pc1": -0.3, "pc2": -0.35, "cluster": 2}, {"pc1": 5.7, "pc2": -0.54, "cluster": 2}, {"pc1": 2.71, "pc2": 2.57, "cluster": 2}, {"pc1": -1.3, "pc2": 0.17, "cluster": 2}, {"pc1": -8.3, "pc2": 2.52, "cluster": 2}, {"pc1": -1.3, "pc2": -0.12, "cluster": 2}, {"pc1": 4.7, "pc2": 2.43, "cluster": 2}, {"pc1": -8.3, "pc2": -0.49, "cluster": 2}, {"pc1": 4.7, "pc2": -1.69, "cluster": 2}, {"pc1": -0.3, "pc2": -0.6, "cluster": 2}, {"pc1": -7.29, "pc2": 0.15, "cluster": 2}, {"pc1": 2.7, "pc2": 0.29, "cluster": 2}, {"pc1": 5.7, "pc2": -0.26, "cluster": 2}, {"pc1": -3.3, "pc2": -1.19, "cluster": 2}, {"pc1": -0.3, "pc2": -0.58, "cluster": 2}, {"pc1": 5.71, "pc2": 0.47, "cluster": 2}, {"pc1": -6.3, "pc2": -0.52, "cluster": 2}, {"pc1": -5.3, "pc2": -0.32, "cluster": 2}, {"pc1": -6.31, "pc2": -0.45, "cluster": 2}, {"pc1": -0.3, "pc2": -0.81, "cluster": 2}, {"pc1": -6.3, "pc2": -2.91, "cluster": 2}, {"pc1": -2.3, "pc2": -1.94, "cluster": 2}, {"pc1": 2.69, "pc2": -2.42, "cluster": 2}, {"pc1": 0.71, "pc2": 2.42, "cluster": 2}, {"pc1": -5.31, "pc2": -1.13, "cluster": 2}, {"pc1": 1.7, "pc2": -0.77, "cluster": 2}, {"pc1": -4.31, "pc2": -2.72, "cluster": 2}, {"pc1": -5.31, "pc2": -1.03, "cluster": 2}, {"pc1": 0.69, "pc2": -2.6, "cluster": 2}, {"pc1": 4.71, "pc2": 2.29, "cluster": 2}, {"pc1": -2.3, "pc2": -0.79, "cluster": 2}, {"pc1": 1.71, "pc2": 0.02, "cluster": 2}, {"pc1": 1.7, "pc2": -0.09, "cluster": 2}, {"pc1": 4.7, "pc2": -0.18, "cluster": 2}, {"pc1": 4.7, "pc2": -0.97, "cluster": 2}, {"pc1": -4.29, "pc2": 0.27, "cluster": 2}, {"pc1": -5.31, "pc2": -0.38, "cluster": 2}, {"pc1": 4.7, "pc2": 0.32, "cluster": 2}, {"pc1": -2.29, "pc2": -0.8, "cluster": 2}, {"pc1": 2.7, "pc2": -0.59, "cluster": 2}, {"pc1": 5.7, "pc2": -0.41, "cluster": 2}, {"pc1": 3.69, "pc2": -0.63, "cluster": 2}, {"pc1": 0.7, "pc2": -1.84, "cluster": 2}, {"pc1": 3.7, "pc2": -0.29, "cluster": 2}, {"pc1": -0.3, "pc2": -1.98, "cluster": 2}, {"pc1": -1.3, "pc2": -2.39, "cluster": 2}, {"pc1": -3.3, "pc2": 0.0, "cluster": 2}, {"pc1": -6.29, "pc2": 1.47, "cluster": 2}, {"pc1": -0.3, "pc2": 0.29, "cluster": 2}, {"pc1": 0.69, "pc2": -1.55, "cluster": 2}, {"pc1": 0.7, "pc2": 0.31, "cluster": 2}, {"pc1": -6.3, "pc2": -0.45, "cluster": 2}, {"pc1": -1.31, "pc2": -0.13, "cluster": 2}, {"pc1": -6.29, "pc2": 2.52, "cluster": 2}, {"pc1": 0.71, "pc2": -0.13, "cluster": 2}, {"pc1": 0.7, "pc2": -0.3, "cluster": 2}, {"pc1": -1.29, "pc2": 2.38, "cluster": 2}, {"pc1": 0.69, "pc2": -2.5, "cluster": 2}, {"pc1": 0.7, "pc2": 2.32, "cluster": 2}, {"pc1": -8.3, "pc2": 0.52, "cluster": 2}, {"pc1": 1.7, "pc2": -1.59, "cluster": 2}, {"pc1": -1.29, "pc2": 2.43, "cluster": 2}, {"pc1": 3.7, "pc2": -0.97, "cluster": 2}, {"pc1": 4.7, "pc2": -0.28, "cluster": 2}, {"pc1": 0.7, "pc2": -0.03, "cluster": 2}];

export const CENTROIDS: CentroidPoint[] = [{"cluster": 0, "pc1": -15.3, "pc2": 0.05, "label": "Centroid 0"}, {"cluster": 1, "pc1": 13.75, "pc2": 0.01, "label": "Centroid 1"}, {"cluster": 2, "pc1": -1.43, "pc2": -0.05, "label": "Centroid 2"}];

export const CLASSIFICATION_MODELS: ModelMetric[] = [
  {
    name: 'Decision Tree Classifier',
    type: 'Baseline Model',
    accuracy: 0.9563,
    macroPrecision: 0.95,
    macroRecall: 0.96,
    macroF1: 0.95,
    weightedF1: 0.96,
    fileSize: '16.2 KB',
    fileName: 'decision_tree_model.h5',
    classMetrics: [
      { cluster: 0, precision: 0.91, recall: 0.95, f1Score: 0.93, support: 111 },
      { cluster: 1, precision: 1.00, recall: 1.00, f1Score: 1.00, support: 138 },
      { cluster: 2, precision: 0.96, recall: 0.92, f1Score: 0.94, support: 140 }
    ]
  },
  {
    name: 'Random Forest Classifier',
    type: 'Ensemble Exploration',
    accuracy: 0.9871,
    macroPrecision: 0.99,
    macroRecall: 0.98,
    macroF1: 0.99,
    weightedF1: 0.99,
    fileSize: '1.88 MB',
    fileName: 'explore_RandomForest_classification.h5',
    classMetrics: [
      { cluster: 0, precision: 1.00, recall: 0.95, f1Score: 0.98, support: 111 },
      { cluster: 1, precision: 1.00, recall: 1.00, f1Score: 1.00, support: 138 },
      { cluster: 2, precision: 0.97, recall: 1.00, f1Score: 0.98, support: 140 }
    ]
  },
  {
    name: 'Tuned Random Forest (GridSearchCV)',
    type: 'Optimized Champion Model',
    accuracy: 0.9897,
    macroPrecision: 0.99,
    macroRecall: 0.98,
    macroF1: 0.99,
    weightedF1: 0.99,
    fileSize: '936 KB',
    fileName: 'tuning_classification.h5',
    classMetrics: [
      { cluster: 0, precision: 1.00, recall: 0.95, f1Score: 0.98, support: 111 },
      { cluster: 1, precision: 0.99, recall: 1.00, f1Score: 1.00, support: 138 },
      { cluster: 2, precision: 0.97, recall: 1.00, f1Score: 0.99, support: 140 }
    ]
  }
];

export const CONFUSION_MATRICES = {
  'Decision Tree': [
    [105, 0, 6],
    [0, 138, 0],
    [11, 0, 129]
  ],
  'Random Forest': [
    [106, 0, 5],
    [0, 138, 0],
    [0, 0, 140]
  ],
  'Tuned Random Forest': [
    [106, 1, 4],
    [0, 138, 0],
    [0, 0, 140]
  ]
};

export const HYPERPARAMETER_DETAILS = {
  algorithm: 'RandomForestClassifier',
  tuner: 'GridSearchCV',
  crossValidation: '5-Fold Stratified K-Fold',
  scoring: 'accuracy',
  parameterGrid: {
    'n_estimators': [50, 100, 200],
    'max_depth': ['None', 10, 20],
    'min_samples_split': [2, 5]
  },
  bestParameters: {
    'n_estimators': 50,
    'max_depth': 'None (unbounded)',
    'min_samples_split': 2
  },
  bestCvScore: 0.9865,
  testAccuracy: 0.9897
};

export const MODEL_ARTIFACTS = [
  {
    name: 'K-Means Clustering Model',
    filename: 'model_clustering.h5',
    algorithm: 'K-Means (k=3, random_state=42)',
    purpose: 'Segmentasi tanpa supervisi perilaku nasabah ke dalam 3 klaster optimal.',
    size: '9.2 KB',
    category: 'Unsupervised'
  },
  {
    name: 'PCA-Transformed Clustering Model',
    filename: 'PCA_model_clustering.h5',
    algorithm: 'PCA (2 Components) + K-Means',
    purpose: 'Model pembanding hasil reduksi dimensi 2D untuk visualisasi sebaran spasial.',
    size: '8.8 KB',
    category: 'Unsupervised'
  },
  {
    name: 'Decision Tree Classifier',
    filename: 'decision_tree_model.h5',
    algorithm: 'DecisionTreeClassifier(random_state=42)',
    purpose: 'Baseline model klasifikasi multi-kelas (Akurasi: 95.63%).',
    size: '16.2 KB',
    category: 'Supervised Baseline'
  },
  {
    name: 'Random Forest Classifier',
    filename: 'explore_RandomForest_classification.h5',
    algorithm: 'RandomForestClassifier(random_state=42)',
    purpose: 'Model ensemble bagging untuk meningkatkan akurasi dan stabilitas (Akurasi: 98.71%).',
    size: '1.88 MB',
    category: 'Supervised Ensemble'
  },
  {
    name: 'Tuned Random Forest Estimator',
    filename: 'tuning_classification.h5',
    algorithm: 'GridSearchCV Tuned Random Forest',
    purpose: 'Model terbaik yang dioptimasi dengan 5-fold CV (Akurasi Uji: 98.97%).',
    size: '936 KB',
    category: 'Supervised Champion'
  }
];

export const METHODOLOGY_STEPS = [
  {
    number: '01',
    title: 'Data Preparation & Ingestion',
    description: 'Memuat data transaksi dari Google Sheets, memeriksa struktur kolom, tipe data, dan dimensi 2.537 baris.'
  },
  {
    number: '02',
    title: 'Exploratory Data Analysis (EDA)',
    description: 'Meninjau korelasi antar-fitur, distribusi histogram fitur numerik, dan analisis sebaran kategori transaksi.'
  },
  {
    number: '03',
    title: 'Data Preprocessing & Outlier Trimming',
    description: 'Menghapus 29 baris null, 21 baris duplikat, identifier unik, dan menyaring pencilan menggunakan 1.5x IQR (menghasilkan 1.945 data bersih).'
  },
  {
    number: '04',
    title: 'Feature Scaling & Engineering',
    description: 'Standardisasi fitur numerik dengan StandardScaler, LabelEncoder untuk kategorikal, dan quantile binning CustomerAge -> AgeGroup.'
  },
  {
    number: '05',
    title: 'Unsupervised Clustering & PCA',
    description: 'Uji Elbow Method (Silhouette Score) menentukan k=3, melatih K-Means (Silhouette: 0.4963), dan reduksi dimensi spasial PCA 2D.'
  },
  {
    number: '06',
    title: 'Inverse Transform & Segment Profiling',
    description: 'Mengembalikan data hasil klasterisasi ke satuan riil untuk menganalisis statistik mean, min, max, modus, dan rekomendasi bisnis.'
  },
  {
    number: '07',
    title: 'Supervised Data Splitting & One-Hot Encoding',
    description: 'One-hot encoding pada fitur kategorikal menghasilkan 55 fitur, dilanjutkan Stratified Train-Test Split (80:20).'
  },
  {
    number: '08',
    title: 'Model Training & Hyperparameter Tuning',
    description: 'Melatih Decision Tree, Random Forest, dan GridSearchCV dengan 18 kombinasi parameter untuk menemukan konfigurasi optimal.'
  },
  {
    number: '09',
    title: 'Evaluation & Model Serialization',
    description: 'Evaluasi classification report (Precision, Recall, F1-Score) dan serialisasi seluruh model ke format .h5.'
  }
];

export const TECHNICAL_ACCORDIONS = [
  {
    id: 'tech-1',
    title: 'Outlier Trimming: Interquartile Range (IQR) Formulation',
    content: 'Outlier dideteksi secara statistik pada setiap fitur numerik menggunakan rentang antarkuartil: IQR = Q3 - Q1. Batas bawah ditentukan sebagai Lower Bound = Q1 - 1.5 * IQR, sedangkan batas atas Upper Bound = Q3 + 1.5 * IQR. Seluruh sampel di luar rentang inklusif ini dihapus, menyisakan 1.945 data murni yang bebas dari skewness ekstrem.'
  },
  {
    id: 'tech-2',
    title: 'Feature Scaling: StandardScaler Standard Normal Normalization',
    content: 'Algoritma berbasis jarak seperti K-Means dan PCA sangat sensitif terhadap skala fitur. StandardScaler mentransformasikan setiap fitur x menjadi z = (x - mu) / sigma, menghasilkan rata-rata (mean) = 0 dan standar deviasi = 1, sehingga setiap fitur memiliki bobot seimbang dalam kalkulasi jarak Euclidean.'
  },
  {
    id: 'tech-3',
    title: 'Dimensionality Reduction: 2D Principal Component Analysis (PCA)',
    content: 'PCA mentransformasikan 10 dimensi fitur hasil preprocessing ke dalam 2 komponen utama linear ortogonal (PC1 dan PC2) yang menangkap varians data terbesar. Ini memungkinkan pemetaan klaster 10-dimensi ke dalam bidang visual 2 dimensi tanpa kehilangan pola pemisahan spasial.'
  },
  {
    id: 'tech-4',
    title: 'Inverse Transform Mechanism for Business Interpretability',
    content: 'Untuk menghasilkan wawasan bisnis yang dapat ditindaklanjuti, data yang berada dalam skala z-score dikembalikan ke nilai aslinya menggunakan scaler.inverse_transform(), dan label numerik dikonversi kembali ke teks aslinya dengan encoder.inverse_transform(). Ini menghasilkan tabel mean, min, max berdenominasi mata uang dan usia aktual.'
  },
  {
    id: 'tech-5',
    title: 'Stratified Train-Test Split (80:20 Ratio)',
    content: 'Data uji dipisahkan sebanyak 20% (389 baris) dan data latih 80% (1.556 baris) dengan parameter stratify=y. Pengacakan terkontrol dengan random_state=42 memastikan proporsi sampel pada ketiga klaster (Target 0: 28.5%, Target 1: 35.5%, Target 2: 36.0%) persis sama antara data latih dan data uji.'
  },
  {
    id: 'tech-6',
    title: 'GridSearchCV Cross-Validation Setup',
    content: 'Hyperparameter tuning pada Random Forest memanfaatkan 5-fold Stratified Cross-Validation pada 18 kombinasi parameter: n_estimators: [50, 100, 200], max_depth: [None, 10, 20], min_samples_split: [2, 5]. Setiap iterasi diukur berdasarkan akurasi klasifikasi, menghasilkan skor validasi silang rata-rata 98.65%.'
  }
];

export const LIMITATIONS_DATA = {
  title: 'Project Technical Scope & Constraints',
  statement: 'The classification target represents cluster assignments generated during the unsupervised learning stage rather than an independently labeled fraud/non-fraud target.',
  explanation: 'Proyek ini menggunakan label klaster hasil K-Means (Target: 0, 1, 2) sebagai ground truth untuk melatih model klasifikasi terawasi. Pendekatan ini berfungsi sebagai sistem behavioral profiling instan untuk memprediksi segmen nasabah baru, bukan sebagai pendeteksi biner penipuan (fraud detection) karena dataset mentah tidak memiliki label ground truth penipuan eksplisit.'
};

export const FUTURE_WORK_ROADMAP = [
  {
    title: 'Supervised True Fraud Detection Labeling',
    status: 'Planned',
    description: 'Mengintegrasikan dataset transaksi keuangan dengan ground-truth label fraud/chargeback nyata untuk membandingkan profiling perilaku dengan deteksi penipuan aktual.'
  },
  {
    title: 'Model Explainability with SHAP / LIME',
    status: 'Planned',
    description: 'Menerapkan SHAP (SHapley Additive exPlanations) untuk menghitung kontribusi nilai masing-masing fitur dalam penentuan segmen nasabah.'
  },
  {
    title: 'High-Throughput FastAPI Microservice',
    status: 'Planned',
    description: 'Membungkus model tuning_classification.h5 ke dalam REST API berbasis FastAPI dengan schema validasi Pydantic untuk inferensi sub-millisecond.'
  },
  {
    title: 'Containerization & Cloud CI/CD',
    status: 'Planned',
    description: 'Membangun Docker image multi-stage build dan GitHub Actions workflow untuk deployment otomatis ke container runtime cloud.'
  }
];
