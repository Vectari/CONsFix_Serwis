import { cn } from "./ui/utils.ts";

const prices_PS4 = [
  {
    name: "Czyszczenie układu chłodzenia i wymiana past",
    price: "80 zł",
  },
  {
    name: "Wymiana lasera",
    price: "150-220 zł",
  },
  {
    name: "Wymiana analoga HALL EFFECT",
    price: "70-90 zł",
  },
  {
    name: "",
    price: "",
  },
];

const prices_PS5 = [
  {
    name: "Czyszczenie układu chłodzenia i wymiana ciekłego metalu",
    price: "100 zł",
  },
  {
    name: "Wymiana lasera",
    price: "280 zł",
  },
  {
    name: "Wymiana analoga HALL EFFECT",
    price: "70-90 zł",
  },
  {
    name: "",
    price: "",
  },
];

const prices_XOne = [
  {
    name: "Czyszczenie układu chłodzenia i wymiana past",
    price: "80 zł",
  },
  {
    name: "Wymiana lasera",
    price: "150-220 zł",
  },
  {
    name: "Wymiana analoga HALL EFFECT",
    price: "70-90 zł",
  },
  {
    name: "",
    price: "",
  },
];

const prices_XSeries = [
  {
    name: "Czyszczenie układu chłodzenia i wymiana past",
    price: "100 zł",
  },
  {
    name: "Wymiana lasera",
    price: "--- zł",
  },
  {
    name: "Wymiana analoga HALL EFFECT",
    price: "70-90 zł",
  },
  {
    name: "",
    price: "",
  },
];

const prices_PS_SD = [
  {
    name: "Czyszczenie układu chłodzenia i wymiana past",
    price: "80 zł",
  },
  {
    name: "",
    price: "",
  },
  {
    name: "",
    price: "",
  },
  {
    name: "",
    price: "",
  },
];

const prices_PS_NS = [
  {
    name: "Czyszczenie układu chłodzenia i wymiana past",
    price: "80 zł",
  },
  {
    name: "",
    price: "",
  },
  {
    name: "",
    price: "",
  },
  {
    name: "Wymiana analoga w Nintendo Joy-Con",
    price: "60 zł",
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
      <h3 className="font-medium text-2xl m-6 ml-16"># PS4</h3>
      <ul className="grid gap-3  ">
        {prices_PS4.map((price) => {
          return (
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
          );
        })}
      </ul>

      <h3 className="font-medium text-2xl m-6 ml-16"># PS5</h3>
      <ul className="grid gap-3  ">
        {prices_PS5.map((price) => {
          return (
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
          );
        })}
      </ul>

      <h3 className="font-medium text-2xl m-6 ml-16"># XBOX ONE, S/X</h3>
      <ul className="grid gap-3  ">
        {prices_XOne.map((price) => {
          return (
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
          );
        })}
      </ul>

      <h3 className="font-medium text-2xl m-6 ml-16"># XBOX Series S/X</h3>
      <ul className="grid gap-3  ">
        {prices_XSeries.map((price) => {
          return (
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
          );
        })}
      </ul>

      <h3 className="font-medium text-2xl m-6 ml-16"># Steam Deck</h3>
      <ul className="grid gap-3  ">
        {prices_PS_SD.map((price) => {
          return (
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
          );
        })}
      </ul>

      <h3 className="font-medium text-2xl m-6 ml-16"># Nintendo Switch</h3>
      <ul className="grid gap-3  ">
        {prices_PS_NS.map((price) => {
          return (
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
          );
        })}
      </ul>
    </div>
  );
};
