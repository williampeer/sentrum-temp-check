/**
 * Temperaturmåling – Sentrum VBK (Midtsesongen 2025/26)
 * 
 * INSTRUCTIONS:
 * 1. Go to https://script.google.com
 * 2. Create a new project
 * 3. Paste this entire script
 * 4. Click "Run" (play button)
 * 5. Authorize when prompted
 * 6. Check your Google Drive for the new form!
 */

function createSentrumVBKSurvey() {
  var form = FormApp.create('Temperaturmåling – Sentrum VBK (Midtveisvurdering sesongen 2025/26)');
  
  form.setDescription('Takk for at du tar deg tid! Undersøkelsen er anonym og tar ca. 5-10 minutter. Svarene brukes til å forbedre hverdagen i klubben.\n\nSkala:\n1 = Svært dårlig / Helt uenig\n2 = Dårlig / Uenig\n3 = Verken eller\n4 = Bra / Enig\n5 = Svært bra / Helt enig');
  form.setIsQuiz(false);
  form.setCollectEmail(false);
  
  // ============ SECTION 1: Om deg ============
  form.addPageBreakItem().setTitle('1. Om deg');
  
  form.addMultipleChoiceItem()
    .setTitle('1.1 Hvilket lag spiller du på?')
    .setChoiceValues(['Herrelaget', 'Damelaget'])
    .setRequired(true);
  
  form.addMultipleChoiceItem()
    .setTitle('1.2 Hvor lenge har du vært med i Sentrum VBK?')
    .setChoiceValues(['0–6 måneder', '6–12 måneder', '1–2 år', '2+ år'])
    .setRequired(true);
  
  // ============ SECTION 2: Trivsel og lagmiljø ============
  form.addPageBreakItem().setTitle('2. Trivsel og lagmiljø');
  
  form.addScaleItem()
    .setTitle('2.1 Hvor godt trives du i Sentrum VBK?')
    .setBounds(1, 5)
    .setLabels('Trives svært dårlig', 'Trives svært godt')
    .setRequired(true);
  
  form.addScaleItem()
    .setTitle('2.2 Hvordan vil du beskrive lagmiljøet denne sesongen?')
    .setBounds(1, 5)
    .setLabels('Svært dårlig', 'Svært bra')
    .setRequired(true);
  
  form.addScaleItem()
    .setTitle('2.3 Jeg føler meg inkludert og har en tydelig plass i laget')
    .setBounds(1, 5)
    .setLabels('Helt uenig', 'Helt enig')
    .setRequired(true);
  
  form.addScaleItem()
    .setTitle('2.4 Jeg er motivert for volleyball akkurat nå')
    .setBounds(1, 5)
    .setLabels('Helt uenig', 'Helt enig')
    .setRequired(true);
  
  form.addParagraphTextItem()
    .setTitle('2.5 Annet om trivsel/lagmiljø')
    .setRequired(false);
  
  // ============ SECTION 3: Trening og utvikling ============
  form.addPageBreakItem().setTitle('3. Trening og utvikling');
  
  form.addScaleItem()
    .setTitle('3.1 Jeg er fornøyd med kvaliteten på treningene')
    .setBounds(1, 5)
    .setLabels('Helt uenig', 'Helt enig')
    .setRequired(true);
  
  form.addScaleItem()
    .setTitle('3.2 Treningene hjelper meg å utvikle meg som spiller')
    .setBounds(1, 5)
    .setLabels('Helt uenig', 'Helt enig')
    .setRequired(true);
  
  form.addParagraphTextItem()
    .setTitle('3.3 Er det noe du savner eller ønsker mer/mindre av på trening?')
    .setRequired(false);
  
  // ============ SECTION 4: Trener ============
  form.addPageBreakItem().setTitle('4. Trener');
  
  form.addScaleItem()
    .setTitle('4.1 Treneren formidler instruksjoner og strategier på en god måte')
    .setBounds(1, 5)
    .setLabels('Helt uenig', 'Helt enig')
    .setRequired(true);
  
  form.addScaleItem()
    .setTitle('4.2 Treneren gir gode og tilstrekkelige tilbakemeldinger')
    .setBounds(1, 5)
    .setLabels('Helt uenig', 'Helt enig')
    .setRequired(true);
  
  form.addScaleItem()
    .setTitle('4.3 Treneren er rettferdig i valg, spilletid og behandling av spillere')
    .setBounds(1, 5)
    .setLabels('Helt uenig', 'Helt enig')
    .setRequired(true);
  
  form.addParagraphTextItem()
    .setTitle('4.4 Hva gjør treneren bra, og hva kan forbedres?')
    .setRequired(false);
  
  // ============ SECTION 5: Lagleder ============
  form.addPageBreakItem().setTitle('5. Lagleder');
  
  form.addScaleItem()
    .setTitle('5.1 Laglederen følger opp laget på en god måte')
    .setBounds(1, 5)
    .setLabels('Helt uenig', 'Helt enig')
    .setRequired(true);
  
  form.addParagraphTextItem()
    .setTitle('5.2 Er det noe laglederen gjør bra, eller kan gjøre bedre?')
    .setRequired(false);
  
  // ============ SECTION 6: Klubben og styret ============
  form.addPageBreakItem().setTitle('6. Klubben og styret');
  
  form.addScaleItem()
    .setTitle('6.1 Jeg kjenner godt til klubbens verdier og mål')
    .setBounds(1, 5)
    .setLabels('Helt uenig', 'Helt enig')
    .setRequired(true);
  
  form.addScaleItem()
    .setTitle('6.2 Jeg er fornøyd med informasjon og kommunikasjon fra styret')
    .setBounds(1, 5)
    .setLabels('Helt uenig', 'Helt enig')
    .setRequired(true);
  
  form.addScaleItem()
    .setTitle('6.3 Jeg har tillit til styret og ledelsen')
    .setBounds(1, 5)
    .setLabels('Helt uenig', 'Helt enig')
    .setRequired(true);
  
  form.addParagraphTextItem()
    .setTitle('6.4 Annet om klubb/styre')
    .setRequired(false);
  
  // ============ SECTION 7: Økonomi og fasiliteter ============
  form.addPageBreakItem().setTitle('7. Økonomi og fasiliteter');
  
  form.addScaleItem()
    .setTitle('7.1 Treningsavgiften gir god verdi i forhold til tilbudet')
    .setBounds(1, 5)
    .setLabels('Helt uenig', 'Helt enig')
    .setRequired(true);
  
  form.addScaleItem()
    .setTitle('7.2 Halltider og fasiliteter fungerer godt')
    .setBounds(1, 5)
    .setLabels('Helt uenig', 'Helt enig')
    .setRequired(true);
  
  form.addMultipleChoiceItem()
    .setTitle('7.3 Ville du akseptert endrede halltider/fasiliteter dersom det reduserte treningsavgiften betydelig?')
    .setChoiceValues(['Ja', 'Nei', 'Usikker'])
    .setRequired(true);
  
  form.addParagraphTextItem()
    .setTitle('7.4 Eventuelle kommentarer til økonomi/fasiliteter')
    .setRequired(false);
  
  // ============ SECTION 8: Sosialt ============
  form.addPageBreakItem().setTitle('8. Sosialt');
  
  form.addScaleItem()
    .setTitle('8.1 Jeg er fornøyd med klubbens sosiale tilbud')
    .setBounds(1, 5)
    .setLabels('Helt uenig', 'Helt enig')
    .setRequired(true);
  
  form.addParagraphTextItem()
    .setTitle('8.2 Har du forslag til sosiale arrangementer?')
    .setRequired(false);
  
  // ============ SECTION 9: Avslutning ============
  form.addPageBreakItem().setTitle('9. Avslutning');
  
  form.addParagraphTextItem()
    .setTitle('9.1 Hva har vært høydepunktet ditt denne sesongen?')
    .setRequired(false);
  
  form.addParagraphTextItem()
    .setTitle('9.2 Hva har vært mest utfordrende?')
    .setRequired(false);
  
  form.addParagraphTextItem()
    .setTitle('9.3 Ris, ros, eller andre innspill?')
    .setRequired(false);
  
  form.addSectionHeaderItem()
    .setTitle('Ønsker du at vi tar kontakt?')
    .setHelpText('Send gjerne en DM til en av oss i styret. ❤️');
  
  // Add confirmation message
  form.setConfirmationMessage('Tusen takk for at du bidrar! 🏐');
  
  // Log the form URL
  Logger.log('Form created! URL: ' + form.getEditUrl());
  Logger.log('Shareable URL: ' + form.getPublishedUrl());
}

