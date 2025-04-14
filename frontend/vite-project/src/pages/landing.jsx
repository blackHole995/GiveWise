"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import { Calendar, Clock, MapPin, Heart, Users, School, Coffee } from "lucide-react";
import Header from "@/components/header";
import Footer from "@/components/footer";
import Image from "next/image";
import Link from "next/link";

const LandingPage = () => {
  const router = useRouter();
  const [isVisible, setIsVisible] = useState({
    hero: false,
    about: false,
    success: false,
    events: false,
    tax: false,
  });

  useEffect(() => {
    setIsVisible({
      hero: true,
      about: true,
      success: true,
      events: true,
      tax: true,
    });
  }, []);

  const upcomingEvents = [
    {
      id: 1,
      name: "Clean Water Initiative",
      description: "Join us in providing clean water to rural communities",
      date: "May 15, 2025",
      time: "10:00 AM",
      venue: "Central Park, New York",
      targetAmount: 5000,
      raisedAmount: 2500,
      image: "/placeholder.svg?height=200&width=300",
    },
    {
      id: 2,
      name: "Education for All",
      description: "Help us build a school for underprivileged children",
      date: "June 20, 2025",
      time: "9:00 AM",
      venue: "Community Center, Boston",
      targetAmount: 10000,
      raisedAmount: 4000,
      image: "/placeholder.svg?height=200&width=300",
    },
    {
      id: 3,
      name: "Food Distribution Drive",
      description: "Distribute food packages to homeless shelters",
      date: "July 5, 2025",
      time: "11:00 AM",
      venue: "Downtown, Chicago",
      targetAmount: 3000,
      raisedAmount: 1800,
      image: "/placeholder.svg?height=200&width=300",
    },
  ];

  const successStories = [
    {
      id: 1,
      title: "Clean Water for Village",
      description: "Provided clean water access to over 500 families in rural India",
      image: "/placeholder.svg?height=300&width=400",
    },
    {
      id: 2,
      title: "New School Building",
      description: "Built a school that now educates 200 children in underserved communities",
      image: "/placeholder.svg?height=300&width=400",
    },
    {
      id: 3,
      title: "Medical Camp Success",
      description: "Provided free healthcare to 1,000+ people through our medical camps",
      image: "/placeholder.svg?height=300&width=400",
    },
  ];

  const handleDonateForEvent = (eventId) => {
    router.push(`/donations?eventId=${eventId}`);
  };

  const handleVolunteerForEvent = (eventId) => {
    router.push(`/signin?redirect=volunteer&eventId=${eventId}`);
  };

  const handleVolunteer = () => {
    router.push(`/signin?redirect=volunteer`);
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      {/* Hero Section */}
      <section
        className={`relative h-[600px] flex items-center transition-opacity duration-1000 ${
          isVisible.hero ? "opacity-100" : "opacity-0"
        }`}
      >
        <div className="absolute inset-0 z-0">
          <Image
            src="/placeholder.svg?height=600&width=1600"
            alt="People helping in community"
            fill
            className="object-cover brightness-50"
            priority
          />
        </div>
        <div className="container mx-auto px-4 relative z-10 text-white">
          <div className="max-w-2xl">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">Making a Difference Together</h1>
            <p className="text-xl mb-8 text-gray-100">
              GiveWise helps communities thrive through sustainable development projects, education initiatives, and humanitarian aid.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                size="lg"
                className="bg-teal-500 hover:bg-teal-600 text-white transition-all transform hover:scale-105"
                onClick={() => router.push("/donations")}
              >
                Donate Now
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-teal-700 transition-all transform hover:scale-105"
                onClick={handleVolunteer}
              >
                Volunteer
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className={`py-20 bg-white transition-all duration-1000 transform ${isVisible.about ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"}`}>
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row gap-12 items-center">
            <div className="lg:w-1/2">
              <h2 className="text-3xl font-bold mb-6 text-gray-800">About GiveWise</h2>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                Founded in 2020, GiveWise is dedicated to creating sustainable change in communities around the world.
                We believe in transparency, accountability, and making a lasting impact through our initiatives.
              </p>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                Our team works directly with local communities to understand their needs and implement solutions that empower them for the long term.
              </p>
              <Button className="bg-teal-600 hover:bg-teal-700 transition-all transform hover:scale-105">
                Learn More About Us
              </Button>
            </div>
            <div className="lg:w-1/2 grid grid-cols-2 gap-6">
              <Stat icon={<Heart className="h-12 w-12 text-teal-600 mx-auto mb-4" />} number="10,000+" label="Lives Impacted" />
              <Stat icon={<Users className="h-12 w-12 text-teal-600 mx-auto mb-4" />} number="500+" label="Volunteers" />
              <Stat icon={<School className="h-12 w-12 text-teal-600 mx-auto mb-4" />} number="25" label="Projects Completed" />
              <Stat icon={<Coffee className="h-12 w-12 text-teal-600 mx-auto mb-4" />} number="15" label="Countries Served" />
            </div>
          </div>
        </div>
      </section>

      {/* Success Stories Section */}
      <section className={`py-20 bg-gray-50 transition-all duration-1000 transform ${isVisible.success ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"}`}>
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">Recent Success Stories</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {successStories.map((story) => (
              <StoryCard key={story.id} story={story} />
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
};

const Stat = ({ icon, number, label }) => (
  <div className="bg-teal-50 p-6 rounded-lg text-center hover:shadow-lg transition-all transform hover:scale-105">
    {icon}
    <h3 className="text-4xl font-bold text-teal-700 mb-2">{number}</h3>
    <p className="text-gray-600">{label}</p>
  </div>
);

const StoryCard = ({ story }) => (
  <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-all transform hover:scale-105">
    <div className="h-48 relative">
      <Image src={story.image} alt={story.title} fill className="object-cover" />
    </div>
    <div className="p-6">
      <h3 className="text-xl font-bold mb-2 text-gray-800">{story.title}</h3>
      <p className="text-gray-600">{story.description}</p>
      <Link href="#" className="inline-block mt-4 text-teal-600 hover:text-teal-700 font-medium">
        Read full story →
      </Link>
    </div>
  </div>
);

export default LandingPage;
