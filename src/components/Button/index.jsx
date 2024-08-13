export const ButtonPrimary = ({ children, onClick, className, ...props }) => {
  return (
    <button
      className={`${className} bg-accent rounded-lg py-1 px-3 hover:bg-secondary text-text-primary font-medium `}
      onClick={onClick}
      {...props}>
      {children}
    </button>
  );
};
