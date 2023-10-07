export default function DownloadFile({ base64Data }: { base64Data: string }) {
  const decodedData = atob(base64Data);
  const byteArray = new Uint8Array(decodedData.length);

  for (let i = 0; i < decodedData.length; i++) {
    byteArray[i] = decodedData.charCodeAt(i);
  }

  atob()


  const blob = new Blob([byteArray], { type: "application/octet-stream" });

  const file = new File([blob], "test.pdf", {
    type: "application/octet-stream",
  });

  const handleDownload = () => {
    const anchor = document.createElement("a");
    anchor.target = "_blank";
    anchor.download = "test.pdf"
    anchor.href = URL.createObjectURL(file);
    console.log(file);
    console.log(anchor.href);
    anchor.click();
  };

  return (
    <div>
      <button onClick={handleDownload}>Download File</button>
    </div>
  );
}
