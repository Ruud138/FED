# Procesverslag
Markdown is een simpele manier om HTML te schrijven.  
Markdown cheat cheet: [Hulp bij het schrijven van Markdown](https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet).

Nb. De standaardstructuur en de spartaanse opmaak van de README.md zijn helemaal prima. Het gaat om de inhoud van je procesverslag. Besteedt de tijd voor pracht en praal aan je website.

Nb. Door *open* toe te voegen aan een *details* element kun je deze standaard open zetten. Fijn om dat steeds voor de relevante stuk(ken) te doen.





## Jij

<details open>
  <summary>uitwerken voor kick-off werkgroep</summary>

  ### Auteur:
  Ruud Jansen

  #### Je startniveau:
  Rood

  #### Je focus:
  Surface
 
</details>





## Je website

<details open>
  <summary>uitwerken voor kick-off werkgroep</summary>

  ### Je opdracht:
  https://www.kvk.nl/

  #### Screenshot(s) van de eerste pagina (small screen): 
  Home  
  <img src="readme-images/screenshot_kvk_home_small.png" width="375px" alt="Screenshot van de home pagina">

  #### Screenshot(s) van de tweede pagina (small screen):
  Menu  
  <img src="readme-images/screenshot_kvk_stoppen_small.png" width="375px" alt="Screenshot van de menu pagina">
 
</details>



## Toegankelijkheidstest 1/2 (week 1)

<details open>
  <summary>uitwerken na test in 2<sup>e</sup> werkgroep</summary>

  ### Bevindingen
  Tijdens mijn screenreader test merkte ik dat de KvK het best goed aanpakt als het neerkomt op semantisch coderen, beter dan veel andere websites. Het viel me wel op dat de KvK website wel heel veel headings heeft. Een aantal onderdelen van de website zijn niets anders dan een hele berg headings achter elkaar waardoor je er niet heel soepel doorheen komt. Het viel mij in element inspecteren ook op dat de KvK website bijna alle HTML content dubbel op de website heeft staan maar 1 versie is zichtbaar en 1 versie is display none. Dit zorgt wel voor een nog groter aantal headings en ook dubbele headings zoals H1 die je normaal maar 1 keer mag gebruiken.
  Gelukkig heeft de KvK wel alle dubbele onderdelen goed verborgen waardoor de screenreader deze niet zomaar dubbel voor zal lezen.

  Hierna heb ik ook de lijst navigatie getest maar de KvK website heeft slechts 2 lists waarvan 1 de navigatie in de header  is en de andere is de navigatie in de footer. Verder maakt de KvK alleen maar gebruik van headings en heel veel DIV.

  Verder ontbreekt ook op vijwel alle foto's een alt, zitten elementen genest in andere waarbij dat niet mag (zoals UL in BUTTON en ontbreken veel belangrijke HTML elementen die simpelweg als DIV toegevoegd zijn.

Maarrrrr ik vind dat de KvK het best netjes doet in verhouding tot sommige websites waar het een grote puinzooi is.
</details>



## Breakdownschets (week 1)

<details>
  <summary>uitwerken na afloop 3<sup>e</sup> werkgroep</summary>

  ### de hele home pagina: 
  <img src="readme-images/Home-scherm-breakdown.png" width="375px" alt="breakdown van de hele home pagina">

  ### dynamisch deel home pagina: 
  <img src="readme-images/Home-scherm-content.png" width="375px" alt="breakdown van een dynamisch deel op de home pagina">



  ### de hele menu pagina: 
  <img src="readme-images/Menu-scherm-breakdown.png" width="375px" alt="breakdown van de hele menu pagina">

  ### dynamisch deel menu pagina (hamburger menu): 
  <img src="readme-images/Menu-scherm-content.png" width="375px" alt="breakdown van een dynamisch deel op de menu pagina">

</details>





## Voortgang 1 (week 2)

<details>
  <summary>uitwerken voor 1<sup>e</sup> voortgang</summary>

  ### Stand van zaken
  Aan het begin van mijn herkansing liep het allemaal best stroef. Ik heb meerdere keren van website gewisseld.
  Het viel me ook goed tegen om weer in de "codeer sfeer" te komen. Ondertussen is het al een lange tijd geleden dat ik gecodeerd heb dus het was deze week vooral veel dingen opnieuw uitproberen en terugkijken in mijn oude projecten naar hoe ik bepaalde problemen toen aangepakt had.

  Deze week dacht ik lekker op weg te zijn en had ik de gehele HTML van mijn website al opgesteld. Deze website bleek alleen helaas toch niet helemaal te voldoen dus dit werk was voor niets geweest. Ik hoop volgende week een stuk meer gedaan te kunnen hebben.


</details>





## Voortgang 2 (week 3)

