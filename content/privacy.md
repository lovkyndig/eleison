  # Personvernerklaering (GDPR)
  Leseveiledning: De norske tegne i alfabetet er blitt byttet ut, med ae, o og aa.
  
  ## "Google Play" krever personvernerklaering
  Google's regler for publisering av apper i "Google Play Store":
  - _"Apper skal ha personvernregler selv om de ikke har tilgang til personlige og sensitive brukerdata."_ (NO)
  - _"Apps that do not access any personal and sensitive user data must still submit a privacy policy."_ [EN](https://support.google.com/googleplay/android-developer/answer/9859455?hl=en)
  
  ## Hva slags personopplysninger behandles?
  - Brukeraktivitet: Lese- og handlingshistorikk fra app og nettsider. Samt teknisk informasjon om enhetene de bruker.
  Herettter benyttes begrepet brukeraktivitet istedenfor personopplysninger, fordi det beskriver de personopplysningene som behandles.
  
  ### Formaal
  Formaalet er todelt; 
  - kontroll av uonsket/ulovlig brukeraktivitet og 
  - finne grunnlag for aa gjore appen bedre for brukerne.
  
  ## Om innhenting av brukeraktivitet
  Opplysningene samles inn av "Google" via Play Console, Search Console og Analytics.
  - Utvikleren samler ikke inn andre opplysninger enn det som samles inn og lagres av Google.
  - Utvikleren har tilgang til denne informasjonen via Google, pga. verifisert eierskap til domenet hvor PWA er utplassert (se _#### Domene_ nedenfor).
  - Utvikleren kopierer eller lagrer ikke brukeraktiviteten, som finnes paa Google', paa andre steder.
  
  ## Google Analytics og Cookies
  Google Analytics lagrer og benytter cookies i sin behandling av brukerdata. Av den grunn (jf. GDPR) er utvikleren aa informere brukeren og sporre om samtykke til slik lagring, for aa gjore bruk av Google Analytics.
  
  ### Login autentisering
  Cookies er paatvunget ved innlogging til passordbeskyttede sider. Slike cookies benyttes ikke hvis du logger inn til sider uten passord.
  
  ## Juridisk ansvar
  Utvikleren erkjenner ansvar for studering av den brukeraktivit som Google' gjor tilgjengelig for utviklerne via: 
  - [Google Search Console](https://search.google.com/search-console/about)
  - [Google Analytics](https://en.wikipedia.org/wiki/Google_Analytics)
  
  ## Sporsmaal og innsigelser
  Sporsmaal eller innsigelser til at utvikleren benytter seg av Google Analytics og cookies, eller andre sporsmaal og innsigelser, kan sendes til utviklerens email:
  - [Eleison](mailto:jur.eleison@gmail.com)
  
  ## Klage paa behandling av brukeraktivitet
  I tillegg til aa klage til epostadressen nevnt i forrige avsnitt, kan du klage til Datatilsynet (i Norge), dersom du mener at han gjor noe uriktig.
  - [Datatilsynet](https://www.datatilsynet.no)
  
  #### Domene
  Appen er tilknyttet en pwa (via twa) som er utplassert paa et underdomene under Vercel med folgende url:
  - [eleison.vercel.app](https://eleison.vercel.app)
  
  #### Appnavn
  Appnavnet er:
  - "Eleisons Bibel"
  
  #### Aapen kildekode
  Kildekode for pwa som ligger til grunn for bygging av appen (med @bubblewrap) er aapen og offentlig:
  - [GitHub](https://github.com/lovkyndig/eleison)
  
  #### GitHub
  Oversikt over utviklerens aapen kildekode-programmering er offentlig tilgjengelig paa uviklerens konto paa GitHub:
  - [github.com/lovkyndig](https://github.com/lovkyndig).
  
  #### Google Play
  Naermere info om denne appen finnes paa Google Play med oøk på google ved søkeordene "Google Play Eleison". Direktelink:
  - [Eleison](https://play.google.com/store/apps/details?id=app.vercel.eleison.twa).
  
  
  _Redigert: Juni 15, 2023_
  
  [//]: # (Dette er en kopi av teksten i ~/server/routes/privacy.txt.ts)