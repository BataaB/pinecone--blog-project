export const Profile = ({ size, user, color }) => {
  if (!user) return null;
  return (
    <div className="flex gap-3 items-center">
      <img
        // src="/temp-profile.jpg"
        src={user.profile_image}
        width={size}
        height={size}
        alt="profile image"
        className="rounded-[50%]"
      />
      <h2 className={"font-medium text-[" + color + "]"}>{user.name}</h2>
    </div>
  );
};
