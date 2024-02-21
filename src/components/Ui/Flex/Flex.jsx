const Flex = ({
  justifyContent = "center",
  alignItems = "center",
  gap,
  className,
  children,
  minHeight,
}) => {
  return (
    <div
      className={className}
      style={{ display: "flex", justifyContent, alignItems, gap, minHeight }}
    >
      {children}
    </div>
  );
};

export { Flex };
