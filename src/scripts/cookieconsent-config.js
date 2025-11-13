console.log('CookieConsent config carregat. window.CookieConsent =', window.CookieConsent);

CookieConsent.run({
    guiOptions: {
        consentModal: {
            layout: "box",
            position: "bottom left",
            equalWeightButtons: true,
            flipButtons: false
        },
        preferencesModal: {
            layout: "box",
            position: "right",
            equalWeightButtons: true,
            flipButtons: false
        }
    },
    categories: {
        necessary: {
            readOnly: true
        },
        functionality: {},
        analytics: {},
        marketing: {}
    },
    language: {
        default: "es",
        autoDetect: "browser",
        translations: {
            es: {
consentModal: {
    title: "Política de cookies",
    description: "Fem servir galetes per oferir-te una millor experiència de navegació. Pots acceptar totes les galetes o gestionar les teves preferències.",
    acceptAllBtn: "Acceptar tot",
    acceptNecessaryBtn: "Rebutjar tot",
    showPreferencesBtn: "Gestionar preferències",
    footer: "<a href=\"#link\">Política de privadesa</a>\n<a href=\"#link\">Termes i condicions</a>"
},
preferencesModal: {
    title: "Preferències de consentiment",
    acceptAllBtn: "Acceptar tot",
    acceptNecessaryBtn: "Rebutjar tot",
    savePreferencesBtn: "Desar preferències",
    closeIconLabel: "Tancar modal",
    serviceCounterLabel: "Serveis",
    sections: [
        {
            title: "Ús de galetes",
            description: "Fem servir galetes per recordar les teves preferències, analitzar el trànsit i millorar el contingut d’aquest web."
        },
        {
            title: "Galetes estrictament necessàries <span class=\"pm__badge\">Sempre habilitat</span>",
            description: "Són necessàries per al funcionament bàsic del lloc i no es poden desactivar.",
            linkedCategory: "necessary"
        },
        {
            title: "Galetes de funcionalitat",
            description: "Permeten recordar les teves eleccions (per exemple, idioma o ciutat preferida).",
            linkedCategory: "functionality"
        },
        {
            title: "Galetes analítiques",
            description: "Ens ajuden a entendre com s’utilitza la web per millorar rutes, contingut i experiència.",
            linkedCategory: "analytics"
        },
        {
            title: "Galetes publicitàries",
            description: "S’utilitzen per mostrar contingut i ofertes relacionades amb els teus interessos.",
            linkedCategory: "marketing"
        },
        {
            title: "Més informació",
            description: "Per qualsevol dubte sobre l’ús de galetes, pots <a class=\"cc__link\" href=\"#yourdomain.com\">contactar amb nosaltres</a>."
        }
    ]
}

            }
        }
    }
});
