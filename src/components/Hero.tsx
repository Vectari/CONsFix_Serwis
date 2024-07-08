import { Avatar } from "./ui";
import { Lucide } from "./icons";

export default () => {
  return (
    <div className="flex flex-col items-start gap-6 lg:gap-8 px-3 lg:px-6 py-4">
      <div className="flex flex-row items-center gap-4">
        <Avatar src="/favicon.svg" alt="profile-picture">
          <Lucide.IconUser className="size-2/3" />
        </Avatar>

        <div className="flex flex-col items-start gap-2">
          <h1 className="font-medium text-lg lg:text-xl">
            Ekspresowa Naprawa - Konsole i Kontrolery
          </h1>
          <h2 className="font-medium text-2xl lg:text-3xl">CONsFix Serwis</h2>
        </div>
      </div>

      <div>
        Naprawa konsol i kontrolerów to nasza pasja i specjalność! Jeśli Twój
        sprzęt nie uruchamia się, ma problem z obrazem, czy cierpi na driftujące
        analogi, jesteśmy tu, by pomóc.
        <br />
        <br />
        <h2>Co oferujemy:</h2>
        <li>
          Bezpłatna Diagnoza: Szybka ocena problemu, abyś wiedział/a, co się
          dzieje z Twoim sprzętem.
        </li>
        <li>Niskie Ceny: Konkurencyjne ceny i przejrzyste koszty naprawy.</li>
        <li>
          Szybkie Naprawy: Dzięki doświadczeniu i wysokiej jakości częściom,
          naprawiamy Twój sprzęt szybko i skutecznie.{" "}
        </li>
        <li>
          Gwarancja na Naprawy: Oferujemy gwarancję na wszystkie przeprowadzone
          naprawy.{" "}
        </li>
        <h2>Usługi Naprawcze:</h2>
        <li>
          Konsole: PS4, PS5, XBOX ONE, XBOX Series S/X, Steam Deck, Nintendo
          Switch
        </li>
        <li>
          Kontrolery: Pad PS4, Pad PS5, Pad XBOX ONE, Pad XBOX Series, Nintendo
          Joy-Con
        </li>
        <h2>Co naprawiamy: </h2>
        <li>Naprawa problemów z uruchamianiem i wyświetlaniem obrazu </li>
        <li>
          Problemy z chłodzeniem: czyszczenie układu chłodzenia, wymiana past
          termoprzewodzących{" "}
        </li>
        <li>Naprawa driftujących analogów </li>
        <li>
          Wymiana laserów, wyświetlaczy i innych uszkodzonych podzespołów{" "}
        </li>
        <h2>Technologia HALL EFFECT:</h2>
        <div>
          Na życzenie klienta oferujemy montaż nowoczesnych analogów HALL
          EFFECT, które są znacznie bardziej niezawodne.
        </div>{" "}
        <h2>
          Kontaktuj się z nami! Dzięki naszemu wieloletniemu doświadczeniu w
          naprawach elektroniki oraz profesjonalnemu podejściu, możesz być
          pewny/pewna, że Twój sprzęt trafi w dobre ręce.{" "}
        </h2>
        <h2>
          Skontaktuj się z nami już dziś, aby rozwiązać problemy ze swoją
          konsolą lub kontrolerem!
        </h2>
      </div>
    </div>
  );
};
