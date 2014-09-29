(function(module) {
    'use strict';

    /**
     * locale service provides the translation strings
     */
    module.value('localeService', {
        app: {
            title: 'veganaut.net'
        },
        navigation: {
            front: 'Home',
            register: 'Registrieren',
            login: 'Login',
            logout: 'Logout',
            map: 'Karte',
            profile: 'Profil',
            avatar: 'Netzwerk',
            activities: 'Einladungen',
            blog: 'Blog',
            contactForm: 'Kontakt',
            twitter: 'Twitter',
            facebook: 'Facebook',
            github: 'GitHub',
            bugs: 'Fehler melden'
        },
        form: {
            referenceCode: {
                placeholder: 'Einladungs-Code eingeben',
                submit: 'Code absenden'
            }
        },
        message: {
            registered: 'Registrierung erfolgreich.',
            activityLinkCreated: 'Einladung erstellt.',
            profile: {
                update: {
                    success: 'Profil wurde erfolgreich aktualisiert.',
                    fail: 'Profil konnte nicht aktualisiert werden.'
                }
            }
        },
        register: {
            title: 'Registrieren',
            form: {
                email: 'email@beispiel.com',
                fullName: 'Vorname und Nachname',
                nickname: 'Öffentlicher Name',
                password: 'Passwort',
                passwordRepeat: 'Nochmals Passwort',
                submit: 'Registrieren'
            }
        },
        login: {
            title: 'Login',
            form: {
                email: 'email@beispiel.com',
                password: 'Passwort',
                submit: 'Login'
            }
        },
        action: {
            register: 'Registrieren',
            cancel: 'Abbrechen',
            socialGraph: {
                createActivityLink: {
                    attract: 'Invite',
                    support: 'Invite',
                    tempt: 'Invite',
                    unspecified: 'Jemanden einladen'
                }
            },
            profile: {
                edit: 'Profil bearbeiten',
                save: 'Profil speichern',
                changePassword: 'Passwort ändern'
            },
            map: {
                addLocation: 'Neue Location hinzufügen',
                locationAction: 'Diese Location genauer anschauen'
            }
        },
        activityLink: {
            title: 'Neue Einladung',
            label: {
                targetName: 'Mit / Für'
            },
            form: {
                targetName: 'Wen?',
                choose: 'Was?',
                submit: 'Speichern und Weiter'
            }
        },
        socialGraph: {
            title: 'Mein Netzwerk'
        },
        openActivities: {
            title: 'Geplante Einladungen',
            description: 'Codes für deine geplanten Einladungen:'
        },
        person: {
            role: {
                veteran: 'Veteran',
                scout: 'Scout',
                rookie: 'Rookie'
            },
            type: {
                baby: 'Baby',
                maybe: 'Maybe'
            },
            label: {
                email: 'E-Mail Adresse',
                fullName: 'Name',
                nickname: 'Öffentlicher Name',
                role: 'Rolle',
                team: 'Team',
                balance: 'Balance',
                captured: 'Gefangen',
                password: 'Passwort',
                passwordRepeat: 'Passwort wiederholen'
            }
        },
        team: {
            team1: 'Blau',
            team2: 'Grün',
            team3: 'Türkis',
            team4: 'Rot',
            team5: 'Braun'
        },
        score: {
            points: 'Punkte',
            score: 'Punktestand',
            users: 'Spieler',
            captured: 'Gefangen',
            babies: 'Babies'
        },
        location: {
            form: {
                name: 'Name der Location',
                selectOnMap: 'Wähle einen Punkt auf der Karte aus',
                chooseType: 'Art der Location auswählen',
                submit: 'Speichern'
            },
            type: {
                gastronomy: 'Gastro',
                retail: 'Detailhandel',
                event: 'Event',
                'private': 'Privat'
            },
            score: {
                explanation: {
                    availablePoints: 'Momentan verfügbare Punkte',
                    scoreDiff: {
                        positive: 'So viele Punkte ist dein Team voraus',
                        negative: 'So viele Punkte fehlen deinem Team noch'
                    },
                    teamPoints: 'Dieses Team hat so viele Punkte'
                }
            }
        },
        map: {
           mission: {
               title: 'Missionen',
               pointsForThisVisit: 'Total gesammelte Punkte', // TODO @toebu: here it's still called "visit", which is not nice semantically
               missionForm: {
                   submit: 'Abschliessen',
                   cancel: 'Abbrechen'
               },
               visitBonus: {
                   title: 'Besuche diese Location.',
                   explanation: 'Für deinen ersten Besuch innerhalb von ein paar Wochen erhälst du Punkte.',
                   description: 'Schliesse diese Mission ab, wenn du diese Location jetzt besuchst.'
               },
               hasOptions: {
                   title: 'Frag das Personal, ob es hier etwas Veganes gibt.',
                   description: 'Gibt es hier laut dem Personal etwas Veganes?',
                   description2: 'Was denkst du, gibt es etwas Veganes?',
                   explanation: 'Frage ausdrücklich nach etwas Veganem und benutze dazu das Wort "vegan". So stellst du sicher, dass das Personal merkt: "Unsere Kundschaft ist interessiert an veganen Produkten, es besteht eine Nachfrage." Das erhöht die Chance, dass das vegane Angebot vergrössert und verbessert wird.',
                   form: {
                       theyDoNotKnow: 'Sie wissen es nicht',
                       yes: 'Ja',
                       no: 'Nein',
                       ratherYes: 'Eher ja',
                       noClue: 'Keine Ahnung',
                       ratherNo: 'Eher nein'
                   },
                   outcome: {
                       yes: 'Du hast gesagt, es gebe hier laut dem Personal etwas Veganes.',
                       no: 'Du hast gesagt, es gebe hier laut dem Personal nichts Veganes.',
                       ratherYes: 'Das Personal weiss es nicht, aber du denkst, es gibt hier wohl etwas Veganes.',
                       noClue: 'Das Personal weiss es nicht, und auch du hast keine Ahnung, ob es hier etwas Veganes gibt.',
                       ratherNo: 'Das Personal weiss es nicht, aber du denkst, es gibt hier wohl nichts Veganes.'
                   }
               },
               wantVegan: {
                   title: 'Sag dem Personal, dass du an einem veganen Angebot interessiert bist.',
                   description: 'Welche Ausdrücke hast du gebraucht, um dem Personal dein Interesse an einem veganen Angebot mitzuteilen?',
                   explanation: 'Bringe irgendwie zum Ausdruck, dass du an einem veganen Angebot interessiert bist. Das Personal soll merken: "Unsere Kundschaft ist interessiert an veganen Produkten, es besteht eine Nachfrage." So steigt die Chance, dass das vegane Angebot hier vergrössert und verbessert wird.',
                   form: {
                       vegan: 'vegan',
                       plantbased: '(rein) pflanzlich',
                       noAnimalproducts: 'ohne Tierprodukte',
                       noMeat: 'ohne Fleisch',
                       noMilk: 'ohne Milchprodukte',
                       noEggs: 'ohne Eier',
                       noHoney: 'ohne Honig',
                       noWool: 'ohne Wolle',
                       noLeather: 'ohne Leder',
                       noFur: 'ohne Fell',
                       custom: 'Andere:',
                       placeholder: 'Andere gebrauchte Ausdrücke'
                   },
                   outcome: {
                       description: 'Du hast dem Personal gesagt, dass du an einem veganen Angebot interessiert bist, indem du diese Ausdrücke verwendet hast:'
                   }
               },
               particularOption: { // @toebu was hälst du von dieser Mission?
                   title: 'Frage nach einem bestimmten veganen Produkt.',
                   description: 'Nach welchen veganen Produkt hast du gefragt?',
                   explanation: 'Frag das Personal nach einem oder mehreren veganen Produkten, die dich interessieren. Wenn sie sie z.T. noch nicht im Angebot haben, nehmen sie sie vielleicht ins Sortiment auf, wenn genügend Leute danach fragen.',
                   form: {
                       placeholder: 'Hier Produkt eintragen, nach dem du gefragt hast',
                       haveIt: 'Gibt\'s hier',
                       doNotHaveIt: 'Gibt\'s hier nicht'
                   },
                   outcome: {
                       description: 'Du hast nach diesen veganen Produkten gefragt:'
                   }
               },
               newOption: { // @toebu was hälst du von dieser Mission?
                   title: 'Frage, ob es neue vegane Produkte im Angebot hat.',
                   description: 'Hat es laut dem Personal neue vegane Produkte im Angebot?',
                   explanation: 'Frag das Personal, ob sie hier in letzter Zeit neue vegane Produkte ins Angebot aufgenommen haben.',
                   form: {
                       placeholder: 'Hier neues veganes Produkt eintragen',
                       somethingNew: 'Neu erhältlich',
                       nothingNew: 'Nichts neues'
                   },
                   outcome: {
                       description: 'Laut dem Personal neu erhältlich:',
                       descriptionNothing: 'Laut dem Personal ist nichts neues erhältlich.'
                   }
               },
               whatOptions: {
                   title: 'Finde heraus, was für vegane Angebote es hier gibt.',
                   description: 'Welche veganen Angebote gibt es hier?',
                   explanation: 'Hilf mit, dass die Liste der veganen Angebote hier möglichst aktuell und vollständig ist. Füge vegane Angebote hinzu, die noch nicht auf der Liste sind, bestätige vegane Angebote, die bereits da stehen, und gib an, welche Angebote auf der Liste (im Moment) nicht mehr verfügbar sind.',
                   form: {
                       placeholder: 'Hier ein veganes Angebot eintragen'
                   },
                   outcome: {
                       description: 'Du hast diese veganen Angebote eingetragen/bestätigt:'
                   }
               },
               buyOptions: {
                   title: 'Kauf etwas Veganes.',
                   description: 'Was hast du gekauft?',
                   explanation: 'Mit einem Kauf kannst du dem Personal zeigen, dass es sich lohnt, etwas Veganes anzubieten. Wenn du willst, kannst du beim Zahlen gerne ausdrücklich sagen, dass du dieses Angebot u.a. deshalb gewählt hast, weil es vegan ist. Je öfter das Personal das Wort "vegan" von der Kundschaft in einem positiven Zusammenhang hört, desto besser.',
                   outcome: {
                       description: 'Du hast diese veganen Angebote gekauft:'
                   }
               },
               giveFeedback: {
                   title: 'Gib dem Personal eine Rückmeldung.',
                   description: 'Was für eine Rückmeldung hast du dem Personal gegeben?',
                   explanation: 'Manchmal weiss das Personal nicht, was "vegan" bedeutet. Manchmal kannst du dem Personal einen guten Tipp geben. Manchmal hat das Personal eine Frage, die du beantwortet kannst. Manchmal bist du sehr zufrieden mit dem Angebot, manchmal weniger. Hier kannst du schreiben, worüber du mit dem Personal gesprochen hast.',
                   form: {
                       placeholder: 'Rückmeldung'
                   },
                   outcome: {
                       description: 'Du hast dem Personal diese Rückmeldung gegeben:'
                   }
               },
               rateOptions: {
                   title: 'Bewerte einzelne vegane Angebote, die es hier gibt.',
                   description: 'Wie bewertest du diese veganen Angebote?',
                   explanation: 'Über Geschmack lässt sich nicht streiten. Gib einfach deine persönliche Bewertung ab.',
                   outcome: {
                       description: 'Deine Bewertung:'
                   }
               },
               offerQuality: {
                   title: 'Beurteile, wie gut diese Location veganautische Bedürfnisse befriedigt.',
                   description: 'Wie gut befriedigt diese Location veganautische Bedürfnisse?',
                   explanation: 'Veganautinnen und Veganauten wollen ein möglichst grosses und möglichst gutes veganes Angebot. In manchen Locations hat es kaum etwas oder gar nichts Veganes, oder das vegane Angebot ist noch nicht befriedigend. In anderen Locations gibt es bereits eine gewisse vegane Auswahl, die z.T. auch überzeugt. Wieder andere Locations haben ein beachtliches veganes Angebot, sowohl was die Auswahl als auch die Qualität angeht. Schliesslich gibt es Locations, deren veganes Angebot nichts zu wünschen übrig lässt.',
                   outcome: {
                       description: 'Dein Urteil:'
                   }
               },
               effortValue: {
                   title: 'Schätze ab, ob Veganautinnen und Veganauten das vegane Angebot hier vergrössern oder verbessern können.',
                   description: 'Wird sich das vegane Angebot hier vergrössern oder verbessern, wenn mehr Veganautinnen und Veganauten vorbeikommen?',
                   explanation: 'In manchen Locations hat das Personal Null Interesse an "vegan". Veganautinnen und Veganauten würden da nur ihre Zeit verschwenden. Andererseits gibt es vegane Schlaraffenländer. Hier sind Veganautinnen und Veganauten zwar gut aufgehoben, aber sie können am Angebot kaum etwas verbessern. Zwischen diesen zwei Extremen gibt es Locations, wo die Chancen gut stehen, dass das vegane Angebot umso grösser und besser wird, je mehr Veganautinnen und Veganauten hingehen.',
                   form: {
                       yes: 'Eher ja',
                       no: 'Eher nein'
                   },
                   outcome: {
                       yes: 'Eher ja.',
                       no: 'Eher nein.'
                   }
               }
           }
        },
        tour: {
            intro: [
                {
                    title: 'Willkommen!',
                    content: 'Viel Spass beim Erkunden des veganen Universums. Wir sind noch daran, diese Platform zu entwickeln. Es kann sein, dass noch nicht alles richtig funktioniert. Wenn du Anregungen oder Rückmeldungen hast: Das Kontaktformular ist im Menu oben verlinkt.'
                },
                {
                    title: 'Registrieren',
                    content: 'Registriere dich, um die volle Funktionalität der Platform nützen zu können.'
                }
            ]
        }
    });
})(window.veganaut.mainModule);
