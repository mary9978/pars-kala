export default function Story({ name, image }) {
  return (
    <div>
      <img className="rounded-full min-w-[100px] min-h-[100px] object-cover p-1 border-2 border-red-500" src={image} alt="image" />
      <p className="text-center">{name}</p>
    </div>
  );
}
