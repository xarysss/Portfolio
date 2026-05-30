const profile = {
  name: "Titouan Mouysset",
  role: "Technicien systemes, reseaux et DevCloud",
  status: "BUT R&T B2 - parcours DevCloud a l'IUT de Beziers",
  location: "Marseillan, France",
  age: 19,
  availability: "Recherche alternance B3 pour septembre 2026",
  objective:
    "Administrer, automatiser et superviser des infrastructures systemes/reseaux dans un environnement reel.",
  links: {
    email: "mailto:titouan.mouysset@etu.umontpellier.fr",
    github: "https://github.com/xarysss",
    portfolioRepo: "https://github.com/xarysss/Portfolio",
    linkedin: "https://www.linkedin.com/in/titouan-mouysset",
    twitter: "https://twitter.com/chocolatxaris",
    instagram: "https://www.instagram.com/titouanmyt",
    ostiro: "https://www.ostiro-network.fr/",
    call: "https://cal.com/ostiro-network/30min",
    cv: "assets/CV_Titouan_Mouysset_Alternance_2026.pdf",
  },
  headline: [
    "Je viens du terrain reseaux et systemes, avec une couche DevCloud de plus en plus presente.",
    "Mon portfolio s'appuie sur des preuves BUT2 : stage DGFIP, TP Docker, microservices, telemetrie, Open5GS, PXE/FOG, R401/R402/R404/R405.",
    "Je cherche une alternance ou je peux toucher a l'infra, automatiser proprement et documenter ce que je fais.",
  ],
  stack: [
    ["Reseaux", 0.88, "VLAN, OSPF, RIP, BGP theorique, STP, NAT, ACL, VPN, ToIP"],
    ["Systemes", 0.84, "Linux Rocky/Ubuntu/Debian, Windows, DHCP, DNS, FTP, SSH, FOG"],
    ["Virtualisation", 0.8, "Proxmox, KVM, Docker, Incus/LXC, VirtualBox"],
    ["DevCloud", 0.76, "conteneurs, telemetrie, orchestration, qualite de production"],
    ["Automatisation", 0.74, "Ansible, Puppet, scripts, deploiement par image"],
    ["Developpement", 0.72, "Python, JavaScript, PHP, HTML, CSS, API, JSON"],
    ["Observabilite", 0.7, "Prometheus, Grafana, InfluxDB, Loki/Promtail, Dynatrace"],
    ["Cybersecurite", 0.66, "BitLocker, GPG, OpenSSL, Wireshark, tcpdump, moindre privilege"],
  ],
  competencies: [
    {
      block: "Administrer",
      level: "B2 - niveau intermediaire",
      score: 0.9,
      status: "tres solide",
      proof:
        "Stage DGFIP, installation serveurs, migration Rocky Linux, RAID, iDRAC, Puppet, Bacula, parc et postes clients.",
      gaps: "QoS avancee et BGP/MPLS pratique a renforcer.",
    },
    {
      block: "Connecter",
      level: "B2 - niveau intermediaire",
      score: 0.78,
      status: "fort sur transmissions et mobile",
      proof: "R402 OFDM/CDMA, R404 reseaux cellulaires, Open5GS + UERANSIM, VLAN, fibre redondante, Fluke.",
      gaps: "Wi-Fi entreprise et anglais technique a documenter davantage.",
    },
    {
      block: "Programmer",
      level: "B2 - niveau intermediaire",
      score: 0.72,
      status: "utile pour automatiser",
      proof: "Scripts Python, Ansible, microservices, API parkings Montpellier, documentation de rapports techniques.",
      gaps: "SGBD admin direct, API REST complete et application web plus aboutie.",
    },
    {
      block: "Orchestrer",
      level: "DevCloud - niveau novice",
      score: 0.74,
      status: "bon socle DevCloud",
      proof: "Docker, Incus, telemetrie, automation, TP observabilite, stage DGFIP avec Puppet et Dynatrace.",
      gaps: "CI/CD, Kubernetes, tests de charge, cloud public et honeypot.",
    },
    {
      block: "Developper",
      level: "DevCloud - niveau novice",
      score: 0.7,
      status: "axe production/documentation",
      proof: "TP microservices, cahier des charges, qualite prod, documentation, securite et bonnes pratiques.",
      gaps: "Pipeline DevOps complet et code applicatif moderne a consolider.",
    },
  ],
  education: [
    {
      date: "Depuis 2024",
      title: "BUT Reseaux & Telecommunications",
      meta: "IUT Beziers - specialite DevCloud",
    },
    {
      date: "2024",
      title: "MOOC ANSSI",
      meta: "Sensibilisation a la cybersecurite",
    },
    {
      date: "2021-2023",
      title: "Baccalaureat general",
      meta: "Mathematiques & NSI - Lycee La Trinite, Beziers",
    },
  ],
  experience: [
    {
      date: "02/02 - 27/03/2026",
      title: "Stage B2 - DGFIP Montpellier, ESI Marseille",
      meta: "Administration systemes/reseaux, supervision, gestion de parc, securisation et support transversal",
    },
    {
      date: "2025",
      title: "Agglopole Sete",
      meta: "Collecte et tri des dechets",
    },
    {
      date: "2024",
      title: "Centre de loisirs, Marseillan",
      meta: "Encadrement d'enfants et organisation d'activites",
    },
    {
      date: "2021",
      title: "Mediatheque de Marseillan",
      meta: "Accueil public, evenements et gestion des rayonnages",
    },
  ],
  stageMissions: [
    ["Installation serveurs", "RAID 5, installation Rocky Linux, IP statique, DNS, passerelle, iDRAC et post-install Puppet"],
    ["Bacula", "Director, Storage Daemon, File Daemon, stockage local, procedure MSNRL, logique sauvegarde/restauration"],
    ["Migration Rocky Linux", "remplacement progressif de CentOS, choix OS maintenu et reduction du risque d'obsolescence"],
    ["Reseau et brassage", "architecture locale, VLAN, fibre redondante, tests Fluke Versiv 2 et norme ISO 11801 Class Ea"],
    ["Gestion de parc", "postes, inventaire, procedures, support niveau 2 et contraintes d'administration publique"],
    ["Deploiement postes", "soclage Windows 11, domaine, UEFI, stations d'accueil, BitLocker et controle de conformite"],
    ["Securisation", "ShredOS/DBAN, effacement disque, moindre privilege, recyclage et procedures de fin de vie"],
    ["Observabilite", "ASUR, Dynatrace OneAgent, Apdex, Real User Monitoring et detection fuite memoire JVM"],
  ],
  stageServices: [
    ["SIL", "service principal", "serveurs, reseau local, exploitation et interventions terrain"],
    ["CID", "support proximite N2", "postes, parc, assistance utilisateurs et incidents"],
    ["SAR34", "appui regional", "coordination et assistance locale"],
    ["ASUR", "observabilite applicative", "Dynatrace, Service Manager, applications critiques"],
    ["SNT", "telephonie nationale", "ToIP, equipements Audiocodes et outils de supervision"],
  ],
  dgfipTools: [
    ["GLPI", "parc", "historique, composants, affectations"],
    ["OCS Inventory", "inventaire", "remontee automatique materiel/logiciel"],
    ["Omega Assist", "tickets", "gestion demandes/incidents DGFIP"],
    ["Service Manager / ServiceNow", "ITSM", "transition outil cote ASUR"],
    ["iDRAC", "serveurs Dell", "administration materielle distante"],
    ["Puppet", "automation", "standardisation post-install serveurs"],
    ["Bacula", "sauvegarde", "resilience, jobs et procedures MSNRL"],
    ["BitLocker", "securite poste", "chiffrement disque Windows"],
    ["ShredOS", "fin de vie", "effacement securise avant recyclage/cession"],
    ["Dynatrace", "APM", "OneAgent, Davis AI, Apdex, RUM"],
    ["SINAPS", "supervision", "socle type Nagios interne DGFIP"],
    ["Fluke Versiv 2", "reseau", "test cablage, NEXT, PS NEXT, perte retour"],
    ["Nubo", "cloud interne", "hebergement et services internes"],
  ],
  projects: [
    {
      name: "Ostiro Network",
      description:
        "Micro-entreprise orientee creation de sites, maintenance et outils numeriques pour professionnels.",
      urls: ["https://www.ostiro-network.fr/", "https://github.com/xarysss/OstiroNetworkClassicPage"],
      skills: ["HTML", "CSS", "JavaScript", "SEO", "UX"],
    },
    {
      name: "Les Marines d'Helios",
      description:
        "Site web public pour residence/location, avec pages, assets, optimisation et mise en ligne GitHub.",
      urls: ["https://github.com/xarysss/lesmarinesdheliosWEB"],
      skills: ["HTML", "CSS", "JavaScript", "GitHub Pages"],
    },
    {
      name: "La Taniere Fertile",
      description:
        "Systeme de surveillance connecte avec capteurs LoRaWAN, donnees, Grafana, InfluxDB et bot Telegram.",
      urls: ["https://github.com/xarysss/siteweb-taniere-fertile"],
      skills: ["LoRaWAN", "Grafana", "InfluxDB", "Telegram", "IoT"],
    },
    {
      name: "Hackathon IUT - SUEZ",
      description:
        "Projet de detection de nuisibles. Prix de l'Innovation remporte avec remise officielle.",
      urls: [],
      skills: ["Innovation", "Prototype", "Equipe"],
    },
    {
      name: "API parkings Montpellier",
      description:
        "Script Python avec consommation API, traitement JSON, statistiques et surveillance en temps reel.",
      urls: ["https://github.com/xarysss/SAER302"],
      skills: ["Python", "API", "JSON", "Stats"],
    },
    {
      name: "Crypto & securisation",
      description:
        "GPG, chiffrement/dechiffrement, signature numerique et deploiement HTTPS avec OpenSSL et Apache.",
      urls: [],
      skills: ["GPG", "OpenSSL", "Apache", "HTTPS"],
    },
    {
      name: "Deploiement reseau PXE",
      description:
        "Serveur PXE avec FOG dans Incus pour installation automatisee de systemes sur le reseau.",
      urls: [],
      skills: ["PXE", "FOG", "Incus", "Linux"],
    },
    {
      name: "Open5GS + UERANSIM",
      description:
        "Deploiement d'un coeur 5G logiciel et simulation RAN/UE pour relier theorie mobile et architecture operateur.",
      urls: [],
      skills: ["5G", "Open5GS", "UERANSIM", "Routage", "Linux"],
    },
    {
      name: "LVS / HAProxy / Unbound",
      description:
        "Maquette load balancing avec VIP, LVS NAT, Direct Routing, poids RIP1/RIP2, HAProxy L7, ACL, SSL et DNS cache.",
      urls: [],
      skills: ["LVS", "HAProxy", "Unbound", "NAT", "Direct Routing"],
    },
    {
      name: "TP Docker / Microservices",
      description:
        "Images Debian/SSH/Python Flask, registry local, Compose, Traefik, scaling, volumes, reseaux et debug BusyBox.",
      urls: [],
      skills: ["Docker", "Compose", "Traefik", "Flask", "BusyBox"],
    },
    {
      name: "Telemetrie Linux",
      description:
        "Collecte de metriques et logs avec Prometheus, Grafana, InfluxDB, Loki/Promtail et node_exporter.",
      urls: [],
      skills: ["Prometheus", "Grafana", "InfluxDB", "Loki", "Linux"],
    },
  ],
  githubRepos: [
    ["xarysss", "profil GitHub", "https://github.com/xarysss", "public profile"],
    ["Portfolio", "ce portfolio terminal/code", "https://github.com/xarysss/Portfolio", "HTML/CSS/JS"],
    ["lesmarinesdheliosWEB", "site client / residence", "https://github.com/xarysss/lesmarinesdheliosWEB", "HTML"],
    ["OstiroNetworkClassicPage", "site vitrine Ostiro", "https://github.com/xarysss/OstiroNetworkClassicPage", "CSS"],
    ["Ostiro-Work-v1", "Crousty Wok / travail Ostiro", "https://github.com/xarysss/Ostiro-Work-v1", "HTML"],
    ["SAER302", "SAE Python API / donnees", "https://github.com/xarysss/SAER302", "Python"],
    ["siteweb-taniere-fertile", "site projet IoT/LoRaWAN", "https://github.com/xarysss/siteweb-taniere-fertile", "HTML"],
    ["SAE3D04-TITOUAN-DORIAN", "SAE DevCloud", "https://github.com/xarysss/SAE3D04-TITOUAN-DORIAN", "repo"],
  ],
  courses: [
    ["R401", "Administration reseau", "routage, services avances, supervision, travail en equipe"],
    ["R402", "Transmissions", "OFDM, CDMA, mesures, caracterisation de signaux"],
    ["R404", "Telephonie mobile", "2G/3G/4G/5G, Open5GS, UERANSIM, architectures operateurs"],
    ["R405", "Automatisation", "Ansible, deploiement, scripts et gestion de configuration"],
    ["R420", "IA", "fonctions, methode, estimateur, introduction a l'IA"],
    ["DevCloud", "Orchestrer + Developper", "Docker, microservices, telemetrie, qualite de production"],
  ],
  evidence: [
    ["Stage DGFIP", "preuve pivot", "8 semaines, 5 services, missions systemes/reseaux et bilan de competences"],
    ["Portfolio Orchestrer S3", "preuve APC", "premiere version de mon niveau et remediation DevCloud"],
    ["TP Docker", "preuve technique", "services conteneurises, securite, comparaison avec virtualisation"],
    ["TP Microservices", "preuve dev", "architecture, HTTP/REST, donnees, collaboration en binome"],
    ["TP Telemetrie", "preuve prod", "metriques, logs, dashboards et supervision"],
    ["Open5GS", "preuve telecom", "coeur 5G logiciel et UE simules"],
    ["PXE/FOG/Incus", "preuve admin", "deploiement automatise de postes par image"],
    ["R402 OFDM/CDMA", "preuve connecter", "transmissions complexes et demarche experimentale"],
    ["LVS/HAProxy", "preuve reseau avance", "VIP, NAT, Direct Routing, proxy HTTP, ACL, SSL et haute disponibilite"],
  ],
  technicalLabs: [
    ["Docker", "Debian 10.202.0.51", "Docker 29.2.1, Compose v5.0.2, registry local 5000, images SSH et Flask"],
    ["Traefik + Flask", "microservices", "route /whoami, compose, scaling monappy=3 et load balancing applicatif"],
    ["Debug conteneur", "production minimaliste", "injection BusyBox, docker exec, namespaces et nsenter"],
    ["Prometheus", "observabilite", "scrape glances:9091, node_exporter:9100, cadvisor:8098 et targets health up"],
    ["Grafana", "dashboards", "Node Exporter Full 1860, cAdvisor 19792, dashboards CPU/RAM et logs Loki"],
    ["Loki/Promtail", "logs", "stack docker-promtail-loki, nginx-app, cadvisor, log-generator et exploration Grafana"],
    ["LVS NAT", "load balancing L4", "VIP 192.168.122.100, RIP1 poids 2, RIP2 poids 1, persistence 3600s"],
    ["LVS Direct Routing", "performance L4", "VIP DR 192.168.122.200, loopback RIP, ARP desactive sur RIP"],
    ["HAProxy L7", "reverse proxy", "ACL /ent /univ, stats, terminaison SSL, health checks Apache/Nginx"],
    ["Unbound", "DNS cache", "resolver local pour accelerer les resolutions repetitives"],
  ],
  roadmap: [
    ["CI/CD", "monter un pipeline GitHub Actions ou GitLab CI sur un projet perso"],
    ["Kubernetes", "deployer une app microservices simple sur un cluster local"],
    ["Cloud public", "publier un lab Terraform/Ansible reproductible"],
    ["SGBD", "documenter MySQL/MariaDB avec sauvegarde, restauration et supervision"],
    ["Anglais technique", "ajouter une synthese courte en anglais au portfolio"],
  ],
};

