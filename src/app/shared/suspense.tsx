interface ISuspense {
  className?: string;
}
const Suspense: React.FC<ISuspense> = ({ className }) => {
  return (
    <div
      className={`flex items-center justify-center animate-pulse rounded ${className}`}
    ></div>
  );
};
export default Suspense;
