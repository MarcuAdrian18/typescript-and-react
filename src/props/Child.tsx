interface ChildProps {
  color: string;
  onClick: () => void;
  children?: React.ReactNode; //for Child Component
}

export const Child = ({ color, onClick }: ChildProps) => {
  return (
    <div>
      {color}
      <button onClick={onClick}>Click Me</button>
    </div>
  );
};

export const ChildAsFC: React.FC<ChildProps> = ({
  color,
  onClick,
  children,
}) => {
  return (
    <div>
      {color}
      {children}
      <button onClick={onClick}>Click Me</button>
    </div>
  );
};
