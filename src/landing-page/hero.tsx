interface heroProps {
  title: string;
}

export const Hero = ({ title }: heroProps) => {
  return (
    <section className="h-screen bg-hero w-full bg-cover bg-no-repeat bg-center flex items-center relative">
      <div className="absolute inset-0 bg-black/30"></div>
      <div className="container mx-auto px-4 z-10">
        <div className="min-w-[450px] text-white flex items-center justify-center">
          <h1 className="font-bold w-[1200px] text-[96px] text-center ">
            {title}
          </h1>
        </div>
      </div>
    </section>
  );
};
