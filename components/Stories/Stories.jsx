import Story from "./Story";
import data from "./data.json"

export default function Stories() {
  
  return (
    <div className="flex gap-5 p-5 overflow-x-scroll w-screen scrollbar-none">
      {data.map((story) => (
        <Story key={story.id} name={story.username} image={story.image}/>
      ))}
    </div>
  );
}