<details>
  <summary>uitwerken voor 2<sup>e</sup> voortgang</summary>

  ### Stand van zaken
  Deze week ging het een stuk beter dan de voorgaande weken. Nadat ik te horen kreeg dat mijn eerste website (Wild and the Moon) niet voldeed, heb ik snel kunnen wisselen naar een nieuw onderwerp, namelijk de website van de Kamer van Koophandel. Door deze snelle wissel heb ik gelukkig minimale vertraging opgelopen en kon ik direct weer verder.

Afgelopen week heb ik gelukkig kunnen oefenen met de website van Wild and the Moon. Ookal ga ik hier dus niet mee verder, was het toch even fijn om alles weer eens door te nemen en uit te proberen. Hierdoor zijn veel van de eerdere struikelpunten wat duidelijker geworden en heb ik hier al oplossingen voor gevonden en ben ik steeds meer in de codeer flow geraakt. Dit zorgde ervoor dat ik een vliegende start kon maken met het opzetten van de HTML-structuur van de KvK-website.

Tijdens het uitwerken van de pagina’s kwam ik een HTML-element tegen dat ik nog niet eerder bewust had gebruikt, namelijk het ARTICLE element. Ik wist niet precies wat de semantische betekenis hiervan was en welke regels hierbij horen. Dit heb ik daarom besproken tijdens mijn gesprek met de studentenbegeleider. Dit gaf weer meer duidelijkheid over wanneer en hoe je ARTICLE correct toepast en zette mij weer op het juiste spoor.

Daarnaast heb ik deze week veel nagedacht over het gebruik van het A element. Ik twijfelde over wat er nu wel en wat niet in een link mag zitten/onderdeel is van het "klikbare" gedeelte. Er zijn verschillende meniningen over hoe je dit semantisch en officieel moet doen. Zo waren Danny en de begeleider het niet met elkaar eens over wat de juiste/beste manier was om een bepaald onderdeel van de kvk website na te maken. De website van de kvk bevat veel klikbare blokken die visueel als een geheel/blok/knop zijn vormgegeven. Voor mij was het in ieder geval erg onduidelijk wat de beste aanpak zou zijn en het meest geschikt zou zijn voor het gewenste gedrag en de ervaring op de website. Vorm, Functie en toegankelijkheid kunnen snel met elkaar botsen.

Tot slot liep ik al langere tijd vast op de carrousels die op de KvK-website worden gebruikt. Ik heb hier een soort haat-liefde relatie mee. Vaak ziet het er misschien simpel uit maar nog vaker onderschat ik dit en loop ik al snel vast. Ik heb tijdens mijn gesprek daarom lekker veel vragen kunnen stellen en in de klas verder kunnen werken en direct weer feedback kunnen krijgen van de begeleider.


  ### Vragen die ik heb

</details>





## Toegankelijkheidstest 2/2 (week 4)

<details>
  <summary>uitwerken na test in 9<sup>e</sup> werkgroep</summary>

  ### Bevindingen
  Lijst met je bevindingen die in de test naar voren kwamen (geef ook aan wat er verbeterd is):

</details>





## Voortgang 3 (week 4)

<details>
  <summary>uitwerken voor 3<sup>e</sup> voortgang</summary>

  ### Stand van zaken
  Deze periode is voor mij persoonlijk erg zwaar geweest. Mijn opa is tegen het eind van het vak ernstig ziek geworden en uiteindelijk overleden. Hierdoor heb ik niet altijd de motivatie of mentale ruimte kunnen vinden om met volle focus aan school te werken. Ondanks dit alles heb ik gelukkig wel momenten kunnen vinden waarin ik de rust en energie had om verder te gaan met de opdracht. Gelukkig heb ik daarmee toch, ook al ging het niet altijd even makkelijk, stappen kunnen blijven zetten.

In deze week heb ik het correct toepassen van de <a>-elementen afgerond. Na veel twijfel en het maken van de afweging heb ik ervoor gekozen om niet alleen de tekst maar het volledige blok (bestaande uit tekst, afbeelding en padding) klikbaar te maken. Op de website van de Kamer van Koophandel zijn deze onderdelen namelijk duidelijk vormgegeven als losse blokken. Voor de gebruiker voelen deze aan als een soort knop waardoor je ook verwacht dat het gehele element klikbaar is. Vanuit dat perspectief vond ik dit de meest logische en gebruiksvriendelijke keuze.

  ### Hoe een A element er uitziet op de KvK website
<img src="readme-images/voorbeeld_a_element_kvk_website.png" alt="breakdown van de hele home pagina">

  ### Hoe de carrousel status/scroll er uitziet op de KvK website
<img src="readme-images/voorbeeld_marker_kvk_website.png" alt="breakdown van de hele home pagina">

  ### Hoe ik de markers op mijn website gestyled heb om op een slider te lijken (deel van de css)
<img src="readme-images/voorbeeld_marker_kvk_website.png" alt="breakdown van de hele home pagina">


