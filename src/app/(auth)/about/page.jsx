export const metadata = {
  title: "Dragon News - About Us",
  description: "About Us Page of Best news portal in Bangladesh",
};

const About = () => {
  const team = [
    { name: "Awlad Hossain", role: "Editor in Chief", initial: "A" },
    { name: "Sara Malik", role: "Senior Reporter", initial: "S" },
    { name: "Rafi Uddin", role: "Investigative Journalist", initial: "R" },
    { name: "Nadia Islam", role: "Digital Producer", initial: "N" },
  ];

  const stats = [
    { number: "12+", label: "Years of Journalism" },
    { number: "4M+", label: "Monthly Readers" },
    { number: "120+", label: "Expert Reporters" },
    { number: "80+", label: "Countries Covered" },
  ];

  return (
    <main className="min-h-screen bg-white text-gray-900 font-serif">
      {/* Hero */}
      <section className="bg-gray-900 text-white py-24 px-6 text-center relative overflow-hidden">
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage:
              "repeating-linear-gradient(0deg, transparent, transparent 40px, #fff 40px, #fff 41px), repeating-linear-gradient(90deg, transparent, transparent 40px, #fff 40px, #fff 41px)",
          }}
        />
        <div className="relative z-10 max-w-3xl mx-auto">
          <p className="text-red-400 uppercase tracking-widest text-xs font-sans mb-4">
            Who We Are
          </p>
          <h1 className="text-5xl md:text-6xl font-bold leading-tight mb-6">
            Journalism Without <br /> Fear or Favour
          </h1>
          <p className="text-gray-300 text-lg font-sans leading-relaxed">
            The Dragon News is an independent media organization committed to
            delivering honest, unbiased, and impactful stories that matter to
            you and the world.
          </p>
        </div>
      </section>

      {/* Stats */}
      <section className="bg-red-600 text-white py-10 px-6">
        <div className="max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          {stats.map((s, i) => (
            <div key={i}>
              <p className="text-4xl font-bold">{s.number}</p>
              <p className="text-sm font-sans text-red-100 mt-1">{s.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Mission */}
      <section className="max-w-4xl mx-auto px-6 py-20 text-center">
        <p className="text-red-600 uppercase tracking-widest text-xs font-sans mb-4">
          Our Mission
        </p>
        <h2 className="text-3xl md:text-4xl font-bold mb-6 leading-snug">
          We believe an informed society <br /> is a stronger society.
        </h2>
        <p className="text-gray-500 font-sans leading-relaxed text-base max-w-2xl mx-auto">
          Founded in 2012, The Dragon News was built on a single principle — the
          truth deserves to be told. Our journalists work across the globe to
          bring you stories that are rigorously fact-checked, deeply researched,
          and told with clarity. We are beholden to our readers, not to
          advertisers or governments.
        </p>
      </section>

      {/* Divider */}
      <div className="border-t border-gray-200 max-w-5xl mx-auto" />

      {/* Team */}
      <section className="max-w-5xl mx-auto px-6 py-20">
        <div className="text-center mb-14">
          <p className="text-red-600 uppercase tracking-widest text-xs font-sans mb-3">
            The People
          </p>
          <h2 className="text-3xl font-bold">Meet Our Team</h2>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {team.map((member, i) => (
            <div key={i} className="text-center group">
              <div className="w-20 h-20 rounded-full bg-gray-900 text-white flex items-center justify-center text-2xl font-bold mx-auto mb-4 group-hover:bg-red-600 transition-colors duration-300">
                {member.initial}
              </div>
              <p className="font-bold text-gray-900">{member.name}</p>
              <p className="text-sm text-gray-400 font-sans mt-1">
                {member.role}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Values */}
      <section className="bg-gray-50 py-20 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-14">
            <p className="text-red-600 uppercase tracking-widest text-xs font-sans mb-3">
              What We Stand For
            </p>
            <h2 className="text-3xl font-bold">Our Core Values</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Truth First",
                desc: "Every story we publish is fact-checked and verified by multiple sources before it reaches you.",
              },
              {
                title: "Independence",
                desc: "We are editorially independent. No government, corporation, or advertiser influences our journalism.",
              },
              {
                title: "Impact",
                desc: "We measure success not by clicks, but by the real-world change our reporting drives.",
              },
            ].map((v, i) => (
              <div
                key={i}
                className="bg-white border border-gray-200 p-8 hover:border-red-400 transition-colors duration-300"
              >
                <div className="w-8 h-1 bg-red-600 mb-5" />
                <h3 className="text-xl font-bold mb-3">{v.title}</h3>
                <p className="text-gray-500 font-sans text-sm leading-relaxed">
                  {v.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
};

export default About;
