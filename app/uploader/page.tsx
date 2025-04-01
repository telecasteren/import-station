"use client";
import { useState } from "react";
import Papa from "papaparse";
import Image from "next/image";
import Link from "next/link";

interface CSVData {
  ObjectName: string;
  ContentValue: string;
  ImportDate: string;
  Amount: string;
}

export default function Uploader() {
  const [tableData, setTableData] = useState<CSVData[]>([]);
  const [error, setError] = useState<string | null>(null);
  const [warning, setWarning] = useState<string | null>(null);
  const [file, setFile] = useState<File | null>(null);

  const expectedHeaders = [
    "ObjectName",
    "ContentValue",
    "ImportDate",
    "Amount",
  ];

  function handleFileUpload(event: React.ChangeEvent<HTMLInputElement>) {
    const file = event.target.files ? event.target.files[0] : null;

    if (file && file.type === "text/csv") {
      setFile(file);
    } else {
      setFile(null);
      setError("Please upload a valid CSV file.");
    }

    setTableData([]);
    setError(null);
    setWarning(null);
  }

  function handleSubmit() {
    if (!file) {
      setError("No file selected. Please upload a CSV file first.");
      return;
    }

    Papa.parse(file, {
      header: true,
      skipEmptyLines: true,
      complete: (result) => {
        const parsedData = result.data as CSVData[];
        const headers = Object.keys(parsedData[0] || {});

        if (
          headers.length !== expectedHeaders.length ||
          !headers.every((header, index) => header === expectedHeaders[index])
        ) {
          setError(
            "Invalid file format. Make sure headers and column count are correct"
          );
          setWarning(
            `Expected headers: "ObjectName", "ContentValue","ImportDate", "Amount", Expected number of columns: 4`
          );
          setTableData([]);
          return;
        }

        setError(null);
        setWarning(null);
        setTableData(parsedData);
      },
    });
  }

  return (
    <div className="grid grid-rows-[10px_1fr_10px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
        <Image
          src="/cubit-blue.svg"
          alt="Cubit logo"
          width={90}
          height={19}
          priority
        />
        <h1 className="text-4xl">Upload CSV</h1>

        <input
          id="file_input"
          type="file"
          accept=".csv"
          onChange={handleFileUpload}
          className="mb-4 p-2 border rounded-md cursor-pointer"
        />

        {error && <p className="text-red-500">{error}</p>}
        {warning && <p className="text-yellow-600">{warning}</p>}

        <button
          id="file_submit"
          type="button"
          onClick={handleSubmit}
          className="mt-2 px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition"
        >
          Click to process file
        </button>

        {tableData.length > 0 && (
          <table className="border-collapse border border-gray-400 mt-4">
            <thead>
              <tr className="bg-gray-100">
                {expectedHeaders.map((header) => (
                  <th key={header} className="border border-gray-400 px-4 py-2">
                    {header}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {tableData.map((row, index) => (
                <tr key={index} className="border border-gray-300">
                  {expectedHeaders.map((header) => (
                    <td
                      key={header}
                      className="border border-gray-300 px-4 py-2"
                    >
                      {row[header as keyof CSVData]}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        )}

        <div className="flex gap-4 items-center flex-col sm:flex-row">
          <a
            className="transition-transform duration-300 ease-in-out hover:scale-95 rounded-md border border-solid border-black/20 dark:border-white/40 flex items-center justify-center hover:bg-[#031D64] hover:text-white dark:hover:bg-[#205a83] hover:border-transparent font-medium text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 w-full sm:w-auto md:w-[158px]"
            href="/settings/"
            target="_self"
            rel="noopener noreferrer"
          >
            Settings
          </a>
        </div>
      </main>

      <footer className="row-start-3 flex gap-[24px] flex-wrap items-center justify-center">
        <Link href="/" className="hover:underline">
          Dashboard
        </Link>
        <Link href="#" className="hover:underline">
          Help
        </Link>
        <Link href="/docs/" className="hover:underline">
          Docs
        </Link>
        <Link href="/settings/" className="hover:underline">
          Settings
        </Link>
      </footer>
    </div>
  );
}
