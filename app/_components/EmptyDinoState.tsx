import Image from "next/image";

export default function EmptyDinoState() {
  return (
    <div className="bg-taupe-50 rounded-t-3xl h-full p-6 pt-12 mt-32 relative text-center shadow-md flex items-center justify-center relative text-center">
      
      {/* Faded Dino Silhouette */}
      <div className="absolute -top-50 left-1/2 -translate-x-1/2 w-80 h-80">
        <Image
            src={"/dinosaurus_natoons_dinos_VC108.webp"}
            alt="placeholder"
            fill
            sizes="320px"
            className="object-contain drop-shadow-xl brightness-10 opacity-20"
            priority
        />
      </div>

      {/* Text */}
      <p className="text-gray-400 text-lg font-medium leading-relaxed">
        Select a Dinosaur <br /> to display here.
      </p>
    </div>
  );
}