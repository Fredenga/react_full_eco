const Sidebar = () => {
  const items = [
    "Women's Fashion",
    "Men's Fashion",
    "Electronics",
    "Home & Lifestyle",
    "Medicine",
    "Sports & Outdoor",
    "Baby's & Toys",
    "Groceries & Toys",
    "Health & Beauty",
  ];

  return (
    <div className="flex-1/3">
      <ul className="space-y-4">
        {items.map((item) => (
          <li>{item}</li>
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;
