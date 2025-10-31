import "./Loader.scss";

export const Loader: React.FC<React.HTMLProps<HTMLDivElement>> = ({className, ...props}) => {
  return (
    <div className={`${className} loader-container`} {...props}>
      <div className="loader-spinner"></div>
    </div>
  );
};
