const Sidebar = ({ chosenCategory, onCategoryClicked }) => {
  const allCategories = ["All", "Groceries", "College", "Payment"];

  return (
    <div className="categories">
      <ul>
        {allCategories.map((category) => {
          return (
            <li
              onClick={(e) => onCategoryClicked(category)}
              style={{
                color: chosenCategory === category ? "#EA5959" : "#525252",
              }}>{category}</li>
          );
        })}
      </ul>
    </div>
  );
};

export default Sidebar;
