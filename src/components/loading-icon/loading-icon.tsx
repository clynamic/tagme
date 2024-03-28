import "./loading-icon.scss";

export const LoadingIcon = () => {
  return (
    <div className="loading-icon">
      {"TagMe!".split("").map((char) => (
        <span key={char}>{char}</span>
      ))}
    </div>
  );
};
