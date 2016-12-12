export default [{
    id: "l:compartment",
    name: "Compartment",
    onEnter:
`You are sitting in a compartment car. There are two other girls.`,
    canTravelTo: ["l:sorting"],
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
                        type: "deleteConversation",
                        character: "c:tracey:intro",
                        conversation: {
                            id: "c:tracey:intro:excited:no"
                        }
                    }, {
                        type: "addConversation",
                        character: "c:tracey:intro",
                        conversation: {
                            id: "c:tracey:intro:ask_sister",
                            name: "Who is that girl looking out of window?",
                            messages: [
                                "Tracey: Oh that is my sister Gemma."
                            ]
                        }
                    }]
                }
            }, {
                type: "addConversation",
                character: "c:tracey:intro",
                conversation: {
                    id: "c:tracey:intro:excited:no",
                    name: "I am not very excited.",
                    messages: [
                        "Tracey: Well I hope that you will like it there.",
                        "Tracey: It's gonna be so much fun.",
                        "Tracey: I wonder what house will I be sorted into."
                    ],
                    events: [{
                        type: "deleteConversation",
                        character: "c:tracey:intro",
                        conversation: {
                            id: "c:tracey:intro:excited:yes"
                        }
                    }, {
                        type: "deleteConversation",
                        character: "c:tracey:intro",
                        conversation: {
                            id: "c:tracey:intro:excited:no"
                        }
                    }, {
                        type: "addConversation",
                        character: "c:tracey:intro",
                        conversation: {
                            id: "c:tracey:intro:ask_sister",
                            name: "Who is that girl looking out of window?",
                            messages: [
                                "Tracey: Oh that is my sister Gemma."
                            ]
                        }
                    }]
                }
            }]
        }]
    }]
}, {
    id: "l:sorting",
    name: "Leave train",
}]
