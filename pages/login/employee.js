import Image from "next/image"; // Image supports optimization by default, and works with modern formats like .webp (stills and animations) and .apng (animations)

export default function Employee() {
  const ProfilePic = () => {
    <Image
      src="../../public/images/unknown-3.png"
      height={400} // desired size, may change with optimizations
      width={400}
      alt="Profile Pic"
    />;
  };

  return (
    <>
      <h1>Employee Page</h1>
      <ProfilePic />
    </>
  );
}