const $ = (selector) => document.querySelector(selector);
const code = $("#code");
const themes = ["theme-monokai", "theme-one", "theme-light"];
let activeLang = "ts";
let activeTheme = 0;

function token(className, value) {
  return `<span class="${className}">${value}</span>`;
}

function str(value, href) {
  const safe = escapeHtml(value);
  const label = token("token-string", `"${safe}"`);
  if (!href) return label;
  return `<span class="token-string">"<a href="${href}" target="_blank" rel="noopener">${safe}</a>"</span>`;
}

function escapeHtml(value) {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;");
}

function line(content = "", className = "") {
  return `<div class="line ${className}">${content}</div>`;
}

function indent(level = 1) {
  return `<span class="tab">${"&nbsp;&nbsp;".repeat(level)}</span>`;
}

function comment(text) {
  return token("token-comment", `// ${escapeHtml(text)}`);
}

function section(id, title, inner, summary = "") {
  return `<div class="section" data-value="${id}" tabindex="0">
    ${line(`${token("token-keyword", "export")} ${token("token-storage", "const")} ${token("token-variable", title)} ${token("token-keyword", "=")} ${token("token-expression", "{")} <span class="collapse-open">/* cliquer pour replier */</span> <span class="summary">${token("token-comment", summary)}</span>`)}
    ${inner}
    ${line(`${token("token-expression", "}")}${token("token-keyword", ";")} <span class="collapse-close">/* ${escapeHtml(id)} */</span>`)}
  </div>`;
}

