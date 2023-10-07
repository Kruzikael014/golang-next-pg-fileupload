import Image from "next/image";
import Link from "next/link";

interface FileDisplayProps {
  file: File;
}

export default function FileDisplay({ file }: FileDisplayProps) {
  const mimeType = file.type;

  if (mimeType.startsWith("image/")) {
    return (
      <Image
        alt="err"
        src={URL.createObjectURL(file)}
        width={500}
        height={500}
      />
    );
  } else {
    return (
      <div>
        <p>File type: {mimeType}</p>
        <Link href={URL.createObjectURL(file)}>Download {file.name}</Link>
      </div>
    );
  }
}
