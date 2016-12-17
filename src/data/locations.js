export default [{
    id: "l:compartment",
    name: "Compartment",
    canTravelTo: [],
    onEnter: {
        events: [{
            type: "printStory",
            story: [
`You can hardly hold your excitement as you are sitting in a chugging train.`,
`This will be your first year at Hogwarts. Magic is so amazing.`,
`As no one in your family can't use magic, you grateful that you can experience
the world of spells and magic beasts.`,
`When you got your mail from Hogwarts, you didn't believe it, but you got
visited by an actual wizard that told you the truth.`,
`Your parents were very surprised too, but in the end they decided to send you
to learn magic.`,
`And now you are here on your way to the magic school.`,
`
***`,
`You are sitting in a compartment car. There are two other girls.`
        ]}]
    },
    characters: [{
        id: "c:tracey:intro",
        name: "Tracey Farley",
        onInvestigate: {
            message:
`Frail young girl. Dark curly hair is covering part of her face, but you can see
one of her emerald eyes, which she is inspecting you with. It seems to be her
first year at Hogwarts too.`
        },
        conversations: [{
            id: "c:tracey:intro:greeting",
            name: "Greet her",
            messages: [
                "She smiles.",
                "Tracey: Hello, I'm Tracey. It's nice to meet you.",
                "Tracey: Are you excited for Hogwarts?."
            ],
            events: [{
                type: "deleteConversation",
                character: "c:tracey:intro",
                conversation: {
                    id: "c:tracey:intro:greeting"
                }
            }, {
                type: "addConversation",
                character: "c:tracey:intro",
                conversation: {
                    id: "c:tracey:intro:excited:yes",
                    name: "I am very excited!",
                    messages: [
                        "Tracey: Me too!",
                        "Tracey: We will have so much fun.",
                        "Tracey: I wonder what house will I be sorted into."
                    ],
                    events: [{
                        type: "deleteConversation",
                        character: "c:tracey:intro",
                        conversation: {
                            id: "c:tracey:intro:excited:yes"
                        }
                    }, {
                        type: "addConversation",
                        character: "c:tracey:intro",
                        conversation: {
                            id: "c:tracey:intro:ask_sister",
                            name: "Who is that girl looking out of window?",
                            messages: [
                                "Tracey: Oh that is my sister Gemma."
                            ],
                            events: [{
                                type: "deleteConversation",
                                character: "c:tracey:intro",
                                conversation: {
                                    id: "c:tracey:intro:ask_sister"
                                }
                            }, {
                                type: "addConversation",
                                character: "c:gemma:intro",
                                conversation: {
                                    id: "c:gemma:intro:introduction",
                                    name: "Greet Gemma",
                                    messages: [
                                        "You disturb the girl's thoughts. But she smiles at you.",
                                        "Gemma: Hello. I am Gemma. I am prefect for Slytherin.",
                                        "Gemma: It looks like you girls made friends already.",
                                        "Gemma: If you have some questions, just ask."
                                    ],
                                    events: [{
                                        type: "deleteConversation",
                                        character: "c:gemma:intro",
                                        conversation: {
                                            id: "c:gemma:intro:introduction"
                                        }
                                    }, {
                                        type: "addConversation",
                                        character: "c:gemma:intro",
                                        conversation: {
                                            id: "c:gemma:intro:slytherin",
                                            name: "Do you like being in Slytherin?",
                                            messages: [
                                                "Gemma: Of course I do.",
`Gemma: It may look, like there aren't good people in there. But actually plenty
of great wizards were from Slytherin. If you work hard Slytherin will help you
achieve your dreams.`,
`Gemma: Although there is some prejudice against mudbloods. Our family is Pure,
but we don't discriminate them. It doesn't seem important.`
                                            ]
                                        }
                                    }, {
                                        type: "addConversation",
                                        character: "c:gemma:intro",
                                        conversation: {
                                            id: "c:gemma:intro:prefect",
                                            name: "Is it hard being prefect?",
                                            messages: [
`Gemma: It's rewarding. You have some additional responsibilities, but if you
want high position in Ministry, you should aim for that badge.`,
`Gemma: Don't think I will make it easier for you girls, just because we know
each other. I will specifically keep an eyes on you.`,
`Gemma: Or maybe, when it comes to my sister, I will need both eyes.`
                                            ]
                                        }
                                    }, {
                                        type: "addConversation",
                                        character: "c:gemma:intro",
                                        conversation: {
                                            id: "c:gemma:intro:there_yet",
                                            name: "When are we gonna arrive?",
                                            messages: [
`Gemma: Look! The castle is just behind the mountain. You should see it any moment.`,
`As you look out of the window, the Hogwards starts emerging. Such a beautiful
place.`,
`It makes you so excited.`
                                            ],
                                            events: [{
                                                type: "addLocation",
                                                location: "l:sorting"
                                            }]
                                        }
                                    }]
                                }
                            }]
                        }
                    }]
                }
            }]
        }]
    }, {
        id: "c:gemma:intro",
        name: "Gemma Farley",
        onInvestigate: {
            message:
`Older girl. She looks similiar to the one next to her. She seems to be lost in
thoughts and is staring out of window.`
        },
        conversations: []
    }]
}, {
    id: "l:sorting",
    name: "Sorting ceremony",
    canTravelTo: [],
    onEnter: {
        events: [{
            type: "printStory",
            story: [
`The train stopped at a station under Hogwarts' lake. All the first years are
gathered together and they are waiting for boats to get them to Hogwarts.`,
`You go into the same boat as Tracey. There are other 6 students that you don't
know. One of them is girl, that looks at you with disgust.`,
`Blonde girl: What do we have here? The dirty mudblood, that my parents warned
me about is in the same boat. Don't think you will have it easy here.`,
`Boy: Pansy, ignore that Mudblood, you don't want to be asociated with her.`,
`Tracey: Let them be Lou. We will show them, what we stand for.`,
`Fighting spirit burns in you, but you let it go. You can't make a scene on the
first day. Instead you focus on the beautiful castle, that you are approaching`,
`***`,
`You climb the main stairs and are standing in front of the huge doors that lead
to the Great Hall.`,
`The doors slowly open and you spot all the Hogwarts students sitting in a four
lines of tables. Professor McGonagall is leading you to the front, where chair
is prepared.`,
`All the first years are called one by one, soon Tracey is coming up. She gets
sorted into Slytherin, like her sister. She seems happy about it. Pansy goes
right after her. She is also sorted into Slytherin. She smirks proudly.`,
`Your name gets called after that.`,
`You slowly walk up the stairs and sit onto the chair. Professor puts the
Sorting hat on your head.`,
`Sorting hat: Hm... Interesting, you seem to have almost no magic roots. Where
do I put you. You seem determined.`,
`Sorting hat: Also it seems that fate has prepared a road for you already.`,
`Sorting hat: ...`,
`Sorting hat: Third in a row. Slytherin!`,
`You jump of the chair and head to the Slytherin tables. Tracey is welcoming
you. It seems you will be friends. But you will be also in the same house as
that Pansy.`
        ]}]
    },
    characters: [{
        id: "c:tracey:sorting",
        name: "Tracey Farley",
        onInvestigate: {
            message: "Something feels special about Tracey. Maybe it's her temperament."
        },
        conversations: [{
            id: "c:tracey:sorting:greeting",
            name: "We meet again!",
            messages: [
                "Tracey: Great! I hope we can be good friends.",
`Tracey: And now that we are in the same house, I have some tricks I want to
show you later, that Gemma told me about.`
            ],
            events: [{
                type: "addLocation",
                location: "l:common_room:act1"
            }]
        }]
    }, {
        id: "c:gemma:sorting",
        name: "Gemma Farley",
        onInvestigate: {
            message:
`Gemma gives you a wink, but is preoccupied with talking with her friends. She
seems to be a popular girl.`
        },
        conversations: []
    }, {
        id: "c:pansy:sorting",
        name: "Pansy Parkinson",
        onInvestigate: {
            message:
`You heard that her full name is Pansy Parkinson. She comes from a family that
is agains from all breeding with muggles.`
        },
        conversations: []
    }]
}, {
    id: "l:common_room:act1",
    name: "Slytherin Common room",
    canTravelTo: ["l:bedroom:act1", "l:hallway:act1"],
    onEnter: {
        message:
`You enter Slytherin Common room. It's filled with gothic furniture. There are
few people around.`
    },
    characters: []
}, {
    id: "l:bedroom:act1",
    name: "Girls bedroom",
    canTravelTo: ["l:common_room:act1"],
    onEnter: {
        message: "You come up into the bedrooms. People are unpacking their luggages."
    },
    characters: []
}, {
    id: "l:hallway:act1",
    name: "Hallway",
    canTravelTo: ["l:common_room:act1", "l:staircase:act1"],
    onEnter: {
        message:
`You enter hallway, that Slytherin and Gryffindor houses share. Gemma is sitting
on a bench nearby reading a book.`
    },
    characters: []
}, {
    id: "l:staircase:act1",
    name: "Grand staircase",
    canTravelTo: ["l:hallway:act1", "l:entrance_hall:act1", "l:kitchen:act1"],
    onEnter: {
        message: "The famous Grand staircase. Be careful about where it will take you."
    },
    characters: []
}, {
    id: "l:entrance_hall:act1",
    name: "Entarnce hall",
    canTravelTo: ["l:staircase:act1"],
    onEnter: {
        message:
`This is the main entrance to Hogwarts, where you entered. Professor Dumbledore
is walking around at the bottom of the stairs.`
    },
    characters: []
}, {
    id: "l:kitchen:act1",
    name: "Kitchen",
    canTravelTo: ["l:staircase:act1"],
    onEnter: {
        message:
`You managed to sneak into the kitchens. Cooks are cleaning up after the feast.`
    },
    characters: [{
        id: "c:helper:act1",
        name: "Kitchen Helper",
        onInvestigate: {
            message: "He seems to be lazying around too much, for what needs to be done."
        },
        conversations: []
    }, {
        id: "c:cook:act1",
        name: "Cook",
        onInvestigate: {
            message:
`Quite a big man. For some unknown reasons, he had grown a terrible pencil
mustache.`
        },
        conversations: [{
            id: "c:cook:act1:greeting",
            name: "Hello, do you need some help?",
            messages: [
`Cook: Yes of course we need help. Look at this mess, it's every year like this,
go and take the muffins out of the oven.`,
`He looks at you.`,
`Cook: Oh you are a student. You can't be here.`,
            ],
            events: [{
                type: "deleteConversation",
                character: "c:cook:act1",
                conversation: {
                    id: "c:cook:act1:greeting"
                }
            }, {
                type: "addConversation",
                character: "c:cook:act1",
                conversation: {
                    id: "c:cook:act1:offer_help",
                    name: "But I can bake, don't you need help?",
                    messages: [
`Cook: No! You should leave as soon as possible. If the teachers find out, you
will be in a trouble. You don't want to cost your house points right on the
first day here, do you?`
                    ]
                }
            }, {
                type: "addConversation",
                character: "c:cook:act1",
                conversation: {
                    id: "c:cook:act1:ask_muffins",
                    name: "Can I at least have one muffin?",
                    messages: [
`Cook: No! We have exactly as many muffins, as we need. I can't give you none.
Now get out!`
                    ],
                    events: [{
                        type: "addConversation",
                        character: "c:helper:act1",
                        conversation: {
                            id: "c:helper:act1:greeting",
                            name: "You don't seem very occupied here.",
                            messages: [
`The helper looks curiously at you.`,
`Helper: What do we have here. Don't be rude girl. They are not paying me
enough for me to work hard.`
                            ],
                            events: [{
                                type: "addConversation",
                                character: "c:helper:act1",
                                conversation: {
                                    id: "c:helper:act1:muffin",
                                    name: "Can I get one of the muffins?",
                                    messages: [
`Helper: You can't. The cook counts them and he will know if you take one.`,
`Helper: But I will tell you, what you can do. You see, I still need to make one
more batch. And if you will make it instead of me, you can do one more and take
taht one. All the required things are in the kitchen, so you can start.`
                                    ]
                                }
                            }]
                        }
                    }]
                }
            }]
        }]
    }],
    places: [{
        id: "p:counter",
        name: "Counter",
        onInvestigate: {
            message: "There is a mess of recipes on the kitchen counter.",
            events: [{
                type: "spawnItem",
                item: {
                    id: "i:recipe_muffin",
                    name: "Muffin recipe",
                    from: "p:counter",
                    onPickup:
`This is the recipe, that you need. It seems, like you need a flour, eggs and
chocolate.`
                }
            }]
        }
    }, {
        id: "p:fridge",
        name: "Magic fridge",
        onInvestigate: {
            message:
`When you open the fridge, you see land of endless ice. You see a sign with eggs
on a nearby glacier.`,
            events: [{
                type: "spawnItem",
                item: {
                    id: "i:eggs",
                    name: "Hippogriff eggs",
                    from: "p:fridge",
                    onPickup:
`These eggs are much bigger, than the ones, you are used to.`
                }
            }]
        }
    }, {
        id: "p:cabinet",
        name: "Cabinet",
        onInvestigate: {
            message:
`After opening a cabinet, you see all the stuff, you would in the kitchen.
Except everything seems to be some sort of a wizard brand.`,
            events: [{
                type: "spawnItem",
                from: "p:cabinet",
                item: {
                    id: "i:flour",
                    name: "Wizarding Wheat Self-Charmed Flour",
                    onPickup:
`Hopefully this wheat will work.`
                }
            }, {
                type: "spawnItem",
                from: "p:cabinet",
                item: {
                    id: "i:sugar",
                    name: "Elfin Sugar Crystals",
                    onPickup:
`There are elfs carrying a sugar crystals on the front cover.`
                }
            }]
        }
    }]
}]
