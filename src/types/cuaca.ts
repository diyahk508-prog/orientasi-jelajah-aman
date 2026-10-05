// types/cuaca.ts
export interface WeatherCardProps {
kota: string;
suhu: number;
tingkatAQI: TingkatAQI;
indeksAQI?: number; // baru: angka asli dari API, opsional
}

export type TingkatAQI = "BAIK" | "SEDANG" | "TIDAK_SEHAT" | "BERBAHAYA";

export interface WeatherCardProps {
  kota: string;
  suhu: number;
  tingkatAQI: TingkatAQI;
}

// types/LaporanUdara.ts
export interface LaporanUdara {
  kota: string;
  indeksAQI: number;
  tingkat: "BAIK" | "SEDANG" | "TIDAK_SEHAT" | "BERBAHAYA";
  diperbaruiPada?: string;
}