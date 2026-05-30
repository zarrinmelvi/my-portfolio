import myPic from "../assets/zai.jpg";

const ProfileImage = () => {
  return (
    <div className="relative w-48 h-48 md:w-56 md:h-56 mx-auto">
      {/* Pulsing glow */}
      <div className="absolute inset-0 rounded-full bg-pink-500 blur-2xl opacity-20 animate-pulse -z-10"></div>
      {/* Gradient border + photo */}
      <div className="w-full h-full rounded-full bg-gradient-to-br from-pink-400 to-purple-500 p-[3px]">
        <img
          src={myPic}
          alt="Zarrin Melvi Delos Santos"
          className="w-full h-full object-cover rounded-full"
        />
      </div>
    </div>
  );
};

export default ProfileImage;