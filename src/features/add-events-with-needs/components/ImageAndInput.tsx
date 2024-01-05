import Image from "next/image";
import { useState } from "react";

type ImageAndInputProps = {
  currentValue: string;
  onChange: (field: string, value: any) => void;
};

const ImageAndInput = ({ currentValue, onChange }: ImageAndInputProps) => {
  const [imagePath, setImagePath] = useState<string | "">(
    "https://images.unsplash.com/photo-1464375117522-1311d6a5b81f?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=2250&q=80"
  );

  return (
    <>
      <div style={{ position: "relative", height: "4rem", width: "4rem" }}>
        <Image
          src={imagePath}
          alt={"hook1"}
          layout="fill"
          objectFit="cover"
          priority
        />
      </div>
      <label>
        Name:
        <input
          type="text"
          placeholder={currentValue}
          onChange={(e) => onChange("name", e.target.value)}
        />
      </label>
    </>
  );
};

export default ImageAndInput;
