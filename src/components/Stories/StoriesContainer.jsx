"use client";
import { useState } from "react";
import Content from "./Content";
import Story from "./Story";
import data from "./data.json";

export default function StoriesContainer() {
  const [activeStoryId, setActiveStoryId] = useState(1);
  const [showContainer, setShowContainer] = useState(false);
  return (
    <>
      <div className="flex gap-5 p-5 overflow-x-scroll max-w-[1280px] scrollbar-none">
        {data.map((story) => (
          <div
            key={story.id}
            onClick={() => {
              setActiveStoryId(story.id);
              setShowContainer(true);
            }}
          >
            <Story name={story.username + story.id} cover={story.cover} />
          </div>
        ))}
      </div>
      <Content
        id={activeStoryId}
        onClickLeft={() => setActiveStoryId(activeStoryId + 1)}
        onClickRight={() => setActiveStoryId(activeStoryId - 1)}
        showContainer={showContainer}
        onClose={() => setShowContainer(false)}
      />
    </>
  );
}
