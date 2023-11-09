import { useLoaderData } from "react-router-dom";
import { getMenu } from "../../services/apiRestaurant";
import Menuitem from "./MenuItem";

function Menu() {
  const menu = useLoaderData();

  return (
    <ul className="divide-y divide-stone-200 px-4">
      {menu.map((pizza) => (
        <Menuitem key={pizza.id} pizza={pizza} />
      ))}
    </ul>
  );
}

export async function loader() {
  const menu = await getMenu();
  return menu;
}

export default Menu;
