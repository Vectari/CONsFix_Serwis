export default () => {
  return (
    <div className="flex flex-col items-start gap-6 lg:gap-8 px-3 lg:px-6 py-4">
      <div className="flex flex-row items-center gap-4">
        {/* <Avatar src="/favicon.png" alt="profile-picture"></Avatar> */}
        <img src={"../../src/assets/favicon.png"} className="w-48 h-48"/>

        <div className="flex flex-col items-start gap-2">
          <h1 className="text-neutral-12 font-medium text-lg lg:text-xl">
            Ekspresowa Naprawa - Konsole i Kontrolery
          </h1>
          <h2 className="text-neutral-12 font-medium text-2xl lg:text-3xl">
            CONsFix Serwis
          </h2>
        </div>
      </div>

      <div>
        <p className="text-neutral-12 ">
          Naprawa konsol i kontrolerów to nasza pasja i specjalność! Jeśli Twój
          sprzęt nie uruchamia się, ma problem z obrazem, czy cierpi na
          driftujące analogi, jesteśmy tu, by pomóc.
        </p>
        <br />
        <h2 className="text-neutral-12 font-medium text-lg lg:text-xl">
          Co oferujemy:
        </h2>
        <li className="text-neutral-10">
          Bezpłatna Diagnoza: Szybka ocena problemu, abyś wiedział/a, co się
          dzieje z Twoim sprzętem.
        </li>
        <li className="text-neutral-10">
          Niskie Ceny: Konkurencyjne ceny i przejrzyste koszty naprawy.
        </li>
        <li className="text-neutral-10">
          Szybkie Naprawy: Dzięki doświadczeniu i wysokiej jakości częściom,
          naprawiamy Twój sprzęt szybko i skutecznie.
        </li>
        <li className="text-neutral-10">
          Gwarancja na Naprawy: Oferujemy gwarancję na wszystkie przeprowadzone
          naprawy.
        </li>
        <br />
        <h2 className="text-neutral-12 font-medium text-lg lg:text-xl">
          Usługi Naprawcze:
        </h2>
        <li className="text-neutral-10">
          Konsole: PS4, PS5, XBOX ONE, XBOX Series S/X, Steam Deck, Nintendo
          Switch
        </li>
        <li className="text-neutral-10">
          Kontrolery: Pad PS4, Pad PS5, Pad XBOX ONE, Pad XBOX Series, Nintendo
          Joy-Con
        </li>
        <br />
        <h2 className="text-neutral-12 font-medium text-lg lg:text-xl">
          Co naprawiamy:{" "}
        </h2>
        <li className="text-neutral-10">
          Naprawa problemów z uruchamianiem i wyświetlaniem obrazu{" "}
        </li>
        <li className="text-neutral-10">
          Problemy z chłodzeniem: czyszczenie układu chłodzenia, wymiana past
          termoprzewodzących
        </li>
        <li className="text-neutral-10">Naprawa driftujących analogów </li>
        <li className="text-neutral-10">
          Wymiana laserów, wyświetlaczy i innych uszkodzonych podzespołów{" "}
        </li>
        <br />
        <h2 className="text-neutral-12 font-medium text-lg lg:text-2xl">
          Technologia HALL EFFECT:
        </h2>
        <p className="text-neutral-10 text-center">
          Na życzenie klienta oferujemy montaż nowoczesnych analogów HALL
          EFFECT, które są znacznie bardziej niezawodne.
        </p>
        <br />
        <br />
        <div className="items-center justify-between px-4 py-3 bg-neutral-2  outline-none border border-neutral-4  rounded-3xl">
          <h2 className="text-neutral-12 text-center font-medium text-lg lg:text-xl ">
            Dzięki naszemu wieloletniemu doświadczeniu w naprawach elektroniki
            oraz profesjonalnemu podejściu, możesz być pewny/pewna, że Twój
            sprzęt trafi w dobre ręce.
          </h2>
          <br />
          <h2 className="text-neutral-12 text-center font-medium text-lg lg:text-xl ">
            Skontaktuj się z nami już dziś, aby rozwiązać problemy ze swoją
            konsolą lub kontrolerem!
          </h2>
        </div>
      </div>
    </div>
  );
};
