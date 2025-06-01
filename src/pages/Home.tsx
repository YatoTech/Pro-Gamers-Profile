import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import { PlayCircle, Trophy, Users, Star } from 'lucide-react';

export default function Home() {
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const achievements = [
    { title: 'MPL ID Season 10 Champion', year: '2023', team: 'EVOS Legends' },
    { title: 'M4 World Championship Runner-up', year: '2023', team: 'EVOS Legends' },
    { title: 'MSC 2022 Champion', year: '2022', team: 'RRQ Hoshi' },
    { title: 'MPL ID Season 8 MVP', year: '2021', team: 'RRQ Hoshi' },
    { title: 'Top Global Fanny', year: '2020', team: 'Solo Rank' },
  ];

  const highlights = [
    {
      title: 'M4 Grand Finals - Epic Comeback',
      description: 'Witness the legendary comeback in the M4 World Championship Grand Finals.',
      youtubeId: 'dQw4w9WgXcQ', // Replace with actual YouTube ID
    },
    {
      title: 'Fanny Savage - MPL ID S10',
      description: 'My best Fanny gameplay from MPL ID Season 10, securing a crucial Savage.',
      youtubeId: 'dQw4w9WgXcQ', // Replace with actual YouTube ID
    },
    {
      title: 'Clutch Plays Compilation 2023',
      description: 'A compilation of my most impactful and clutch plays throughout 2023.',
      youtubeId: 'dQw4w9WgXcQ', // Replace with actual YouTube ID
    },
  ];

  return (
    <div className="relative overflow-hidden">
      {/* Hero Section */}
      <section
        id="home"
        className="relative h-screen flex items-center justify-center text-center text-white overflow-hidden"
        style={{
          backgroundImage: "url('https://images.pexels.com/photos/735911/pexels-photo-735911.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0 bg-black/70 backdrop-blur-sm"></div>
        <motion.div
          className="relative z-10 max-w-4xl px-4"
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
        >
          <motion.h1
            className="text-5xl md:text-7xl font-extrabold mb-4 leading-tight drop-shadow-lg"
            variants={fadeIn}
          >
            Hello, I'm <span className="text-purple-400">[Nama Pro Player]</span>
          </motion.h1>
          <motion.p
            className="text-xl md:text-2xl mb-8 text-gray-200 drop-shadow-md"
            variants={fadeIn}
          >
            Mobile Legends: Bang Bang Pro Player | Mid Laner for EVOS Legends
          </motion.p>
          <motion.div variants={fadeIn}>
            <Button
              size="lg"
              className="bg-purple-600 hover:bg-purple-700 text-white text-lg px-8 py-3 rounded-full shadow-lg transition-all duration-300 transform hover:scale-105"
              onClick={() => document.getElementById('highlights')?.scrollIntoView({ behavior: 'smooth' })}
            >
              <PlayCircle className="mr-2 h-6 w-6" /> Watch Highlights
            </Button>
          </motion.div>
        </motion.div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-gradient-to-b from-gray-900 to-black text-white">
        <div className="container mx-auto px-4 max-w-5xl">
          <motion.h2
            className="text-4xl font-bold text-center mb-12 text-purple-400"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
          >
            About Me
          </motion.h2>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              className="space-y-6 text-lg leading-relaxed"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={staggerContainer}
            >
              <motion.p variants={fadeIn}>
                I am [Nama Pro Player], a dedicated and passionate Mobile Legends: Bang Bang pro player with [X] years of competitive experience. My journey began in [Year], fueled by a dream to dominate the Land of Dawn.
              </motion.p>
              <motion.p variants={fadeIn}>
                Specializing as a Mid Laner, I am known for my aggressive playstyle, exceptional map awareness, and mastery of complex heroes like Fanny, Kagura, and Pharsa. My strategic decision-making and ability to turn the tide of battle have been crucial in many victories.
              </motion.p>
              <motion.p variants={fadeIn}>
                Currently, I proudly represent <span className="font-semibold text-purple-300">EVOS Legends</span>, one of the most prestigious esports organizations in Southeast Asia. My goal is to continuously push the boundaries of competitive Mobile Legends and bring more championships home.
              </motion.p>
            </motion.div>
            <motion.div
              className="relative w-full h-80 rounded-xl overflow-hidden shadow-2xl"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <img
                src="https://images.pexels.com/photos/163036/mario-luigi-figures-funny-163036.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                alt="Pro Player Portrait"
                className="w-full h-full object-cover object-center"
              />
              <div className="absolute inset-0 bg-purple-900/30 flex items-center justify-center">
                <Star className="h-24 w-24 text-yellow-400 opacity-70 animate-pulse" />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Achievements Section */}
      <section id="achievements" className="py-20 bg-black text-white">
        <div className="container mx-auto px-4 max-w-5xl">
          <motion.h2
            className="text-4xl font-bold text-center mb-12 text-purple-400"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
          >
            Achievements
          </motion.h2>
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {achievements.map((achievement, index) => (
              <motion.div key={index} variants={fadeIn}>
                <Card className="bg-gray-800 border-gray-700 text-white shadow-xl hover:shadow-purple-500/30 transition-shadow duration-300">
                  <CardHeader>
                    <CardTitle className="text-xl font-semibold text-purple-300 flex items-center">
                      <Trophy className="mr-2 h-5 w-5 text-yellow-400" /> {achievement.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="text-gray-300">
                    <p className="mb-1">
                      <span className="font-medium">Year:</span> {achievement.year}
                    </p>
                    <p>
                      <span className="font-medium">Team:</span> {achievement.team}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Highlights Section */}
      <section id="highlights" className="py-20 bg-gradient-to-t from-gray-900 to-black text-white">
        <div className="container mx-auto px-4 max-w-5xl">
          <motion.h2
            className="text-4xl font-bold text-center mb-12 text-purple-400"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
          >
            Highlights
          </motion.h2>
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 gap-8"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {highlights.map((highlight, index) => (
              <motion.div key={index} variants={fadeIn}>
                <Card className="bg-gray-800 border-gray-700 text-white shadow-xl hover:shadow-purple-500/30 transition-shadow duration-300">
                  <CardHeader>
                    <CardTitle className="text-xl font-semibold text-purple-300 flex items-center">
                      <PlayCircle className="mr-2 h-5 w-5 text-red-500" /> {highlight.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-300 mb-4">{highlight.description}</p>
                    <div className="aspect-video w-full rounded-lg overflow-hidden">
                      <iframe
                        width="100%"
                        height="100%"
                        src={`https://www.youtube.com/embed/${highlight.youtubeId}`}
                        title={highlight.title}
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                        className="rounded-lg"
                      ></iframe>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-black text-white">
        <div className="container mx-auto px-4 max-w-3xl">
          <motion.h2
            className="text-4xl font-bold text-center mb-12 text-purple-400"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
          >
            Contact Me
          </motion.h2>
          <motion.div
            className="bg-gray-800 border border-gray-700 rounded-xl p-8 shadow-xl"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
          >
            <p className="text-lg text-gray-300 mb-6 text-center">
              Interested in collaborations, sponsorships, or just want to say hello? Feel free to reach out!
            </p>
            <form className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  className="w-full p-3 rounded-md bg-gray-700 border border-gray-600 text-white focus:ring-purple-500 focus:border-purple-500"
                  placeholder="Your Name"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full p-3 rounded-md bg-gray-700 border border-gray-600 text-white focus:ring-purple-500 focus:border-purple-500"
                  placeholder="your.email@example.com"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  rows={5}
                  className="w-full p-3 rounded-md bg-gray-700 border border-gray-600 text-white focus:ring-purple-500 focus:border-purple-500"
                  placeholder="Your message..."
                ></textarea>
              </div>
              <Button
                type="submit"
                size="lg"
                className="w-full bg-purple-600 hover:bg-purple-700 text-white text-lg px-8 py-3 rounded-md shadow-lg transition-all duration-300 transform hover:scale-[1.02]"
              >
                Send Message
              </Button>
            </form>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
