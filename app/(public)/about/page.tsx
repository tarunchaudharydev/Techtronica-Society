// import type { Metadata } from "next";
// import Image from "next/image";
// import AnimatedSection from "./_components/AnimatedSection";
// import MissionSection from "./_components/MissionSection";
// import AboutTeamSection from "./_components/TeamSection";
// // import BirthdayBanner from "@/components/features/BirthdayBanner";

import { getMembers } from "@/features/users/services/member.service";

// export const metadata: Metadata = {
//   title: "About Us | Techtronica Society",
//   description:
//     "Learn about Techtronica Society, our mission, vision, values, and the team behind it.",
// };

// export default function AboutPage() {
//   return (
//     <main className="bg-gray-50 text-gray-700 min-h-screen -mt-28 pt-20">
//       {/* 🎉 BIRTHDAY BANNER */}
//       {/* <BirthdayBanner /> */}

//       {/* HERO SECTION */}
//       <section className="relative h-[100vh] -mt-32">
//         <Image
//           src="/ourTeam/about.jpg"
//           alt="Technology background"
//           fill
//           priority
//           className="object-cover"
//         />
//         <div className="absolute inset-0 bg-indigo-900/70 flex items-center justify-center text-center px-6">
//           <div className="text-center">
//             <h1
//               className="
//                 text-5xl md:text-7xl lg:text-8xl
//                 font-extrabold
//                 text-white
//                 mb-6
//                 tracking-tight
//                 animate-[fadeUp_1s_ease-out_forwards]
//                 opacity-0
//               "
//             >
//               Techtronica Society
//             </h1>

//             <p
//               className="
//                 text-lg md:text-xl
//                 text-indigo-100
//                 max-w-3xl
//                 mx-auto
//                 animate-[fadeUp_1.2s_ease-out_forwards]
//                 opacity-0
//               "
//             >
//               A student-driven technical society fostering innovation and
//               collaboration.
//             </p>
//           </div>
//         </div>
//       </section>

//       {/* WHO WE ARE */}
//       <section className="py-20 overflow-hidden">
//         <AnimatedSection />
//       </section>

//       {/* MISSION / VISION / VALUES */}
//       <section className="py-20 bg-white dark:bg-slate-900">
//         <MissionSection />
//       </section>

//       {/* MEET THE TEAM */}
//       <AboutTeamSection />
//     </main>
//   );
// }


// app/(public)/about/page.tsx

export default async function AboutPage() {
  const members = await getMembers();

  console.log("MEMBERS:", members);

  return (
    <div>
    {members?.map(member => (
      <div key={member.id}>
        {member.name} - {member.short_bio}
      </div>
    ))}
  </div>
  );
}