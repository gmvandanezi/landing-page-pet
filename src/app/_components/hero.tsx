import { WhatsappLogo } from "@phosphor-icons/react/dist/ssr";
import heroDogWebp from "../../../public/hero-dog.webp";
import heroCatWebp from "../../../public/cat-hero.png";
import Image from "next/image";

export function Hero() {
  return (
    <section className="bg-[#E84C3D] text-white relative overflow-hidden">
      <div>
        <Image
          data-aos="fade-up"
          data-aos-delay="700"
          className="object-cover opacity-60 lg:hidden"
          src={heroDogWebp}
          alt="imagem do dog"
          fill
          sizes="40vw"
          priority
        />
        <div className="absolute inset-0 bg-black opacity-40 lg:hidden"></div>
      </div>

      <div className="container mx-auto pt-16 pb-16 md:pb-0 px-4 relative">
        <article className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="space-y-6">
            <h1
              data-aos="fade-down"
              className="text-3xl font-bold md:text-4xl lg:text-5xl leading-10"
            >
              Seu pet merece cuidado, carinho e atenção especial.
            </h1>
            <p data-aos="fade-right" className="lg:text-lg">
              Oferecemos os melhores serviços para garantir o bem-estar e a
              felicidade do seu amigo de quatro patas.
            </p>

            <a
              target="_blank"
              href={`https://wa.me/5567111111111?text=Olá vim pelo site e gostaria de mais informações`}
              className="bg-green-500 hover:bg-green-600 duration-300 px-5 py-2 rounded-md font-semibold flex items-center justify-center w-fit gap-2"
            >
              <WhatsappLogo className="w-5 h-5" />
              Contato via Whatsapp
            </a>

            <div className="mt-8">
              <p className="text-sm mb-4">
                <b className="bg-black text-white px-2 py-1 rounded-md">5%</b>{" "}
                de desconto na primeira compra.
              </p>
            </div>

            <div data-aos="fade-left" className="flex mt-4">
              <div className="w-32 hidden lg:block">
                <Image
                  src={heroCatWebp}
                  alt="imagem do gato"
                  quality={100}
                  className="object-fill"
                />
              </div>
            </div>
          </div>

          <div
            data-aos="fade-up"
            data-aos-delay="700"
            className="hidden md:block h-full relative"
          >
            <Image
              src={heroDogWebp}
              alt="imagem do cachorro"
              className="object-contain"
              fill
              sizes="(max-width: 768px) 0vw, 50vw"
              quality={100}
              priority
            />
          </div>
        </article>
      </div>
    </section>
  );
}
