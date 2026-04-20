# Claude Design - Guida Completa

> **Anthropic Labs Research Preview** — Disponibile per piani Pro, Max, Team e Enterprise (default off per Enterprise)

Claude Design permette di creare design, prototipi interattivi, presentazioni e altro attraverso una conversazione con Claude. Questa guida copre la creazione del primo progetto, l'iterazione sui design e come ottenere il massimo dallo strumento.

---

## Indice

- [Come funziona](#come-funziona)
- [Flusso di lavoro tipico](#flusso-di-lavoro-tipico)
- [Creare un nuovo progetto](#creare-un-nuovo-progetto)
- [Aggiungere contesto](#aggiungere-contesto)
- [Scrivere prompt efficaci](#scrivere-prompt-efficaci)
- [Iterare sul design](#iterare-sul-design)
- [Gestire versioni e revisioni](#gestire-versioni-e-revisioni)
- [Esportare e condividere](#esportare-e-condividere)
- [Consigli per risultati ottimali](#consigli-per-risultati-ottimali)
- [Limitazioni note](#limitazioni-note)

---

## Come funziona

Claude Design ha due aree principali:
- **Chat** (sinistra) — dove descrivi cosa vuoi
- **Canvas** (destra) — dove Claude genera il design funzionante

Da lì, iteri raffinando attraverso conversazioni e commenti inline fino al risultato desiderato.

---

## Flusso di lavoro tipico

1. **Crea un progetto** e aggiungi contesto rilevante (screenshot, codebase)
2. **Descrivi** cosa vuoi costruire
3. **Rivedi** ciò che Claude genera sul canvas
4. **Itera** usando messaggi di chat e commenti inline
5. **Esporta o condividi** quando sei soddisfatto del risultato

---

## Creare un nuovo progetto

Quando crei un progetto, eredita automaticamente il design system dell'organizzazione. Non è necessario caricare asset del brand o configurare nulla — i colori, i font e i componenti del brand sono già pronti.

> **Nota per design lead**: per configurare o modificare il design system stesso, consulta [Set up your design system in Claude Design](https://support.anthropic.com).

---

## Aggiungere contesto

Più contesto dai a Claude, migliore sarà l'output. Puoi allegare materiale di riferimento in qualsiasi momento.

### Screenshot, immagini o asset esistenti
- Carica screenshot di design esistenti, prodotti competitor, wireframe o ispirazione visiva
- Allega deck o documenti con uno stile da replicare
- Utile per richieste del tipo "fallo sembrare così"

### Codebase e file di design esistenti
- Collega un repository per far comprendere a Claude componenti, architettura e pattern di styling
- Rende i prototipi più pronti per la produzione sin dall'inizio
- Supporta anche l'upload di lavori di product design esistenti

---

## Scrivere prompt efficaci

Non è necessario essere designer per ottenere ottimi risultati. Sii specifico su cosa stai costruendo, per chi è e cosa conta di più.

### Struttura di un buon prompt

| Elemento | Descrizione |
|----------|-------------|
| **Goal** | Cosa stai costruendo |
| **Layout** | Come devono essere disposte le cose |
| **Content** | Quali informazioni visualizzare |
| **Audience** | Chi userà il prodotto |

### Esempi di prompt efficaci

> "Crea una dashboard che mostri ricavi mensili con filtri per regione e linea prodotto."

> "Progetta un onboarding per mobile app con 4 schermate che illustri le funzionalità core."

> "Costruisci una landing page per la nostra nuova API con hero section, esempi di codice e pricing."

> "Crea un form per raccogliere feedback cliente con domande condizionali basate sulla categoria."

> "Progetta un tool interno per il team ops per rivedere e approvare contenuti."

---

## Iterare sul design

La prima generazione è un punto di partenza. Il valore reale viene dall'iterazione.

### Usare la chat

La chat è ideale per **cambiamenti ampi** che influenzano l'intero design:

- "Rendi la palette colori più scura e minimal."
- "Rorganizza la dashboard così le metriche sono nella riga superiore e il grafico sotto."
- "Aggiungi un pannello impostazioni a destra."
- "Mostrami 2-3 layout alternativi per questa pagina."

Puoi anche chiedere a Claude di spiegare le sue decisioni di design, suggerire miglioramenti o rivedere il design per accessibilità.

### Usare i commenti inline

I commenti inline permettono di cliccare direttamente su una parte specifica del canvas e richiedere una modifica mirata. Più veloce che descrivere la posizione in chat.

**Esempi di buoni commenti inline:**

- "Aumenta il padding di questo pulsante."
- "Cambia in un dropdown invece di radio button."
- "Usa qui il colore primario del brand."
- "Rendi questa sezione collassabile."

> **Nota**: Se i commenti non vengono rilevati, incolla il testo del feedback direttamente in chat. Questo è un workaround noto per un problema intermittente dove i commenti possono scomparire prima che Claude li legga.

### Chat vs Commenti — Quando usarli

| Metodo | Quando usarlo |
|--------|---------------|
| **Commenti** | Cambiamenti mirati a livello componente ("sistema questo pulsante", "aggiusta questa spaziatura") |
| **Chat** | Cambiamenti strutturali, nuove sezioni, cambiamenti estetici, o qualsiasi cosa richieda spiegazione o contesto |

---

## Gestire versioni e revisioni

Se vuoi esplorare una direzione diversa senza perdere il lavoro corrente, dì a Claude:

> "Salva quello che abbiamo e prova un approccio completamente diverso."

Claude salverà il progetto corrente e confermerà dove è salvato, così puoi facilmente fare riferimento a iterazioni precedenti nella conversazione.

---

## Esportare e condividere

Quando il design è pronto, puoi condividerlo con colleghi o esportarlo per usarlo altrove. Il formato giusto dipende dal tuo caso d'uso.

### Format di esportazione disponibili

| Formato | Uso ideale |
|---------|------------|
| **.zip** | Archivio completo con asset |
| **PDF** | Presentazioni, feedback stakeholder |
| **PPTX** | Presentazioni PowerPoint |
| **Canva** | Modifica ulteriore in Canva |
| **Standalone HTML** | Prototipi interattivi |
| **Handoff to Claude Code** | Passaggio allo sviluppo |
| **Local coding agent** | Integrazione con agenti locali |
| **Claude Code Web** | Continua su Claude Code Web |

### Condivisione organizzativa

Puoi condividere progetti all'interno dell'organizzazione tramite link condivisibili:
- **View-only** — Solo visualizzazione
- **Comment** — Visualizzazione + commenti
- **Edit** — Modifica completa

---

## Consigli per risultati ottimali

### 1. Inizia semplice, poi aggiungi complessità
Inizia con layout e contenuto core, poi aggiungi interazioni, casi edge e rifiniture. Claude risponde bene a richieste incrementali.

### 2. Sii specifico nel feedback
- ❌ "Non sembra giusto"
- ✅ "Stringi la spaziatura tra i campi form a 8px"

### 3. Referenzia il tuo design system
Se conosci un componente nel sistema del brand, menzionalo per nome:
- "Usa il componente Primary Button"
- "Applica il pattern Card layout"

### 4. Pensa alla responsività early
Menziona se il design deve funzionare su mobile, tablet e desktop, o solo su uno di questi.

### 5. Chiedi variazioni
Se non sei sicuro della direzione, chiedi a Claude di mostrarti 2-3 opzioni. Confrontare alternative è più veloce che indovinare.

### 6. Chiedi feedback a Claude
Claude può rivedere il design per:
- Accessibilità
- Rapporti di contrasto
- Gerarchia informativa
- Usabilità generale

Trattalo come un collaboratore di design, non solo un generatore.

---

## Limitazioni note

Claude Design è disponibile come anteprima sperimentale da Anthropic Labs. Alcune cose da tenere a mente:

| Limitazione | Workaround |
|-------------|------------|
| **Persistenza commenti** | I commenti inline possono scomparire prima che Claude li legga → incolla il testo in chat |
| **Errori di salvataggio in vista compatta** | La modalità layout compatta può causare errori di salvataggio → passa a full view e riprova |
| **Codebase grandi** | Collegare repository molto grandi può causare lag → collega sottodirectory specifiche |
| **Errori chat** | Se incontri "chat upstream error", prova a iniziare una nuova chat tab nello stesso progetto |

---

## Risorse correlate

- [Get started with Claude](https://support.anthropic.com)
- [Your first day in Claude Code](https://support.anthropic.com)
- [Set up your design system in Claude Design](https://support.anthropic.com)
- [Claude Design admin guide for Team and Enterprise plans](https://support.anthropic.com)
- [Claude Design subscription usage and pricing](https://support.anthropic.com)

---

*Documento riformattato dal contenuto originale di Anthropic Claude Design Help Center*
