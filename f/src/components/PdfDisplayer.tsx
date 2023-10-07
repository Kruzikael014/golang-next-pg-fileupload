"use client";
import React from "react";
import { Document, Page } from "react-pdf";

interface propsPdfDisplayer {
  pdfData: Buffer;
}

export default function PDFViewer({ pdfData }: propsPdfDisplayer) {
  return (
    <div>
      <Document
        file={pdfData}
        onLoadError={(error) =>
          console.error("Error while loading PDF:", error)
        }
      >
        <Page pageNumber={1} />
      </Document>
    </div>
  );
}

export function decodeBase64(base64String: string) {
  return Buffer.from(base64String, "base64");
}