function renderTs() {
  const lines = [];
  lines.push(line(comment("Portfolio personnel - version complete CV + BUT2 + GitHub + preuves APC")));
  lines.push(line(`${token("token-storage", "type")} ${token("token-type", "LinkName")} ${token("token-keyword", "=")} ${str("email")} ${token("token-keyword", "|")} ${str("github")} ${token("token-keyword", "|")} ${str("linkedin")} ${token("token-keyword", "|")} ${str("cv")} ${token("token-keyword", "|")} ${str("ostiro")}${token("token-keyword", ";")}`));
  lines.push(line());

  lines.push(
    section(
      "Profile",
      "profile",
      [
        line(`${indent()}name: ${str(profile.name)},`, "inner"),
        line(`${indent()}role: ${str(profile.role)},`, "inner"),
        line(`${indent()}status: ${str(profile.status)},`, "inner"),
        line(`${indent()}location: ${str(profile.location)},`, "inner"),
        line(`${indent()}age: ${token("token-number", profile.age)},`, "inner"),
        line(`${indent()}availability: ${str(profile.availability)},`, "inner"),
        line(`${indent()}objective: ${str(profile.objective)},`, "inner"),
      ].join(""),
      `${profile.name} - ${profile.status}`
    )
  );

  lines.push(line());
  lines.push(
    section(
      "Links",
      "links",
      Object.entries(profile.links)
        .map(([name, href]) => line(`${indent()}${name}: ${str(href.replace(/^mailto:/, ""), href)},`, "inner"))
        .join(""),
      "email, GitHub, reseaux, CV et Ostiro"
    )
  );

  lines.push(line());
  lines.push(
    section(
      "Pitch",
      "pitch",
      profile.headline
        .map((item, index) => line(`${indent()}${token("token-number", index + 1)}: ${str(item)},`, "inner"))
        .join(""),
      "positionnement personnel en 3 phrases"
    )
  );

  lines.push(line());
  lines.push(
    section(
      "Skills",
      "skills",
      profile.stack
        .map(([name, level, details]) =>
          line(
            `${indent()}${str(name)}: <span class="progress" style="--value:${level}">${Math.round(level * 100)}%</span> ${comment(details)}`,
            "inner"
          )
        )
        .join(""),
      `${profile.stack.length} domaines techniques`
    )
  );

  lines.push(line());
  lines.push(
    section(
      "CompetencyMap",
      "competencyMap",
      profile.competencies
        .map((item) =>
          [
            line(`${indent()}{`, "inner"),
            line(`${indent(2)}block: ${str(item.block)},`, "inner"),
            line(`${indent(2)}level: ${str(item.level)},`, "inner"),
            line(`${indent(2)}score: <span class="progress" style="--value:${item.score}">${Math.round(item.score * 100)}%</span>,`, "inner"),
            line(`${indent(2)}status: ${str(item.status)},`, "inner"),
            line(`${indent(2)}proof: ${str(item.proof)},`, "inner"),
            line(`${indent(2)}next: ${str(item.gaps)},`, "inner"),
            line(`${indent()}},`, "inner"),
          ].join("")
        )
        .join(""),
      "Administrer, Connecter, Programmer, Orchestrer, Developper"
    )
  );

  lines.push(line());
  lines.push(
    section(
      "Education",
      "education",
      profile.education
        .map((item) =>
          line(`${indent()}{ date: ${str(item.date)}, title: ${str(item.title)}, meta: ${str(item.meta)} },`, "inner")
        )
        .join(""),
      "BUT R&T DevCloud + ANSSI + Bac NSI"
    )
  );

  lines.push(line());
  lines.push(
    section(
      "Experience",
      "experience",
      profile.experience
        .map((item) =>
          line(`${indent()}{ date: ${str(item.date)}, title: ${str(item.title)}, meta: ${str(item.meta)} },`, "inner")
        )
        .join(""),
      "stage, terrain, animation, accueil"
    )
  );

  lines.push(line());
  lines.push(
    section(
      "StageDgfip",
      "stageDgfip",
      profile.stageMissions
        .map(([mission, detail]) => line(`${indent()}${str(mission)}: ${str(detail)},`, "inner"))
        .join(""),
      "8 semaines a la DGFIP - Montpellier / ESI Marseille"
    )
  );

  lines.push(line());
  lines.push(
    section(
      "DgfipServices",
      "dgfipServices",
      profile.stageServices
        .map(([name, role, detail]) => line(`${indent()}{ service: ${str(name)}, role: ${str(role)}, detail: ${str(detail)} },`, "inner"))
        .join(""),
      `${profile.stageServices.length} services rencontres pendant le stage`
    )
  );

  lines.push(line());
  lines.push(
    section(
      "DgfipTools",
      "dgfipTools",
      profile.dgfipTools
        .map(([name, category, detail]) => line(`${indent()}{ tool: ${str(name)}, category: ${str(category)}, use: ${str(detail)} },`, "inner"))
        .join(""),
      `${profile.dgfipTools.length} outils observes ou utilises`
    )
  );

  lines.push(line());
  lines.push(
    section(
      "Projects",
      "projects",
      profile.projects
        .map((project) => {
          const skills = project.skills.map((skill) => str(skill)).join(`${token("token-expression", ",")} `);
          const urls = project.urls.length
            ? project.urls.map((url) => str(url, url)).join(`${token("token-expression", ",")} `)
            : "";
          return [
            line(`${indent()}{`, "inner"),
            line(`${indent(2)}name: ${str(project.name)},`, "inner"),
            line(`${indent(2)}description: ${str(project.description)},`, "inner"),
            line(`${indent(2)}urls: [${urls}],`, "inner"),
            line(`${indent(2)}skills: [${skills}],`, "inner"),
            line(`${indent()}},`, "inner"),
          ].join("");
        })
        .join(""),
      `${profile.projects.length} projets selectionnes`
    )
  );

  lines.push(line());
  lines.push(
    section(
      "TechnicalLabs",
      "technicalLabs",
      profile.technicalLabs
        .map(([name, context, detail]) => line(`${indent()}{ lab: ${str(name)}, context: ${str(context)}, result: ${str(detail)} },`, "inner"))
        .join(""),
      "details concrets issus des rapports Raw"
    )
  );

  lines.push(line());
  lines.push(
    section(
      "Github",
      "github",
      profile.githubRepos
        .map(([name, description, url, language]) =>
          line(`${indent()}{ repo: ${str(name, url)}, type: ${str(description)}, lang: ${str(language)} },`, "inner")
        )
        .join(""),
      `${profile.githubRepos.length} depots publics repertories`
    )
  );

  lines.push(line());
  lines.push(
    section(
      "Courses",
      "courses",
      profile.courses
        .map(([codeName, title, details]) =>
          line(`${indent()}{ code: ${str(codeName)}, title: ${str(title)}, scope: ${str(details)} },`, "inner")
        )
        .join(""),
      "ressources BUT2 exploitees dans le portfolio"
    )
  );

  lines.push(line());
  lines.push(
    section(
      "Evidence",
      "evidence",
      profile.evidence
        .map(([name, kind, value]) =>
          line(`${indent()}{ name: ${str(name)}, kind: ${str(kind)}, value: ${str(value)} },`, "inner")
        )
        .join(""),
      `${profile.evidence.length} preuves fortes issues du Raw/Wiki BUT2`
    )
  );

  lines.push(line());
  lines.push(
    section(
      "Roadmap",
      "roadmap",
      profile.roadmap
        .map(([topic, action]) => line(`${indent()}${str(topic)}: ${str(action)},`, "inner"))
        .join(""),
      "ce que je veux renforcer en alternance"
    )
  );

  lines.push(line());
  lines.push(line(`${token("token-keyword", "export default")} ${token("token-variable", "profile")}<span class="cursor"></span>${token("token-keyword", ";")}`));
  code.innerHTML = lines.join("");
}