Daarnaast heb ik deze week de carrousels succesvol kunnen afronden. In eerste instantie had ik de slider van de carrousel opgebouwd met een div voor de balk en een span voor de slider/thumb. Omdat CSS geen volledige controle biedt over het stylen van een scrollbalk ging ik er vanuit dat ik JavaScript zou moeten gebruiken. Je kan namelijk veel dingen aanpassen met css maar niet volledig de scrollbalk. Ik dacht dat ik met javscript de positie van de gebruiker in de carrousel zou moeten meten en de slider span hierop te laten reageren. Dit is ook de manier waarop de KvK-website dit oplost.
Toch voelde deze aanpak voor mij omslachtig en rommelig. Ook is deze aanpak officieel niet toegestaan volgens de regel van het vak “geen CSS met JavaScript”. Tijdens een gesprek met de studentenbegeleider legde ze mij al uit dat dit inderdaad niet de manier is en als dit voorkomen kan worden dat dit beter gedaan kan worden. Ze vertelde me over een voorbeeld op DLO waarin gebruik werd gemaakt van ::scroll-marker en ::scroll-marker-group om een positie-indicator voor een carrousel te maken. Na flink wat uitzoeken, experimenteren en puzzelen is het me gelukt om deze normaal ronde markers te stylen en ze (soort van) te laten functioneren als een slider. Hier ben ik erg trots op omdat je het haast niet door zou hebben, omdat dit een oplossing is die zowel technisch interessant als semantisch sterker is.

Verder heb ik deze week ook de footer volledig kunnen afronden door deze tot in detail na te stylen naar het voorbeeld van de KvK-website. Hierbij heb ik gelet op structuur, herbruikbare styling en consistentie met de rest van de site.

De grootste taak die nu nog voor mij ligt is het correct en volledig bedienbaar maken van de website met een screenreader. Tijdens de 2e test maar dan van mijn eigen website kwam ik nog wel een aantal verbeter puntjes tegen. Veel iconen moeten nog onzichtbaar gemaakt worden voor de screenreader. Mijn screenreader kletst me de oren van het hooft als hij alle lange namen en inhoud van svg elementen op gaat noemen. Ook wil ik omdat ik mij op de surface plane richt ook zo veel mogelijk op toegankelijkheid focussen. Mijn hamburger menu wilt bijvoorbeeld nog niet automatisch sluiten als je het verlaat met de screenreader. Ook wil ik bovenaan de website nog een "skip to content" link toevoegen die alleen voor screenreaders zichtbaar is. 

  ### Skip to content knop voor screenreaders
<img src="readme-images/voorbeeld_skiplink_kvk_website.png" alt="breakdown van de hele home pagina">


</details>





## Eindgesprek (week 5)

<details>
  <summary>uitwerken voor eindgesprek</summary>

  ### Je uitkomst - karakteristiek screenshots:
  <img src="readme-images/screenshot_eigen_website.png" width="375px" alt="Mijn website">


  ### Dit ging goed/Heb ik geleerd: 
  Ik heb verschillende dingen geleerd. Het opzetten van de HTML ging super goed op een paar struikelpunten zoals wat er wel/niet binnen een a element valt na.
  Verder heb ik geleerd hoe ik een website beter leesbaar maak voor een screenreader door zowel de juist html termen te gebruiken om de code duidelijk te maken als het toevoegen van de juist attributen zoals aria labels. Dit is een van de eerste keren dat mijn website gewoon goed bedienbaar is met mijn toetsenbord.
  Ik heb geleerd gebruik te maken van :marker om een slider voor een carrousel te maken.

  <img src="readme-images/dummy-plaatje.jpg" width="375px" alt="top">


  ### Dit was lastig/Is niet gelukt:
  Het correct behandelen van ingewikkelde interacties zoals focus bij het openen en sluiten van het hamburger menu vond ik lastig. Het was moeilijk om de screenreader goed met het menu overweg te laten gaan.
  Hetzelfde gold voor de detail kaarten in het faq menu op de stoppen pagina. Het was erg lastig om dezelfde werking als op nde kvk website na te maken maar volgensmij is het mij redelijk goed gelukt met de events van focusin en focusout.
  
</details>





## Bronnenlijst

<details open>
  <summary>continu bijhouden terwijl je werkt</summary>

  Nb. Wees specifiek ('css-tricks' als bron is bijv. niet specifiek genoeg). 
  Nb. ChatGpT en andere AI horen er ook bij.
  Nb. Vermeld de bronnen ook in je code.

  1. https://developer.mozilla.org/en-US/docs/Web/API/Element/focusin_event (
  2. https://developer.mozilla.org/en-US/docs/Web/API/Element/focusout_event
  3. https://developer.mozilla.org/en-US/docs/Web/API/Pointer_events
  4. https://developer.mozilla.org/en-US/docs/Web/API/DOMTokenList/toggle
  5. https://developer.mozilla.org/en-US/docs/Web/API/FocusEvent/relatedTarget

</details>
