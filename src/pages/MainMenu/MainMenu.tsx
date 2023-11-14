import { useEffect, useState } from "react";
import { Card } from "../Card";

interface IMenuItem {
  id: string;
  title: string;
  description: string;
  image: string;
}

export const MainMenu = () => {
  const [menu, setMenu] = useState<IMenuItem[]>();

  const getMenu = async () => {
    try {
      const response = await fetch("http://localhost:5000/get-menu");
      const resData = await response.json();
      setMenu(resData);
    } catch (err) {
      if (err instanceof Error) {
        console.error(err.message);
      } else {
        console.error("Unexpected error", err);
      }
    }
  };

  const handleMenuDelite = async (id: string) => {
    try {
      const response = await fetch("http://localhost:5000/delete-menu", {
        method: "delete",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          id,
        }),
      });
      const resData = await response.json();
      if (resData) getMenu();
    } catch (err) {
      if (err instanceof Error) {
        console.error(err.message);
      } else {
        console.error("Unexpected error", err);
      }
    }
  };

  useEffect(() => {
    if (!menu) getMenu();
  }, [menu]);

  return (
    <div>
      {menu?.map((item, index) => (
        <Card
          key={index}
          id={item.id}
          title={item.title}
          image={item.image}
          description={item.description}
          handleMenuDelite={handleMenuDelite}
        />
      ))}
    </div>
  );
};
