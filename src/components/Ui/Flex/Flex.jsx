const Flex = ({
  justifyContent = "center",
  alignItems = "center",
  gap,
  className,
  children,
  minHeight,
  backGround,
  // backGround = "linear-gradient(90deg, rgba(222,175,56,1) 33%, rgba(237,161,59,1) 79%)",
}) => {
  return (
    <div
      className={className}
      style={{
        display: "flex",
        justifyContent,
        alignItems,
        gap,
        minHeight,
        backGround,
      }}
    >
      {children}
    </div>
  );
};

export { Flex };
