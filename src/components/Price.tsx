import { cn } from "./ui/utils.ts";
import { Simple } from "./icons/index.ts";

const prices = [
  {
    name: "Czyszczenie układu chłodzenia i wymiana past",
    price: "80 zł",
    icon: Simple.IconFigma,
    url: "https://www.figma.com",
  },
  {
    name: "Wymiana lasera",
    price: "150-220 zł",
    icon: Simple.IconFramer,
    url: "https://www.framer.com",
  },
  {
    name: "Wymiana analoga HALL EFFECT",
    price: "70-90 zł",
    icon: Simple.IconRive,
    url: "https://rive.app",
  },
  {
    name: "Wymiana analoga w Nintendo Joy-Con",
    price: "60 zł",
    icon: Simple.IconArc,
    url: "https://arc.net",
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
        <p className="font-medium text-xl">Zapraszamy do kontaktu!</p>
        <br />
        <br />
      </p>
      <ul className="grid grid-cols-2 gap-3 p-1">
        {prices.map((price) => {
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
                {/* <div className="flex items-center justify-center">
                  <price.icon
                    size={24}
                    className="transition duration-300 group-hover:-translate-y-1 text-neutral-10 group-hover:text-neutral-11"
                  />
                </div> */}

                <div>
                  <h3 className="transition duration-300 group-hover:translate-x-1 text-neutral-12 text-sm">
                    {price.name}
                  </h3>
                  <div className="transition duration-300 group-hover:translate-x-px text-neutral-10 group-hover:text-neutral-11 text-s">
                    {price.price}
                  </div>
                </div>
              </div>

              {/* <IconButton
                as="a"
                role="button"
                href={price.url}
                className="group/icon"
                target="_blank"
                aria-label="Open"
              >
                <Lucide.IconExternalLink
                  aria-label="Open"
                  className="transition text-neutral-10 group-hover:text-primary-11 group-focus-visible/icon:text-primary-11"
                />
              </IconButton> */}
            </li>
          );
        })}
      </ul>
    </div>
  );
};
