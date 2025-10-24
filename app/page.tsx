import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { MessageCircle } from "lucide-react"
import Image from "next/image"

export default function Home() {
  const services = [
    {
      title: "Desempeno de Chassis",
      description: "Correção precisa para danos estruturais, garantindo segurança e dirigibilidade.",
      image: "/chassis-repair-automotive-workshop.jpg",
    },
    {
      title: "Mecânica em Geral (Flex/Diesel Leve)",
      description: "Manutenção e reparos especializados para veículos Flex e Diesel Leve.",
      image: "/car-engine-maintenance-mechanic.jpg",
    },
    {
      title: "Revisão Preventiva e Corretiva",
      description: "Revisões completas para prevenir falhas ou resolver rapidamente problemas existentes.",
      image: "/car-inspection-preventive-maintenance.jpg",
    },
    {
      title: "Desempeno de Eixo Traseiro",
      description: "Correção de eixo traseiro deformado, melhorando estabilidade e segurança.",
      image: "/rear-axle-repair-automotive.jpg",
    },
    {
      title: "Suspensão Flex/Diesel Leve",
      description: "Serviços especializados em suspensão, garantindo conforto e segurança ao dirigir.",
      image: "/car-suspension-repair-mechanic.jpg",
    },
    {
      title: "Freios",
      description: "Reparos e manutenção que garantem frenagens seguras e precisas.",
      image: "/brake-repair-automotive-workshop.jpg",
    },
  ]

  const whatsappNumber = "5581999999999" // Replace with actual number
  const whatsappMessage = encodeURIComponent("Olá! Gostaria de saber mais sobre os serviços.")

  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-screen bg-[#1a1a1a] overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage:
                "linear-gradient(90deg, #2a2a2a 1px, transparent 1px), linear-gradient(#2a2a2a 1px, transparent 1px)",
              backgroundSize: "50px 50px",
            }}
          />
        </div>

        {/* Red Accent Background */}
        <div className="absolute right-0 top-0 bottom-0 w-1/2 bg-[#FF0000]" />

        <div className="relative container mx-auto px-4 py-8 min-h-screen flex flex-col">
          {/* Logo */}
          <div className="flex items-center gap-2 mb-12">
            <div className="relative">
              <div className="text-4xl font-bold text-white">
                <span className="text-[#FF0000]">u</span>
                <span className="relative inline-flex items-center justify-center w-8 h-8 rounded-full border-2 border-white mx-1">
                  <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4"
                    />
                  </svg>
                </span>
              </div>
              <div className="text-white text-sm font-semibold -mt-1">
                bloco
                <span className="text-xs ml-1 text-gray-400">OFICINA MECÂNICA</span>
              </div>
            </div>
          </div>

          {/* Hero Content */}
          <div className="flex-1 flex items-center">
            <div className="grid lg:grid-cols-2 gap-12 items-center w-full">
              <div className="space-y-6 z-10">
                <h1 className="text-5xl lg:text-6xl font-bold text-white leading-tight">
                  Segurança e Excelência para seu veículo
                </h1>
                <p className="text-lg text-gray-300 leading-relaxed">
                  Somos especializados em Mecânica geral flex e diesel leve com{" "}
                  <span className="font-bold text-white">17 anos de experiência em Caruaru.</span>
                </p>
                <Button
                  size="lg"
                  className="bg-[#25D366] hover:bg-[#20BD5A] text-white font-semibold px-8 py-6 text-lg"
                  asChild
                >
                  <a
                    href={`https://wa.me/${whatsappNumber}?text=${whatsappMessage}`}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <MessageCircle className="mr-2 h-5 w-5" />
                    WhatsApp
                  </a>
                </Button>
              </div>

              {/* Car Image */}
              <div className="relative z-10 hidden lg:block">
                <Image
                  src="/luxury-sports-car-bmw-m4-silver-front-view.jpg"
                  alt="Luxury car"
                  width={800}
                  height={600}
                  className="w-full h-auto"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="bg-[#FF0000] py-16">
        <div className="container mx-auto px-4">
          {/* Section Header */}
          <div className="text-center mb-12">
            <div className="inline-block bg-white rounded-full px-6 py-2 mb-4">
              <span className="text-[#FF0000] font-semibold">Serviços</span>
            </div>
            <h2 className="text-4xl lg:text-5xl font-bold text-white">Conheça nossos serviços</h2>
          </div>

          {/* Services Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <Card key={index} className="bg-white overflow-hidden hover:shadow-2xl transition-shadow">
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={service.image || "/placeholder.svg"}
                    alt={service.title}
                    width={400}
                    height={300}
                    className="w-full h-full object-cover"
                  />
                </div>
                <CardContent className="p-6 space-y-4">
                  <h3 className="text-xl font-bold text-gray-900 text-center">{service.title}</h3>
                  <p className="text-gray-600 text-center leading-relaxed">{service.description}</p>
                  <div className="flex justify-center pt-2">
                    <Button className="bg-[#25D366] hover:bg-[#20BD5A] text-white font-semibold" asChild>
                      <a
                        href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(`Olá! Gostaria de saber mais sobre ${service.title}.`)}`}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <MessageCircle className="mr-2 h-4 w-4" />
                        WhatsApp
                      </a>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}
