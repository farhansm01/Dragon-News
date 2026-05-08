const Career = () => {
  const openings = [
    {
      title: "Senior Political Reporter",
      type: "Full-time",
      location: "Dhaka, Bangladesh",
      dept: "Editorial",
    },
    {
      title: "Video Journalist",
      type: "Full-time",
      location: "Remote",
      dept: "Media",
    },
    {
      title: "Data Journalist",
      type: "Contract",
      location: "Remote",
      dept: "Investigations",
    },
    {
      title: "Social Media Editor",
      type: "Full-time",
      location: "Dhaka, Bangladesh",
      dept: "Digital",
    },
    {
      title: "Frontend Developer",
      type: "Full-time",
      location: "Remote",
      dept: "Tech",
    },
  ];

  const perks = [
    {
      icon: "🌍",
      title: "Remote Friendly",
      desc: "Work from anywhere in the world.",
    },
    {
      icon: "📚",
      title: "Learning Budget",
      desc: "$1,000/year for courses and books.",
    },
    {
      icon: "🏥",
      title: "Health Coverage",
      desc: "Full medical and dental coverage.",
    },
    {
      icon: "🕐",
      title: "Flexible Hours",
      desc: "We trust you to manage your time.",
    },
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
            Join The Team
          </p>
          <h1 className="text-5xl md:text-6xl font-bold leading-tight mb-6">
            Tell Stories <br /> That Matter
          </h1>
          <p className="text-gray-300 text-lg font-sans leading-relaxed">
            We're looking for bold, curious, and driven people to help us shape
            the future of journalism.
          </p>
        </div>
      </section>

      {/* Perks */}
      <section className="max-w-5xl mx-auto px-6 py-20">
        <div className="text-center mb-14">
          <p className="text-red-600 uppercase tracking-widest text-xs font-sans mb-3">
            Why Dragon News
          </p>
          <h2 className="text-3xl font-bold">Life at The Dragon News</h2>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {perks.map((p, i) => (
            <div
              key={i}
              className="text-center p-6 border border-gray-100 hover:border-red-300 hover:shadow-sm transition-all duration-300"
            >
              <p className="text-4xl mb-3">{p.icon}</p>
              <p className="font-bold text-gray-900 mb-1">{p.title}</p>
              <p className="text-xs text-gray-400 font-sans">{p.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Divider */}
      <div className="border-t border-gray-200 max-w-5xl mx-auto" />

      {/* Job Listings */}
      <section className="max-w-5xl mx-auto px-6 py-20">
        <div className="text-center mb-14">
          <p className="text-red-600 uppercase tracking-widest text-xs font-sans mb-3">
            Open Roles
          </p>
          <h2 className="text-3xl font-bold">Current Openings</h2>
        </div>

        <div className="space-y-4">
          {openings.map((job, i) => (
            <div
              key={i}
              className="flex flex-col md:flex-row md:items-center justify-between border border-gray-200 px-6 py-5 hover:border-red-400 hover:shadow-sm transition-all duration-300 group"
            >
              <div>
                <p className="font-bold text-lg group-hover:text-red-600 transition-colors">
                  {job.title}
                </p>
                <div className="flex gap-3 mt-2 flex-wrap">
                  <span className="text-xs font-sans text-gray-400 bg-gray-100 px-2 py-1 rounded">
                    {job.dept}
                  </span>
                  <span className="text-xs font-sans text-gray-400 bg-gray-100 px-2 py-1 rounded">
                    {job.location}
                  </span>
                  <span className="text-xs font-sans text-red-500 bg-red-50 px-2 py-1 rounded">
                    {job.type}
                  </span>
                </div>
              </div>
              <button className="mt-4 md:mt-0 bg-gray-900 text-white text-sm font-sans px-6 py-2 hover:bg-red-600 transition-colors duration-300 self-start md:self-auto">
                Apply Now
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="bg-red-600 text-white py-16 px-6 text-center">
        <h2 className="text-3xl font-bold mb-3">Don't see your role?</h2>
        <p className="text-red-100 font-sans mb-8 text-sm">
          We are always looking for exceptional talent. Send us your portfolio.
        </p>
        <button className="bg-white text-red-600 font-sans font-bold px-8 py-3 hover:bg-gray-100 transition-colors duration-300">
          Send Open Application
        </button>
      </section>
    </main>
  );
};

export default Career;
