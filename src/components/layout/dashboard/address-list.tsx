// components/AlamatTable.tsx
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const alamatList = [
  {
    nama: "Muhammad Taufik Heryunanto",
    telp: "(+62) 898 0676 899",
    alamat: "RT.8/RW.14, Ngetal, Seyegan",
    detail: "SEYEGAN, KAB. SLEMAN, DI YOGYAKARTA, ID, 55561",
    label: ["Utama", "Alamat pengembalian"],
    isUtama: true,
  },
  {
    nama: "Muhammad Taufik",
    telp: "(+62) 898 0676 899",
    alamat: "78W9+F85, Ngotal, Margokaton, Kec. Seyegan",
    detail: "SEYEGAN, KAB. SLEMAN, DI YOGYAKARTA, ID, 55561",
    label: ["Alamat Toko"],
  },
  {
    nama: "Aji",
    telp: "(+62) 898 0676 899",
    alamat:
      "Greenpark Residence, Jalan Rosewood VIII No. 21, Jatimelati (Nomer 21)",
    detail: "PONDOK MELATI, KOTA BEKASI, JAWA BARAT, ID, 17414",
  },
];

export function AlamatTable() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-xl font-semibold">Alamat Saya</h2>
        <Button className="bg-red-600 hover:bg-red-700 text-white">
          + Tambah Alamat Baru
        </Button>
      </div>
      <div className="space-y-4">
        {alamatList.map((alamat, index) => (
          <Card key={index}>
            <CardContent className="p-4">
              <div className="flex flex-col space-y-1 md:space-y-0 md:flex-row md:justify-between">
                <div>
                  <h3 className="font-semibold text-lg">
                    {alamat.nama}{" "}
                    <span className="font-normal text-gray-600">
                      {alamat.telp}
                    </span>
                  </h3>
                  <p>{alamat.alamat}</p>
                  <p className="text-gray-500">{alamat.detail}</p>
                  <div className="flex space-x-2 mt-2">
                    {alamat.label?.map((label, i) => (
                      <span
                        key={i}
                        className={`text-xs border px-2 py-0.5 rounded ${
                          label === "Utama"
                            ? "text-red-600 border-red-600"
                            : "text-gray-600 border-gray-400"
                        }`}
                      >
                        {label}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="flex items-start md:flex-col gap-2 mt-2 md:mt-0">
                  <div className="flex gap-2 text-sm text-blue-600">
                    <button className="hover:underline">Ubah</button>
                    {alamat.label?.includes("Utama") ? null : (
                      <button className="hover:underline">Hapus</button>
                    )}
                  </div>
                  {!alamat.label?.includes("Utama") && (
                    <Button variant="outline" size="sm" className="mt-2 w-fit">
                      Atur sebagai utama
                    </Button>
                  )}
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
