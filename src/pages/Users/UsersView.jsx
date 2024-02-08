const UsersView = ({ isVisible, handleToggle }) => {
  return (
    <div>
      <button onClick={handleToggle}>{isVisible ? "show" : "hide"}</button>
      {isVisible ? <span>I am visible</span> : <span>I should be hidden</span>}
    </div>
  );
};

export { UsersView };
