import Image from 'next/image';

export function About() {
  return (
    <section id="about" className="py-16 px-4 sm:px-6 lg:px-8 bg-card/50">
      <div className="container mx-auto max-w-4xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">About Me</h2>
          <div className="w-20 h-1 bg-primary mx-auto rounded-full" />
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <Image
              src="/about.png"
              alt="Eric working"
              className="w-full h-80 object-cover rounded-lg shadow-lg"
              width={424}
              height={320}
            />
          </div>

          <div className="space-y-6">
            <p className="text-lg text-foreground leading-relaxed">
              I'm a passionate software engineer with expertise in building scalable web applications and cloud
              infrastructure. I love building solutions that bring value to the people.
            </p>

            <div className="grid grid-cols-2 gap-4 pt-4">
              <div className="text-center p-4 bg-background rounded-lg">
                <div className="text-2xl font-bold text-primary">07</div>
                <div className="text-sm text-muted-foreground">Years Experience</div>
              </div>
              <div className="text-center p-4 bg-background rounded-lg">
                <div className="text-2xl font-bold text-primary">03</div>
                <div className="text-sm text-muted-foreground">OSS Projects</div>
              </div>
              <div className="text-center p-4 bg-background rounded-lg">
                <div className="text-2xl font-bold text-primary">125+</div>
                <div className="text-sm text-muted-foreground">Articles Written</div>
              </div>
              <div className="text-center p-4 bg-background rounded-lg">
                <div className="text-2xl font-bold text-primary">1M+</div>
                <div className="text-sm text-muted-foreground">Article Views</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
