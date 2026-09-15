import { Text, View } from "react-native";
import { LaporanUdara } from "../types/cuaca";

interface IndikatorAQIProps {
  data: LaporanUdara;
}

export default function IndikatorAQI({ data }: IndikatorAQIProps) {
  let warna = "green";

  if (data.tingkat === "SEDANG") {
    warna = "orange";
  } else if (data.tingkat === "TIDAK_SEHAT") {
    warna = "red";
  } else if (data.tingkat === "BERBAHAYA") {
    warna = "purple";
  }

  return (
    <View>
      <Text style={{ color: warna, fontSize: 18, fontWeight: "bold" }}>
        {data.kota}: {data.indeksAQI} - {data.tingkat}
      </Text>

      {data.diperbaruiPada && (
        <Text>
          Diperbarui pada: {data.diperbaruiPada}
        </Text>
      )}
    </View>
  );
}