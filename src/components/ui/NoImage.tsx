import UserIcon from "../../assets/icons/UserIcon";

type Props = {
  iconSize?: number;
  roundedSize?: number;
};

function NoImage({ iconSize = 15, roundedSize = 24 }: Props) {
  return (
    <p
      style={{
        width: `${roundedSize}px`,
        height: `${roundedSize}px`,
      }}
      className=" bg-black rounded-full flex justify-center items-center"
    >
      <UserIcon size={iconSize} color="white" />
    </p>
  );
}

export default NoImage;
