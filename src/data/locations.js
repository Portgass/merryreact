export default [{
    id: "l:firstRoom",
    name: "First Room",
    onEnter:
`Welcome to the first room. This is testing test, let's see, how much can I fit
in here, Welcome to the first room. This is testing test, let's see, how much
can I fit in here.`,
    canTravelTo: ["l:secondRoom"],
    items: [{
        id: "i:key",
        name: "Mysterious key",
        onPickup: "You picked up the mysteriously looking key.",
        interactions: [
            "drawer"
        ]
    }],
    places: [{
        id: "p:corner",
        name: "Dark Corner",
        onInvestigate: {
            message: "Strange mud is dripping down from the ceiling.",
            events: [{
                type: "spawnItem",
                item: {
                    id: "i:mudball",
                    name: "Ball of Mud",
                    onPickup: "This disgusting ball of mud won't be useful at all."
                }
            }, {
                type: "destroyItem",
                item: {
                    id: "i:mudball"
                }
            }]
        }
    }, {
        id: "p:table",
        name: "Broken table",
        onInvestigate: {
            message:
`The table seems like it was pretty fancy, before some thing ate big chunk of
it. Someithing seems to be locked in its drawer.`
        },
        onInteraction: [{}]
    }, {
        id: "p:drawer",
        name: "Locked drawer",
        onInvestigate: {
            message: "The drawer is locked, it seems like a place for old rustic key."
        },
        onInteraction: [{
            item: "i:key",
            message: "Unlocking the drawer.",
            events: [{
                type: "spawnItem",
                message: "Old lamp is laying there.",
                item: {
                    id: "i:lamp",
                    name: "Old lamp",
                    onPickup: "The lamp might work if you find a fuel."
                }
            }, {
                type: "destroyItem",
                item: {
                    id: "i:key"
                }
            }, {
                type: "updateMessage",
                messageType: 'onInvestigate',
                target: "p:drawer",
                targetType: 'place',
                targetMessage: "The drawer is unlocked."
            }]
        }]
    }],
    characters: [{
        id: "c:hat",
        name: "Sorting hat",
        onInvestigate: {
            message: "Famous hat, where it will send me?"
        },
        conversations: [{
            id: "c:hat:sorting",
            name: "Be sorted",
            messages: [
                "Oh hello little girl.",
                "Let's see what to do with you.",
                "Let it be Slytherin"
            ],
            events: [{
                type: "deleteConversation",
                character: "c:hat",
                conversation: {
                    id: "c:hat:sorting"
                }
            }]
        }, {
            id: "c:hat:sorted",
            name: "Ask about other",
            messages: [
                "You will learn about them in the future."
            ],
            events: [{
                type: "deleteConversation",
                character: "c:hat",
                conversation: {
                    id: "c:hat:sorted"
                }
            }]
        }]
    }, {
        id: "c:dumbledore",
        name: "Dumbledore",
        onInvestigate: {
            message: "The real wizard, the ebst wizard"
        },
        conversations: [{
            id: "c:dumbledore:hello",
            name: "Say hi",
            messages: [
                "Hello there :)"
            ],
            events: [{
                type: "deleteConversation",
                character: "c:dumbledore",
                conversation: {
                    id: "c:dumbledore:hello"
                }
            }, {
                type: "addConversation",
                character: "c:dumbledore",
                conversation: {
                    id: "c:dumbledore:beans",
                    name: "Give beans",
                    messages: [
                        "Oh Berties beans!",
                        "I once got one that tasted like shite!",
                        "Umm...",
                        "My favourite ;)"
                    ]
                }
            }]
        }]
    }]
}, {
    id: "l:secondRoom",
    name: "Hallway",
    onEnter:
`You went into the second room. There's a goblin sitting here.`,
    canTravelTo: ["l:firstRoom", "l:thirdRoom"],
    items: [],
    places: [{
        id: "p:puddle",
        name: "Puddle of water",
        onInvestigate: {
            message: "There's nothing in this room, that could create this puddle."
        }
    }]
}, {
    id: "l:thirdRoom",
    name: "Lockers",
    onEnter:
`You stay in the middle of small dark room. be careful about what you can find
in here.`,
    canTravelTo: ["l:secondRoom"],
    items: [{
        id: "i:orb",
        name: "Black orb"
    }, {
        id: "i:fish",
        name: "Gold fish"
    }]
}]
