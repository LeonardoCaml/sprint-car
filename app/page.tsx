"use client";

import { Card, CardContent } from "../components/ui/card";
import { WhatsAppButton } from "../components/ui/whatsapp-button";
import {
  HandshakeIcon,
  ShieldCheck,
  Users,
  MapPin,
  Phone,
  Clock,
  Mail,
} from "lucide-react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../components/ui/accordion";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import Image from "next/image";

export default function Home() {
  const services = [
    {
      title: "Câmbio Automático",
      description:
        "Cuide do câmbio automático com manutenção especializada para garantir segurança e durabilidade.",
      image: "/service1.png",
    },
    {
      title: "Troca de Óleo",
      description:
        "Lubrificação de qualidade para proteger o motor e garantir máxima performance. Seu carro rodando com segurança e eficiência!",
      image: "/service2.png",
    },
    {
      title: "Mecânica Geral",
      description:
        "Manutenção completa para garantir o desempenho e segurança do seu veículo.",
      image: "/service3.png",
    },
    {
      title: "Injeção Eletrônica",
      description:
        "Diagnóstico preciso para melhorar o desempenho e a economia de combustível do seu veículo. Evite falhas e garanta uma condução mais eficiente!",
      image: "/service4.png",
    },
    {
      title: "Remap",
      description:
        "Aumente a potência, otimize o consumo de combustível e melhore a dirigibilidade com um remapeamento de alto desempenho.",
      image: "/service5.png",
    },
    {
      title: "Suspensão e Freios",
      description:
        "Mais conforto, estabilidade e segurança na direção! Revisamos amortecedores, molas, pastilhas e discos para um desempenho impecável.",
      image: "/service6.png",
    },
    {
      title: "Ar Condicionado Automotivo",
      description:
        "Realizamos a manutenção completa do seu ar-condicionado para garantir eficiência, conforto e qualidade do ar dentro do seu carro.",
      image: "/service7.png",
    },
    {
      title: "Polimento técnico + higienização de banco de couro",
      description:
        "Deixe seu carro com aparência de novo com nosso polimento técnico e a higienização profunda dos bancos de couro.",
      image: "/service8.png",
    },
    {
      title: "Higienização de estofado",
      description:
        "Seu carro mais limpo e saudável com nossa higienização profunda de estofados. Conforto e bem-estar garantidos!",
      image: "/service9.png",
    },
    {
      title: "Manutenção Cabeçote",
      description:
        "Evite falhas e garanta o funcionamento perfeito do motor com nossa manutenção especializada no cabeçote.",
      image: "/service10.png",
    },
    {
      title: "Alinhamento/ Balanceamento",
      description:
        "Direção precisa e pneus conservados com alinhamento e balanceamento perfeitos.",
      image: "/service11.png",
    },
  ];

  const benefits = [
    {
      title: "9 anos de experiência",
      description: "Profissionais especializados para cuidar do seu carro.",
      icon: HandshakeIcon,
    },
    {
      title: "Serviços completos",
      description: "Da manutenção ao polimento, tudo em um só lugar.",
      icon: Users,
    },
    {
      title: "Qualidade garantida",
      description: "Peças e equipamentos de alto padrão.",
      icon: ShieldCheck,
    },
  ];

  const comments = [
    {
      name: "Ana Luiza Ferreira",
      text: "Serviço impecável! Trouxe meu carro com um problema no motor e eles resolveram tudo no mesmo dia. Atendimento rápido e transparente, recomendo demais!",
    },
    {
      name: "Carlos Eduardo Santos",
      text: "Oficina de confiança! Explicaram cada detalhe do conserto e me passaram o orçamento antes de qualquer coisa. Excelente custo-benefício.",
    },
    {
      name: "Patrícia Moura",
      text: "Fiquei muito satisfeita com a revisão completa que fizeram no meu carro. Atendimento super profissional e preço justo. Voltarei com certeza!",
    },
    {
      name: "João Henrique Silva",
      text: "Levei meu carro para balanceamento e alinhamento. Serviço rápido, eficiente e com ótima estrutura. Dá pra ver que se preocupam com o cliente.",
    },
    {
      name: "Fernanda Lopes",
      text: "Equipe muito atenciosa e qualificada. Fizeram a troca de embreagem do meu carro e o resultado ficou perfeito. Super recomendo a oficina!",
    },
  ];

  const faqs = [
    {
      question: "Quais serviços a SprintCar oferece?",
      answer:
        "A SprintCar oferece manutenção preventiva e corretiva, troca de óleo, freios, suspensão, alinhamento e balanceamento, diagnóstico eletrônico, reparos mecânicos e muito mais. Nosso objetivo é garantir que seu carro esteja sempre seguro e em ótimo funcionamento!",
    },
    {
      question: "Preciso agendar um horário para atendimento?",
      answer:
        "Não é obrigatório, mas recomendamos! Assim, garantimos um atendimento mais rápido e sem espera. Você pode vir direto à oficina, mas se preferir comodidade, agende um horário conosco.",
    },
    {
      question: "Vocês trabalham com todas as marcas de veículos?",
      answer:
        "Sim! Nossa equipe está preparada para atender carros de todas as marcas e modelos, nacionais e importados, sempre com equipamentos modernos e peças de qualidade.",
    },
    {
      question: "Como faço para agendar um atendimento?",
      answer:
        "É fácil! Você pode agendar pelo WhatsApp, telefone ou diretamente em nossa oficina. Entre em contato e escolha o melhor horário para você!",
    },
  ];

  const whatsappNumber = "554831974041"; // Replace with actual number
  const whatsappMessage = encodeURIComponent(
    "Olá! Gostaria de saber mais sobre os serviços."
  );

  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section
        id="home"
        className="relative bg-[url('/HeroSectionMobile.png')] md:bg-[url('/HeroSection.png')] bg-cover bg-center px-4 py-6 md:py-20 h-screen flex items-center"
      >
        <div className="mx-auto max-w-5xl grid md:grid-cols-2 gap-8 items-center">
          {/* Conteúdo de texto */}
          <div className="space-y-3 text-center md:text-left">
            <Image
              src="./logo.png"
              width={100}
              height={100}
              className="hidden md:block mx-auto md:mx-0"
              alt="Logo WF Oficina"
            />

            <div className="block md:hidden h-72" />

            {/* Ajuste de margem pinkuzida no mobile */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white leading-tight text-balance mt-5 sm:mt-20 md:mt-5">
              Seu carro em boas mãos: Qualidade, Transparência e Atendimento
              Exclusivo
            </h1>

            <p className="text-zinc-300 text-base sm:text-md leading-relaxed max-w-md mx-auto md:mx-0">
              A SprintCar oferece serviços completos para manter seu carro
              seguro e em perfeitas condições. Atendimento especializado para
              quem valoriza excelência e confiança.
            </p>

            <div className="flex justify-center md:justify-start">
              <WhatsAppButton
                size="lg"
                className="bg-green-600 hover:bg-green-700 text-white font-semibold"
              >
                WhatsApp
              </WhatsAppButton>
            </div>
          </div>
        </div>

        {/* Gradiente escuro opcional para leitura melhor */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/30 to-transparent lg:hidden"></div>
      </section>

      {/* Services Section */}
      <section className="bg-[url('/ServiceSection.png')] bg-cover py-16">
        <div className="container mx-auto px-4">
          {/* Section Header */}
          <div className="text-center mb-12">
            <div className="inline-block bg-white rounded-full px-6 py-2 mb-4">
              <span className="text-pink-500 font-semibold">Serviços</span>
            </div>
            <h2 className="text-4xl lg:text-5xl font-bold text-white">
              Conheça nossos serviços
            </h2>
          </div>

          {/* Services Grid */}
          <div className="max-w-5xl mx-auto flex flex-wrap justify-center gap-6">
            {services.map((service, index) => (
              <Card
                key={index}
                className="bg-white w-72 overflow-hidden hover:shadow-2xl transition-shadow flex flex-col"
              >
                <CardContent className="p-4 flex flex-col h-full">
                  {/* Imagem */}
                  <div className="aspect-video overflow-hidden rounded-lg">
                    <Image
                      src={service.image || "/placeholder.svg"}
                      alt={service.title}
                      width={400}
                      height={300}
                      className="w-full h-full object-cover"
                    />
                  </div>

                  {/* Texto */}
                  <div className="flex-grow flex flex-col justify-between mt-4">
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 text-center mb-2">
                        {service.title}
                      </h3>
                      <p className="text-gray-600 text-center leading-relaxed">
                        {service.description}
                      </p>
                    </div>

                    {/* Botão fixado na base */}
                    <div className="mt-6 flex justify-center">
                      <WhatsAppButton
                        size="lg"
                        className="bg-green-600 hover:bg-green-700 text-white font-semibold w-44"
                      >
                        WhatsApp
                      </WhatsAppButton>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Seção de benefícios */}
      <section className="bg-pink-500 py-16">
        <div className="container mx-auto px-4">
          <div className="flex flex-col items-center gap-5 text-center mb-12">
            <h1 className="text-white text-3xl sm:text-4xl lg:text-5xl font-bold">
              Por que Escolher a SprintCar?
            </h1>
            <p className="text-base sm:text-lg max-w-3xl text-gray-400">
              Experiência, confiança e preço justo para cuidar do seu veículo
              como ele merece.
            </p>
          </div>

          {/* Grid responsiva */}
          <div className="max-w-5xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {benefits.map((item, index) => {
              const IconComponent = item.icon;
              return (
                <Card key={index} className="bg-gray-100 border-0">
                  <CardContent className="flex flex-col justify-between h-full p-6 text-center items-center">
                    <IconComponent className="h-10 w-10 text-pink-500 mb-4" />
                    <h3 className="text-xl font-bold text-gray-900 mb-2">
                      {item.title}
                    </h3>
                    <p className="text-gray-600 text-sm mb-6">
                      {item.description}
                    </p>
                    <WhatsAppButton
                      size="lg"
                      className="mt-auto bg-green-600 hover:bg-green-700 text-white text-lg px-8 py-2 h-auto"
                    />
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      <section
        id="about"
        className="relative bg-[url('/AboutSectionMobile.png')] md:bg-[url('/AboutSection.png')] bg-cover bg-center md:bg-right bg-no-repeat min-h-screen flex items-center px-6 py-16 md:py-24"
      >
        <div className="relative z-10 w-full max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          <div className="block h-64" />

          <div className="max-w-md flex flex-col gap-6 text-center md:text-left text-white">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight">
              Sobre a UPBLOCO
            </h1>
            <p className="text-base sm:text-md text-gray-400 leading-relaxed">
              Com mais de 17 anos em Caruaru, a UPBLOCO Oficina Automotiva é
              referência em mecânica flex e diesel, destacando-se pela
              excelência, honestidade e pontualidade nos serviços prestados.
              Aqui, seu veículo recebe cuidado especializado com total confiança
              e segurança.
            </p>

            <div className="flex justify-center md:justify-start mt-2">
              <WhatsAppButton
                size="lg"
                className="bg-green-600 hover:bg-green-700 text-white text-lg px-8 py-2 h-auto"
              >
                Fale conosco
              </WhatsAppButton>
            </div>
          </div>
        </div>
      </section>

      <div className="flex flex-col md:flex-row items-center justify-evenly px-12 md:px-32 h-56 lg:h-36 bg-pink-500">
        <h1 className="max-w-xl text-3xl sm:text-4xl lg:text-3xl text-white text-center md:text-start font-bold">
          Entre em contato e seja atendido por um especialista agora mesmo
        </h1>
        <div className="flex justify-center lg:justify-start">
          <WhatsAppButton
            size="lg"
            className="bg-green-600 hover:bg-green-700 text-white text-lg px-8 py-2 h-auto"
          />
        </div>
      </div>

      <section id="testimonials" className="bg-white mx-auto px-4 py-16">
        <div className="container flex flex-col items-center">
          {/* Título */}
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Comentários de Clientes
            </h2>
          </div>

          {/* Swiper Responsivo */}
          <div className="w-full max-w-6xl">
            <Swiper
              modules={[Navigation, Pagination]}
              spaceBetween={20}
              slidesPerView={1} // Mobile padrão
              pagination={{ clickable: true }}
              breakpoints={{
                // Tablet - 2 slides
                640: {
                  slidesPerView: 3,
                  spaceBetween: 10,
                },
                // Desktop - 3 slides
                1000: {
                  slidesPerView: 3,
                  spaceBetween: 20,
                },
              }}
              loop={true}
              className="pb-12"
            >
              {comments.map((card, index) => (
                <SwiperSlide key={index}>
                  <div className="flex justify-center h-full">
                    <Card className="w-full max-w-sm h-full shadow-md bg-white border border-zinc-200 hover:shadow-lg transition-shadow mb-10">
                      <CardContent className="flex flex-col h-68 items-center justify-between p-6">
                        <p className="text-gray-700 text-center leading-relaxed line-clamp-5">
                          {card.text}
                        </p>
                        <div className="w-full text-center mt-4">
                          <h1 className="text-lg font-semibold text-zinc-800">
                            {card.name}
                          </h1>
                          <p className="text-sm text-zinc-600">Cliente</p>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>

        {/* CTA Final */}
        <div className="max-w-6xl mx-auto mt-16 px-6 py-10 flex flex-col lg:flex-row items-center justify-around gap-6 rounded-2xl bg-pink-500">
          <div className="text-center lg:text-left max-w-lg">
            <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Não perca tempo!
            </h1>
            <p className="text-lg md:text-xl text-zinc-300">
              Agende agora e garanta a manutenção que seu carro merece com
              praticidade e confiança.
            </p>
          </div>
          <div className="flex justify-center lg:justify-end w-full lg:w-auto">
            <WhatsAppButton
              size="lg"
              className="bg-green-600 hover:bg-green-700 text-white text-lg px-8 py-3 h-auto rounded-full"
            >
              Fale conosco
            </WhatsAppButton>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="bg-white py-16">
        <div className="max-w-5xl mx-auto px-4 text-zinc-800">
          <div className="mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Perguntas Frequentes
              </h2>
            </div>

            <Accordion type="single" collapsible className="w-full px-6">
              {faqs.map((faq, index) => (
                <AccordionItem key={index} value={`item-${index}`}>
                  <AccordionTrigger className="text-left text-xl font-bold">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent>{faq.answer}</AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-zinc-900 text-zinc-100 px-6 py-12">
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center md:justify-evenly text-center sm:text-left gap-10">
          {/* Site Map */}
          <div className="flex-1">
            <h3 className="text-xl font-bold mb-4 text-white">Site Map</h3>
            <ul className="space-y-2 flex flex-col flex-wrap text-center md:text-start gap-2 justify-items-start">
              <li>
                <a
                  href="#home"
                  className="hover:text-pink-500 transition-colors"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="#services"
                  className="hover:text-pink-500 transition-colors"
                >
                  Serviços
                </a>
              </li>
              <li>
                <a
                  href="#about"
                  className="hover:text-pink-500 transition-colors"
                >
                  Sobre nós
                </a>
              </li>
              <li>
                <a
                  href="#testimonials"
                  className="hover:text-pink-500 transition-colors"
                >
                  Clientes
                </a>
              </li>
              <li>
                <a
                  href="#faq"
                  className="hover:text-pink-500 transition-colors"
                >
                  FAQ
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="flex flex-col flex-wrap flex-2 gap-2 items-center md:items-start">
            <h3 className="text-xl font-bold mb-4 text-white">Contato</h3>
            <div className="space-y-4 text-zinc-300">
              <div className="flex items-start justify-center sm:justify-start gap-3">
                <MapPin className="h-5 w-5 mt-1 text-pink-500 flex-shrink-0" />
                <p className="max-w-xs">Av. Coleira 834, Tijucas 88200-000</p>
              </div>
              <div className="flex items-center justify-center sm:justify-start gap-3">
                <Phone className="h-5 w-5 text-pink-500 flex-shrink-0" />
                <p>(48) 3197-4041</p>
              </div>
              <div className="flex items-start justify-center sm:justify-start gap-3">
                <Mail className="h-5 w-5 mt-1 text-pink-500 flex-shrink-0" />
                <p>sprintcarmkt@gmail.com</p>
              </div>
              <div className="flex items-start justify-center sm:justify-start gap-3">
                <Clock className="h-5 w-5 mt-1 text-pink-500 flex-shrink-0" />
                <p>Seg - Sex: 08:00 às 12:00 | 13:30 às 18:30</p>
              </div>
            </div>
          </div>

          {/* Map */}
          <div className="flex-2 items-center w-full max-w-sm sm:max-w-md lg:max-w-none">
            <h3 className="text-xl font-bold mb-4 text-white text-center sm:text-left">
              Localização
            </h3>
            <div className="rounded-lg overflow-hidden shadow-lg border border-zinc-700">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15792.731981492012!2d-35.983112!3d-8.284579!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x7a98b9655b30387%3A0x9f6ded4c0e6e7f5c!2sAv.%20Campina%20Grande%2C%201%20-%20Centen%C3%A1rio%2C%20Caruaru%20-%20PE%2C%2055006-145%2C%20Brasil!5e0!3m2!1spt-BR!2sus!4v1761414123504!5m2!1spt-BR!2sus"
                className="w-full h-64 sm:h-56 md:h-48 lg:h-56"
                style={{ border: 0 }}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Localização - Caruaru"
              />
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="border-t border-zinc-800 mt-10 pt-6 text-center text-sm text-zinc-500">
          © {new Date().getFullYear()} SprintCar Oficina MKT — Todos os direitos
          reservados.
        </div>
      </footer>
    </main>
  );
}
