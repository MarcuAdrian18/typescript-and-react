import React from "react";

const EventComponent: React.FC = () => {
  const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    console.log(event);
  };

  const onDragStart = (event: React.DragEvent<HTMLDivElement>) => {
    console.log(event.clientX);
  };

  return (
    <div>
      <h1>Event Component</h1>
      <input onChange={onChange} />
      <div draggable onDragStart={onDragStart}>
        <h1>Drag Me!</h1>
      </div>
    </div>
  );
};

export default EventComponent;
