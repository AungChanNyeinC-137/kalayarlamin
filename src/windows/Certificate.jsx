import React from "react";
import { WindowConrtols } from "#components";
import WindowWrapper from "#hoc/WindowWrapper";
import { Download } from "lucide-react";
import { Document, Page, pdfjs } from "react-pdf";
import useWindowStore from "#store/window";

pdfjs.GlobalWorkerOptions.workerSrc = new URL(
  "pdfjs-dist/build/pdf.worker.min.mjs",
  import.meta.url,
).toString();

const Certificate = () => {
  const { windows } = useWindowStore();
  const data = windows.certificate?.data;
  const file = data?.pdfUrl || data?.href || "";
  const title = data?.name || "Certificate";

  return (
    <>
      <div id="window-header">
        <WindowConrtols target="certificate" />
        <h2 className="truncate">{title}</h2>
        {file && (
          <a href={file} download className="cursor-pointer" title="Download PDF">
            <Download className="icon" />
          </a>
        )}
      </div>

      {file ? (
        <Document file={file}>
          <Page pageNumber={1} renderTextLayer renderAnnotationLayer />
        </Document>
      ) : (
        <p className="p-4">No file to display</p>
      )}
    </>
  );
};

const CertificateWindow = WindowWrapper(Certificate, "certificate");

export default CertificateWindow;
