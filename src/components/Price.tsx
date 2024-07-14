import { cn } from "./ui/utils.ts";

const prices = [
  {
    // PS4 PRICES --------------------------------------------------------
    title: "# PS4",
    name: "",
    price: "",
  },
  {
    // PS4 GAMEPAD PRICES ------------------------------------------------
    title: "# Kontroler PS4",
    name: "",
    price: "",
  },
  {
    // PS5 PRICES --------------------------------------------------------
    title: "# PS5",
    name: "",
    price: "",
  },
  {
    // PS5 GAMEPAD PRICES ------------------------------------------------
    title: "# Kontroler PS5",
    name: "",
    price: "",
  },
  {
    // Steam Deck PRICES ------------------------------------------------
    title: "# Steam Deck",
    name: "",
    price: "",
  },
  {
    // Nintendo Switch PRICES ------------------------------------------------
    title: "# Nintendo Switch",
    name: "",
    price: "",
  },
  {
    // Nintendo Switch OLED PRICES ------------------------------------------------
    title: "# Nintendo Switch OLED",
    name: "",
    price: "",
  },
  {
    // Nintendo Switch Lite PRICES ------------------------------------------------
    title: "# Nintendo Switch Lite",
    name: "",
    price: "",
  },
];

export default () => {
  return (
    <div>
      <h2 className="font-medium text-3xl mb-3"># Cennik</h2>
      <p className="text-center">
        Przykładowe ceny najbardziej typowych usterek i usług.
        <br />
        <br />
        Nie ma tego czego szukasz?
        <br />
        <p className="text-center font-medium text-xl">
          Zapraszamy do kontaktu!
        </p>
      </p>

      <ul className="grid gap-2">
        {prices.map((price) => {
          return (
            <>
              <h2 className="font-medium text-2xl ml-16">{price.title}</h2>
              <li
                key={price.name}
                className={cn(
                  "group",
                  "flex items-center justify-between px-4 py-3",
                  "bg-neutral-2 hover:bg-neutral-3",
                  "outline-none border border-neutral-4 hover:border-neutral-6 rounded-3xl",
                  "focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-neutral-7 focus-visible:ring-offset-neutral-1"
                )}
              >
                <div className="flex flex-row items-stretch gap-5 pl-2">
                  <div>
                    <h3 className="transition duration-300 group-hover:translate-x-1 text-neutral-12 text-sm">
                      {price.name}
                    </h3>
                    <div className="transition duration-300 group-hover:translate-x-px text-neutral-10 group-hover:text-neutral-11 text-s">
                      {price.price}
                    </div>
                  </div>
                </div>
              </li>
            </>
          );
        })}
      </ul>
    </div>
  );
};
