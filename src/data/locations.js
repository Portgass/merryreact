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
***

`,
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
`You can hardly hold your excitement as you are sitting in a chugging train.`,
`This will be your first year at Hogwarts. Magic is so amazing.`,
`As no one in your family can't use magic, you grateful that you can experience
the world of spells and magic beasts.`,
`When you got your mail from Hogwarts, you didn't believe it, but you got
visited by an actual wizard that told you the truth.`,
`Your parents were very surprised too, but in the end they decided to send you
to learn magic.`,
`And now you are here on your way to the magic school.`,
``,
`You are sitting in a compartment car. There are two other girls.`
        ]}]
    }
}]
