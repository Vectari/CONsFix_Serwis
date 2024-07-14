import { cn } from "./ui/utils.ts";

const prices = [
  {
    // PS4 PRICES --------------------------------------------------------
    title: "# PS4",
    name: "Czyszczenie układu chłodzenia i wymiana pasty termoprzewodzącej",
    price: "80",
  },
  {
    name: "Wymiana lasera",
    price: "150-220",
  },
  {
    name: "Naprawa napędu (nie działa lub słabo wciąga/oddaje płytę)",
    price: "100-200",
  },
  {
    name: "Wymiana gniazda HDMI",
    price: "180",
  },
  {
    name: "Wymiana kontrolera HDMI",
    price: "220",
  },
  {
    name: "Wymiana zasilacza (cena zależy od wersji)",
    price: "250-450",
  },
  {
    name: "Wymiana wentylatora (cena zależy od wersji)",
    price: "150-200",
  },
  {
    name: "Wymiana dysku HDD 1TB",
    price: "220",
  },
  {
    name: "Wymiana dysku SDD 480GB",
    price: "220",
  },
  {
    name: "Wymiana dysku SDD 980GB",
    price: "320",
  },
  {
    name: "Instalacja systemu",
    price: "50",
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
    name: "Wymiana ekranu",
    price: "600",
  },
  {
    name: "Wymiana analoga",
    price: "170",
  },
  {
    name: "Naprawa braku ubrazu (działa na zewnętrznym)",
    price: "450",
  },
  {
    // Nintendo Switch PRICES ------------------------------------------------
    title: "# Nintendo Switch",
    name: "Wymiana szybki",
    price: "300",
  },
  {
    name: "Wymiana ekranu LCD",
    price: "350",
  },
  {
    name: "Naprawa błędu 2101-001",
    price: "250",
  },
  {
    name: "Naprawa układu ładowania",
    price: "250-350",
  },
  {
    name: "Naprawa układu WIFI/BT",
    price: "350",
  },
  {
    name: "Wymiana slotu gier",
    price: "150",
  },
  {
    name: "Wymiana slotu SD",
    price: "150",
  },
  {
    name: "Wymiana portu USB-C",
    price: "150",
  },
  {
    name: "Wymiana wentylatora",
    price: "150",
  },
  {
    // Nintendo Switch OLED PRICES ------------------------------------------------
    title: "# Nintendo Switch OLED",
    name: "Wymiana ekranu OLED",
    price: "650",
  },
  {
    name: "Wymiana slotu gier",
    price: "200",
  },
  {
    name: "Wymiana portu USB-C",
    price: "150",
  },
  {
    // Nintendo Switch Lite PRICES ------------------------------------------------
    title: "# Nintendo Switch Lite",
    name: "Wymiana szybki",
    price: "300",
  },
  {
    name: "Wymiana ekranu LCD",
    price: "400",
  },
  {
    name: "Wymiana portu USB-C",
    price: "150",
  },
  {
    name: "Wymiana lewego analoga",
    price: "80",
  },
  {
    name: "Wymiana prawego analog",
    price: "120",
  },
  {
    // Nintendo Joy-Con PRICES ------------------------------------------------
    title: "# Nintendo Joy-Con",
    name: "Wymiana analoga",
    price: "60",
  },
  {
    name: "Naprawa niedziałających przycisków",
    price: "50-80",
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
                      {price.price} zł
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
