import Image from "next/image";

const teamMembers = [
  { name: "Alejandro Rivera", role: "CEO", desc: "Arquitecto de sueños y bienestar", img: "/team1.png" },
  { name: "Mariana Soto", role: "DIRECTORA DE VENTAS", desc: "Especialista en asesoría de descanso", img: "/team2.png" },
  { name: "Carlos Méndez", role: "ESPECIALISTA DE MARKETING", desc: "Embajador de la cultura del confort", img: "/team3.png" },
  { name: "Javier López", role: "DIRECTOR DE LOGÍSTICA", desc: "Guardián de tus momentos de felicidad", img: "/team4.png" },
  { name: "Elena García", role: "DIRECTORA ADMINISTRATIVA", desc: "Facilitador de experiencias sin complicaciones", img: "/team5.png" }
];

export default function TeamSection() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-[1280px] mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="font-headline-lg text-4xl text-on-surface mb-4">El equipo detrás de tu descanso</h2>
          <div className="w-16 h-1 bg-secondary mx-auto rounded-full mb-8"></div>
          <p className="text-on-surface-variant max-w-2xl mx-auto text-lg italic">
            Personas apasionadas por transformar tu hogar en el refugio que mereces.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8">
          {teamMembers.map((member, index) => (
            <div key={index} className="group relative bg-surface rounded-[32px] p-6 text-center transition-all duration-500 hover:shadow-2xl hover:shadow-primary/10 hover:-translate-y-2 border border-black/5">
              <div className="relative w-32 h-32 mx-auto mb-6 rounded-full overflow-hidden border-4 border-white shadow-md">
                <Image 
                  src={member.img} 
                  alt={member.name} 
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
              </div>
              <h3 className="font-headline-md text-xl mb-1 text-on-surface">{member.name}</h3>
              <p className="text-primary font-bold text-[10px] tracking-widest uppercase mb-3">{member.role}</p>
              <p className="text-on-surface-variant text-sm leading-relaxed font-medium">
                "{member.desc}"
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
