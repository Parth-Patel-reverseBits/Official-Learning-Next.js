import Button from "@/src/components/Button";
import Image from "next/image";
export default function Page() {
  return (
    <div>
      <h1 className="text-center mt-10 italic ">
        Hello, Next.js! from ~ Parth Patel
      </h1>

      <div>
        <Button />
        <div className="flex justify-center">
          <Image
            src={`/next.svg`}
            alt="Image is not rendered"
            width="300"
            height="300"
          />
        </div>
      </div>
    </div>
  );
}
