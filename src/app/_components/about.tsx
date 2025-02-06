import Image from "next/image";
import about1 from "../../../public/about-1.png";
import about2 from "../../../public/about-2.png";
import { Check, MapPin, WhatsappLogo } from "@phosphor-icons/react/dist/ssr";

export function About() {
  return (
    <section className="bg-[#FDF6ec] py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="relative">
            <div
              data-aos="fade-up-right"
              className="relative w-full h-[400px] rounded-3xl overflow-hidden"
            >
              <Image
                className="object-cover hover:scale-110 duration-300"
                src={about1}
                alt="imagem do cachorro"
                fill
                quality={100}
                priority
              />
            </div>
            <div
              data-aos="fade-up-right"
              data-aos-delay="500"
              className="absolute w-40 h-40 right-4 -bottom-8 rounded-lg border-4 overflow-hidden border-white"
            >
              <Image
                className="object-cover"
                src={about2}
                alt="imagem do gato"
                fill
                quality={100}
                priority
              />
            </div>
          </div>

          <div data-aos="fade-up-left" className="space-y-6 mt-10">
            <h2 className="text-4xl font-bold">SOBRE</h2>
            <p>
              Until one has loved an animal, a part of one's soul remains
              unawakened. We believe in it and we believe in easy access to
              things that are good for our mind, body and spirit. With a clever
              offering, superb support and a secure checkout you're in good
              hands.
            </p>

            <ul className="space-y-4">
              <li className="flex items-center gap-2">
                <Check className="text-red-500" />
                Aberto desde 2006
              </li>
              <li className="flex items-center gap-2">
                <Check className="text-red-500" />
                Equipe com mais de 10 veterinários
              </li>
              <li className="flex items-center gap-2">
                <Check className="text-red-500" />
                Qualidade é nossa prioridade
              </li>
            </ul>

            <div className="flex gap-2">
              <a
                target="_blank"
                href={`https://wa.me/5567111111111?text=Olá vim pelo site e gostaria de mais informações`}
                className="bg-[#E84C3D] text-white flex items-center justify-center w-fit gap-2 px-4 py-2 rounded-md"
              >
                <WhatsappLogo className="w-5 h-5 text-white" />
                Contato via Whatsapp
              </a>

              <a
                target="_blank"
                href={`https://wa.me/5567111111111?text=Olá vim pelo site e gostaria de mais informações`}
                className="flex items-center justify-center w-fit gap-2 px-4 py-2 rounded-md"
              >
                <MapPin className="w-5 h-5 text-black" />
                Endereço da Loja
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