function renderYaml() {
  const entries = [
    ["name", profile.name],
    ["role", profile.role],
    ["status", profile.status],
    ["location", profile.location],
    ["availability", profile.availability],
    ["objective", profile.objective],
  ];
  const lines = [line(token("token-comment", "# ~/titouan.dev/profile.yml"))];
  entries.forEach(([key, value]) => lines.push(line(`${token("token-keyword", key)}: ${str(value)}`)));
  lines.push(line(`${token("token-keyword", "links")}:`));
  Object.entries(profile.links).forEach(([key, value]) => {
    lines.push(line(`${indent()}${token("token-keyword", key)}: ${str(value.replace(/^mailto:/, ""), value)}`));
  });
  lines.push(line(`${token("token-keyword", "projects")}:`));
  profile.projects.forEach((project) => {
    lines.push(line(`${indent()}- ${token("token-keyword", "name")}: ${str(project.name)}`));
    lines.push(line(`${indent(2)}${token("token-keyword", "description")}: ${str(project.description)}`));
  });
  lines.push(line(`${token("token-keyword", "competencies")}:`));
  profile.competencies.forEach((item) => {
    lines.push(line(`${indent()}- ${token("token-keyword", "block")}: ${str(item.block)}`));
    lines.push(line(`${indent(2)}${token("token-keyword", "level")}: ${str(item.level)}`));
    lines.push(line(`${indent(2)}${token("token-keyword", "proof")}: ${str(item.proof)}`));
  });
  lines.push(line(`${token("token-keyword", "github")}:`));
  profile.githubRepos.forEach(([name, description, url]) => {
    lines.push(line(`${indent()}- ${token("token-keyword", "name")}: ${str(name, url)}`));
    lines.push(line(`${indent(2)}${token("token-keyword", "description")}: ${str(description)}`));
  });
  lines.push(line(`${token("token-keyword", "technicalLabs")}:`));
  profile.technicalLabs.forEach(([name, context, detail]) => {
    lines.push(line(`${indent()}- ${token("token-keyword", "name")}: ${str(name)}`));
    lines.push(line(`${indent(2)}${token("token-keyword", "context")}: ${str(context)}`));
    lines.push(line(`${indent(2)}${token("token-keyword", "result")}: ${str(detail)}`));
  });
  lines.push(line(`${token("token-keyword", "evidence")}:`));
  profile.evidence.forEach(([name, kind, value]) => {
    lines.push(line(`${indent()}- ${token("token-keyword", "name")}: ${str(name)}`));
    lines.push(line(`${indent(2)}${token("token-keyword", "kind")}: ${str(kind)}`));
    lines.push(line(`${indent(2)}${token("token-keyword", "value")}: ${str(value)}`));
  });
  lines.push(line(`<span class="cursor"></span>`));
  code.innerHTML = lines.join("");
}

function renderShell() {
  code.innerHTML = [
    line(`${token("token-comment", "# Contact rapide")}`),
    line(`${token("token-variable", "whoami")} ${token("token-comment", "# " + profile.name)}`),
    line(`${token("token-variable", "open")} ${str(profile.links.github, profile.links.github)}`),
    line(`${token("token-variable", "open")} ${str(profile.links.portfolioRepo, profile.links.portfolioRepo)}`),
    line(`${token("token-variable", "open")} ${str(profile.links.linkedin, profile.links.linkedin)}`),
    line(`${token("token-variable", "open")} ${str(profile.links.instagram, profile.links.instagram)}`),
    line(`${token("token-variable", "open")} ${str(profile.links.ostiro, profile.links.ostiro)}`),
    line(`${token("token-variable", "open")} ${str("CV PDF", profile.links.cv)}`),
    line(`${token("token-variable", "mail")} ${str("titouan.mouysset@etu.umontpellier.fr", profile.links.email)}`),
    line(`${token("token-comment", "# Objectif")}`),
    line(`${token("token-string", escapeHtml(profile.objective))}<span class="cursor"></span>`),
  ].join("");
}

function render() {
  if (activeLang === "yaml") renderYaml();
  else if (activeLang === "sh") renderShell();
  else renderTs();
  bindSections();
}

function bindSections() {
  document.querySelectorAll(".section").forEach((sectionNode) => {
    sectionNode.addEventListener("click", () => {
      sectionNode.classList.toggle("collapsed");
    });
    sectionNode.addEventListener("keydown", (event) => {
      if (event.key === "Enter" || event.key === " ") {
        event.preventDefault();
        sectionNode.classList.toggle("collapsed");
      }
    });
  });
}

function bindControls() {
  document.querySelectorAll("[data-lang]").forEach((button) => {
    button.addEventListener("click", () => {
      activeLang = button.dataset.lang;
      document.body.classList.remove("lang-ts", "lang-yaml", "lang-sh");
      document.body.classList.add(`lang-${activeLang}`);
      document.querySelectorAll("[data-lang]").forEach((item) => item.classList.toggle("active", item === button));
      const file = activeLang === "yaml" ? "profile.yml" : activeLang === "sh" ? "contact.sh" : "profile.ts";
      history.replaceState(null, "", `#${file}`);
      render();
    });
  });

  $("#theme-toggle").addEventListener("click", () => {
    document.body.classList.remove(...themes);
    activeTheme = (activeTheme + 1) % themes.length;
    document.body.classList.add(themes[activeTheme]);
  });
}

function bindHashTracking() {
  window.addEventListener(
    "scroll",
    () => {
      const sections = [...document.querySelectorAll(".section[data-value]")];
      const active = sections.filter((sectionNode) => sectionNode.offsetTop <= window.scrollY + 20).pop();
      if (active && !location.hash.includes(".")) {
        history.replaceState(null, "", `#${active.dataset.value}`);
      }
    },
    { passive: true }
  );

  const hash = decodeURIComponent(location.hash.slice(1));
  if (!hash) return;
  setTimeout(() => {
    const target = document.querySelector(`.section[data-value="${CSS.escape(hash)}"]`);
    target?.scrollIntoView({ behavior: "smooth", block: "start" });
  }, 2100);
}

function runLoader() {
  $("#loader-now").textContent = ` ${new Date().toString().slice(0, 24)} `;
  for (let step = 1; step <= 7; step += 1) {
    setTimeout(() => {
      document.body.classList.remove(`step-${step - 1}`);
      document.body.classList.add(`step-${step}`);
      if (step === 7) {
        $("#root").classList.remove("hidden");
        render();
      }
    }, step * 230 + Math.floor(Math.random() * 60));
  }
}

bindControls();
bindHashTracking();
runLoader();
